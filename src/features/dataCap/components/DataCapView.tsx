'use client';

import { useQuery, useQueryClient } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import { DataCapWithRelationships } from 'src/features/dataCap/dataCapSchemas';
import { dataCapFindApiCall } from 'src/features/dataCap/dataCapApiCalls';
import { DataCapActions } from 'src/features/dataCap/components/DataCapActions';
import { dataCapPermissions } from 'src/features/dataCap/dataCapPermissions';
import Breadcrumb from 'src/shared/components/Breadcrumb';
import { CopyToClipboardButton } from 'src/shared/components/CopyToClipboardButton';
import { toast } from 'src/shared/components/ui/use-toast';
import { AppContext } from 'src/shared/controller/appContext';
import { formatDatetime } from 'src/shared/lib/formatDateTime';
import { formatDecimal } from 'src/shared/lib/formatDecimal';
import { enumeratorLabel } from 'src/shared/lib/enumeratorLabel';
import { dataSetLabel } from 'src/features/dataSet/dataSetLabel';
import { DataSetLink } from 'src/features/dataSet/components/DataSetLink';
import { dataCapLabel } from 'src/features/dataCap/dataCapLabel';
import { MembershipLink } from 'src/features/membership/components/MembershipLink';
import { membershipLabel } from 'src/features/membership/membershipLabel';

