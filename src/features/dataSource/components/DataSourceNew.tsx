'use client';

import { DataSource } from '@prisma/client';
import { useRouter } from 'next/navigation';
import React from 'react';
import { DataSourceForm } from 'src/features/dataSource/components/DataSourceForm';
import { AppContext } from 'src/shared/controller/appContext';

export default function DataSourceNew({ context }: { context: AppContext }) {
  const router = useRouter();

  return (
    <DataSourceForm
      context={context}
      onSuccess={(dataSource: DataSource) =>
        router.push(`/data-source/${dataSource.id}`)
      }
      onCancel={() => router.push('/data-source')}
    />
  );
}
