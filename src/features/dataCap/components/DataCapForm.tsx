import { zodResolver } from '@hookform/resolvers/zod';
import { DataCap } from '@prisma/client';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { LuLoader2 } from 'react-icons/lu';
import * as React from 'react';
import { useForm } from 'react-hook-form';
import { DataCapWithRelationships } from 'src/features/dataCap/dataCapSchemas';
import {
  dataCapCreateApiCall,
  dataCapUpdateApiCall,
} from 'src/features/dataCap/dataCapApiCalls';
import { AppContext } from 'src/shared/controller/appContext';
import { Button } from 'src/shared/components/ui/button';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from 'src/shared/components/ui/form';
import { toast } from 'src/shared/components/ui/use-toast';
import { getZodErrorMap } from 'src/translation/getZodErrorMap';
import { z } from 'zod';
import { dataCapCreateInputSchema } from 'src/features/dataCap/dataCapSchemas';
import { Input } from 'src/shared/components/ui/input';
import { dataCapEnumerators } from 'src/features/dataCap/dataCapEnumerators';
import { enumeratorLabel } from 'src/shared/lib/enumeratorLabel';
import SelectInput from 'src/shared/components/form/SelectInput';
import { DataSetAutocompleteInput } from 'src/features/dataSet/components/DataSetAutocompleteInput';

