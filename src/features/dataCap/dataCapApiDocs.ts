import { OpenAPIRegistry } from '@asteasolutions/zod-to-openapi';
import { dataCapAutocompleteApiDoc } from 'src/features/dataCap/controllers/dataCapAutocompleteController';
import { dataCapCreateApiDoc } from 'src/features/dataCap/controllers/dataCapCreateController';
import { dataCapDestroyManyApiDoc } from 'src/features/dataCap/controllers/dataCapDestroyManyController';
import { dataCapFindApiDoc } from 'src/features/dataCap/controllers/dataCapFindController';
import { dataCapFindManyApiDoc } from 'src/features/dataCap/controllers/dataCapFindManyController';
import { dataCapImportApiDoc } from 'src/features/dataCap/controllers/dataCapImporterController';
import { dataCapUpdateApiDoc } from 'src/features/dataCap/controllers/dataCapUpdateController';

export function dataCapApiDocs(registry: OpenAPIRegistry, security: any) {
  [
    dataCapAutocompleteApiDoc,
    dataCapCreateApiDoc,
    dataCapDestroyManyApiDoc,
    dataCapFindApiDoc,
    dataCapFindManyApiDoc,
    dataCapUpdateApiDoc,
    dataCapImportApiDoc,
  ].map((apiDoc) => {
    registry.registerPath({
      ...apiDoc,
      tags: ['DataCap'],
      security,
    });
  });
}
