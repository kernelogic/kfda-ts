import { DataSource } from '@prisma/client';
import { Dictionary } from 'src/translation/locales';


export function dataSourceLabel(dataSource?: Partial<DataSource> | null, dictionary?: Dictionary) {
  return String(dataSource?.name != null ? dataSource.name : '');
}
