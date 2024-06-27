import { DataSourceWithRelationships } from 'src/features/dataSource/dataSourceSchemas';
import { DataSourceForm } from 'src/features/dataSource/components/DataSourceForm';
import { AppContext } from 'src/shared/controller/appContext';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from 'src/shared/components/ui/sheet';

export function DataSourceFormSheet({
  dataSource,
  context,
  onCancel,
  onSuccess,
}: {
  dataSource?: Partial<DataSourceWithRelationships>;
  context: AppContext;
  onCancel: () => void;
  onSuccess: (dataSource: DataSourceWithRelationships) => void;
}) {
  return (
    <Sheet
      open={true}
      onOpenChange={(open) => (!open ? onCancel() : null)}
      modal={true}
    >
      <SheetContent className="overflow-y-scroll sm:max-w-md">
        <SheetHeader>
          <SheetTitle>
            {dataSource
              ? context.dictionary.dataSource.edit.title
              : context.dictionary.dataSource.new.title}
          </SheetTitle>
        </SheetHeader>

        <div className="pt-8">
          <DataSourceForm
            dataSource={dataSource}
            context={context}
            onCancel={onCancel}
            onSuccess={onSuccess}
          />
        </div>
      </SheetContent>
    </Sheet>
  );
}
