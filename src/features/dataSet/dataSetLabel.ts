import { DataSet } from '@prisma/client';
import { Dictionary } from 'src/translation/locales';


export function dataSetLabel(dataSet?: Partial<DataSet> | null, dictionary?: Dictionary) {
  return String(dataSet?.name != null ? dataSet.name : '');
}
