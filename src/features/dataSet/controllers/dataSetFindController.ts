import { RouteConfig } from '@asteasolutions/zod-to-openapi';
import { dataSetFindSchema } from 'src/features/dataSet/dataSetSchemas';
import { permissions } from 'src/features/permissions';
import { validateHasPermission } from 'src/features/security';
import { prismaAuth } from 'src/prisma';
import { AppContext } from 'src/shared/controller/appContext';
import { filePopulateDownloadUrlInTree } from 'src/features/file/fileService';

export const dataSetFindApiDoc: RouteConfig = {
  method: 'get',
  path: '/api/data-set/{id}',
  request: {
    params: dataSetFindSchema,
  },
  responses: {
    200: {
      description: 'DataSet',
    },
  },
};

export async function dataSetFindController(
  params: unknown,
  context: AppContext,
) {
  const { currentTenant } = validateHasPermission(
    permissions.dataSetRead,
    context,
  );

  const { id } = dataSetFindSchema.parse(params);

  const prisma = prismaAuth(context);

  let dataSet = await prisma.dataSet.findUnique({
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
