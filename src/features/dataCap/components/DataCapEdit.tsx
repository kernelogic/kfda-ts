'use client';

import { DataCap } from '@prisma/client';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { DataCapForm } from 'src/features/dataCap/components/DataCapForm';
import { dataCapFindApiCall } from 'src/features/dataCap/dataCapApiCalls';
import { dataCapLabel } from 'src/features/dataCap/dataCapLabel';
import { DataCapWithRelationships } from 'src/features/dataCap/dataCapSchemas';
import Breadcrumb from 'src/shared/components/Breadcrumb';
import { toast } from 'src/shared/components/ui/use-toast';
import { AppContext } from 'src/shared/controller/appContext';
import { Logger } from 'src/shared/lib/Logger';

export default function DataCapEdit({
  context,
  id,
}: {
  context: AppContext;
  id: string;
}) {
  const dictionary = context.dictionary;
  const router = useRouter();
  const [dataCap, setDataCap] = useState<DataCapWithRelationships>();

  useEffect(() => {
    async function doFetch() {
      try {
        setDataCap(undefined);
        const dataCap = await dataCapFindApiCall(id);

        if (!dataCap) {
          router.push('/data-cap');
        }

        setDataCap(dataCap);
      } catch (error: any) {
        Logger.error(error);
        toast({
          description: error.message || dictionary.shared.errors.unknown,
          variant: 'destructive',
        });
        router.push('/data-cap');
      }
    }

    doFetch();
  }, [id, router, dictionary.shared.errors.unknown]);

  if (!dataCap) {
    return null;
  }

  return (
    <div className="flex flex-1 flex-col">
      <Breadcrumb
        items={[
          [dictionary.dataCap.list.menu, '/data-cap'],
          [dataCapLabel(dataCap, context.dictionary), `/data-cap/${dataCap?.id}`],
          [dictionary.dataCap.edit.menu],
        ]}
      />
      <div className="my-10">
        <DataCapForm
          context={context}
          dataCap={dataCap}
          onSuccess={(dataCap: DataCap) => router.push(`/data-cap/${dataCap.id}`)}
          onCancel={() => router.push('/data-cap')}
        />
      </div>
    </div>
  );
}
