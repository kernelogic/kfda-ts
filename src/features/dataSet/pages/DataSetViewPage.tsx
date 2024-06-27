import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { DataSetView } from 'src/features/dataSet/components/DataSetView';
import { dataSetPermissions } from 'src/features/dataSet/dataSetPermissions';
import { hasPermission } from 'src/features/security';
import { appContextForReact } from 'src/shared/controller/appContext';
import { getDictionary } from 'src/translation/getDictionary';
import { getLocaleFromCookies } from 'src/translation/getLocaleFromCookies';

export async function generateMetadata() {
  const locale = getLocaleFromCookies(cookies());
  const dictionary = await getDictionary(locale);

  return {
    title: dictionary.dataSet.view.title,
  };
}

export default async function DataSetViewPage({
  params,
}: {
  params: { id: string };
}) {
  const context = await appContextForReact(cookies());

  if (!hasPermission(dataSetPermissions.dataSetRead, context)) {
    redirect('/');
  }

  return <DataSetView id={params.id} context={context} />;
}
