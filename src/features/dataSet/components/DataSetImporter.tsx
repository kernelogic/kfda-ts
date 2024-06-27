'use client';

import { dataSetImportApiCall } from 'src/features/dataSet/dataSetApiCalls';
import {
  dataSetImportFileSchema,
  dataSetImportInputSchema,
} from 'src/features/dataSet/dataSetSchemas';
import { Importer } from 'src/shared/components/importer/Importer';
import { AppContext } from 'src/shared/controller/appContext';

export function DataSetImporter({ context }: { context: AppContext }) {
  return (
    <Importer
      keys={[
        'name',
        'dataOwnerName',
        'dataOwnerCountry',
        'dataOwnerContinent',
        'dataSetIndustry',
        'dataOwnerRelation',
        'description',
        'website',
        'clientAddress',
        'metadataUpload',
      ]}
      labels={context.dictionary.dataSet.fields}
      context={context}
      validationSchema={dataSetImportInputSchema}
      fileSchema={dataSetImportFileSchema}
      importerFn={dataSetImportApiCall}
      breadcrumbRoot={[context.dictionary.dataSet.list.menu, '/data-set']}
      queryKeyToInvalidate={['dataSet']}
    />
  );
}
