import { DataCap } from '@prisma/client';
import Link from 'next/link';
import React from 'react';
import { dataCapLabel } from 'src/features/dataCap/dataCapLabel';
import { permissions } from 'src/features/permissions';
import { hasPermission } from 'src/features/security';
import { AppContext } from 'src/shared/controller/appContext';
import { cn } from 'src/shared/components/cn';

export function DataCapLink({
  dataCap,
  context,
  className,
}: {
  dataCap?: Partial<DataCap>;
  context: AppContext;
  className?: string;
}) {
  if (!dataCap) {
    return '';
  }

  const hasPermissionToRead = hasPermission(permissions.dataCapRead, context);

  if (!hasPermissionToRead) {
    return <span className={className}>{dataCapLabel(dataCap, context.dictionary)}</span>;
  }

  return (
    <Link
      href={`/data-cap/${dataCap.id}`}
      className={cn(
        'text-blue-500 hover:text-blue-400 hover:underline focus:text-blue-400 dark:text-blue-400',
        className,
      )}
      prefetch={false}
    >
      {dataCapLabel(dataCap, context.dictionary)}
    </Link>
  );
}
