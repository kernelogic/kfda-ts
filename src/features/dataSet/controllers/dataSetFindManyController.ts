import { RouteConfig } from '@asteasolutions/zod-to-openapi';
import { Prisma } from '@prisma/client';
import dayjs from 'dayjs';
import { dataSetFindManyInputSchema } from 'src/features/dataSet/dataSetSchemas';
import { permissions } from 'src/features/permissions';
import { validateHasPermission } from 'src/features/security';
import { prismaAuth } from 'src/prisma';
import { AppContext } from 'src/shared/controller/appContext';
import { filePopulateDownloadUrlInTree } from 'src/features/file/fileService';

export const dataSetFindManyApiDoc: RouteConfig = {
  method: 'get',
  path: '/api/data-set',
  request: {
    query: dataSetFindManyInputSchema,
  },
  responses: {
    200: {
      description: '{ dataSets: DataSet[], count: number }',
    },
  },
};

export async function dataSetFindManyController(
  query: unknown,
  context: AppContext,
) {
  const { currentTenant } = validateHasPermission(
    permissions.dataSetRead,
    context,
  );

  const { filter, orderBy, skip, take } =
    dataSetFindManyInputSchema.parse(query);

  const whereAnd: Array<Prisma.DataSetWhereInput> = [];

  whereAnd.push({
    tenant: {
      id: currentTenant.id,
    },
  });

  if (filter?.name != null) {
    whereAnd.push({
      name: { contains: filter?.name, mode: 'insensitive' },
    });
  }

  if (filter?.dataOwnerName != null) {
    whereAnd.push({
      dataOwnerName: { contains: filter?.dataOwnerName, mode: 'insensitive' },
    });
  }

  if (filter?.dataOwnerCountry != null) {
    whereAnd.push({
      dataOwnerCountry: { contains: filter?.dataOwnerCountry, mode: 'insensitive' },
    });
  }

  if (filter?.dataOwnerContinent != null) {
    whereAnd.push({
      dataOwnerContinent: filter?.dataOwnerContinent,
    });
  }

  if (filter?.dataSetIndustry != null) {
    whereAnd.push({
      dataSetIndustry: filter?.dataSetIndustry,
    });
  }

  if (filter?.dataOwnerRelation != null) {
    whereAnd.push({
      dataOwnerRelation: filter?.dataOwnerRelation,
    });
  }

  if (filter?.website != null) {
    whereAnd.push({
      website: { contains: filter?.website, mode: 'insensitive' },
    });
  }

  if (filter?.clientAddress != null) {
    whereAnd.push({
      clientAddress: { contains: filter?.clientAddress, mode: 'insensitive' },
    });
  }

  if (filter?.createdByMembership != null) {
    whereAnd.push({
      createdByMembership: {
        id: filter.createdByMembership,
      },
    });
  }

  if (filter?.updatedByMembership != null) {
    whereAnd.push({
      updatedByMembership: {
        id: filter.updatedByMembership,
      },
    });
  }

  if (filter?.createdAtRange?.length) {
    const start = filter.createdAtRange?.[0];
    const end = filter.createdAtRange?.[1];

    if (start != null) {
      whereAnd.push({
        createdAt: {
          gte: start,
        },
      });
    }

    if (end != null) {
      whereAnd.push({
        createdAt: {
          lte: end,
        },
      });
    }
  }

  if (filter?.updatedAtRange?.length) {
    const start = filter.updatedAtRange?.[0];
    const end = filter.updatedAtRange?.[1];

    if (start != null) {
      whereAnd.push({
        updatedAt: {
          gte: start,
        },
      });
    }

    if (end != null) {
      whereAnd.push({
        updatedAt: {
          lte: end,
        },
      });
    }
  }

  const prisma = prismaAuth(context);

  let dataSets = await prisma.dataSet.findMany({
    where: {
      AND: whereAnd,
    },
    skip,
    take,
    orderBy,
    include: {
      createdByMembership: true,
      updatedByMembership: true
    }
  });

  const count = await prisma.dataSet.count({
    where: {
      AND: whereAnd,
    },
  });

  dataSets = await filePopulateDownloadUrlInTree(dataSets);

  return { dataSets, count };
}
