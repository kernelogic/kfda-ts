'use client';

import { DataSource } from '@prisma/client';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { DataSourceForm } from 'src/features/dataSource/components/DataSourceForm';
import { dataSourceFindApiCall } from 'src/features/dataSource/dataSourceApiCalls';
import { dataSourceLabel } from 'src/features/dataSource/dataSourceLabel';
import { DataSourceWithRelationships } from 'src/features/dataSource/dataSourceSchemas';
import Breadcrumb from 'src/shared/components/Breadcrumb';
import { toast } from 'src/shared/components/ui/use-toast';
import { AppContext } from 'src/shared/controller/appContext';
import { Logger } from 'src/shared/lib/Logger';

export default function DataSourceEdit({
  context,
  id,
}: {
  context: AppContext;
  id: string;
}) {
  const dictionary = context.dictionary;
  const router = useRouter();
  const [dataSource, setDataSource] = useState<DataSourceWithRelationships>();

  useEffect(() => {
    async function doFetch() {
      try {
        setDataSource(undefined);
        const dataSource = await dataSourceFindApiCall(id);

        if (!dataSource) {
          router.push('/data-source');
        }

        setDataSource(dataSource);
      } catch (error: any) {
        Logger.error(error);
        toast({
          description: error.message || dictionary.shared.errors.unknown,
          variant: 'destructive',
        });
        router.push('/data-source');
      }
    }

    doFetch();
  }, [id, router, dictionary.shared.errors.unknown]);

  if (!dataSource) {
    return null;
  }

  return (
    <div className="flex flex-1 flex-col">
      <Breadcrumb
        items={[
          [dictionary.dataSource.list.menu, '/data-source'],
          [dataSourceLabel(dataSource, context.dictionary), `/data-source/${dataSource?.id}`],
          [dictionary.dataSource.edit.menu],
        ]}
      />
      <div className="my-10">
        <DataSourceForm
          context={context}
          dataSource={dataSource}
          onSuccess={(dataSource: DataSource) => router.push(`/data-source/${dataSource.id}`)}
          onCancel={() => router.push('/data-source')}
        />
      </div>
    </div>
  );
}
