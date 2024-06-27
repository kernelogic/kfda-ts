import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import DataSourceNew from 'src/features/dataSource/components/DataSourceNew';
import { dataSourcePermissions } from 'src/features/dataSource/dataSourcePermissions';
import { hasPermission } from 'src/features/security';
import Breadcrumb from 'src/shared/components/Breadcrumb';
import { appContextForReact } from 'src/shared/controller/appContext';
import { getDictionary } from 'src/translation/getDictionary';
import { getLocaleFromCookies } from 'src/translation/getLocaleFromCookies';

export async function generateMetadata() {
  const locale = getLocaleFromCookies(cookies());
  const dictionary = await getDictionary(locale);

  return {
    title: dictionary.dataSource.new.title,
  };
}

export default async function DataSourceNewPage() {
  const context = await appContextForReact(cookies());
  const dictionary = context.dictionary;

  if (!hasPermission(dataSourcePermissions.dataSourceCreate, context)) {
    return redirect('/');
  }

  return (
    <div className="flex flex-1 flex-col">
      <Breadcrumb
        items={[
          [dictionary.dataSource.list.menu, '/data-source'],
          [dictionary.dataSource.new.menu],
        ]}
      />
      <div className="my-10">
        <DataSourceNew context={context} />
      </div>
    </div>
  );
}
