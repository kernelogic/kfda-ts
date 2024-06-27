import { RouteConfig } from '@asteasolutions/zod-to-openapi';
import { dataSourceCreateInputSchema } from 'src/features/dataSource/dataSourceSchemas';
import { filePopulateDownloadUrlInTree } from 'src/features/file/fileService';
import { permissions } from 'src/features/permissions';
import { validateHasPermission } from 'src/features/security';
import { prismaAuth } from 'src/prisma';
import { AppContext } from 'src/shared/controller/appContext';
import { prismaRelationship } from 'src/prisma/prismaRelationship';

export const dataSourceCreateApiDoc: RouteConfig = {
  method: 'post',
  path: '/api/data-source',
  request: {
    body: {
      content: {
        'application/json': {
          schema: dataSourceCreateInputSchema,
        },
      },
    },
  },
  responses: {
    200: {
      description: 'DataSource',
    },
  },
};

export async function dataSourceCreateController(
  body: unknown,
  context: AppContext,
) {
  validateHasPermission(permissions.dataSourceCreate, context);
  return await dataSourceCreate(body, context);
}

export async function dataSourceCreate(body: unknown, context: AppContext) {
  const data = dataSourceCreateInputSchema.parse(body);

  const prisma = prismaAuth(context);



  let dataSource = await prisma.dataSource.create({
    data: {
      name: data.name,
      sourceType: data.sourceType,
      sizeInTiB: data.sizeInTiB,
      sourceURL: data.sourceURL,
      dataset: prismaRelationship.connectOneOrThrow(data.dataset),
      importHash: data.importHash,
    },
    include: {
      dataset: true,
      createdByMembership: true,
      updatedByMembership: true,
    },
  });

  dataSource = await filePopulateDownloadUrlInTree(dataSource);

  return dataSource;
}
