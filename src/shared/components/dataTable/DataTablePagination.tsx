import { Table } from '@tanstack/react-table';
import {
  RxChevronLeft,
  RxChevronRight,
  RxDoubleArrowLeft,
  RxDoubleArrowRight,
} from 'react-icons/rx';
import { Button } from 'src/shared/components/ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from 'src/shared/components/ui/select';
import dictionary from 'src/translation/en/en';
import { formatTranslation } from 'src/translation/formatTranslation';

interface DataTablePaginationProps<TData> {
  table: Table<TData>;
}

export function DataTablePagination<TData>({
  table,
}: DataTablePaginationProps<TData>) {
  if (table.getPageCount() === 0) {
    return null;
  }

  return (
    <div className="flex items-center justify-between px-2">
      <div className="flex-1 text-sm text-muted-foreground">
        {table.getFilteredSelectedRowModel().rows.length
          ? formatTranslation(
              dictionary.shared.dataTable.paginationSelected,
              table.getFilteredSelectedRowModel().rows.length,
            )
          : ''}
      </div>
      <div className="flex items-center space-x-6 lg:space-x-8">
        <div className="flex items-center justify-center text-sm font-medium">
          {formatTranslation(
            dictionary.shared.dataTable.paginationTotal,
            (table.options.meta as any)?.count ||
              table.getRowModel().rows?.length ||
              0,
          )}
        </div>
        <div className="flex items-center space-x-2">
          <p className="text-sm font-medium">
            {dictionary.shared.dataTable.paginationRowsPerPage}
          </p>
          <Select
            value={`${table.getState().pagination.pageSize}`}
            onValueChange={(value) => {
              table.setPageSize(Number(value));
            }}
          >
            <SelectTrigger className="h-8 w-[70px]">
              <SelectValue placeholder={table.getState().pagination.pageSize} />
            </SelectTrigger>
            <SelectContent side="top">
              {[10, 20, 30, 40, 50].map((pageSize) => (
                <SelectItem key={pageSize} value={`${pageSize}`}>
                  {pageSize}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div className="flex w-[100px] items-center justify-center text-sm font-medium">
          {formatTranslation(
            dictionary.shared.dataTable.paginationCurrent,
            table.getState().pagination.pageIndex + 1,
            table.getPageCount(),
          )}
        </div>
        <div className="flex items-center space-x-2">
          <Button
            variant="outline"
            className="hidden h-8 w-8 p-0 lg:flex"
            onClick={() => table.setPageIndex(0)}
            disabled={!table.getCanPreviousPage()}
          >
            <span className="sr-only">
              {dictionary.shared.dataTable.paginationGoToFirst}
            </span>
            <RxDoubleArrowLeft className="h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            className="h-8 w-8 p-0"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            <span className="sr-only">
              {dictionary.shared.dataTable.paginationGoToPrevious}
            </span>
            <RxChevronLeft className="h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            className="h-8 w-8 p-0"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            <span className="sr-only">
              {dictionary.shared.dataTable.paginationGoToNext}
            </span>
            <RxChevronRight className="h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            className="hidden h-8 w-8 p-0 lg:flex"
            onClick={() => table.setPageIndex(table.getPageCount() - 1)}
            disabled={!table.getCanNextPage()}
          >
            <span className="sr-only">
              {dictionary.shared.dataTable.paginationGoToLast}
            </span>
            <RxDoubleArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}