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
import { DataSetActions } from 'src/features/dataSet/components/DataSetActions';
import DataSetListActions from 'src/features/dataSet/components/DataSetListActions';
import DataSetListFilter from 'src/features/dataSet/components/DataSetListFilter';
import { dataSetFindManyApiCall } from 'src/features/dataSet/dataSetApiCalls';
import {
  DataSetWithRelationships,
  dataSetFilterInputSchema,
} from 'src/features/dataSet/dataSetSchemas';
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
import { DataSetNewButton } from 'src/features/dataSet/components/DataSetNewButton';
import { z } from 'zod';
import { enumeratorLabel } from 'src/shared/lib/enumeratorLabel';
import { Membership } from '@prisma/client';
import { MembershipLink } from 'src/features/membership/components/MembershipLink';
import { formatDatetime } from 'src/shared/lib/formatDateTime';
import { DataSet } from '@prisma/client';

const defaultData: Array<any> = [];

export default function DataSetList({ context }: { context: AppContext }) {
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
      z.input<typeof dataSetFilterInputSchema>
    >(searchParams, dataSetFilterInputSchema);
  }, [searchParams]);

  const columns: ColumnDef<DataSetWithRelationships>[] = [
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
        title: dictionary.dataSet.fields.name,
      },
      cell: ({ getValue, row }) => (
        <span className="whitespace-nowrap">
          <Link
            className="text-blue-500 hover:text-blue-400 hover:underline focus:text-blue-400 dark:text-blue-400"
            href={`/data-set/${row?.original?.id}`}
            prefetch={false}
          >
            {getValue() as string}
          </Link>
        </span>
      ),
    },
    {
      accessorKey: 'dataOwnerName',
      meta: {
        title: dictionary.dataSet.fields.dataOwnerName,
      },
    },
    {
      accessorKey: 'dataOwnerCountry',
      meta: {
        title: dictionary.dataSet.fields.dataOwnerCountry,
      },
    },
    {
      accessorKey: 'dataOwnerContinent',
      meta: {
        title: dictionary.dataSet.fields.dataOwnerContinent,
      },
      cell: ({ row }) => {
        return enumeratorLabel(
          dictionary.dataSet.enumerators.dataOwnerContinent,
          row.getValue('dataOwnerContinent'),
        );
      },
    },
    {
      accessorKey: 'dataSetIndustry',
      meta: {
        title: dictionary.dataSet.fields.dataSetIndustry,
      },
      cell: ({ row }) => {
        return enumeratorLabel(
          dictionary.dataSet.enumerators.dataSetIndustry,
          row.getValue('dataSetIndustry'),
        );
      },
    },
    {
      accessorKey: 'dataOwnerRelation',
      meta: {
        title: dictionary.dataSet.fields.dataOwnerRelation,
      },
      cell: ({ row }) => {
        return enumeratorLabel(
          dictionary.dataSet.enumerators.dataOwnerRelation,
          row.getValue('dataOwnerRelation'),
        );
      },
    },
    {
      accessorKey: 'website',
      meta: {
        title: dictionary.dataSet.fields.website,
      },
    },
    {
      accessorKey: 'clientAddress',
      meta: {
        title: dictionary.dataSet.fields.clientAddress,
      },
    },
    {
      accessorKey: 'createdByMembership',
      meta: {
        title: dictionary.dataSet.fields.createdByMembership,
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
        title: dictionary.dataSet.fields.createdAt,
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
        title: dictionary.dataSet.fields.updatedByMembership,
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
        title: dictionary.dataSet.fields.updatedAt,
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
        <DataSetActions
          mode="table"
          dataSet={row.original}
          context={context}
        />
      ),
      enableSorting: false,
      enableHiding: false,
    },
  ];

  const query = useQuery({
    queryKey: ['dataSet', 'list', filter, sorting, pagination],
    queryFn: async ({ signal }) => {
      return dataSetFindManyApiCall(
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
    data: query.data?.dataSets || defaultData,
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
        <Breadcrumb items={[[dictionary.dataSet.list.menu]]} />
        <div className="flex gap-2">
          <DataSetListActions
            filter={filter}
            sorting={sorting}
            count={query.data?.count}
            table={table}
            context={context}
          />
        </div>
      </div>

      <DataSetListFilter context={context} isLoading={query.isLoading} />

      <DataTable
        table={table}
        isLoading={query.isLoading}
        columns={columns}
        dictionary={dictionary}
        notFoundText={dictionary.dataSet.list.noResults}
        newButton={<DataSetNewButton context={context} />}
      />

      <DataTablePagination table={table} />
    </div>
  );
}
