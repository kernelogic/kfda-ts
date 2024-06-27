import { DataSet } from '@prisma/client';
import Link from 'next/link';
import React from 'react';
import { dataSetLabel } from 'src/features/dataSet/dataSetLabel';
import { permissions } from 'src/features/permissions';
import { hasPermission } from 'src/features/security';
import { AppContext } from 'src/shared/controller/appContext';
import { cn } from 'src/shared/components/cn';

export function DataSetLink({
  dataSet,
  context,
  className,
}: {
  dataSet?: Partial<DataSet>;
  context: AppContext;
  className?: string;
}) {
  if (!dataSet) {
    return '';
  }

  const hasPermissionToRead = hasPermission(permissions.dataSetRead, context);

  if (!hasPermissionToRead) {
    return <span className={className}>{dataSetLabel(dataSet, context.dictionary)}</span>;
  }

  return (
    <Link
      href={`/data-set/${dataSet.id}`}
      className={cn(
        'text-blue-500 hover:text-blue-400 hover:underline focus:text-blue-400 dark:text-blue-400',
        className,
      )}
      prefetch={false}
    >
      {dataSetLabel(dataSet, context.dictionary)}
    </Link>
  );
}
