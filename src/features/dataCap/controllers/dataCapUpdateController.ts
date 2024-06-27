import { RouteConfig } from '@asteasolutions/zod-to-openapi';
import {
  dataCapUpdateBodyInputSchema,
  dataCapUpdateParamsInputSchema,
} from 'src/features/dataCap/dataCapSchemas';
import { filePopulateDownloadUrlInTree } from 'src/features/file/fileService';
import { permissions } from 'src/features/permissions';
import { validateHasPermission } from 'src/features/security';
import { prismaAuth } from 'src/prisma';
import { AppContext } from 'src/shared/controller/appContext';
import { prismaRelationship } from 'src/prisma/prismaRelationship';
import Error403 from 'src/shared/errors/Error403';
import { getPricing } from 'src/features/dataCap/pricingService';

export const dataCapUpdateApiDoc: RouteConfig = {
  method: 'put',
  path: '/api/dataCap/{id}',
  request: {
    params: dataCapUpdateParamsInputSchema,
    body: {
      content: {
        'application/json': {
          schema: dataCapUpdateBodyInputSchema,
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

export async function dataCapUpdateController(
  params: unknown,
  body: unknown,
  context: AppContext,
) {
  const { currentTenant } = validateHasPermission(
    permissions.dataCapUpdate,
    context,
  );

  const { id } = dataCapUpdateParamsInputSchema.parse(params);

  const data = dataCapUpdateBodyInputSchema.parse(body);

  const prisma = prismaAuth(context);

  let dataCap = await prisma.dataCap.findUniqueOrThrow({
    where: {
      id_tenantId: {
        id,
        tenantId: currentTenant.id,
      },
    },
    include: {
      dataset: true,
      createdByMembership: true,
      updatedByMembership: true,
    },
  });

  if(dataCap.status != 'Pending') {
    throw new Error403("DataCap is locked.");
  }
  if(!data.dataset) {
    throw new Error403("Dataset is missing.");
  }

  data.filPerTiB = await getPricing(data.dataset);
  data.filTotal = data.amountInTiB * data.filPerTiB;

  await prisma.dataCap.update({
    where: {
      id_tenantId: {
        id,
        tenantId: currentTenant.id,
      },
    },
    data: {
      // tranche: data.tranche,
      clientAddress: data.clientAddress,
      amountInTiB: data.amountInTiB,
      filPerTiB: data.filPerTiB,
      filTotal: data.filTotal,
      // paymentAddress: data.paymentAddress,
      // paymentTx: data.paymentTx,
      // grantTx: data.grantTx,
      // status: data.status,
      dataset: prismaRelationship.connectOrDisconnectOne(data.dataset),
    },
  });

  dataCap = await filePopulateDownloadUrlInTree(dataCap);

  return dataCap;
}
