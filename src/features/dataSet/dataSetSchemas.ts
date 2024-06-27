import { extendZodWithOpenApi } from '@asteasolutions/zod-to-openapi';
import { DataSet, Membership } from '@prisma/client';
import { importerInputSchema } from 'src/shared/schemas/importerSchemas';
import { orderBySchema } from 'src/shared/schemas/orderBySchema';
import { z } from 'zod';
import { objectToUuidSchema, objectToUuidSchemaOptional } from 'src/shared/schemas/objectToUuidSchema';
import { dateTimeSchema, dateTimeOptionalSchema } from 'src/shared/schemas/dateTimeSchema';
import { dataSetEnumerators } from 'src/features/dataSet/dataSetEnumerators';
import { fileUploadedSchema } from 'src/features/file/fileSchemas';
import { DataSource } from '@prisma/client';
import { DataCap } from '@prisma/client';

extendZodWithOpenApi(z);

export const dataSetFindSchema = z.object({
  id: z.string(),
});

export const dataSetFilterFormSchema = z
  .object({
    name: z.string(),
    dataOwnerName: z.string(),
    dataOwnerCountry: z.string(),
    dataOwnerContinent: z.nativeEnum(dataSetEnumerators.dataOwnerContinent).nullable().optional(),
    dataSetIndustry: z.nativeEnum(dataSetEnumerators.dataSetIndustry).nullable().optional(),
    dataOwnerRelation: z.nativeEnum(dataSetEnumerators.dataOwnerRelation).nullable().optional(),
    website: z.string(),
    clientAddress: z.string(),
    createdByMembership: z.any(),
    updatedByMembership: z.any(),
    createdAtRange: z.array(dateTimeOptionalSchema).max(2),
    updatedAtRange: z.array(dateTimeOptionalSchema).max(2),
  })
  .partial();

export const dataSetFilterInputSchema = dataSetFilterFormSchema
  .merge(
    z.object({
      createdByMembership: objectToUuidSchemaOptional,
      updatedByMembership:objectToUuidSchemaOptional,
    }),
  )
  .partial();

export const dataSetFindManyInputSchema = z.object({
  filter: dataSetFilterInputSchema.partial().optional(),
  orderBy: orderBySchema.default({ updatedAt: 'desc' }),
  skip: z.coerce.number().optional(),
  take: z.coerce.number().optional(),
});

export const dataSetDestroyManyInputSchema = z.object({
  ids: z.array(z.string()),
});

export const dataSetAutocompleteInputSchema = z.object({
  search: z.string().trim().optional(),
  exclude: z.array(z.string().uuid()).optional(),
  take: z.coerce.number().optional(),
  orderBy: orderBySchema.default({ name: 'asc' }),
});

export const dataSetAutocompleteOutputSchema = z.object({
  id: z.string(),
  name: z.string(),
});

export const dataSetCreateInputSchema = z.object({
  name: z.string().trim(),
  dataOwnerName: z.string().trim().nullable().optional(),
  dataOwnerCountry: z.string().trim().nullable().optional(),
  dataOwnerContinent: z.nativeEnum(dataSetEnumerators.dataOwnerContinent).nullable().optional(),
  dataSetIndustry: z.nativeEnum(dataSetEnumerators.dataSetIndustry).nullable().optional(),
  dataOwnerRelation: z.nativeEnum(dataSetEnumerators.dataOwnerRelation).nullable().optional(),
  description: z.string().trim().nullable().optional(),
  website: z.string().trim().url().nullable().optional(),
  clientAddress: z.string().trim(),
  metadataUpload: z.array(fileUploadedSchema).optional(),
  importHash: z.string().optional(),
});

export const dataSetImportInputSchema =
  dataSetCreateInputSchema.merge(importerInputSchema);

export const dataSetImportFileSchema = z
  .object({
    name: z.string(),
    dataOwnerName: z.string(),
    dataOwnerCountry: z.string(),
    dataOwnerContinent: z.string(),
    dataSetIndustry: z.string(),
    dataOwnerRelation: z.string(),
    description: z.string(),
    website: z.string(),
    clientAddress: z.string(),
    metadataUpload: z.string().transform((val) => val?.split(' ')?.filter(Boolean) || []),
  })
  .partial();

export const dataSetUpdateParamsInputSchema = z.object({
  id: z.string(),
});

export const dataSetUpdateBodyInputSchema =
  dataSetCreateInputSchema.partial();

export interface DataSetWithRelationships extends DataSet {
  datasources?: DataSource[];
  datacaps?: DataCap[];
  createdByMembership?: Membership;
  updatedByMembership?: Membership;
}
