'use client';

import { dataSourceImportApiCall } from 'src/features/dataSource/dataSourceApiCalls';
import {
  dataSourceImportFileSchema,
  dataSourceImportInputSchema,
} from 'src/features/dataSource/dataSourceSchemas';
import { Importer } from 'src/shared/components/importer/Importer';
import { AppContext } from 'src/shared/controller/appContext';

export function DataSourceImporter({ context }: { context: AppContext }) {
  return (
    <Importer
      keys={[
        'name',
        'sourceType',
        'sizeInTiB',
        'sourceURL',
        'dataset',
      ]}
      labels={context.dictionary.dataSource.fields}
      context={context}
      validationSchema={dataSourceImportInputSchema}
      fileSchema={dataSourceImportFileSchema}
      importerFn={dataSourceImportApiCall}
      breadcrumbRoot={[context.dictionary.dataSource.list.menu, '/data-source']}
      queryKeyToInvalidate={['dataSource']}
    />
  );
}
