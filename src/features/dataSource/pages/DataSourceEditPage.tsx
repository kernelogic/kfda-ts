import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import DataSourceEdit from 'src/features/dataSource/components/DataSourceEdit';
import { permissions } from 'src/features/permissions';
import { hasPermission } from 'src/features/security';
import { appContextForReact } from 'src/shared/controller/appContext';
import { getDictionary } from 'src/translation/getDictionary';
import { getLocaleFromCookies } from 'src/translation/getLocaleFromCookies';

export async function generateMetadata() {
  const locale = getLocaleFromCookies(cookies());
  const dictionary = await getDictionary(locale);

  return {
    title: dictionary.dataSource.edit.title,
  };
}

export default async function DataSourceEditPage({
  params,
}: {
  params: { id: string };
}) {
  const context = await appContextForReact(cookies());

  if (!hasPermission(permissions.dataSourceUpdate, context)) {
    return redirect('/');
  }

  return <DataSourceEdit context={context} id={params.id} />;
}
