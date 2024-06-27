import { DataSourceWithRelationships } from 'src/features/dataSource/dataSourceSchemas';
import { dataSetLabel } from 'src/features/dataSet/dataSetLabel';
import { membershipLabel } from 'src/features/membership/membershipLabel';
import { AppContext } from 'src/shared/controller/appContext';
import { enumeratorLabel } from 'src/shared/lib/enumeratorLabel';
import { formatDecimal } from 'src/shared/lib/formatDecimal';
import { Locale } from 'src/translation/locales';

export function dataSourceExporterMapper(
  dataSources: DataSourceWithRelationships[],
  context: AppContext,
): Record<string, string | null | undefined>[] {
  return dataSources.map((dataSource) => {
    return {
      id: dataSource.id,
      name: dataSource.name,
      sourceType: enumeratorLabel(
        context.dictionary.dataSource.enumerators.sourceType,
        dataSource.sourceType,
      ),
      sizeInTiB: dataSource.sizeInTiB?.toString(),
      sourceURL: dataSource.sourceURL,
      dataset: dataSetLabel(dataSource.dataset, context.dictionary),
      createdByMembership: membershipLabel(dataSource.createdByMembership, context.dictionary),
      createdAt: String(dataSource.createdAt),
      updatedByMembership: membershipLabel(dataSource.createdByMembership, context.dictionary),
      updatedAt: String(dataSource.updatedAt),
    };
  });
}
