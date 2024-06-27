import { DataSetWithRelationships } from 'src/features/dataSet/dataSetSchemas';
import { DataSetForm } from 'src/features/dataSet/components/DataSetForm';
import { AppContext } from 'src/shared/controller/appContext';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from 'src/shared/components/ui/sheet';

export function DataSetFormSheet({
  dataSet,
  context,
  onCancel,
  onSuccess,
}: {
  dataSet?: Partial<DataSetWithRelationships>;
  context: AppContext;
  onCancel: () => void;
  onSuccess: (dataSet: DataSetWithRelationships) => void;
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
            {dataSet
              ? context.dictionary.dataSet.edit.title
              : context.dictionary.dataSet.new.title}
          </SheetTitle>
        </SheetHeader>

        <div className="pt-8">
          <DataSetForm
            dataSet={dataSet}
            context={context}
            onCancel={onCancel}
            onSuccess={onSuccess}
          />
        </div>
      </SheetContent>
    </Sheet>
  );
}
