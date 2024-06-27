import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useMemo, useState } from 'react';
import { useForm } from 'react-hook-form';
import { LuLoader2, LuSearch } from 'react-icons/lu';
import { RxReset } from 'react-icons/rx';
import { dataSetFilterFormSchema } from 'src/features/dataSet/dataSetSchemas';
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
import { dataSetEnumerators } from 'src/features/dataSet/dataSetEnumerators';
import { enumeratorLabel } from 'src/shared/lib/enumeratorLabel';
import SelectInput from 'src/shared/components/form/SelectInput';

const emptyValues = {
  name: '',
  dataOwnerName: '',
  dataOwnerCountry: '',
  dataOwnerContinent: null,
  dataSetIndustry: null,
  dataOwnerRelation: null,
  website: '',
  clientAddress: '',
  createdByMembership: null,
  createdAtRange: [],
  updatedByMembership: null,
  updatedAtRange: [],
};

function DataSetListFilter({
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
      label: dictionary.dataSet.fields.name,
    },
    dataOwnerName: {
      label: dictionary.dataSet.fields.dataOwnerName,
    },
    dataOwnerCountry: {
      label: dictionary.dataSet.fields.dataOwnerCountry,
    },
    dataOwnerContinent: {
      label: dictionary.dataSet.fields.dataOwnerContinent,
      render: dataTableFilterRenders(context).enumerator(
        dictionary.dataSet.enumerators.dataOwnerContinent,
      ),
    },
    dataSetIndustry: {
      label: dictionary.dataSet.fields.dataSetIndustry,
      render: dataTableFilterRenders(context).enumerator(
        dictionary.dataSet.enumerators.dataSetIndustry,
      ),
    },
    dataOwnerRelation: {
      label: dictionary.dataSet.fields.dataOwnerRelation,
      render: dataTableFilterRenders(context).enumerator(
        dictionary.dataSet.enumerators.dataOwnerRelation,
      ),
    },
    website: {
      label: dictionary.dataSet.fields.website,
    },
    clientAddress: {
      label: dictionary.dataSet.fields.clientAddress,
    },
    createdByMembership: {
      label: dictionary.dataSet.fields.createdByMembership,
      render: dataTableFilterRenders(context).relationToOne(membershipLabel),
    },
    updatedByMembership: {
      label: dictionary.dataSet.fields.updatedByMembership,
      render: dataTableFilterRenders(context).relationToOne(membershipLabel),
    },
    createdAtRange: {
      label: dictionary.dataSet.fields.createdAt,
      render: dataTableFilterRenders(context).dateTimeRange(),
    },
    updatedAtRange: {
      label: dictionary.dataSet.fields.updatedAt,
      render: dataTableFilterRenders(context).dateTimeRange(),
    },
  };

  const filter = useMemo(
    () =>
      DataTableQueryParams.getFilter<z.infer<typeof dataSetFilterFormSchema>>(
        searchParams,
        dataSetFilterFormSchema,
      ),
    [searchParams],
  );

  const form = useForm({
    resolver: zodResolver(dataSetFilterFormSchema),
    mode: 'onSubmit',
    defaultValues: filter,
  });

  useEffect(() => {
    form.reset({ ...emptyValues, ...filter } as z.infer<
      typeof dataSetFilterFormSchema
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
                    <FormLabel>{dictionary.dataSet.fields.name}</FormLabel>
                    <Input disabled={isLoading} {...field} />
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="dataOwnerName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>{dictionary.dataSet.fields.dataOwnerName}</FormLabel>
                    <Input disabled={isLoading} {...field} />
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="dataOwnerCountry"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>{dictionary.dataSet.fields.dataOwnerCountry}</FormLabel>
                    <Input disabled={isLoading} {...field} />
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="dataOwnerContinent"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>{dictionary.dataSet.fields.dataOwnerContinent}</FormLabel>
                    <SelectInput
                      options={Object.keys(dataSetEnumerators.dataOwnerContinent).map(
                        (value) => ({
                          value,
                          label: enumeratorLabel(
                            dictionary.dataSet.enumerators.dataOwnerContinent,
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
                name="dataSetIndustry"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>{dictionary.dataSet.fields.dataSetIndustry}</FormLabel>
                    <SelectInput
                      options={Object.keys(dataSetEnumerators.dataSetIndustry).map(
                        (value) => ({
                          value,
                          label: enumeratorLabel(
                            dictionary.dataSet.enumerators.dataSetIndustry,
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
                name="dataOwnerRelation"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>{dictionary.dataSet.fields.dataOwnerRelation}</FormLabel>
                    <SelectInput
                      options={Object.keys(dataSetEnumerators.dataOwnerRelation).map(
                        (value) => ({
                          value,
                          label: enumeratorLabel(
                            dictionary.dataSet.enumerators.dataOwnerRelation,
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
                name="website"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>{dictionary.dataSet.fields.website}</FormLabel>
                    <Input disabled={isLoading} {...field} />
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="clientAddress"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>{dictionary.dataSet.fields.clientAddress}</FormLabel>
                    <Input disabled={isLoading} {...field} />
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
                      {dictionary.dataSet.fields.createdByMembership}
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
                      {dictionary.dataSet.fields.createdAt}
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
                      {dictionary.dataSet.fields.updatedByMembership}
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
                      {dictionary.dataSet.fields.updatedAt}
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

export default DataSetListFilter;

