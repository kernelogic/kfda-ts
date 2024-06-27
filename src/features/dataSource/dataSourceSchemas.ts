import { extendZodWithOpenApi } from '@asteasolutions/zod-to-openapi';
import { DataSource, Membership } from '@prisma/client';
import { importerInputSchema } from 'src/shared/schemas/importerSchemas';
import { orderBySchema } from 'src/shared/schemas/orderBySchema';
import { z } from 'zod';
import { objectToUuidSchema, objectToUuidSchemaOptional } from 'src/shared/schemas/objectToUuidSchema';
import { dateTimeSchema, dateTimeOptionalSchema } from 'src/shared/schemas/dateTimeSchema';
import { dataSourceEnumerators } from 'src/features/dataSource/dataSourceEnumerators';
import { numberCoerceSchema, numberOptionalCoerceSchema } from 'src/shared/schemas/numberCoerceSchema';
import { DataSet } from '@prisma/client';

extendZodWithOpenApi(z);

export const dataSourceFindSchema = z.object({
  id: z.string(),
});

export const dataSourceFilterFormSchema = z
  .object({
    name: z.string(),
    sourceType: z.nativeEnum(dataSourceEnumerators.sourceType).nullable().optional(),
    sizeInTiBRange: z.array(z.coerce.number()).max(2),
    dataset: z.any(),
    createdByMembership: z.any(),
    updatedByMembership: z.any(),
    createdAtRange: z.array(dateTimeOptionalSchema).max(2),
    updatedAtRange: z.array(dateTimeOptionalSchema).max(2),
  })
  .partial();

export const dataSourceFilterInputSchema = dataSourceFilterFormSchema
  .merge(
    z.object({
      dataset: objectToUuidSchemaOptional,
      createdByMembership: objectToUuidSchemaOptional,
      updatedByMembership:objectToUuidSchemaOptional,
    }),
  )
  .partial();

export const dataSourceFindManyInputSchema = z.object({
  filter: dataSourceFilterInputSchema.partial().optional(),
  orderBy: orderBySchema.default({ updatedAt: 'desc' }),
  skip: z.coerce.number().optional(),
  take: z.coerce.number().optional(),
});

export const dataSourceDestroyManyInputSchema = z.object({
  ids: z.array(z.string()),
});

export const dataSourceAutocompleteInputSchema = z.object({
  search: z.string().trim().optional(),
  exclude: z.array(z.string().uuid()).optional(),
  take: z.coerce.number().optional(),
  orderBy: orderBySchema.default({ name: 'asc' }),
});

export const dataSourceAutocompleteOutputSchema = z.object({
  id: z.string(),
  name: z.string(),
});

export const dataSourceCreateInputSchema = z.object({
  name: z.string().trim(),
  sourceType: z.nativeEnum(dataSourceEnumerators.sourceType),
  sizeInTiB: numberCoerceSchema(z.number().int().min(1).max(999999)),
  sourceURL: z.string().trim().nullable().optional(),
  dataset: objectToUuidSchema,
  importHash: z.string().optional(),
});

export const dataSourceImportInputSchema =
  dataSourceCreateInputSchema.merge(importerInputSchema);

export const dataSourceImportFileSchema = z
  .object({
    name: z.string(),
    sourceType: z.string(),
    sizeInTiB: z.string(),
    sourceURL: z.string(),
    dataset: z.string(),
  })
  .partial();

export const dataSourceUpdateParamsInputSchema = z.object({
  id: z.string(),
});

export const dataSourceUpdateBodyInputSchema =
  dataSourceCreateInputSchema.partial();

export interface DataSourceWithRelationships extends DataSource {
  dataset?: DataSet;
  createdByMembership?: Membership;
  updatedByMembership?: Membership;
}
