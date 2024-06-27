'use client';

import { useQuery, useQueryClient } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import { DataSourceWithRelationships } from 'src/features/dataSource/dataSourceSchemas';
import { dataSourceFindApiCall } from 'src/features/dataSource/dataSourceApiCalls';
import { DataSourceActions } from 'src/features/dataSource/components/DataSourceActions';
import { dataSourcePermissions } from 'src/features/dataSource/dataSourcePermissions';
import Breadcrumb from 'src/shared/components/Breadcrumb';
import { CopyToClipboardButton } from 'src/shared/components/CopyToClipboardButton';
import { toast } from 'src/shared/components/ui/use-toast';
import { AppContext } from 'src/shared/controller/appContext';
import { formatDatetime } from 'src/shared/lib/formatDateTime';
import { enumeratorLabel } from 'src/shared/lib/enumeratorLabel';
import { dataSetLabel } from 'src/features/dataSet/dataSetLabel';
import { DataSetLink } from 'src/features/dataSet/components/DataSetLink';
import { dataSourceLabel } from 'src/features/dataSource/dataSourceLabel';
import { MembershipLink } from 'src/features/membership/components/MembershipLink';
import { membershipLabel } from 'src/features/membership/membershipLabel';

export function DataSourceView({
  id,
  context,
}: {
  id: string;
  context: AppContext;
}) {
  const { dictionary } = context;
  const queryClient = useQueryClient();
  const router = useRouter();

  const query = useQuery({
    queryKey: ['dataSource', id],
    queryFn: async ({ signal }) => {
      return await dataSourceFindApiCall(id, signal);
    },
    initialData: () =>
      (
        queryClient.getQueryData([
          'dataSource',
        ]) as Array<DataSourceWithRelationships>
      )?.find((d) => d.id === id),
  });

  const dataSource = query.data;

  if (query.isSuccess && !dataSource) {
    router.push('/data-source');
    return null;
  }

  if (query.isError) {
    toast({
      description:
        (query.error as any).message || dictionary.shared.errors.unknown,
      variant: 'destructive',
    });
    router.push('/data-source');
    return null;
  }

  if (!dataSource) {
    return null;
  }

  return (
    <div className="flex flex-1 flex-col">
      <div className="flex items-center justify-between">
        <Breadcrumb
          items={[
            [dictionary.dataSource.list.menu, '/data-source'],
            [dataSourceLabel(dataSource, dictionary)],
          ]}
        />
        <div className="flex gap-2">
          <DataSourceActions mode="view" dataSource={dataSource} context={context} />
        </div>
      </div>

      <div className="my-6 divide-y border-t">
        {Boolean(dataSource.name) && (
          <div className="grid grid-cols-3 gap-4 py-4 text-sm lg:grid-cols-4">
            <div className="font-semibold">
              {dictionary.dataSource.fields.name}
            </div>
            <div className="col-span-2 flex items-baseline gap-4 lg:col-span-3">
              <span>{dataSource.name}</span>
              <CopyToClipboardButton
                text={dataSource.name}
                dictionary={context.dictionary}
              />
            </div>
          </div>
        )}
        {dataSource.sourceType != null && (
          <div className="grid grid-cols-3 gap-4 py-4 text-sm lg:grid-cols-4">
            <div className="font-semibold">
              {dictionary.dataSource.fields.sourceType}
            </div>
            <div className="col-span-2 flex items-baseline gap-4 lg:col-span-3">
              <span>
                {enumeratorLabel(
                  dictionary.dataSource.enumerators.sourceType,
                  dataSource.sourceType,
                )}
              </span>
              <CopyToClipboardButton
                text={enumeratorLabel(
                  dictionary.dataSource.enumerators.sourceType,
                  dataSource.sourceType,
                )}
                dictionary={context.dictionary}
              />
            </div>
          </div>
        )}
        {dataSource.sizeInTiB != null && (
          <div className="grid grid-cols-3 gap-4 py-4 text-sm lg:grid-cols-4">
            <div className="font-semibold">
              {dictionary.dataSource.fields.sizeInTiB}
            </div>
            <div className="col-span-2 flex items-baseline gap-4 lg:col-span-3">
              <span>{dataSource.sizeInTiB}</span>
              <CopyToClipboardButton
                text={dataSource.sizeInTiB.toString()}
                dictionary={context.dictionary}
              />
            </div>
          </div>
        )}
        {Boolean(dataSource.sourceURL) && (
          <div className="grid grid-cols-3 gap-4 py-4 text-sm lg:grid-cols-4">
            <div className="font-semibold">
              {dictionary.dataSource.fields.sourceURL}
            </div>
            <div className="col-span-2 flex items-baseline gap-4 lg:col-span-3">
              <span>{dataSource.sourceURL}</span>
              <CopyToClipboardButton
                text={dataSource.sourceURL}
                dictionary={context.dictionary}
              />
            </div>
          </div>
        )}
        {dataSource.dataset != null && (
          <div className="grid grid-cols-3 gap-4 py-4 text-sm lg:grid-cols-4">
            <div className="font-semibold">
              {dictionary.dataSource.fields.dataset}
            </div>
            <div className="col-span-2 flex items-baseline gap-4 lg:col-span-3">
              <DataSetLink dataSet={dataSource.dataset} context={context} />
              <CopyToClipboardButton
                text={dataSetLabel(dataSource.dataset, context.dictionary)}
                dictionary={context.dictionary}
              />
            </div>
          </div>
        )}

        {dataSource.createdByMembership != null && (
          <div className="grid grid-cols-3 gap-4 py-4 text-sm lg:grid-cols-4">
            <div className="font-semibold">
              {dictionary.dataSource.fields.createdByMembership}
            </div>
            <div className="col-span-2 flex items-baseline gap-4 lg:col-span-3">
              <MembershipLink
                membership={dataSource.createdByMembership}
                context={context}
              />
              <CopyToClipboardButton
                text={membershipLabel(
                  dataSource.createdByMembership,
                  context.dictionary,
                )}
                dictionary={context.dictionary}
              />
            </div>
          </div>
        )}

        {dataSource.createdAt != null && (
          <div className="grid grid-cols-3 gap-4 py-4 text-sm lg:grid-cols-4">
            <div className="font-semibold">
              {dictionary.dataSource.fields.createdAt}
            </div>
            <div className="col-span-2 flex items-baseline gap-4 lg:col-span-3">
              <span>{formatDatetime(dataSource.createdAt, dictionary)}</span>
              <CopyToClipboardButton
                text={formatDatetime(dataSource.createdAt, dictionary)}
                dictionary={context.dictionary}
              />
            </div>
          </div>
        )}

        {dataSource.updatedByMembership != null && (
          <div className="grid grid-cols-3 gap-4 py-4 text-sm lg:grid-cols-4">
            <div className="font-semibold">
              {dictionary.dataSource.fields.updatedByMembership}
            </div>
            <div className="col-span-2 flex items-baseline gap-4 lg:col-span-3">
              <MembershipLink
                membership={dataSource.updatedByMembership}
                context={context}
              />
              <CopyToClipboardButton
                text={membershipLabel(
                  dataSource.updatedByMembership,
                  context.dictionary,
                )}
                dictionary={context.dictionary}
              />
            </div>
          </div>
        )}

        {dataSource.updatedAt != null && (
          <div className="grid grid-cols-3 gap-4 py-4 text-sm lg:grid-cols-4">
            <div className="font-semibold">
              {dictionary.dataSource.fields.updatedAt}
            </div>
            <div className="col-span-2 flex items-baseline gap-4 lg:col-span-3">
              <span>{formatDatetime(dataSource.updatedAt, dictionary)}</span>
              <CopyToClipboardButton
                text={formatDatetime(dataSource.updatedAt, dictionary)}
                dictionary={context.dictionary}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
