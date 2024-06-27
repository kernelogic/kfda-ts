import Link from 'next/link';
import { LuPlus } from 'react-icons/lu';
import { permissions } from 'src/features/permissions';
import { hasPermission } from 'src/features/security';
import { Button } from 'src/shared/components/ui/button';
import { AppContext } from 'src/shared/controller/appContext';

export function DataSetNewButton({ context }: { context: AppContext }) {
  if (!hasPermission(permissions.dataSetCreate, context)) {
    return null;
  }

  return (
    <Button asChild>
      <Link href="/data-set/new" prefetch={false}>
        <LuPlus className="mr-2 h-4 w-4" /> {context.dictionary.dataSet.new.menu}
      </Link>
    </Button>
  );
}
