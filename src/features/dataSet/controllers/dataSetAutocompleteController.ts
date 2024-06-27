import { RouteConfig } from '@asteasolutions/zod-to-openapi';
import { Prisma } from '@prisma/client';
import {
  dataSetAutocompleteInputSchema,
  dataSetAutocompleteOutputSchema,
} from 'src/features/dataSet/dataSetSchemas';
import { permissions } from 'src/features/permissions';
import { validateHasPermission } from 'src/features/security';
import { prismaAuth } from 'src/prisma';
import { AppContext } from 'src/shared/controller/appContext';
import { z } from 'zod';

export const dataSetAutocompleteApiDoc: RouteConfig = {
  method: 'get',
  path: '/api/data-set/autocomplete',
  request: {
    query: dataSetAutocompleteInputSchema,
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z.array(dataSetAutocompleteOutputSchema),
        },
      },
    },
  },
};

export async function dataSetAutocompleteController(
  query: unknown,
  context: AppContext,
) {
  const { currentTenant } = validateHasPermission(
    permissions.dataSetAutocomplete,
    context,
  );

  const { search, exclude, take, orderBy } =
    dataSetAutocompleteInputSchema.parse(query);

  const prisma = prismaAuth(context);

  const whereAnd: Array<Prisma.DataSetWhereInput> = [];

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

  let dataSets = await prisma.dataSet.findMany({
    where: {
      AND: whereAnd,
    },
    take,
    orderBy,
  });

  return dataSets.map((dataSet) => {
    return {
      id: dataSet.id,
    name: String(dataSet.name),
    };
  });
}
