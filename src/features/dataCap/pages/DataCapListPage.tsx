import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import DataCapList from 'src/features/dataCap/components/DataCapList';
import { dataCapPermissions } from 'src/features/dataCap/dataCapPermissions';
import { hasPermission } from 'src/features/security';
import { appContextForReact } from 'src/shared/controller/appContext';
import { getDictionary } from 'src/translation/getDictionary';
import { getLocaleFromCookies } from 'src/translation/getLocaleFromCookies';

export async function generateMetadata() {
  const locale = getLocaleFromCookies(cookies());
  const dictionary = await getDictionary(locale);

  return {
    title: dictionary.dataCap.list.title,
  };
}

export default async function DataCapListPage() {
  const context = await appContextForReact(cookies());

  if (!hasPermission(dataCapPermissions.dataCapRead, context)) {
    return redirect('/');
  }

  return <DataCapList context={context} />;
}
