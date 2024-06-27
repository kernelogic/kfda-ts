import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useMemo, useState } from 'react';
import { useForm } from 'react-hook-form';
import { LuLoader2, LuSearch } from 'react-icons/lu';
import { RxReset } from 'react-icons/rx';
import { dataSourceFilterFormSchema } from 'src/features/dataSource/dataSourceSchemas';
import { cn } from 'src/shared/components/cn';
import FilterPreview from 'src/shared/components/dataTable/DataTableFilterPreview';
import { DataTableQueryParams } from 'src/shared/components/dataTable/DataTableQueryParams';
import { dataTableFilterRenders } from 'src/shared/components/dataTable/dataTableFilterRenders';
import { Button } from 'src/shared/components/ui/button';
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from 'src/shared/components/ui/form';
import { AppContext } from 'src/shared/controller/appContext';
import { getZodErrorMap } from 'src/translation/getZodErrorMap';
import { z } from 'zod';
import { MembershipAutocompleteInput } from 'src/features/membership/components/MembershipAutocompleteInput';
import { membershipLabel } from 'src/features/membership/membershipLabel';
import DateTimePickerRangeInput from 'src/shared/components/form/DateTimePickerRangeInput';
import { Input } from 'src/shared/components/ui/input';
import { dataSourceEnumerators } from 'src/features/dataSource/dataSourceEnumerators';
import { enumeratorLabel } from 'src/shared/lib/enumeratorLabel';
import SelectInput from 'src/shared/components/form/SelectInput';
import RangeInput from 'src/shared/components/form/RangeInput';
import { dataSetLabel } from 'src/features/dataSet/dataSetLabel';
import { DataSetAutocompleteInput } from 'src/features/dataSet/components/DataSetAutocompleteInput';

const emptyValues = {
  name: '',
  sourceType: null,
  sizeInTiBRange: [],
  dataset: null,
  createdByMembership: null,
  createdAtRange: [],
  updatedByMembership: null,
  updatedAtRange: [],
};

