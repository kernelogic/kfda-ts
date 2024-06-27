import { RouteConfig } from '@asteasolutions/zod-to-openapi';
import { Prisma } from '@prisma/client';
import dayjs from 'dayjs';
import { dataCapFindManyInputSchema } from 'src/features/dataCap/dataCapSchemas';
import { permissions } from 'src/features/permissions';
import { validateHasPermission } from 'src/features/security';
import { prismaAuth } from 'src/prisma';
import { AppContext } from 'src/shared/controller/appContext';
import { filePopulateDownloadUrlInTree } from 'src/features/file/fileService';

export const dataCapFindManyApiDoc: RouteConfig = {
  method: 'get',
  path: '/api/data-cap',
  request: {
    query: dataCapFindManyInputSchema,
  },
  responses: {
    200: {
      description: '{ dataCaps: DataCap[], count: number }',
    },
  },
};

export async function dataCapFindManyController(
  query: unknown,
  context: AppContext,
) {
  const { currentTenant } = validateHasPermission(
    permissions.dataCapRead,
    context,
  );

  const { filter, orderBy, skip, take } =
    dataCapFindManyInputSchema.parse(query);

  const whereAnd: Array<Prisma.DataCapWhereInput> = [];

  whereAnd.push({
    tenant: {
      id: currentTenant.id,
    },
  });

  if (filter?.trancheRange?.length) {
    const start = filter.trancheRange?.[0];
    const end = filter.trancheRange?.[1];

    if (start != null) {
      whereAnd.push({
        tranche: { gte: start },
      });
    }

    if (end != null) {
      whereAnd.push({
        tranche: { lte: end },
      });
    }
  }

  if (filter?.clientAddress != null) {
    whereAnd.push({
      clientAddress: { contains: filter?.clientAddress, mode: 'insensitive' },
    });
  }

  if (filter?.amountInTiBRange?.length) {
    const start = filter.amountInTiBRange?.[0];
    const end = filter.amountInTiBRange?.[1];

    if (start != null) {
      whereAnd.push({
        amountInTiB: { gte: start },
      });
    }

    if (end != null) {
      whereAnd.push({
        amountInTiB: { lte: end },
      });
    }
  }

  if (filter?.filPerTiBRange?.length) {
    const start = filter.filPerTiBRange?.[0];
    const end = filter.filPerTiBRange?.[1];

    if (start != null) {
      whereAnd.push({
        filPerTiB: { gte: start },
      });
    }

    if (end != null) {
      whereAnd.push({
        filPerTiB: { lte: end },
      });
    }
  }

  if (filter?.filTotalRange?.length) {
    const start = filter.filTotalRange?.[0];
    const end = filter.filTotalRange?.[1];

    if (start != null) {
      whereAnd.push({
        filTotal: { gte: start },
      });
    }

    if (end != null) {
      whereAnd.push({
        filTotal: { lte: end },
      });
    }
  }

  if (filter?.paymentAddress != null) {
    whereAnd.push({
      paymentAddress: { contains: filter?.paymentAddress, mode: 'insensitive' },
    });
  }

  if (filter?.paymentTx != null) {
    whereAnd.push({
      paymentTx: { contains: filter?.paymentTx, mode: 'insensitive' },
    });
  }

  if (filter?.grantTx != null) {
    whereAnd.push({
      grantTx: { contains: filter?.grantTx, mode: 'insensitive' },
    });
  }

  if (filter?.status != null) {
    whereAnd.push({
      status: filter?.status,
    });
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

  let dataCaps = await prisma.dataCap.findMany({
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

  const count = await prisma.dataCap.count({
    where: {
      AND: whereAnd,
    },
  });

  dataCaps = await filePopulateDownloadUrlInTree(dataCaps);

  return { dataCaps, count };
}
