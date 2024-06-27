'use client';

import { dataCapImportApiCall } from 'src/features/dataCap/dataCapApiCalls';
import {
  dataCapImportFileSchema,
  dataCapImportInputSchema,
} from 'src/features/dataCap/dataCapSchemas';
import { Importer } from 'src/shared/components/importer/Importer';
import { AppContext } from 'src/shared/controller/appContext';

export function DataCapImporter({ context }: { context: AppContext }) {
  return (
    <Importer
      keys={[
        'tranche',
        'clientAddress',
        'amountInTiB',
        'filPerTiB',
        'filTotal',
        'paymentAddress',
        'paymentTx',
        'grantTx',
        'status',
        'dataset',
      ]}
      labels={context.dictionary.dataCap.fields}
      context={context}
      validationSchema={dataCapImportInputSchema}
      fileSchema={dataCapImportFileSchema}
      importerFn={dataCapImportApiCall}
      breadcrumbRoot={[context.dictionary.dataCap.list.menu, '/data-cap']}
      queryKeyToInvalidate={['dataCap']}
    />
  );
}