function DataSourceListFilter({
  context,
  isLoading,
}: {
  context: AppContext;
  isLoading: boolean;
}) {
  const { dictionary, locale } = context;
  const router = useRouter();
  const searchParams = useSearchParams();
  const [expanded, setExpanded] = useState(false);

  z.setErrorMap(getZodErrorMap(locale));

  const previewRenders = {
    name: {
      label: dictionary.dataSource.fields.name,
    },
    sourceType: {
      label: dictionary.dataSource.fields.sourceType,
      render: dataTableFilterRenders(context).enumerator(
        dictionary.dataSource.enumerators.sourceType,
      ),
    },
    sizeInTiBRange: {
      label: dictionary.dataSource.fields.sizeInTiB,
      render: dataTableFilterRenders(context).range(),
    },
    dataset: {
      label: dictionary.dataSource.fields.dataset,
      render: dataTableFilterRenders(context).relationToOne(dataSetLabel),
    },
    createdByMembership: {
      label: dictionary.dataSource.fields.createdByMembership,
      render: dataTableFilterRenders(context).relationToOne(membershipLabel),
    },
    updatedByMembership: {
      label: dictionary.dataSource.fields.updatedByMembership,
      render: dataTableFilterRenders(context).relationToOne(membershipLabel),
    },
    createdAtRange: {
      label: dictionary.dataSource.fields.createdAt,
      render: dataTableFilterRenders(context).dateTimeRange(),
    },
    updatedAtRange: {
      label: dictionary.dataSource.fields.updatedAt,
      render: dataTableFilterRenders(context).dateTimeRange(),
    },
  };

  const filter = useMemo(
    () =>
      DataTableQueryParams.getFilter<z.infer<typeof dataSourceFilterFormSchema>>(
        searchParams,
        dataSourceFilterFormSchema,
      ),
    [searchParams],
  );

  const form = useForm({
    resolver: zodResolver(dataSourceFilterFormSchema),
    mode: 'onSubmit',
    defaultValues: filter,
  });

  useEffect(() => {
    form.reset({ ...emptyValues, ...filter } as z.infer<
      typeof dataSourceFilterFormSchema
    >);
  }, [filter, form]);

  const onRemove = (key: string) => {
    DataTableQueryParams.onFilterChange(
      { ...filter, [key]: undefined },
      router,
      searchParams,
    );
  };

  const onSubmit = (data: any) => {
    DataTableQueryParams.onFilterChange(data, router, searchParams);
    setExpanded(false);
  };

  const doReset = () => {
    DataTableQueryParams.onFilterChange({}, router, searchParams);
    setExpanded(false);
  };

  return (
    <div className="rounded-md border">
      <FilterPreview
        onClick={() => {
          setExpanded(!expanded);
        }}
        renders={previewRenders}
        values={filter}
        expanded={expanded}
        onRemove={onRemove}
        dictionary={dictionary}
      />
      <div className={cn(expanded ? 'block' : 'hidden', 'p-4')}>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>{dictionary.dataSource.fields.name}</FormLabel>
                    <Input disabled={isLoading} {...field} />
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="sourceType"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>{dictionary.dataSource.fields.sourceType}</FormLabel>
                    <SelectInput
                      options={Object.keys(dataSourceEnumerators.sourceType).map(
                        (value) => ({
                          value,
                          label: enumeratorLabel(
                            dictionary.dataSource.enumerators.sourceType,
                            value,
                          ),
                        }),
                      )}
                      dictionary={dictionary}
                      isClearable={true}
                      disabled={isLoading}
                      onChange={field.onChange}
                      value={field.value}
                    />
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="sizeInTiBRange"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>{dictionary.dataSource.fields.sizeInTiB}</FormLabel>
                    <RangeInput
                      type="number"
                      dictionary={dictionary}
                      disabled={isLoading}
                      onChange={field.onChange}
                      value={field.value}
                    />
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="dataset"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>{dictionary.dataSource.fields.dataset}</FormLabel>
                    <DataSetAutocompleteInput
                      context={context}
                      onChange={field.onChange}
                      value={field.value}
                      isClearable={true}
                      disabled={isLoading}
                      hideFormButton={true}
                      mode="memory"
                    />
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="createdByMembership"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      {dictionary.dataSource.fields.createdByMembership}
                    </FormLabel>
                    <MembershipAutocompleteInput
                      context={context}
                      onChange={field.onChange}
                      value={field.value}
                      isClearable={true}
                      disabled={isLoading}
                      hideFormButton={true}
                      mode="memory"
                    />
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="createdAtRange"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      {dictionary.dataSource.fields.createdAt}
                    </FormLabel>
                    <DateTimePickerRangeInput
                      dictionary={dictionary}
                      locale={locale}
                      disabled={isLoading}
                      isClearable={true}
                      onChange={field.onChange}
                      value={field.value}
                    />
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="updatedByMembership"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      {dictionary.dataSource.fields.updatedByMembership}
                    </FormLabel>
                    <MembershipAutocompleteInput
                      context={context}
                      onChange={field.onChange}
                      value={field.value}
                      isClearable={true}
                      disabled={isLoading}
                      hideFormButton={true}
                      mode="memory"
                    />
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="updatedAtRange"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      {dictionary.dataSource.fields.updatedAt}
                    </FormLabel>
                    <DateTimePickerRangeInput
                      dictionary={dictionary}
                      locale={locale}
                      disabled={isLoading}
                      isClearable={true}
                      onChange={field.onChange}
                      value={field.value}
                    />
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="mt-4 flex justify-end gap-2">
              <Button disabled={isLoading} type="submit" size={'sm'}>
                {isLoading ? (
                  <LuLoader2 className="mr-2 h-4 w-4 animate-spin" />
                ) : (
                  <LuSearch className="mr-2 h-4 w-4" />
                )}
                {dictionary.shared.search}
              </Button>

              <Button
                disabled={isLoading}
                type="button"
                variant={'secondary'}
                onClick={doReset}
                size={'sm'}
              >
                <RxReset className="mr-2 h-4 w-4" />
                {dictionary.shared.reset}
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
}

export default DataSourceListFilter;

