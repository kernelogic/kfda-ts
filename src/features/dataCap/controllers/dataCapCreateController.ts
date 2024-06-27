import { RouteConfig } from '@asteasolutions/zod-to-openapi';
import { dataCapCreateInputSchema } from 'src/features/dataCap/dataCapSchemas';
import { filePopulateDownloadUrlInTree } from 'src/features/file/fileService';
import { permissions } from 'src/features/permissions';
import { validateHasPermission } from 'src/features/security';
import { prismaAuth } from 'src/prisma';
import { AppContext } from 'src/shared/controller/appContext';
import { prismaRelationship } from 'src/prisma/prismaRelationship';
import axios from 'axios';
import { getPricing } from 'src/features/dataCap/pricingService';

export const dataCapCreateApiDoc: RouteConfig = {
  method: 'post',
  path: '/api/data-cap',
  request: {
    body: {
      content: {
        'application/json': {
          schema: dataCapCreateInputSchema,
        },
      },
    },
  },
  responses: {
    200: {
      description: 'DataCap',
    },
  },
};

export async function dataCapCreateController(
  body: unknown,
  context: AppContext,
) {
  validateHasPermission(permissions.dataCapCreate, context);
  return await dataCapCreate(body, context);
}

export async function dataCapCreate(body: unknown, context: AppContext) {
  const data = dataCapCreateInputSchema.parse(body);

  const prisma = prismaAuth(context);

  data.filPerTiB = await getPricing(data.dataset);
  data.filTotal = data.amountInTiB * data.filPerTiB;

  // axios post to "/create-wallet" to create payment address
  const createWalletRes = await axios.post(`${process.env.BACKEND_URL}/create-wallet`);
  data.paymentAddress = createWalletRes.data.address;
  data.status = "Pending";

  // Step 1: Find the highest tranche number for the given dataset
  const highestTranche = await prisma.dataCap.findMany({
    where: {
      dataset: {
        id: data.dataset,
      },
    },
    orderBy: {
      tranche: 'desc',
    },
    take: 1,
  });

  // Step 2: Increment the highest tranche number or start with 1 if none exists
  const newTrancheNumber = highestTranche.length > 0 ? highestTranche[0].tranche + 1 : 1;
  
  let dataCap = await prisma.dataCap.create({
    data: {
      tranche: newTrancheNumber,
      clientAddress: data.clientAddress,
      amountInTiB: data.amountInTiB,
      filPerTiB: data.filPerTiB,
      filTotal: data.filTotal,
      paymentAddress: data.paymentAddress,
      // paymentTx: data.paymentTx,
      // grantTx: data.grantTx,
      status: data.status,
      dataset: prismaRelationship.connectOneOrThrow(data.dataset),
      // importHash: data.importHash,
    },
    include: {
      dataset: true,
      createdByMembership: true,
      updatedByMembership: true,
    },
  });

  dataCap = await filePopulateDownloadUrlInTree(dataCap);

  return dataCap;
}
