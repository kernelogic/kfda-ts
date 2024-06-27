'use client';

import { useQuery, useQueryClient } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import { DataSetWithRelationships } from 'src/features/dataSet/dataSetSchemas';
import { dataSetFindApiCall } from 'src/features/dataSet/dataSetApiCalls';
import { DataSetActions } from 'src/features/dataSet/components/DataSetActions';
import { dataSetPermissions } from 'src/features/dataSet/dataSetPermissions';
import Breadcrumb from 'src/shared/components/Breadcrumb';
import { CopyToClipboardButton } from 'src/shared/components/CopyToClipboardButton';
import { toast } from 'src/shared/components/ui/use-toast';
import { AppContext } from 'src/shared/controller/appContext';
import { formatDatetime } from 'src/shared/lib/formatDateTime';
import { enumeratorLabel } from 'src/shared/lib/enumeratorLabel';
import FileListItem from 'src/features/file/components/FileListItem';
import { dataSourceLabel } from 'src/features/dataSource/dataSourceLabel';
import { DataSourceLink } from 'src/features/dataSource/components/DataSourceLink';
import { dataCapLabel } from 'src/features/dataCap/dataCapLabel';
import { DataCapLink } from 'src/features/dataCap/components/DataCapLink';
import { dataSetLabel } from 'src/features/dataSet/dataSetLabel';
import { MembershipLink } from 'src/features/membership/components/MembershipLink';
import { membershipLabel } from 'src/features/membership/membershipLabel';

