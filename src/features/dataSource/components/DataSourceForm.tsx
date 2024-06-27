import { zodResolver } from '@hookform/resolvers/zod';
import { DataSource } from '@prisma/client';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { LuLoader2 } from 'react-icons/lu';
import * as React from 'react';
import { useForm } from 'react-hook-form';
import { DataSourceWithRelationships } from 'src/features/dataSource/dataSourceSchemas';
import {
  dataSourceCreateApiCall,
  dataSourceUpdateApiCall,
} from 'src/features/dataSource/dataSourceApiCalls';
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
import { dataSourceCreateInputSchema } from 'src/features/dataSource/dataSourceSchemas';
import { Input } from 'src/shared/components/ui/input';
import { dataSourceEnumerators } from 'src/features/dataSource/dataSourceEnumerators';
import { enumeratorLabel } from 'src/shared/lib/enumeratorLabel';
import { RadioGroup, RadioGroupItem } from 'src/shared/components/ui/radio-group';
import { DataSetAutocompleteInput } from 'src/features/dataSet/components/DataSetAutocompleteInput';

export function DataSourceForm({
  dataSource,
  context,
  onSuccess,
  onCancel,
}: {
  onCancel: () => void;
  onSuccess: (dataSource: DataSourceWithRelationships) => void;
  dataSource?: Partial<DataSourceWithRelationships>;
  context: AppContext;
}) {
  const { locale, dictionary } = context;

  const queryClient = useQueryClient();

  z.setErrorMap(getZodErrorMap(locale));

  const isEditing = Boolean(dataSource?.id);

  const [initialValues] = React.useState({
    name: dataSource?.name || '',
    sourceType: dataSource?.sourceType || null,
    sizeInTiB: dataSource?.sizeInTiB || '',
    sourceURL: dataSource?.sourceURL || '',
    dataset: dataSource?.dataset || null,
  });

  const form = useForm({
    resolver: zodResolver(dataSourceCreateInputSchema),
    mode: 'onSubmit',
    defaultValues: initialValues,
  });

  const mutation = useMutation({
    mutationFn: (data: z.input<typeof dataSourceCreateInputSchema>) => {
      if (dataSource?.id) {
        return dataSourceUpdateApiCall(dataSource.id, data);
      } else {
        return dataSourceCreateApiCall(data);
      }
    },
    onSuccess: (dataSource: DataSource) => {
      queryClient.invalidateQueries({
        queryKey: ['dataSource'],
      });

      onSuccess(dataSource);

      toast({
        description: isEditing
          ? dictionary.dataSource.edit.success
          : dictionary.dataSource.new.success,
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
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="required">
                    {dictionary.dataSource.fields.name}
                  </FormLabel>

                  <Input
                    disabled={mutation.isPending || mutation.isSuccess}
                    autoFocus
          {...field}
                  />

                  {dictionary.dataSource.hints.name ? (
                    <FormDescription>
                      {dictionary.dataSource.hints.name}
                    </FormDescription>
                  ) : null}

                  <FormMessage data-testid="name-error" />
                </FormItem>
              )}
            />
          </div>
          <div className="grid max-w-lg gap-1">
            <FormField
              control={form.control}
              name="sourceType"
              render={({ field }) => (
                <FormItem className="space-y-3">
                  <FormLabel className="required">{dictionary.dataSource.fields.sourceType}</FormLabel>

                  <FormControl>
                    <RadioGroup
                      onValueChange={field.onChange}
                      value={field.value || ''}
                      className="flex flex-col space-y-1"
                      disabled={mutation.isPending || mutation.isSuccess}
                    >
                      {Object.keys(dataSourceEnumerators.sourceType).map(
                        (sourceType) => (
                          <FormItem
                            key={sourceType}
                            className="flex items-center space-x-3 space-y-0"
                          >
                            <FormControl>
                              <RadioGroupItem value={sourceType} />
                            </FormControl>
                            <FormLabel className="font-normal">
                              {enumeratorLabel(
                                dictionary.dataSource.enumerators.sourceType,
                                sourceType,
                              )}
                            </FormLabel>
                          </FormItem>
                        ),
                      )}
                    </RadioGroup>
                  </FormControl>

                  {Boolean(field.value) && (
                    <button
                      type="button"
                      className="mt-2 text-sm text-muted-foreground underline"
                      onClick={() => field.onChange(null)}
                    >
                      {dictionary.shared.clear}
                    </button>
                  )}

                  {dictionary.dataSource.hints.sourceType ? (
                    <FormDescription>
                      {dictionary.dataSource.hints.sourceType}
                    </FormDescription>
                  ) : null}

                  <FormMessage data-testid="sourceType-error" />
                </FormItem>
              )}
            />
          </div>
          <div className="grid max-w-lg gap-1">
              <FormField
                control={form.control}
                name="sizeInTiB"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="required">
                      {dictionary.dataSource.fields.sizeInTiB}
                    </FormLabel>

                    <Input
                      type="number"
                      disabled={mutation.isPending || mutation.isSuccess}
                      {...field}
                    />

                    {dictionary.dataSource.hints.sizeInTiB ? (
                      <FormDescription>
                        {dictionary.dataSource.hints.sizeInTiB}
                      </FormDescription>
                    ) : null}

                    <FormMessage data-testid="sizeInTiB-error" />
                  </FormItem>
                )}
              />
            </div>
          <div className="grid max-w-lg gap-1">
            <FormField
              control={form.control}
              name="sourceURL"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    {dictionary.dataSource.fields.sourceURL}
                  </FormLabel>

                  <Input
                    disabled={mutation.isPending || mutation.isSuccess}
                    {...field}
                  />

                  {dictionary.dataSource.hints.sourceURL ? (
                    <FormDescription>
                      {dictionary.dataSource.hints.sourceURL}
                    </FormDescription>
                  ) : null}

                  <FormMessage data-testid="sourceURL-error" />
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
                  <FormLabel className="required">{dictionary.dataSource.fields.dataset}</FormLabel>

                  <DataSetAutocompleteInput
                    context={context}
                    onChange={field.onChange}
                    value={field.value}
                    isClearable={true}
                    disabled={mutation.isPending || mutation.isSuccess}
                    mode="memory"
                  />

                  {dictionary.dataSource.hints.dataset ? (
                    <FormDescription>
                      {dictionary.dataSource.hints.dataset}
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
