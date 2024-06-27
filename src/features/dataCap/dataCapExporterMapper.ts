import { DataCapWithRelationships } from 'src/features/dataCap/dataCapSchemas';
import { dataSetLabel } from 'src/features/dataSet/dataSetLabel';
import { membershipLabel } from 'src/features/membership/membershipLabel';
import { AppContext } from 'src/shared/controller/appContext';
import { enumeratorLabel } from 'src/shared/lib/enumeratorLabel';
import { formatDecimal } from 'src/shared/lib/formatDecimal';
import { Locale } from 'src/translation/locales';

export function dataCapExporterMapper(
  dataCaps: DataCapWithRelationships[],
  context: AppContext,
): Record<string, string | null | undefined>[] {
  return dataCaps.map((dataCap) => {
    return {
      id: dataCap.id,
      tranche: dataCap.tranche?.toString(),
      clientAddress: dataCap.clientAddress,
      amountInTiB: dataCap.amountInTiB?.toString(),
      filPerTiB: formatDecimal(dataCap.filPerTiB?.toString(), context.locale),
      filTotal: formatDecimal(dataCap.filTotal?.toString(), context.locale),
      paymentAddress: dataCap.paymentAddress,
      paymentTx: dataCap.paymentTx,
      grantTx: dataCap.grantTx,
      status: enumeratorLabel(
        context.dictionary.dataCap.enumerators.status,
        dataCap.status,
      ),
      dataset: dataSetLabel(dataCap.dataset, context.dictionary),
      createdByMembership: membershipLabel(dataCap.createdByMembership, context.dictionary),
      createdAt: String(dataCap.createdAt),
      updatedByMembership: membershipLabel(dataCap.createdByMembership, context.dictionary),
      updatedAt: String(dataCap.updatedAt),
    };
  });
}
