/**
 * Storage permissions.
 *
 * @id - Used to identify the rule on permissions and upload.
 * @folder - Folder where the files will be saved
 * @maxSizeInBytes - Max allowed size in bytes
 * @publicRead - The file can be publicly accessed via the URL without the need for a signed token
 */

import { membershipStorage } from 'src/features/membership/membershipStorage';
import { dataSourceStorage } from 'src/features/dataSource/dataSourceStorage';
import { dataSetStorage } from 'src/features/dataSet/dataSetStorage';
import { dataCapStorage } from 'src/features/dataCap/dataCapStorage';

export interface StorageConfig {
  id: string;
  folder: string;
  maxSizeInBytes: number;
  publicRead?: boolean;
}

export const storage = {
  ...membershipStorage,
  ...dataSourceStorage,
  ...dataSetStorage,
  ...dataCapStorage,
};
