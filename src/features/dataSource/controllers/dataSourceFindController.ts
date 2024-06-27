import { RouteConfig } from '@asteasolutions/zod-to-openapi';
import { dataSourceFindSchema } from 'src/features/dataSource/dataSourceSchemas';
import { permissions } from 'src/features/permissions';
import { validateHasPermission } from 'src/features/security';
import { prismaAuth } from 'src/prisma';
import { AppContext } from 'src/shared/controller/appContext';
import { filePopulateDownloadUrlInTree } from 'src/features/file/fileService';

export const dataSourceFindApiDoc: RouteConfig = {
  method: 'get',
  path: '/api/data-source/{id}',
  request: {
    params: dataSourceFindSchema,
  },
  responses: {
    200: {
      description: 'DataSource',
    },
  },
};

export async function dataSourceFindController(
  params: unknown,
  context: AppContext,
) {
  const { currentTenant } = validateHasPermission(
    permissions.dataSourceRead,
    context,
  );

  const { id } = dataSourceFindSchema.parse(params);

  const prisma = prismaAuth(context);

  let dataSource = await prisma.dataSource.findUnique({
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
