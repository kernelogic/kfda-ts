import { OpenAPIRegistry } from '@asteasolutions/zod-to-openapi';
import { dataSourceAutocompleteApiDoc } from 'src/features/dataSource/controllers/dataSourceAutocompleteController';
import { dataSourceCreateApiDoc } from 'src/features/dataSource/controllers/dataSourceCreateController';
import { dataSourceDestroyManyApiDoc } from 'src/features/dataSource/controllers/dataSourceDestroyManyController';
import { dataSourceFindApiDoc } from 'src/features/dataSource/controllers/dataSourceFindController';
import { dataSourceFindManyApiDoc } from 'src/features/dataSource/controllers/dataSourceFindManyController';
import { dataSourceImportApiDoc } from 'src/features/dataSource/controllers/dataSourceImporterController';
import { dataSourceUpdateApiDoc } from 'src/features/dataSource/controllers/dataSourceUpdateController';

export function dataSourceApiDocs(registry: OpenAPIRegistry, security: any) {
  [
    dataSourceAutocompleteApiDoc,
    dataSourceCreateApiDoc,
    dataSourceDestroyManyApiDoc,
    dataSourceFindApiDoc,
    dataSourceFindManyApiDoc,
    dataSourceUpdateApiDoc,
    dataSourceImportApiDoc,
  ].map((apiDoc) => {
    registry.registerPath({
      ...apiDoc,
      tags: ['DataSource'],
      security,
    });
  });
}