export function DataCapForm({
  dataCap,
  context,
  onSuccess,
  onCancel,
}: {
  onCancel: () => void;
  onSuccess: (dataCap: DataCapWithRelationships) => void;
  dataCap?: Partial<DataCapWithRelationships>;
  context: AppContext;
}) {
  const { locale, dictionary } = context;

  const queryClient = useQueryClient();

  z.setErrorMap(getZodErrorMap(locale));

  const isEditing = Boolean(dataCap?.id);

  const [initialValues] = React.useState({
    tranche: dataCap?.tranche || 1,
    clientAddress: dataCap?.clientAddress || '',
    amountInTiB: dataCap?.amountInTiB || '',
    filPerTiB: dataCap?.filPerTiB ? Number(dataCap?.filPerTiB) : '',
    filTotal: dataCap?.filTotal ? Number(dataCap?.filTotal) : '',
    paymentAddress: dataCap?.paymentAddress || '',
    paymentTx: dataCap?.paymentTx || '',
    grantTx: dataCap?.grantTx || '',
    status: dataCap?.status || "Pending",
    dataset: dataCap?.dataset || null,
  });

  const form = useForm({
    resolver: zodResolver(dataCapCreateInputSchema),
    mode: 'onSubmit',
    defaultValues: initialValues,
  });

  const mutation = useMutation({
    mutationFn: (data: z.input<typeof dataCapCreateInputSchema>) => {
      if (dataCap?.id) {
        return dataCapUpdateApiCall(dataCap.id, data);
      } else {
        return dataCapCreateApiCall(data);
      }
    },
    onSuccess: (dataCap: DataCap) => {
      queryClient.invalidateQueries({
        queryKey: ['dataCap'],
      });

      onSuccess(dataCap);

      toast({
        description: isEditing
          ? dictionary.dataCap.edit.success
          : dictionary.dataCap.new.success,
      });
    },
    onError: (error: Error) => {
      toast({
        description: error.message || dictionary.shared.errors.unknown,
        variant: 'destructive',
      });
    },
  });

  const onSubmit = (data: any) => {
    mutation.mutateAsync(data);
  };

  return (
    <Form {...form}>
      <form
        onSubmit={(e) => {
          e.stopPropagation();
          form.handleSubmit(onSubmit)(e);
        }}
      >
        <div className="grid w-full gap-8">
          <div className="grid max-w-lg gap-1">
              <FormField
                control={form.control}
                name="tranche"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="required">
                      {dictionary.dataCap.fields.tranche}
                    </FormLabel>

                    {isEditing ? (
                      <Input
                        type="number"
                        disabled={true}
                        readOnly={true}
                        autoFocus
                        {...field}
                      />
                    ) : (<FormDescription>Will be auto generated after create.</FormDescription>)}

                    {dictionary.dataCap.hints.tranche ? (
                      <FormDescription>
                        {dictionary.dataCap.hints.tranche}
                      </FormDescription>
                    ) : null}

                    <FormMessage data-testid="tranche-error" />
                  </FormItem>
                )}
              />
            </div>
          <div className="grid max-w-lg gap-1">
            <FormField
              control={form.control}
              name="clientAddress"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="required">
                    {dictionary.dataCap.fields.clientAddress}
                  </FormLabel>

                  <Input
                    disabled={mutation.isPending || mutation.isSuccess}
                    {...field}
                  />

                  {dictionary.dataCap.hints.clientAddress ? (
                    <FormDescription>
                      {dictionary.dataCap.hints.clientAddress}
                    </FormDescription>
                  ) : null}

                  <FormMessage data-testid="clientAddress-error" />
                </FormItem>
              )}
            />
          </div>
          <div className="grid max-w-lg gap-1">
              <FormField
                control={form.control}
                name="amountInTiB"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      {dictionary.dataCap.fields.amountInTiB}
                    </FormLabel>

                    <Input
                      type="number"
                      disabled={mutation.isPending || mutation.isSuccess}
                      {...field}
                    />

                    {dictionary.dataCap.hints.amountInTiB ? (
                      <FormDescription>
                        {dictionary.dataCap.hints.amountInTiB}
                      </FormDescription>
                    ) : null}

                    <FormMessage data-testid="amountInTiB-error" />
                  </FormItem>
                )}
              />
            </div>
          <div className="grid max-w-lg gap-1">
              <FormField
                control={form.control}
                name="filPerTiB"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      {dictionary.dataCap.fields.filPerTiB}
                    </FormLabel>

                    {isEditing ? (
                      <Input
                        disabled={true}
                        readOnly={true}
                        {...field}
                      />
                    ) : (<FormDescription>Will be auto generated after create.</FormDescription>)}

                    {dictionary.dataCap.hints.filPerTiB ? (
                      <FormDescription>
                        {dictionary.dataCap.hints.filPerTiB}
                      </FormDescription>
                    ) : null}

                    <FormMessage data-testid="filPerTiB-error" />
                  </FormItem>
                )}
              />
            </div>
          <div className="grid max-w-lg gap-1">
              <FormField
                control={form.control}
                name="filTotal"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      {dictionary.dataCap.fields.filTotal}
                    </FormLabel>

                    {isEditing ? (
                      <Input
                        disabled={true}
                        readOnly={true}
                        {...field}
                      />
                    ) : (<FormDescription>Will be auto generated after create.</FormDescription>)}

                    {dictionary.dataCap.hints.filTotal ? (
                      <FormDescription>
                        {dictionary.dataCap.hints.filTotal}
                      </FormDescription>
                    ) : null}

                    <FormMessage data-testid="filTotal-error" />
                  </FormItem>
                )}
              />
            </div>
          <div className="grid max-w-lg gap-1">
            <FormField
              control={form.control}
              name="paymentAddress"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    {dictionary.dataCap.fields.paymentAddress}
                  </FormLabel>
                  
                  {isEditing ? (
                    <Input
                      disabled={true}
                      readOnly={true}
                      {...field}
                    />
                  ) : (<FormDescription>Will be auto generated after create.</FormDescription>)}

                  {dictionary.dataCap.hints.paymentAddress ? (
                    <FormDescription>
                      {dictionary.dataCap.hints.paymentAddress}
                    </FormDescription>
                  ) : null}

                  <FormMessage data-testid="paymentAddress-error" />
                </FormItem>
              )}
            />
          </div>
          <div className="grid max-w-lg gap-1">
            <FormField
              control={form.control}
              name="paymentTx"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    {dictionary.dataCap.fields.paymentTx}
                  </FormLabel>

                  <Input
                    disabled={true}
                    readOnly={true}
                    {...field}
                  />

                  {dictionary.dataCap.hints.paymentTx ? (
                    <FormDescription>
                      {dictionary.dataCap.hints.paymentTx}
                    </FormDescription>
                  ) : null}

                  <FormMessage data-testid="paymentTx-error" />
                </FormItem>
              )}
            />
          </div>
          <div className="grid max-w-lg gap-1">
            <FormField
              control={form.control}
              name="grantTx"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    {dictionary.dataCap.fields.grantTx}
                  </FormLabel>

                  {isEditing ? (
                    <Input
                      disabled={true}
                      readOnly={true}
                      {...field}
                    />
                  ) : (<FormDescription>Will be auto generated after grant.</FormDescription>)}

                  {dictionary.dataCap.hints.grantTx ? (
                    <FormDescription>
                      {dictionary.dataCap.hints.grantTx}
                    </FormDescription>
                  ) : null}

                  <FormMessage data-testid="grantTx-error" />
                </FormItem>
              )}
            />
          </div>
          <div className="grid max-w-lg gap-1">
          <FormField
            control={form.control}
            name="status"
            render={({ field }) => (
              <FormItem>
                <FormLabel>{dictionary.dataCap.fields.status}</FormLabel>

                {isEditing ? (
                  <SelectInput
                    options={Object.keys(dataCapEnumerators.status).map(
                      (value) => ({
                        value,
                        label: enumeratorLabel(
                          dictionary.dataCap.enumerators.status,
                          value,
                        ),
                      }),
                    )}
                    dictionary={dictionary}
                    isClearable={true}
                    disabled={true}
                    onChange={field.onChange}
                    value={field.value}
                  />
                ) : (<FormDescription>Will be auto generated after create.</FormDescription>)}

                {dictionary.dataCap.hints.status ? (
                  <FormDescription>
                    {dictionary.dataCap.hints.status}
                  </FormDescription>
                ) : null}

                <FormMessage data-testid="status-error" />
              </FormItem>
            )}
          />
          </div>
          <div className="grid max-w-lg gap-1">
            <FormField
              control={form.control}
              name="dataset"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="required">{dictionary.dataCap.fields.dataset}</FormLabel>

                  <DataSetAutocompleteInput
                    context={context}
                    onChange={field.onChange}
                    value={field.value}
                    isClearable={true}
                    disabled={mutation.isPending || mutation.isSuccess}
                    mode="memory"
                  />

                  {dictionary.dataCap.hints.dataset ? (
                    <FormDescription>
                      {dictionary.dataCap.hints.dataset}
                    </FormDescription>
                  ) : null}

                  <FormMessage data-testid="dataset-error" />
                </FormItem>
              )}
            />
          </div>

          <div className="flex gap-2">
            <Button
              disabled={mutation.isPending || mutation.isSuccess}
              type="submit"
            >
              {(mutation.isPending || mutation.isSuccess) && (
                <LuLoader2 className="mr-2 h-4 w-4 animate-spin" />
              )}
              {dictionary.shared.save}
            </Button>

            <Button
              disabled={mutation.isPending || mutation.isSuccess}
              type="button"
              variant={'secondary'}
              onClick={onCancel}
            >
              {dictionary.shared.cancel}
            </Button>
          </div>
        </div>
      </form>
    </Form>
  );
}
