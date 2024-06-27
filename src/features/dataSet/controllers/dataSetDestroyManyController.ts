import { RouteConfig } from '@asteasolutions/zod-to-openapi';
import { dataSetDestroyManyInputSchema } from 'src/features/dataSet/dataSetSchemas';
import { permissions } from 'src/features/permissions';
import { validateHasPermission } from 'src/features/security';
import { prismaAuth } from 'src/prisma';
import { AppContext } from 'src/shared/controller/appContext';
import Error400 from 'src/shared/errors/Error400';
import { formatTranslation } from 'src/translation/formatTranslation';

export const dataSetDestroyManyApiDoc: RouteConfig = {
  method: 'delete',
  path: '/api/data-set',
  request: {
    query: dataSetDestroyManyInputSchema,
  },
  responses: {
    200: {
      description: 'OK',
    },
  },
};

export async function dataSetDestroyManyController(
  query: unknown,
  context: AppContext,
) {
  const { currentTenant } = validateHasPermission(
    permissions.dataSetDestroy,
    context,
  );

  const { ids } = dataSetDestroyManyInputSchema.parse(query);

  const prisma = prismaAuth(context);

  if (
    await prisma.dataSource.count({
      where: { dataset: { id: { in: ids } } },
    })
  ) {
    throw new Error400(
      formatTranslation(
        context.dictionary.shared.errors.cannotDeleteReferenced,
        context.dictionary.dataSource.label,
        context.dictionary.dataSource.fields.dataset,
      ),
    );
  }
  if (
    await prisma.dataCap.count({
      where: { dataset: { id: { in: ids } } },
    })
  ) {
    throw new Error400(
      formatTranslation(
        context.dictionary.shared.errors.cannotDeleteReferenced,
        context.dictionary.dataCap.label,
        context.dictionary.dataCap.fields.dataset,
      ),
    );
  }

  return await prisma.dataSet.deleteMany({
    where: {
      id: { in: ids },
      tenantId: currentTenant.id,
    },
  });
}