export function DataSetView({
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
    queryKey: ['dataSet', id],
    queryFn: async ({ signal }) => {
      return await dataSetFindApiCall(id, signal);
    },
    initialData: () =>
      (
        queryClient.getQueryData([
          'dataSet',
        ]) as Array<DataSetWithRelationships>
      )?.find((d) => d.id === id),
  });

  const dataSet = query.data;

  if (query.isSuccess && !dataSet) {
    router.push('/data-set');
    return null;
  }

  if (query.isError) {
    toast({
      description:
        (query.error as any).message || dictionary.shared.errors.unknown,
      variant: 'destructive',
    });
    router.push('/data-set');
    return null;
  }

  if (!dataSet) {
    return null;
  }

  return (
    <div className="flex flex-1 flex-col">
      <div className="flex items-center justify-between">
        <Breadcrumb
          items={[
            [dictionary.dataSet.list.menu, '/data-set'],
            [dataSetLabel(dataSet, dictionary)],
          ]}
        />
        <div className="flex gap-2">
          <DataSetActions mode="view" dataSet={dataSet} context={context} />
        </div>
      </div>

      <div className="my-6 divide-y border-t">
        {Boolean(dataSet.name) && (
          <div className="grid grid-cols-3 gap-4 py-4 text-sm lg:grid-cols-4">
            <div className="font-semibold">
              {dictionary.dataSet.fields.name}
            </div>
            <div className="col-span-2 flex items-baseline gap-4 lg:col-span-3">
              <span>{dataSet.name}</span>
              <CopyToClipboardButton
                text={dataSet.name}
                dictionary={context.dictionary}
              />
            </div>
          </div>
        )}
        {Boolean(dataSet.dataOwnerName) && (
          <div className="grid grid-cols-3 gap-4 py-4 text-sm lg:grid-cols-4">
            <div className="font-semibold">
              {dictionary.dataSet.fields.dataOwnerName}
            </div>
            <div className="col-span-2 flex items-baseline gap-4 lg:col-span-3">
              <span>{dataSet.dataOwnerName}</span>
              <CopyToClipboardButton
                text={dataSet.dataOwnerName}
                dictionary={context.dictionary}
              />
            </div>
          </div>
        )}
        {Boolean(dataSet.dataOwnerCountry) && (
          <div className="grid grid-cols-3 gap-4 py-4 text-sm lg:grid-cols-4">
            <div className="font-semibold">
              {dictionary.dataSet.fields.dataOwnerCountry}
            </div>
            <div className="col-span-2 flex items-baseline gap-4 lg:col-span-3">
              <span>{dataSet.dataOwnerCountry}</span>
              <CopyToClipboardButton
                text={dataSet.dataOwnerCountry}
                dictionary={context.dictionary}
              />
            </div>
          </div>
        )}
        {dataSet.dataOwnerContinent != null && (
          <div className="grid grid-cols-3 gap-4 py-4 text-sm lg:grid-cols-4">
            <div className="font-semibold">
              {dictionary.dataSet.fields.dataOwnerContinent}
            </div>
            <div className="col-span-2 flex items-baseline gap-4 lg:col-span-3">
              <span>
                {enumeratorLabel(
                  dictionary.dataSet.enumerators.dataOwnerContinent,
                  dataSet.dataOwnerContinent,
                )}
              </span>
              <CopyToClipboardButton
                text={enumeratorLabel(
                  dictionary.dataSet.enumerators.dataOwnerContinent,
                  dataSet.dataOwnerContinent,
                )}
                dictionary={context.dictionary}
              />
            </div>
          </div>
        )}
        {dataSet.dataSetIndustry != null && (
          <div className="grid grid-cols-3 gap-4 py-4 text-sm lg:grid-cols-4">
            <div className="font-semibold">
              {dictionary.dataSet.fields.dataSetIndustry}
            </div>
            <div className="col-span-2 flex items-baseline gap-4 lg:col-span-3">
              <span>
                {enumeratorLabel(
                  dictionary.dataSet.enumerators.dataSetIndustry,
                  dataSet.dataSetIndustry,
                )}
              </span>
              <CopyToClipboardButton
                text={enumeratorLabel(
                  dictionary.dataSet.enumerators.dataSetIndustry,
                  dataSet.dataSetIndustry,
                )}
                dictionary={context.dictionary}
              />
            </div>
          </div>
        )}
        {dataSet.dataOwnerRelation != null && (
          <div className="grid grid-cols-3 gap-4 py-4 text-sm lg:grid-cols-4">
            <div className="font-semibold">
              {dictionary.dataSet.fields.dataOwnerRelation}
            </div>
            <div className="col-span-2 flex items-baseline gap-4 lg:col-span-3">
              <span>
                {enumeratorLabel(
                  dictionary.dataSet.enumerators.dataOwnerRelation,
                  dataSet.dataOwnerRelation,
                )}
              </span>
              <CopyToClipboardButton
                text={enumeratorLabel(
                  dictionary.dataSet.enumerators.dataOwnerRelation,
                  dataSet.dataOwnerRelation,
                )}
                dictionary={context.dictionary}
              />
            </div>
          </div>
        )}
        {Boolean(dataSet.description) && (
          <div className="grid grid-cols-3 gap-4 py-4 text-sm lg:grid-cols-4">
            <div className="font-semibold">
              {dictionary.dataSet.fields.description}
            </div>
            <div className="col-span-2 flex items-baseline gap-4 lg:col-span-3">
              <span style={{ whiteSpace: 'pre-line' }}>{dataSet.description}</span>
              <CopyToClipboardButton
                text={dataSet.description}
                dictionary={context.dictionary}
              />
            </div>
          </div>
        )}
        {Boolean(dataSet.website) && (
          <div className="grid grid-cols-3 gap-4 py-4 text-sm lg:grid-cols-4">
            <div className="font-semibold">
              {dictionary.dataSet.fields.website}
            </div>
            <div className="col-span-2 flex items-baseline gap-4 lg:col-span-3">
              <span>{dataSet.website}</span>
              <CopyToClipboardButton
                text={dataSet.website}
                dictionary={context.dictionary}
              />
            </div>
          </div>
        )}
        {Boolean(dataSet.clientAddress) && (
          <div className="grid grid-cols-3 gap-4 py-4 text-sm lg:grid-cols-4">
            <div className="font-semibold">
              {dictionary.dataSet.fields.clientAddress}
            </div>
            <div className="col-span-2 flex items-baseline gap-4 lg:col-span-3">
              <span>{dataSet.clientAddress}</span>
              <CopyToClipboardButton
                text={dataSet.clientAddress}
                dictionary={context.dictionary}
              />
            </div>
          </div>
        )}
        {Boolean((dataSet.metadataUpload as Array<any>)?.length) && (
          <div className="grid grid-cols-3 gap-4 py-4 text-sm lg:grid-cols-4">
            <div className="font-semibold">
              {dictionary.dataSet.fields.metadataUpload}
            </div>
            <div className="col-span-2">
              <FileListItem files={dataSet.metadataUpload as Array<any>} />
            </div>
          </div>
        )}
        {dataSet.datasources?.length ? (<div className="grid grid-cols-3 gap-4 py-4 text-sm lg:grid-cols-4">
          <div className="font-semibold">
            {dictionary.dataSet.fields.datasources}
          </div>
          <div className="col-span-2 flex flex-col gap-1">
            {dataSet.datasources?.map((item) => {
              return (
                <div key={item?.id} className="flex items-center gap-4">
                  <DataSourceLink
                    dataSource={item}
                    context={context}
                    className="whitespace-nowrap"
                  />
                  <CopyToClipboardButton
                    text={dataSourceLabel(item, context.dictionary)}
                    dictionary={context.dictionary}
                  />
                </div>
              );
            })}
          </div>
        </div>): null}
        {dataSet.datacaps?.length ? (<div className="grid grid-cols-3 gap-4 py-4 text-sm lg:grid-cols-4">
          <div className="font-semibold">
            {dictionary.dataSet.fields.datacaps}
          </div>
          <div className="col-span-2 flex flex-col gap-1">
            {dataSet.datacaps?.map((item) => {
              return (
                <div key={item?.id} className="flex items-center gap-4">
                  <DataCapLink
                    dataCap={item}
                    context={context}
                    className="whitespace-nowrap"
                  />
                  <CopyToClipboardButton
                    text={dataCapLabel(item, context.dictionary)}
                    dictionary={context.dictionary}
                  />
                </div>
              );
            })}
          </div>
        </div>): null}

        {dataSet.createdByMembership != null && (
          <div className="grid grid-cols-3 gap-4 py-4 text-sm lg:grid-cols-4">
            <div className="font-semibold">
              {dictionary.dataSet.fields.createdByMembership}
            </div>
            <div className="col-span-2 flex items-baseline gap-4 lg:col-span-3">
              <MembershipLink
                membership={dataSet.createdByMembership}
                context={context}
              />
              <CopyToClipboardButton
                text={membershipLabel(
                  dataSet.createdByMembership,
                  context.dictionary,
                )}
                dictionary={context.dictionary}
              />
            </div>
          </div>
        )}

        {dataSet.createdAt != null && (
          <div className="grid grid-cols-3 gap-4 py-4 text-sm lg:grid-cols-4">
            <div className="font-semibold">
              {dictionary.dataSet.fields.createdAt}
            </div>
            <div className="col-span-2 flex items-baseline gap-4 lg:col-span-3">
              <span>{formatDatetime(dataSet.createdAt, dictionary)}</span>
              <CopyToClipboardButton
                text={formatDatetime(dataSet.createdAt, dictionary)}
                dictionary={context.dictionary}
              />
            </div>
          </div>
        )}

        {dataSet.updatedByMembership != null && (
          <div className="grid grid-cols-3 gap-4 py-4 text-sm lg:grid-cols-4">
            <div className="font-semibold">
              {dictionary.dataSet.fields.updatedByMembership}
            </div>
            <div className="col-span-2 flex items-baseline gap-4 lg:col-span-3">
              <MembershipLink
                membership={dataSet.updatedByMembership}
                context={context}
              />
              <CopyToClipboardButton
                text={membershipLabel(
                  dataSet.updatedByMembership,
                  context.dictionary,
                )}
                dictionary={context.dictionary}
              />
            </div>
          </div>
        )}

        {dataSet.updatedAt != null && (
          <div className="grid grid-cols-3 gap-4 py-4 text-sm lg:grid-cols-4">
            <div className="font-semibold">
              {dictionary.dataSet.fields.updatedAt}
            </div>
            <div className="col-span-2 flex items-baseline gap-4 lg:col-span-3">
              <span>{formatDatetime(dataSet.updatedAt, dictionary)}</span>
              <CopyToClipboardButton
                text={formatDatetime(dataSet.updatedAt, dictionary)}
                dictionary={context.dictionary}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
