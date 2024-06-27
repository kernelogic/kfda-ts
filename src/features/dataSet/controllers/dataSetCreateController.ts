import { RouteConfig } from '@asteasolutions/zod-to-openapi';
import { dataSetCreateInputSchema } from 'src/features/dataSet/dataSetSchemas';
import { filePopulateDownloadUrlInTree } from 'src/features/file/fileService';
import { permissions } from 'src/features/permissions';
import { validateHasPermission } from 'src/features/security';
import { prismaAuth } from 'src/prisma';
import { AppContext } from 'src/shared/controller/appContext';
import Error400 from 'src/shared/errors/Error400';
import { formatTranslation } from 'src/translation/formatTranslation';

export const dataSetCreateApiDoc: RouteConfig = {
  method: 'post',
  path: '/api/data-set',
  request: {
    body: {
      content: {
        'application/json': {
          schema: dataSetCreateInputSchema,
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

export async function dataSetCreateController(
  body: unknown,
  context: AppContext,
) {
  validateHasPermission(permissions.dataSetCreate, context);
  return await dataSetCreate(body, context);
}

export async function dataSetCreate(body: unknown, context: AppContext) {
  const data = dataSetCreateInputSchema.parse(body);

  const prisma = prismaAuth(context);

  const duplicatedClientAddress = await prisma.dataSet.count({
    where: { clientAddress: data.clientAddress },
  });

  if (duplicatedClientAddress) {
    throw new Error400(
      formatTranslation(
        context.dictionary.shared.errors.unique,
        context.dictionary.dataSet.fields.clientAddress,
      ),
    );
  }

  let dataSet = await prisma.dataSet.create({
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
      importHash: data.importHash,
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
