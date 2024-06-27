import { RouteConfig } from '@asteasolutions/zod-to-openapi';
import { Prisma } from '@prisma/client';
import {
  dataCapAutocompleteInputSchema,
  dataCapAutocompleteOutputSchema,
} from 'src/features/dataCap/dataCapSchemas';
import { permissions } from 'src/features/permissions';
import { validateHasPermission } from 'src/features/security';
import { prismaAuth } from 'src/prisma';
import { AppContext } from 'src/shared/controller/appContext';
import { z } from 'zod';

export const dataCapAutocompleteApiDoc: RouteConfig = {
  method: 'get',
  path: '/api/data-cap/autocomplete',
  request: {
    query: dataCapAutocompleteInputSchema,
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z.array(dataCapAutocompleteOutputSchema),
        },
      },
    },
  },
};

export async function dataCapAutocompleteController(
  query: unknown,
  context: AppContext,
) {
  const { currentTenant } = validateHasPermission(
    permissions.dataCapAutocomplete,
    context,
  );

  const { search, exclude, take, orderBy } =
    dataCapAutocompleteInputSchema.parse(query);

  const prisma = prismaAuth(context);

  const whereAnd: Array<Prisma.DataCapWhereInput> = [];

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
      tranche: parseInt(search),
    });
  }

  let dataCaps = await prisma.dataCap.findMany({
    where: {
      AND: whereAnd,
    },
    take,
    orderBy,
  });

  return dataCaps.map((dataCap) => {
    return {
      id: dataCap.id,
    tranche: String(dataCap.tranche),
    };
  });
}
