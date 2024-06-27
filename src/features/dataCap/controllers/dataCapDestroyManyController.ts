import { RouteConfig } from '@asteasolutions/zod-to-openapi';
import { dataCapDestroyManyInputSchema } from 'src/features/dataCap/dataCapSchemas';
import { permissions } from 'src/features/permissions';
import { validateHasPermission } from 'src/features/security';
import { prismaAuth } from 'src/prisma';
import { AppContext } from 'src/shared/controller/appContext';
import Error400 from 'src/shared/errors/Error400';
import { formatTranslation } from 'src/translation/formatTranslation';

export const dataCapDestroyManyApiDoc: RouteConfig = {
  method: 'delete',
  path: '/api/data-cap',
  request: {
    query: dataCapDestroyManyInputSchema,
  },
  responses: {
    200: {
      description: 'OK',
    },
  },
};

export async function dataCapDestroyManyController(
  query: unknown,
  context: AppContext,
) {
  const { currentTenant } = validateHasPermission(
    permissions.dataCapDestroy,
    context,
  );

  const { ids } = dataCapDestroyManyInputSchema.parse(query);

  const prisma = prismaAuth(context);

  if (
    await prisma.dataSet.count({
      where: { datacaps: { some: { id: { in: ids } } } },
    })
  ) {
    throw new Error400(
      formatTranslation(
        context.dictionary.shared.errors.cannotDeleteReferenced,
        context.dictionary.dataSet.label,
        context.dictionary.dataSet.fields.datacaps,
      ),
    );
  }

  return await prisma.dataCap.deleteMany({
    where: {
      id: { in: ids },
      tenantId: currentTenant.id,
    },
  });
}
