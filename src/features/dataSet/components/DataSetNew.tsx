'use client';

import { DataSet } from '@prisma/client';
import { useRouter } from 'next/navigation';
import React from 'react';
import { DataSetForm } from 'src/features/dataSet/components/DataSetForm';
import { AppContext } from 'src/shared/controller/appContext';

export default function DataSetNew({ context }: { context: AppContext }) {
  const router = useRouter();

  return (
    <DataSetForm
      context={context}
      onSuccess={(dataSet: DataSet) =>
        router.push(`/data-set/${dataSet.id}`)
      }
      onCancel={() => router.push('/data-set')}
    />
  );
}
