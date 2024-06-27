import { RouteConfig } from '@asteasolutions/zod-to-openapi';
import { Prisma } from '@prisma/client';
import dayjs from 'dayjs';
import { dataSourceFindManyInputSchema } from 'src/features/dataSource/dataSourceSchemas';
import { permissions } from 'src/features/permissions';
import { validateHasPermission } from 'src/features/security';
import { prismaAuth } from 'src/prisma';
import { AppContext } from 'src/shared/controller/appContext';
import { filePopulateDownloadUrlInTree } from 'src/features/file/fileService';

export const dataSourceFindManyApiDoc: RouteConfig = {
  method: 'get',
  path: '/api/data-source',
  request: {
    query: dataSourceFindManyInputSchema,
  },
  responses: {
    200: {
      description: '{ dataSources: DataSource[], count: number }',
    },
  },
};

export async function dataSourceFindManyController(
  query: unknown,
  context: AppContext,
) {
  const { currentTenant } = validateHasPermission(
    permissions.dataSourceRead,
    context,
  );

  const { filter, orderBy, skip, take } =
    dataSourceFindManyInputSchema.parse(query);

  const whereAnd: Array<Prisma.DataSourceWhereInput> = [];

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

  if (filter?.sourceType != null) {
    whereAnd.push({
      sourceType: filter?.sourceType,
    });
  }

  if (filter?.sizeInTiBRange?.length) {
    const start = filter.sizeInTiBRange?.[0];
    const end = filter.sizeInTiBRange?.[1];

    if (start != null) {
      whereAnd.push({
        sizeInTiB: { gte: start },
      });
    }

    if (end != null) {
      whereAnd.push({
        sizeInTiB: { lte: end },
      });
    }
  }

  if (filter?.dataset != null) {
    whereAnd.push({
      dataset: {
        id: filter.dataset,
      },
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

  let dataSources = await prisma.dataSource.findMany({
    where: {
      AND: whereAnd,
    },
    skip,
    take,
    orderBy,
    include: {
      dataset: true,
      createdByMembership: true,
      updatedByMembership: true
    }
  });

  const count = await prisma.dataSource.count({
    where: {
      AND: whereAnd,
    },
  });

  dataSources = await filePopulateDownloadUrlInTree(dataSources);

  return { dataSources, count };
}
