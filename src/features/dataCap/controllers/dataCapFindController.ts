import { RouteConfig } from '@asteasolutions/zod-to-openapi';
import { dataCapFindSchema } from 'src/features/dataCap/dataCapSchemas';
import { permissions } from 'src/features/permissions';
import { validateHasPermission } from 'src/features/security';
import { prismaAuth } from 'src/prisma';
import { AppContext } from 'src/shared/controller/appContext';
import { filePopulateDownloadUrlInTree } from 'src/features/file/fileService';

export const dataCapFindApiDoc: RouteConfig = {
  method: 'get',
  path: '/api/data-cap/{id}',
  request: {
    params: dataCapFindSchema,
  },
  responses: {
    200: {
      description: 'DataCap',
    },
  },
};

export async function dataCapFindController(
  params: unknown,
  context: AppContext,
) {
  const { currentTenant } = validateHasPermission(
    permissions.dataCapRead,
    context,
  );

  const { id } = dataCapFindSchema.parse(params);

  const prisma = prismaAuth(context);

  let dataCap = await prisma.dataCap.findUnique({
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

  dataCap = await filePopulateDownloadUrlInTree(dataCap);

  return dataCap;
}
