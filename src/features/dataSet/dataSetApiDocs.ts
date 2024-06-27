import { OpenAPIRegistry } from '@asteasolutions/zod-to-openapi';
import { dataSetAutocompleteApiDoc } from 'src/features/dataSet/controllers/dataSetAutocompleteController';
import { dataSetCreateApiDoc } from 'src/features/dataSet/controllers/dataSetCreateController';
import { dataSetDestroyManyApiDoc } from 'src/features/dataSet/controllers/dataSetDestroyManyController';
import { dataSetFindApiDoc } from 'src/features/dataSet/controllers/dataSetFindController';
import { dataSetFindManyApiDoc } from 'src/features/dataSet/controllers/dataSetFindManyController';
import { dataSetImportApiDoc } from 'src/features/dataSet/controllers/dataSetImporterController';
import { dataSetUpdateApiDoc } from 'src/features/dataSet/controllers/dataSetUpdateController';

export function dataSetApiDocs(registry: OpenAPIRegistry, security: any) {
  [
    dataSetAutocompleteApiDoc,
    dataSetCreateApiDoc,
    dataSetDestroyManyApiDoc,
    dataSetFindApiDoc,
    dataSetFindManyApiDoc,
    dataSetUpdateApiDoc,
    dataSetImportApiDoc,
  ].map((apiDoc) => {
    registry.registerPath({
      ...apiDoc,
      tags: ['DataSet'],
      security,
    });
  });
}
