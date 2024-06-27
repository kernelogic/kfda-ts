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
import { DataCapActions } from 'src/features/dataCap/components/DataCapActions';
import DataCapListActions from 'src/features/dataCap/components/DataCapListActions';
import DataCapListFilter from 'src/features/dataCap/components/DataCapListFilter';
import { dataCapFindManyApiCall } from 'src/features/dataCap/dataCapApiCalls';
import {
  DataCapWithRelationships,
  dataCapFilterInputSchema,
} from 'src/features/dataCap/dataCapSchemas';
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
import { DataCapNewButton } from 'src/features/dataCap/components/DataCapNewButton';
import { z } from 'zod';
import { formatDecimal } from 'src/shared/lib/formatDecimal';
import { enumeratorLabel } from 'src/shared/lib/enumeratorLabel';
import { DataSet } from '@prisma/client';
import { DataSetLink } from 'src/features/dataSet/components/DataSetLink';
import { Membership } from '@prisma/client';
import { MembershipLink } from 'src/features/membership/components/MembershipLink';
import { formatDatetime } from 'src/shared/lib/formatDateTime';
import { DataCap } from '@prisma/client';

const defaultData: Array<any> = [];

export default function DataCapList({ context }: { context: AppContext }) {
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
      z.input<typeof dataCapFilterInputSchema>
    >(searchParams, dataCapFilterInputSchema);
  }, [searchParams]);

  const columns: ColumnDef<DataCapWithRelationships>[] = [
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
      accessorKey: 'dataset',
      meta: {
        title: dictionary.dataCap.fields.dataset,
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
      accessorKey: 'tranche',
      meta: {
        title: dictionary.dataCap.fields.tranche,
      },
      header: dataTableHeader('right', dictionary),
      cell: ({ getValue, row }) => (
        <span className="whitespace-nowrap flex justify-end">
          <Link
            className="text-blue-500 hover:text-blue-400 hover:underline focus:text-blue-400 dark:text-blue-400"
            href={`/data-cap/${row?.original?.id}`}
            prefetch={false}
          >
            {getValue() as string}
          </Link>
        </span>
      ),
    },
    {
      accessorKey: 'status',
      meta: {
        title: dictionary.dataCap.fields.status,
      },
      cell: ({ row }) => {
        return enumeratorLabel(
          dictionary.dataCap.enumerators.status,
          row.getValue('status'),
        );
      },
    },
    {
      accessorKey: 'clientAddress',
      meta: {
        title: dictionary.dataCap.fields.clientAddress,
      },
    },
    {
      accessorKey: 'amountInTiB',
      meta: {
        title: dictionary.dataCap.fields.amountInTiB,
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
      accessorKey: 'filPerTiB',
      meta: {
        title: dictionary.dataCap.fields.filPerTiB,
      },
      header: dataTableHeader('right', dictionary),
      cell: ({ getValue }) => {
        return (
          <div className="whitespace-nowrap text-right">
            {formatDecimal(getValue() as string, context.locale)}
          </div>
        );
      },
    },
    {
      accessorKey: 'filTotal',
      meta: {
        title: dictionary.dataCap.fields.filTotal,
      },
      header: dataTableHeader('right', dictionary),
      cell: ({ getValue }) => {
        return (
          <div className="whitespace-nowrap text-right">
            {formatDecimal(getValue() as string, context.locale)}
          </div>
        );
      },
    },
    {
      accessorKey: 'paymentAddress',
      meta: {
        title: dictionary.dataCap.fields.paymentAddress,
      },
    },
    {
      accessorKey: 'paymentTx',
      meta: {
        title: dictionary.dataCap.fields.paymentTx,
      },
    },
    {
      accessorKey: 'grantTx',
      meta: {
        title: dictionary.dataCap.fields.grantTx,
      },
    },
    {
      accessorKey: 'createdByMembership',
      meta: {
        title: dictionary.dataCap.fields.createdByMembership,
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
        title: dictionary.dataCap.fields.createdAt,
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
        title: dictionary.dataCap.fields.updatedByMembership,
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
        title: dictionary.dataCap.fields.updatedAt,
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
        <DataCapActions
          mode="table"
          dataCap={row.original}
          context={context}
        />
      ),
      enableSorting: false,
      enableHiding: false,
    },
  ];

  const query = useQuery({
    queryKey: ['dataCap', 'list', filter, sorting, pagination],
    queryFn: async ({ signal }) => {
      return dataCapFindManyApiCall(
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
    data: query.data?.dataCaps || defaultData,
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
        <Breadcrumb items={[[dictionary.dataCap.list.menu]]} />
        <div className="flex gap-2">
          <DataCapListActions
            filter={filter}
            sorting={sorting}
            count={query.data?.count}
            table={table}
            context={context}
          />
        </div>
      </div>

      <DataCapListFilter context={context} isLoading={query.isLoading} />

      <DataTable
        table={table}
        isLoading={query.isLoading}
        columns={columns}
        dictionary={dictionary}
        notFoundText={dictionary.dataCap.list.noResults}
        newButton={<DataCapNewButton context={context} />}
      />

      <DataTablePagination table={table} />
    </div>
  );
}
