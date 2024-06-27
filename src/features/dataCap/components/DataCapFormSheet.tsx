import { DataCapWithRelationships } from 'src/features/dataCap/dataCapSchemas';
import { DataCapForm } from 'src/features/dataCap/components/DataCapForm';
import { AppContext } from 'src/shared/controller/appContext';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from 'src/shared/components/ui/sheet';

export function DataCapFormSheet({
  dataCap,
  context,
  onCancel,
  onSuccess,
}: {
  dataCap?: Partial<DataCapWithRelationships>;
  context: AppContext;
  onCancel: () => void;
  onSuccess: (dataCap: DataCapWithRelationships) => void;
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
            {dataCap
              ? context.dictionary.dataCap.edit.title
              : context.dictionary.dataCap.new.title}
          </SheetTitle>
        </SheetHeader>

        <div className="pt-8">
          <DataCapForm
            dataCap={dataCap}
            context={context}
            onCancel={onCancel}
            onSuccess={onSuccess}
          />
        </div>
      </SheetContent>
    </Sheet>
  );
}
