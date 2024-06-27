import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { DataSourceView } from 'src/features/dataSource/components/DataSourceView';
import { dataSourcePermissions } from 'src/features/dataSource/dataSourcePermissions';
import { hasPermission } from 'src/features/security';
import { appContextForReact } from 'src/shared/controller/appContext';
import { getDictionary } from 'src/translation/getDictionary';
import { getLocaleFromCookies } from 'src/translation/getLocaleFromCookies';

export async function generateMetadata() {
  const locale = getLocaleFromCookies(cookies());
  const dictionary = await getDictionary(locale);

  return {
    title: dictionary.dataSource.view.title,
  };
}

export default async function DataSourceViewPage({
  params,
}: {
  params: { id: string };
}) {
  const context = await appContextForReact(cookies());

  if (!hasPermission(dataSourcePermissions.dataSourceRead, context)) {
    redirect('/');
  }

  return <DataSourceView id={params.id} context={context} />;
}
