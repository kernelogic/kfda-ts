import { RouteConfig } from '@asteasolutions/zod-to-openapi';
import {
  dataSetUpdateBodyInputSchema,
  dataSetUpdateParamsInputSchema,
} from 'src/features/dataSet/dataSetSchemas';
import { filePopulateDownloadUrlInTree } from 'src/features/file/fileService';
import { permissions } from 'src/features/permissions';
import { validateHasPermission } from 'src/features/security';
import { prismaAuth } from 'src/prisma';
import { AppContext } from 'src/shared/controller/appContext';
import Error400 from 'src/shared/errors/Error400';
import { formatTranslation } from 'src/translation/formatTranslation';

export const dataSetUpdateApiDoc: RouteConfig = {
  method: 'put',
  path: '/api/dataSet/{id}',
  request: {
    params: dataSetUpdateParamsInputSchema,
    body: {
      content: {
        'application/json': {
          schema: dataSetUpdateBodyInputSchema,
        },
      },
    },
  },
  responses: {
    200: {
      description: 'DataSet',
    },
  },
};

export async function dataSetUpdateController(
  params: unknown,
  body: unknown,
  context: AppContext,
) {
  const { currentTenant } = validateHasPermission(
    permissions.dataSetUpdate,
    context,
  );

  const { id } = dataSetUpdateParamsInputSchema.parse(params);

  const data = dataSetUpdateBodyInputSchema.parse(body);

  const prisma = prismaAuth(context);

  const duplicatedClientAddress = await prisma.dataSet.count({
    where: { clientAddress: data.clientAddress, id: { not: id } },
  });

  if (duplicatedClientAddress) {
    throw new Error400(
      formatTranslation(
        context.dictionary.shared.errors.unique,
        context.dictionary.dataSet.fields.clientAddress,
      ),
    );
  }

  await prisma.dataSet.update({
    where: {
      id_tenantId: {
        id,
        tenantId: currentTenant.id,
      },
    },
    data: {
      name: data.name,
      dataOwnerName: data.dataOwnerName,
      dataOwnerCountry: data.dataOwnerCountry,
      dataOwnerContinent: data.dataOwnerContinent,
      dataSetIndustry: data.dataSetIndustry,
      dataOwnerRelation: data.dataOwnerRelation,
      description: data.description,
      website: data.website,
      clientAddress: data.clientAddress,
      metadataUpload: data.metadataUpload,
    },
  });

  let dataSet = await prisma.dataSet.findUniqueOrThrow({
    where: {
      id_tenantId: {
        id,
        tenantId: currentTenant.id,
      },
    },
    include: {
      datasources: true,
      datacaps: true,
      createdByMembership: true,
      updatedByMembership: true,
    },
  });

  dataSet = await filePopulateDownloadUrlInTree(dataSet);

  return dataSet;
}
