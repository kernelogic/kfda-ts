import { DataSetWithRelationships } from 'src/features/dataSet/dataSetSchemas';
import { membershipLabel } from 'src/features/membership/membershipLabel';
import { AppContext } from 'src/shared/controller/appContext';
import { enumeratorLabel } from 'src/shared/lib/enumeratorLabel';
import { formatDecimal } from 'src/shared/lib/formatDecimal';
import { Locale } from 'src/translation/locales';

export function dataSetExporterMapper(
  dataSets: DataSetWithRelationships[],
  context: AppContext,
): Record<string, string | null | undefined>[] {
  return dataSets.map((dataSet) => {
    return {
      id: dataSet.id,
      name: dataSet.name,
      dataOwnerName: dataSet.dataOwnerName,
      dataOwnerCountry: dataSet.dataOwnerCountry,
      dataOwnerContinent: enumeratorLabel(
        context.dictionary.dataSet.enumerators.dataOwnerContinent,
        dataSet.dataOwnerContinent,
      ),
      dataSetIndustry: enumeratorLabel(
        context.dictionary.dataSet.enumerators.dataSetIndustry,
        dataSet.dataSetIndustry,
      ),
      dataOwnerRelation: enumeratorLabel(
        context.dictionary.dataSet.enumerators.dataOwnerRelation,
        dataSet.dataOwnerRelation,
      ),
      website: dataSet.website,
      clientAddress: dataSet.clientAddress,
      createdByMembership: membershipLabel(dataSet.createdByMembership, context.dictionary),
      createdAt: String(dataSet.createdAt),
      updatedByMembership: membershipLabel(dataSet.createdByMembership, context.dictionary),
      updatedAt: String(dataSet.updatedAt),
    };
  });
}