export function DataCapView({
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
    queryKey: ['dataCap', id],
    queryFn: async ({ signal }) => {
      return await dataCapFindApiCall(id, signal);
    },
    initialData: () =>
      (
        queryClient.getQueryData([
          'dataCap',
        ]) as Array<DataCapWithRelationships>
      )?.find((d) => d.id === id),
  });

  const dataCap = query.data;

  if (query.isSuccess && !dataCap) {
    router.push('/data-cap');
    return null;
  }

  if (query.isError) {
    toast({
      description:
        (query.error as any).message || dictionary.shared.errors.unknown,
      variant: 'destructive',
    });
    router.push('/data-cap');
    return null;
  }

  if (!dataCap) {
    return null;
  }

  return (
    <div className="flex flex-1 flex-col">
      <div className="flex items-center justify-between">
        <Breadcrumb
          items={[
            [dictionary.dataCap.list.menu, '/data-cap'],
            [dataCapLabel(dataCap, dictionary)],
          ]}
        />
        <div className="flex gap-2">
          <DataCapActions mode="view" dataCap={dataCap} context={context} />
        </div>
      </div>

      <div className="my-6 divide-y border-t">
        {dataCap.tranche != null && (
          <div className="grid grid-cols-3 gap-4 py-4 text-sm lg:grid-cols-4">
            <div className="font-semibold">
              {dictionary.dataCap.fields.tranche}
            </div>
            <div className="col-span-2 flex items-baseline gap-4 lg:col-span-3">
              <span>{dataCap.tranche}</span>
              <CopyToClipboardButton
                text={dataCap.tranche.toString()}
                dictionary={context.dictionary}
              />
            </div>
          </div>
        )}
        {Boolean(dataCap.clientAddress) && (
          <div className="grid grid-cols-3 gap-4 py-4 text-sm lg:grid-cols-4">
            <div className="font-semibold">
              {dictionary.dataCap.fields.clientAddress}
            </div>
            <div className="col-span-2 flex items-baseline gap-4 lg:col-span-3">
              <span>{dataCap.clientAddress}</span>
              <CopyToClipboardButton
                text={dataCap.clientAddress}
                dictionary={context.dictionary}
              />
            </div>
          </div>
        )}
        {dataCap.amountInTiB != null && (
          <div className="grid grid-cols-3 gap-4 py-4 text-sm lg:grid-cols-4">
            <div className="font-semibold">
              {dictionary.dataCap.fields.amountInTiB}
            </div>
            <div className="col-span-2 flex items-baseline gap-4 lg:col-span-3">
              <span>{dataCap.amountInTiB}</span>
              <CopyToClipboardButton
                text={dataCap.amountInTiB.toString()}
                dictionary={context.dictionary}
              />
            </div>
          </div>
        )}
        {dataCap.filPerTiB != null && (
          <div className="grid grid-cols-3 gap-4 py-4 text-sm lg:grid-cols-4">
            <div className="font-semibold">
              {dictionary.dataCap.fields.filPerTiB}
            </div>
            <div className="col-span-2 flex items-baseline gap-4 lg:col-span-3">
              <span>
                {formatDecimal(dataCap.filPerTiB?.toString(), context.locale)}
              </span>
              <CopyToClipboardButton
                text={formatDecimal(
                  dataCap.filPerTiB?.toString(),
                  context.locale
                )}
                dictionary={context.dictionary}
              />
            </div>
          </div>
        )}
        {dataCap.filTotal != null && (
          <div className="grid grid-cols-3 gap-4 py-4 text-sm lg:grid-cols-4">
            <div className="font-semibold">
              {dictionary.dataCap.fields.filTotal}
            </div>
            <div className="col-span-2 flex items-baseline gap-4 lg:col-span-3">
              <span>
                {formatDecimal(dataCap.filTotal?.toString(), context.locale)}
              </span>
              <CopyToClipboardButton
                text={formatDecimal(
                  dataCap.filTotal?.toString(),
                  context.locale
                )}
                dictionary={context.dictionary}
              />
            </div>
          </div>
        )}
        {Boolean(dataCap.paymentAddress) && (
          <div className="grid grid-cols-3 gap-4 py-4 text-sm lg:grid-cols-4">
            <div className="font-semibold">
              {dictionary.dataCap.fields.paymentAddress}
            </div>
            <div className="col-span-2 flex items-baseline gap-4 lg:col-span-3">
              <span>{dataCap.paymentAddress}</span>
              <CopyToClipboardButton
                text={dataCap.paymentAddress}
                dictionary={context.dictionary}
              />
            </div>
          </div>
        )}
        {Boolean(dataCap.paymentTx) && (
          <div className="grid grid-cols-3 gap-4 py-4 text-sm lg:grid-cols-4">
            <div className="font-semibold">
              {dictionary.dataCap.fields.paymentTx}
            </div>
            <div className="col-span-2 flex items-baseline gap-4 lg:col-span-3">
              <span>{dataCap.paymentTx}</span>
              <CopyToClipboardButton
                text={dataCap.paymentTx}
                dictionary={context.dictionary}
              />
            </div>
          </div>
        )}
        {Boolean(dataCap.grantTx) && (
          <div className="grid grid-cols-3 gap-4 py-4 text-sm lg:grid-cols-4">
            <div className="font-semibold">
              {dictionary.dataCap.fields.grantTx}
            </div>
            <div className="col-span-2 flex items-baseline gap-4 lg:col-span-3">
              <span>{dataCap.grantTx}</span>
              <CopyToClipboardButton
                text={dataCap.grantTx}
                dictionary={context.dictionary}
              />
            </div>
          </div>
        )}
        {dataCap.status != null && (
          <div className="grid grid-cols-3 gap-4 py-4 text-sm lg:grid-cols-4">
            <div className="font-semibold">
              {dictionary.dataCap.fields.status}
            </div>
            <div className="col-span-2 flex items-baseline gap-4 lg:col-span-3">
              <span>
                {enumeratorLabel(
                  dictionary.dataCap.enumerators.status,
                  dataCap.status,
                )}
              </span>
              <CopyToClipboardButton
                text={enumeratorLabel(
                  dictionary.dataCap.enumerators.status,
                  dataCap.status,
                )}
                dictionary={context.dictionary}
              />
            </div>
          </div>
        )}
        {dataCap.dataset != null && (
          <div className="grid grid-cols-3 gap-4 py-4 text-sm lg:grid-cols-4">
            <div className="font-semibold">
              {dictionary.dataCap.fields.dataset}
            </div>
            <div className="col-span-2 flex items-baseline gap-4 lg:col-span-3">
              <DataSetLink dataSet={dataCap.dataset} context={context} />
              <CopyToClipboardButton
                text={dataSetLabel(dataCap.dataset, context.dictionary)}
                dictionary={context.dictionary}
              />
            </div>
          </div>
        )}

        {dataCap.createdByMembership != null && (
          <div className="grid grid-cols-3 gap-4 py-4 text-sm lg:grid-cols-4">
            <div className="font-semibold">
              {dictionary.dataCap.fields.createdByMembership}
            </div>
            <div className="col-span-2 flex items-baseline gap-4 lg:col-span-3">
              <MembershipLink
                membership={dataCap.createdByMembership}
                context={context}
              />
              <CopyToClipboardButton
                text={membershipLabel(
                  dataCap.createdByMembership,
                  context.dictionary,
                )}
                dictionary={context.dictionary}
              />
            </div>
          </div>
        )}

        {dataCap.createdAt != null && (
          <div className="grid grid-cols-3 gap-4 py-4 text-sm lg:grid-cols-4">
            <div className="font-semibold">
              {dictionary.dataCap.fields.createdAt}
            </div>
            <div className="col-span-2 flex items-baseline gap-4 lg:col-span-3">
              <span>{formatDatetime(dataCap.createdAt, dictionary)}</span>
              <CopyToClipboardButton
                text={formatDatetime(dataCap.createdAt, dictionary)}
                dictionary={context.dictionary}
              />
            </div>
          </div>
        )}

        {dataCap.updatedByMembership != null && (
          <div className="grid grid-cols-3 gap-4 py-4 text-sm lg:grid-cols-4">
            <div className="font-semibold">
              {dictionary.dataCap.fields.updatedByMembership}
            </div>
            <div className="col-span-2 flex items-baseline gap-4 lg:col-span-3">
              <MembershipLink
                membership={dataCap.updatedByMembership}
                context={context}
              />
              <CopyToClipboardButton
                text={membershipLabel(
                  dataCap.updatedByMembership,
                  context.dictionary,
                )}
                dictionary={context.dictionary}
              />
            </div>
          </div>
        )}

        {dataCap.updatedAt != null && (
          <div className="grid grid-cols-3 gap-4 py-4 text-sm lg:grid-cols-4">
            <div className="font-semibold">
              {dictionary.dataCap.fields.updatedAt}
            </div>
            <div className="col-span-2 flex items-baseline gap-4 lg:col-span-3">
              <span>{formatDatetime(dataCap.updatedAt, dictionary)}</span>
              <CopyToClipboardButton
                text={formatDatetime(dataCap.updatedAt, dictionary)}
                dictionary={context.dictionary}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
