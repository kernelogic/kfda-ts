'use client';

import { DataCap } from '@prisma/client';
import { useRouter } from 'next/navigation';
import React from 'react';
import { DataCapForm } from 'src/features/dataCap/components/DataCapForm';
import { AppContext } from 'src/shared/controller/appContext';

export default function DataCapNew({ context }: { context: AppContext }) {
  const router = useRouter();

  return (
    <DataCapForm
      context={context}
      onSuccess={(dataCap: DataCap) =>
        router.push(`/data-cap/${dataCap.id}`)
      }
      onCancel={() => router.push('/data-cap')}
    />
  );
}
