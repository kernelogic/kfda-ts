import { RouteConfig } from '@asteasolutions/zod-to-openapi';
import { Prisma } from '@prisma/client';
import {
  dataSourceAutocompleteInputSchema,
  dataSourceAutocompleteOutputSchema,
} from 'src/features/dataSource/dataSourceSchemas';
import { permissions } from 'src/features/permissions';
import { validateHasPermission } from 'src/features/security';
import { prismaAuth } from 'src/prisma';
import { AppContext } from 'src/shared/controller/appContext';
import { z } from 'zod';

export const dataSourceAutocompleteApiDoc: RouteConfig = {
  method: 'get',
  path: '/api/data-source/autocomplete',
  request: {
    query: dataSourceAutocompleteInputSchema,
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z.array(dataSourceAutocompleteOutputSchema),
        },
      },
    },
  },
};

export async function dataSourceAutocompleteController(
  query: unknown,
  context: AppContext,
) {
  const { currentTenant } = validateHasPermission(
    permissions.dataSourceAutocomplete,
    context,
  );

  const { search, exclude, take, orderBy } =
    dataSourceAutocompleteInputSchema.parse(query);

  const prisma = prismaAuth(context);

  const whereAnd: Array<Prisma.DataSourceWhereInput> = [];

  whereAnd.push({ tenantId: currentTenant.id });

  if (exclude) {
    whereAnd.push({
      id: {
        notIn: exclude,
      },
    });
  }

  if (search) {
    whereAnd.push({
      name: {
        contains: search,
        mode: 'insensitive',
      },
    });
  }

  let dataSources = await prisma.dataSource.findMany({
    where: {
      AND: whereAnd,
    },
    take,
    orderBy,
  });

  return dataSources.map((dataSource) => {
    return {
      id: dataSource.id,
    name: String(dataSource.name),
    };
  });
}
