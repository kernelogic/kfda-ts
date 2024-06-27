import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import DataCapNew from 'src/features/dataCap/components/DataCapNew';
import { dataCapPermissions } from 'src/features/dataCap/dataCapPermissions';
import { hasPermission } from 'src/features/security';
import Breadcrumb from 'src/shared/components/Breadcrumb';
import { appContextForReact } from 'src/shared/controller/appContext';
import { getDictionary } from 'src/translation/getDictionary';
import { getLocaleFromCookies } from 'src/translation/getLocaleFromCookies';

export async function generateMetadata() {
  const locale = getLocaleFromCookies(cookies());
  const dictionary = await getDictionary(locale);

  return {
    title: dictionary.dataCap.new.title,
  };
}

export default async function DataCapNewPage() {
  const context = await appContextForReact(cookies());
  const dictionary = context.dictionary;

  if (!hasPermission(dataCapPermissions.dataCapCreate, context)) {
    return redirect('/');
  }

  return (
    <div className="flex flex-1 flex-col">
      <Breadcrumb
        items={[
          [dictionary.dataCap.list.menu, '/data-cap'],
          [dictionary.dataCap.new.menu],
        ]}
      />
      <div className="my-10">
        <DataCapNew context={context} />
      </div>
    </div>
  );
}
