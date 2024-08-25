import { zodResolver } from '@hookform/resolvers/zod';
import { DataSet } from '@prisma/client';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { LuLoader2 } from 'react-icons/lu';
import * as React from 'react';
import { useForm } from 'react-hook-form';
import { DataSetWithRelationships } from 'src/features/dataSet/dataSetSchemas';
import {
  dataSetCreateApiCall,
  dataSetUpdateApiCall,
} from 'src/features/dataSet/dataSetApiCalls';
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
import { dataSetCreateInputSchema } from 'src/features/dataSet/dataSetSchemas';
import { Input } from 'src/shared/components/ui/input';
import { dataSetEnumerators } from 'src/features/dataSet/dataSetEnumerators';
import { enumeratorLabel } from 'src/shared/lib/enumeratorLabel';
import SelectInput from 'src/shared/components/form/SelectInput';
import { Textarea } from 'src/shared/components/ui/textarea';
import { FilesInput } from 'src/features/file/components/FilesInput';
import { storage } from 'src/features/storage';
import Modal from 'react-modal';
import datasetsData from './aws_open_datasets.json';

export function DataSetForm({
  dataSet,
  context,
  onSuccess,
  onCancel,
}: {
  onCancel: () => void;
  onSuccess: (dataSet: DataSetWithRelationships) => void;
  dataSet?: Partial<DataSetWithRelationships>;
  context: AppContext;
}) {
  const { locale, dictionary } = context;

  const queryClient = useQueryClient();

  z.setErrorMap(getZodErrorMap(locale));

  const isEditing = Boolean(dataSet?.id);

  const [initialValues] = React.useState({
    name: dataSet?.name || '',
    dataOwnerName: dataSet?.dataOwnerName || '',
    dataOwnerCountry: dataSet?.dataOwnerCountry || '',
    dataOwnerContinent: dataSet?.dataOwnerContinent || null,
    dataSetIndustry: dataSet?.dataSetIndustry || null,
    dataOwnerRelation: dataSet?.dataOwnerRelation || null,
    description: dataSet?.description || '',
    website: dataSet?.website || '',
    clientAddress: dataSet?.clientAddress || '',
    metadataUpload: dataSet?.metadataUpload || [],
  });

  // State to manage the list of datasets
  const [datasets, setDatasets] = React.useState<{ name: string; id: string; url: string; contact: string; description: string;}[]>([]);
  // State to manage the selected dataset
  const [selectedDataset, setSelectedDataset] = React.useState('');
  // State to manage modal visibility
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  const form = useForm({
    resolver: zodResolver(dataSetCreateInputSchema),
    mode: 'onSubmit',
    defaultValues: initialValues,
  });

  const mutation = useMutation({
    mutationFn: (data: z.input<typeof dataSetCreateInputSchema>) => {
      if (dataSet?.id) {
        return dataSetUpdateApiCall(dataSet.id, data);
      } else {
        return dataSetCreateApiCall(data);
      }
    },
    onSuccess: (dataSet: DataSet) => {
      queryClient.invalidateQueries({
        queryKey: ['dataSet'],
      });

      onSuccess(dataSet);

      toast({
        description: isEditing
          ? dictionary.dataSet.edit.success
          : dictionary.dataSet.new.success,
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

  function handlePrefill() {
    setIsModalOpen(true);
  }

  React.useEffect(() => {
    const loadedDatasets = datasetsData
      .filter(dataset => dataset.Type === "S3 Bucket")
      .filter((dataset, index, self) => self.findIndex(d => d.Name === dataset.Name) === index)
      .map(dataset => ({
        url: dataset.Documentation,
        description: dataset.Description,
        contact: dataset.Contact,
        name: dataset.Name,
        id: dataset.Name
      }));
    setDatasets(loadedDatasets);
  }, []);
  
  // Function to handle dataset selection and copy to form
  const handleDatasetSelect = () => {
    let selectedDatasetObj = datasets.find(dataset => dataset.name === selectedDataset);
    if(!selectedDatasetObj) {
      selectedDatasetObj = datasets[0];
    }
    if (selectedDatasetObj) {
      form.setValue('name', selectedDatasetObj.name);
      form.setValue('description', selectedDatasetObj.description);
      form.setValue('website', selectedDatasetObj.url);
      form.setValue('dataOwnerName', selectedDatasetObj.contact);
    }
    setIsModalOpen(false); // Close the modal after selection
  };

  // Function to handle changing the selected dataset
  const handleChange = (event: any) => {
    setSelectedDataset(event.target.value);
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
                    {dictionary.dataSet.fields.name}
                  </FormLabel>

                  <Input
                    disabled={mutation.isPending || mutation.isSuccess}
                    autoFocus
          {...field}
                  />

                  {dictionary.dataSet.hints.name ? (
                    <FormDescription>
                      {dictionary.dataSet.hints.name}
                    </FormDescription>
                  ) : null}

                  <FormMessage data-testid="name-error" />
                </FormItem>
              )}
            />
            <Button onClick={handlePrefill} type='button'>Prefill from AWS Open Dataset</Button>
            <Modal isOpen={isModalOpen} onRequestClose={() => setIsModalOpen(false)} ariaHideApp={false}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
                <h2 style={{ margin: '0', fontSize: '24px', color: 'blue' }}>Select a Dataset</h2>
              </div>
              <div style={{ marginBottom: '20px' }}>
                <select value={selectedDataset} onChange={handleChange} style={{ width: '100%', padding: '10px', marginBottom: '20px', borderRadius: '5px', border: '1px solid #ccc' }}>
                  {datasets.map((dataset) => (
                    <option key={dataset.id} value={dataset.name}>
                      {dataset.name}
                    </option>
                  ))}
                </select>
              </div>
              <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                <button onClick={handleDatasetSelect} style={{ backgroundColor: '#007bff', color: '#fff', border: 'none', padding: '10px 20px', marginLeft: '10px', borderRadius: '5px', cursor: 'pointer' }}>OK</button>
              </div>
            </Modal>
          </div>
          <div className="grid max-w-lg gap-1">
            <FormField
              control={form.control}
              name="dataOwnerName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    {dictionary.dataSet.fields.dataOwnerName}
                  </FormLabel>

                  <Input
                    disabled={mutation.isPending || mutation.isSuccess}
                    {...field}
                  />

                  {dictionary.dataSet.hints.dataOwnerName ? (
                    <FormDescription>
                      {dictionary.dataSet.hints.dataOwnerName}
                    </FormDescription>
                  ) : null}

                  <FormMessage data-testid="dataOwnerName-error" />
                </FormItem>
              )}
            />
          </div>
          <div className="grid max-w-lg gap-1">
            <FormField
              control={form.control}
              name="dataOwnerCountry"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    {dictionary.dataSet.fields.dataOwnerCountry}
                  </FormLabel>

                  <Input
                    disabled={mutation.isPending || mutation.isSuccess}
                    {...field}
                  />

                  {dictionary.dataSet.hints.dataOwnerCountry ? (
                    <FormDescription>
                      {dictionary.dataSet.hints.dataOwnerCountry}
                    </FormDescription>
                  ) : null}

                  <FormMessage data-testid="dataOwnerCountry-error" />
                </FormItem>
              )}
            />
          </div>
          <div className="grid max-w-lg gap-1">
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
                  disabled={mutation.isPending || mutation.isSuccess}
                  onChange={field.onChange}
                  value={field.value}
                />

                {dictionary.dataSet.hints.dataOwnerContinent ? (
                  <FormDescription>
                    {dictionary.dataSet.hints.dataOwnerContinent}
                  </FormDescription>
                ) : null}

                <FormMessage data-testid="dataOwnerContinent-error" />
              </FormItem>
            )}
          />
          </div>
          <div className="grid max-w-lg gap-1">
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
                  disabled={mutation.isPending || mutation.isSuccess}
                  onChange={field.onChange}
                  value={field.value}
                />

                {dictionary.dataSet.hints.dataSetIndustry ? (
                  <FormDescription>
                    {dictionary.dataSet.hints.dataSetIndustry}
                  </FormDescription>
                ) : null}

                <FormMessage data-testid="dataSetIndustry-error" />
              </FormItem>
            )}
          />
          </div>
          <div className="grid max-w-lg gap-1">
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
                  disabled={mutation.isPending || mutation.isSuccess}
                  onChange={field.onChange}
                  value={field.value}
                />

                {dictionary.dataSet.hints.dataOwnerRelation ? (
                  <FormDescription>
                    {dictionary.dataSet.hints.dataOwnerRelation}
                  </FormDescription>
                ) : null}

                <FormMessage data-testid="dataOwnerRelation-error" />
              </FormItem>
            )}
          />
          </div>
          <div className="grid max-w-lg gap-1">
            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    {dictionary.dataSet.fields.description}
                  </FormLabel>

                  <Textarea
                    disabled={mutation.isPending || mutation.isSuccess}
                    {...field}
                  />

                  {dictionary.dataSet.hints.description ? (
                    <FormDescription>
                      {dictionary.dataSet.hints.description}
                    </FormDescription>
                  ) : null}

                  <FormMessage data-testid="description-error" />
                </FormItem>
              )}
            />
          </div>
          <div className="grid max-w-lg gap-1">
            <FormField
              control={form.control}
              name="website"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    {dictionary.dataSet.fields.website}
                  </FormLabel>

                  <Input
                    disabled={mutation.isPending || mutation.isSuccess}
                    {...field}
                  />

                  {dictionary.dataSet.hints.website ? (
                    <FormDescription>
                      {dictionary.dataSet.hints.website}
                    </FormDescription>
                  ) : null}

                  <FormMessage data-testid="website-error" />
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
                    {dictionary.dataSet.fields.clientAddress}
                  </FormLabel>

                  <Input
                    disabled={mutation.isPending || mutation.isSuccess}
                    {...field}
                  />

                  {dictionary.dataSet.hints.clientAddress ? (
                    <FormDescription>
                      {dictionary.dataSet.hints.clientAddress}
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
              name="metadataUpload"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    {dictionary.dataSet.fields.metadataUpload}
                  </FormLabel>

                  <div>
                    <FilesInput
                      onChange={field.onChange}
                      value={field.value}
                      dictionary={dictionary}
                      storage={storage.dataSetMetadataUpload}
                      disabled={mutation.isPending || mutation.isSuccess}
                    />
                  </div>

                  {dictionary.dataSet.hints.metadataUpload ? (
                    <FormDescription>
                      {dictionary.dataSet.hints.metadataUpload}
                    </FormDescription>
                  ) : null}

                  <FormMessage data-testid="metadataUpload-error" />
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
