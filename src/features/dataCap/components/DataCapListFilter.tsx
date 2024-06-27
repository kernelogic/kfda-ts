import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useMemo, useState } from 'react';
import { useForm } from 'react-hook-form';
import { LuLoader2, LuSearch } from 'react-icons/lu';
import { RxReset } from 'react-icons/rx';
import { dataCapFilterFormSchema } from 'src/features/dataCap/dataCapSchemas';
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
import RangeInput from 'src/shared/components/form/RangeInput';
import { Input } from 'src/shared/components/ui/input';
import { dataCapEnumerators } from 'src/features/dataCap/dataCapEnumerators';
import { enumeratorLabel } from 'src/shared/lib/enumeratorLabel';
import SelectInput from 'src/shared/components/form/SelectInput';
import { dataSetLabel } from 'src/features/dataSet/dataSetLabel';
import { DataSetAutocompleteInput } from 'src/features/dataSet/components/DataSetAutocompleteInput';

const emptyValues = {
  trancheRange: [],
  clientAddress: '',
  amountInTiBRange: [],
  filPerTiBRange: [],
  filTotalRange: [],
  paymentAddress: '',
  paymentTx: '',
  grantTx: '',
  status: null,
  dataset: null,
  createdByMembership: null,
  createdAtRange: [],
  updatedByMembership: null,
  updatedAtRange: [],
};

function DataCapListFilter({
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
    trancheRange: {
      label: dictionary.dataCap.fields.tranche,
      render: dataTableFilterRenders(context).range(),
    },
    clientAddress: {
      label: dictionary.dataCap.fields.clientAddress,
    },
    amountInTiBRange: {
      label: dictionary.dataCap.fields.amountInTiB,
      render: dataTableFilterRenders(context).range(),
    },
    filPerTiBRange: {
      label: dictionary.dataCap.fields.filPerTiB,
      render: dataTableFilterRenders(context).decimalRange(),
    },
    filTotalRange: {
      label: dictionary.dataCap.fields.filTotal,
      render: dataTableFilterRenders(context).decimalRange(),
    },
    paymentAddress: {
      label: dictionary.dataCap.fields.paymentAddress,
    },
    paymentTx: {
      label: dictionary.dataCap.fields.paymentTx,
    },
    grantTx: {
      label: dictionary.dataCap.fields.grantTx,
    },
    status: {
      label: dictionary.dataCap.fields.status,
      render: dataTableFilterRenders(context).enumerator(
        dictionary.dataCap.enumerators.status,
      ),
    },
    dataset: {
      label: dictionary.dataCap.fields.dataset,
      render: dataTableFilterRenders(context).relationToOne(dataSetLabel),
    },
    createdByMembership: {
      label: dictionary.dataCap.fields.createdByMembership,
      render: dataTableFilterRenders(context).relationToOne(membershipLabel),
    },
    updatedByMembership: {
      label: dictionary.dataCap.fields.updatedByMembership,
      render: dataTableFilterRenders(context).relationToOne(membershipLabel),
    },
    createdAtRange: {
      label: dictionary.dataCap.fields.createdAt,
      render: dataTableFilterRenders(context).dateTimeRange(),
    },
    updatedAtRange: {
      label: dictionary.dataCap.fields.updatedAt,
      render: dataTableFilterRenders(context).dateTimeRange(),
    },
  };

  const filter = useMemo(
    () =>
      DataTableQueryParams.getFilter<z.infer<typeof dataCapFilterFormSchema>>(
        searchParams,
        dataCapFilterFormSchema,
      ),
    [searchParams],
  );

  const form = useForm({
    resolver: zodResolver(dataCapFilterFormSchema),
    mode: 'onSubmit',
    defaultValues: filter,
  });

  useEffect(() => {
    form.reset({ ...emptyValues, ...filter } as z.infer<
      typeof dataCapFilterFormSchema
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
                name="trancheRange"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>{dictionary.dataCap.fields.tranche}</FormLabel>
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
                name="clientAddress"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>{dictionary.dataCap.fields.clientAddress}</FormLabel>
                    <Input disabled={isLoading} {...field} />
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="amountInTiBRange"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>{dictionary.dataCap.fields.amountInTiB}</FormLabel>
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
                name="filPerTiBRange"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>{dictionary.dataCap.fields.filPerTiB}</FormLabel>
                    <RangeInput
                      type="text"
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
                name="filTotalRange"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>{dictionary.dataCap.fields.filTotal}</FormLabel>
                    <RangeInput
                      type="text"
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
                name="paymentAddress"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>{dictionary.dataCap.fields.paymentAddress}</FormLabel>
                    <Input disabled={isLoading} {...field} />
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="paymentTx"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>{dictionary.dataCap.fields.paymentTx}</FormLabel>
                    <Input disabled={isLoading} {...field} />
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="grantTx"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>{dictionary.dataCap.fields.grantTx}</FormLabel>
                    <Input disabled={isLoading} {...field} />
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="status"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>{dictionary.dataCap.fields.status}</FormLabel>
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
                    <FormLabel>{dictionary.dataCap.fields.dataset}</FormLabel>
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
                      {dictionary.dataCap.fields.createdByMembership}
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
                      {dictionary.dataCap.fields.createdAt}
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
                      {dictionary.dataCap.fields.updatedByMembership}
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
                      {dictionary.dataCap.fields.updatedAt}
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

export default DataCapListFilter;

