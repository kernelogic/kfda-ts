import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import DataSourceList from 'src/features/dataSource/components/DataSourceList';
import { dataSourcePermissions } from 'src/features/dataSource/dataSourcePermissions';
import { hasPermission } from 'src/features/security';
import { appContextForReact } from 'src/shared/controller/appContext';
import { getDictionary } from 'src/translation/getDictionary';
import { getLocaleFromCookies } from 'src/translation/getLocaleFromCookies';

export async function generateMetadata() {
  const locale = getLocaleFromCookies(cookies());
  const dictionary = await getDictionary(locale);

  return {
    title: dictionary.dataSource.list.title,
  };
}

export default async function DataSourceListPage() {
  const context = await appContextForReact(cookies());

  if (!hasPermission(dataSourcePermissions.dataSourceRead, context)) {
    return redirect('/');
  }

  return <DataSourceList context={context} />;
}
