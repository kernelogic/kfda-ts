'use client';

import { DataSet } from '@prisma/client';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { DataSetForm } from 'src/features/dataSet/components/DataSetForm';
import { dataSetFindApiCall } from 'src/features/dataSet/dataSetApiCalls';
import { dataSetLabel } from 'src/features/dataSet/dataSetLabel';
import { DataSetWithRelationships } from 'src/features/dataSet/dataSetSchemas';
import Breadcrumb from 'src/shared/components/Breadcrumb';
import { toast } from 'src/shared/components/ui/use-toast';
import { AppContext } from 'src/shared/controller/appContext';
import { Logger } from 'src/shared/lib/Logger';

export default function DataSetEdit({
  context,
  id,
}: {
  context: AppContext;
  id: string;
}) {
  const dictionary = context.dictionary;
  const router = useRouter();
  const [dataSet, setDataSet] = useState<DataSetWithRelationships>();

  useEffect(() => {
    async function doFetch() {
      try {
        setDataSet(undefined);
        const dataSet = await dataSetFindApiCall(id);

        if (!dataSet) {
          router.push('/data-set');
        }

        setDataSet(dataSet);
      } catch (error: any) {
        Logger.error(error);
        toast({
          description: error.message || dictionary.shared.errors.unknown,
          variant: 'destructive',
        });
        router.push('/data-set');
      }
    }

    doFetch();
  }, [id, router, dictionary.shared.errors.unknown]);

  if (!dataSet) {
    return null;
  }

  return (
    <div className="flex flex-1 flex-col">
      <Breadcrumb
        items={[
          [dictionary.dataSet.list.menu, '/data-set'],
          [dataSetLabel(dataSet, context.dictionary), `/data-set/${dataSet?.id}`],
          [dictionary.dataSet.edit.menu],
        ]}
      />
      <div className="my-10">
        <DataSetForm
          context={context}
          dataSet={dataSet}
          onSuccess={(dataSet: DataSet) => router.push(`/data-set/${dataSet.id}`)}
          onCancel={() => router.push('/data-set')}
        />
      </div>
    </div>
  );
}
