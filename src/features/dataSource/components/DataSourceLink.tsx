import { DataSource } from '@prisma/client';
import Link from 'next/link';
import React from 'react';
import { dataSourceLabel } from 'src/features/dataSource/dataSourceLabel';
import { permissions } from 'src/features/permissions';
import { hasPermission } from 'src/features/security';
import { AppContext } from 'src/shared/controller/appContext';
import { cn } from 'src/shared/components/cn';

export function DataSourceLink({
  dataSource,
  context,
  className,
}: {
  dataSource?: Partial<DataSource>;
  context: AppContext;
  className?: string;
}) {
  if (!dataSource) {
    return '';
  }

  const hasPermissionToRead = hasPermission(permissions.dataSourceRead, context);

  if (!hasPermissionToRead) {
    return <span className={className}>{dataSourceLabel(dataSource, context.dictionary)}</span>;
  }

  return (
    <Link
      href={`/data-source/${dataSource.id}`}
      className={cn(
        'text-blue-500 hover:text-blue-400 hover:underline focus:text-blue-400 dark:text-blue-400',
        className,
      )}
      prefetch={false}
    >
      {dataSourceLabel(dataSource, context.dictionary)}
    </Link>
  );
}
