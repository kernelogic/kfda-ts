'use client';

import { useQuery } from '@tanstack/react-query';
import {
  ColumnDef,
  getCoreRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from '@tanstack/react-table';
import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';
import { useMemo } from 'react';
import { DataSourceActions } from 'src/features/dataSource/components/DataSourceActions';
import DataSourceListActions from 'src/features/dataSource/components/DataSourceListActions';
import DataSourceListFilter from 'src/features/dataSource/components/DataSourceListFilter';
import { dataSourceFindManyApiCall } from 'src/features/dataSource/dataSourceApiCalls';
import {
  DataSourceWithRelationships,
  dataSourceFilterInputSchema,
} from 'src/features/dataSource/dataSourceSchemas';
import Breadcrumb from 'src/shared/components/Breadcrumb';
import DataTable from 'src/shared/components/dataTable/DataTable';
import { DataTableColumnIds } from 'src/shared/components/dataTable/DataTableColumnHeader';
import { DataTablePagination } from 'src/shared/components/dataTable/DataTablePagination';
import { DataTableQueryParams } from 'src/shared/components/dataTable/DataTableQueryParams';
import { dataTableHeader } from 'src/shared/components/dataTable/dataTableHeader';
import { dataTablePageCount } from 'src/shared/components/dataTable/dataTablePageCount';
import { dataTableSortToPrisma } from 'src/shared/components/dataTable/dataTableSortToPrisma';
import { Checkbox } from 'src/shared/components/ui/checkbox';
import { AppContext } from 'src/shared/controller/appContext';
import { DataSourceNewButton } from 'src/features/dataSource/components/DataSourceNewButton';
import { z } from 'zod';
import { enumeratorLabel } from 'src/shared/lib/enumeratorLabel';
import { DataSet } from '@prisma/client';
import { DataSetLink } from 'src/features/dataSet/components/DataSetLink';
import { Membership } from '@prisma/client';
import { MembershipLink } from 'src/features/membership/components/MembershipLink';
import { formatDatetime } from 'src/shared/lib/formatDateTime';
import { DataSource } from '@prisma/client';

const defaultData: Array<any> = [];

export default function DataSourceList({ context }: { context: AppContext }) {
  const { dictionary } = context;
  const router = useRouter();
  const searchParams = useSearchParams();

  const sorting = useMemo(() => {
    return DataTableQueryParams.getSorting(searchParams);
  }, [searchParams]);

  const pagination = useMemo(() => {
    return DataTableQueryParams.getPagination(searchParams);
  }, [searchParams]);

  const filter = useMemo(() => {
    return DataTableQueryParams.getFilter<
      z.input<typeof dataSourceFilterInputSchema>
    >(searchParams, dataSourceFilterInputSchema);
  }, [searchParams]);

  const columns: ColumnDef<DataSourceWithRelationships>[] = [
    {
      id: DataTableColumnIds.select,
      header: ({ table }) => (
        <Checkbox
          checked={table.getIsAllPageRowsSelected()}
          onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
          aria-label={dictionary.shared.dataTable.selectAll}
        />
      ),
      cell: ({ row }) => (
        <Checkbox
          checked={row.getIsSelected()}
          onCheckedChange={(value) => row.toggleSelected(!!value)}
          aria-label={dictionary.shared.dataTable.selectRow}
        />
      ),
      enableSorting: false,
      enableHiding: false,
    },
    {
      accessorKey: 'name',
      meta: {
        title: dictionary.dataSource.fields.name,
      },
      cell: ({ getValue, row }) => (
        <span className="whitespace-nowrap">
          <Link
            className="text-blue-500 hover:text-blue-400 hover:underline focus:text-blue-400 dark:text-blue-400"
            href={`/data-source/${row?.original?.id}`}
            prefetch={false}
          >
            {getValue() as string}
          </Link>
        </span>
      ),
    },
    {
      accessorKey: 'sourceType',
      meta: {
        title: dictionary.dataSource.fields.sourceType,
      },
      cell: ({ row }) => {
        return enumeratorLabel(
          dictionary.dataSource.enumerators.sourceType,
          row.getValue('sourceType'),
        );
      },
    },
    {
      accessorKey: 'sizeInTiB',
      meta: {
        title: dictionary.dataSource.fields.sizeInTiB,
      },
      header: dataTableHeader('right', dictionary),
      cell: ({ getValue }) => {
        return (
          <div className="whitespace-nowrap text-right">
            {getValue() as string}
          </div>
        );
      },
    },
    {
      accessorKey: 'dataset',
      meta: {
        title: dictionary.dataSource.fields.dataset,
      },
      enableSorting: false,
      cell: ({ row }) => {
        return (
          <DataSetLink
            dataSet={row.getValue('dataset')}
            context={context}
          />
        );
      },
    },
    {
      accessorKey: 'createdByMembership',
      meta: {
        title: dictionary.dataSource.fields.createdByMembership,
      },
      enableSorting: false,
      cell: ({ row }) => {
        return (
          <MembershipLink
            membership={row.getValue('createdByMembership')}
            context={context}
          />
        );
      },
    },
    {
      accessorKey: 'createdAt',
      meta: {
        title: dictionary.dataSource.fields.createdAt,
      },
      cell: ({ row }) => (
        <span className="whitespace-nowrap">
          {formatDatetime(row.getValue('createdAt'), dictionary)}
        </span>
      ),
    },
    {
      accessorKey: 'updatedByMembership',
      meta: {
        title: dictionary.dataSource.fields.updatedByMembership,
      },
      enableSorting: false,
      cell: ({ row }) => {
        return (
          <MembershipLink
            membership={row.getValue('updatedByMembership')}
            context={context}
          />
        );
      },
    },
    {
      accessorKey: 'updatedAt',
      meta: {
        title: dictionary.dataSource.fields.updatedAt,
      },
      cell: ({ row }) => (
        <span className="whitespace-nowrap">
          {formatDatetime(row.getValue('updatedAt'), dictionary)}
        </span>
      ),
    },
    {
      id: DataTableColumnIds.actions,
      meta: {
        sticky: true
      },
      cell: ({ row }) => (
        <DataSourceActions
          mode="table"
          dataSource={row.original}
          context={context}
        />
      ),
      enableSorting: false,
      enableHiding: false,
    },
  ];

  const query = useQuery({
    queryKey: ['dataSource', 'list', filter, sorting, pagination],
    queryFn: async ({ signal }) => {
      return dataSourceFindManyApiCall(
        {
          filter: filter,
          skip: pagination.pageIndex * pagination.pageSize,
          take: pagination.pageSize,
          orderBy: dataTableSortToPrisma(sorting),
        },
        signal,
      );
    },
  });

  const table = useReactTable({
    getRowId: ({ originalRow, index }) => originalRow?.id || index,
    data: query.data?.dataSources || defaultData,
    columns,
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getCoreRowModel: getCoreRowModel(),
    defaultColumn: {
      header: dataTableHeader('left', dictionary),
      cell: ({ getValue }) => (
        <span className="whitespace-nowrap">{getValue() as string}</span>
      ),
    },
    state: {
      sorting,
      pagination,
    },
    onSortingChange: DataTableQueryParams.onSortingChange(
      sorting,
      router,
      searchParams,
    ),
    onPaginationChange: DataTableQueryParams.onPaginationChange(
      pagination,
      router,
      searchParams,
    ),
    manualSorting: true,
    manualPagination: true,
    pageCount: dataTablePageCount(query.data?.count, pagination),
    meta: {
      count: query.data?.count,
    },
  });

  return (
    <div className="mb-4 flex w-full flex-col gap-4">
      <div className="flex items-center justify-between">
        <Breadcrumb items={[[dictionary.dataSource.list.menu]]} />
        <div className="flex gap-2">
          <DataSourceListActions
            filter={filter}
            sorting={sorting}
            count={query.data?.count}
            table={table}
            context={context}
          />
        </div>
      </div>

      <DataSourceListFilter context={context} isLoading={query.isLoading} />

      <DataTable
        table={table}
        isLoading={query.isLoading}
        columns={columns}
        dictionary={dictionary}
        notFoundText={dictionary.dataSource.list.noResults}
        newButton={<DataSourceNewButton context={context} />}
      />

      <DataTablePagination table={table} />
    </div>
  );
}
