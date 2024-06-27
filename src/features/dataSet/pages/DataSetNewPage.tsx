import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import DataSetNew from 'src/features/dataSet/components/DataSetNew';
import { dataSetPermissions } from 'src/features/dataSet/dataSetPermissions';
import { hasPermission } from 'src/features/security';
import Breadcrumb from 'src/shared/components/Breadcrumb';
import { appContextForReact } from 'src/shared/controller/appContext';
import { getDictionary } from 'src/translation/getDictionary';
import { getLocaleFromCookies } from 'src/translation/getLocaleFromCookies';

export async function generateMetadata() {
  const locale = getLocaleFromCookies(cookies());
  const dictionary = await getDictionary(locale);

  return {
    title: dictionary.dataSet.new.title,
  };
}

export default async function DataSetNewPage() {
  const context = await appContextForReact(cookies());
  const dictionary = context.dictionary;

  if (!hasPermission(dataSetPermissions.dataSetCreate, context)) {
    return redirect('/');
  }

  return (
    <div className="flex flex-1 flex-col">
      <Breadcrumb
        items={[
          [dictionary.dataSet.list.menu, '/data-set'],
          [dictionary.dataSet.new.menu],
        ]}
      />
      <div className="my-10">
        <DataSetNew context={context} />
      </div>
    </div>
  );
}
