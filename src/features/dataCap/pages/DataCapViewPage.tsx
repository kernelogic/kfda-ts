import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { DataCapView } from 'src/features/dataCap/components/DataCapView';
import { dataCapPermissions } from 'src/features/dataCap/dataCapPermissions';
import { hasPermission } from 'src/features/security';
import { appContextForReact } from 'src/shared/controller/appContext';
import { getDictionary } from 'src/translation/getDictionary';
import { getLocaleFromCookies } from 'src/translation/getLocaleFromCookies';

export async function generateMetadata() {
  const locale = getLocaleFromCookies(cookies());
  const dictionary = await getDictionary(locale);

  return {
    title: dictionary.dataCap.view.title,
  };
}

export default async function DataCapViewPage({
  params,
}: {
  params: { id: string };
}) {
  const context = await appContextForReact(cookies());

  if (!hasPermission(dataCapPermissions.dataCapRead, context)) {
    redirect('/');
  }

  return <DataCapView id={params.id} context={context} />;
}
