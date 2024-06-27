import { RouteConfig } from '@asteasolutions/zod-to-openapi';
import { dataSourceDestroyManyInputSchema } from 'src/features/dataSource/dataSourceSchemas';
import { permissions } from 'src/features/permissions';
import { validateHasPermission } from 'src/features/security';
import { prismaAuth } from 'src/prisma';
import { AppContext } from 'src/shared/controller/appContext';
import Error400 from 'src/shared/errors/Error400';
import { formatTranslation } from 'src/translation/formatTranslation';

export const dataSourceDestroyManyApiDoc: RouteConfig = {
  method: 'delete',
  path: '/api/data-source',
  request: {
    query: dataSourceDestroyManyInputSchema,
  },
  responses: {
    200: {
      description: 'OK',
    },
  },
};

export async function dataSourceDestroyManyController(
  query: unknown,
  context: AppContext,
) {
  const { currentTenant } = validateHasPermission(
    permissions.dataSourceDestroy,
    context,
  );

  const { ids } = dataSourceDestroyManyInputSchema.parse(query);

  const prisma = prismaAuth(context);

  if (
    await prisma.dataSet.count({
      where: { datasources: { some: { id: { in: ids } } } },
    })
  ) {
    throw new Error400(
      formatTranslation(
        context.dictionary.shared.errors.cannotDeleteReferenced,
        context.dictionary.dataSet.label,
        context.dictionary.dataSet.fields.datasources,
      ),
    );
  }

  return await prisma.dataSource.deleteMany({
    where: {
      id: { in: ids },
      tenantId: currentTenant.id,
    },
  });
}
