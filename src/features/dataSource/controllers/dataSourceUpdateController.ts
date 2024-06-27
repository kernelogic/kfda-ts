import { RouteConfig } from '@asteasolutions/zod-to-openapi';
import {
  dataSourceUpdateBodyInputSchema,
  dataSourceUpdateParamsInputSchema,
} from 'src/features/dataSource/dataSourceSchemas';
import { filePopulateDownloadUrlInTree } from 'src/features/file/fileService';
import { permissions } from 'src/features/permissions';
import { validateHasPermission } from 'src/features/security';
import { prismaAuth } from 'src/prisma';
import { AppContext } from 'src/shared/controller/appContext';
import { prismaRelationship } from 'src/prisma/prismaRelationship';

export const dataSourceUpdateApiDoc: RouteConfig = {
  method: 'put',
  path: '/api/dataSource/{id}',
  request: {
    params: dataSourceUpdateParamsInputSchema,
    body: {
      content: {
        'application/json': {
          schema: dataSourceUpdateBodyInputSchema,
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

export async function dataSourceUpdateController(
  params: unknown,
  body: unknown,
  context: AppContext,
) {
  const { currentTenant } = validateHasPermission(
    permissions.dataSourceUpdate,
    context,
  );

  const { id } = dataSourceUpdateParamsInputSchema.parse(params);

  const data = dataSourceUpdateBodyInputSchema.parse(body);

  const prisma = prismaAuth(context);



  await prisma.dataSource.update({
    where: {
      id_tenantId: {
        id,
        tenantId: currentTenant.id,
      },
    },
    data: {
      name: data.name,
      sourceType: data.sourceType,
      sizeInTiB: data.sizeInTiB,
      sourceURL: data.sourceURL,
      dataset: prismaRelationship.connectOrDisconnectOne(data.dataset),
    },
  });

  let dataSource = await prisma.dataSource.findUniqueOrThrow({
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

  dataSource = await filePopulateDownloadUrlInTree(dataSource);

  return dataSource;
}
