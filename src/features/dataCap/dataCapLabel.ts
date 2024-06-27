import { DataCap } from '@prisma/client';
import { Dictionary } from 'src/translation/locales';


export function dataCapLabel(dataCap?: Partial<DataCap> | null, dictionary?: Dictionary) {
  return String(dataCap?.tranche != null ? dataCap.tranche : '');
}
