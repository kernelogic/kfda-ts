import { extendZodWithOpenApi } from '@asteasolutions/zod-to-openapi';
import { DataCap, Membership } from '@prisma/client';
import { importerInputSchema } from 'src/shared/schemas/importerSchemas';
import { orderBySchema } from 'src/shared/schemas/orderBySchema';
import { z } from 'zod';
import { objectToUuidSchema, objectToUuidSchemaOptional } from 'src/shared/schemas/objectToUuidSchema';
import { dateTimeSchema, dateTimeOptionalSchema } from 'src/shared/schemas/dateTimeSchema';
import { numberCoerceSchema, numberOptionalCoerceSchema } from 'src/shared/schemas/numberCoerceSchema';
import { dataCapEnumerators } from 'src/features/dataCap/dataCapEnumerators';
import { DataSet } from '@prisma/client';

extendZodWithOpenApi(z);

export const dataCapFindSchema = z.object({
  id: z.string(),
});

export const dataCapFilterFormSchema = z
  .object({
    trancheRange: z.array(z.coerce.number()).max(2),
    clientAddress: z.string(),
    amountInTiBRange: z.array(z.coerce.number()).max(2),
    filPerTiBRange: z.array(z.coerce.number()).max(2),
    filTotalRange: z.array(z.coerce.number()).max(2),
    paymentAddress: z.string(),
    paymentTx: z.string(),
    grantTx: z.string(),
    status: z.nativeEnum(dataCapEnumerators.status).nullable().optional(),
    dataset: z.any(),
    createdByMembership: z.any(),
    updatedByMembership: z.any(),
    createdAtRange: z.array(dateTimeOptionalSchema).max(2),
    updatedAtRange: z.array(dateTimeOptionalSchema).max(2),
  })
  .partial();

export const dataCapFilterInputSchema = dataCapFilterFormSchema
  .merge(
    z.object({
      dataset: objectToUuidSchemaOptional,
      createdByMembership: objectToUuidSchemaOptional,
      updatedByMembership:objectToUuidSchemaOptional,
    }),
  )
  .partial();

export const dataCapFindManyInputSchema = z.object({
  filter: dataCapFilterInputSchema.partial().optional(),
  orderBy: orderBySchema.default({ updatedAt: 'desc' }),
  skip: z.coerce.number().optional(),
  take: z.coerce.number().optional(),
});

export const dataCapDestroyManyInputSchema = z.object({
  ids: z.array(z.string()),
});

export const dataCapAutocompleteInputSchema = z.object({
  search: z.string().trim().optional(),
  exclude: z.array(z.string().uuid()).optional(),
  take: z.coerce.number().optional(),
  orderBy: orderBySchema.default({ tranche: 'asc' }),
});

export const dataCapAutocompleteOutputSchema = z.object({
  id: z.string(),
  tranche: z.string(),
});

export const dataCapCreateInputSchema = z.object({
  tranche: numberCoerceSchema(z.number().int().min(1).max(99)),
  clientAddress: z.string().trim(),
  amountInTiB: numberOptionalCoerceSchema(z.number().int().min(1).nullable().optional()),
  filPerTiB: numberOptionalCoerceSchema(z.number().nullable().optional()),
  filTotal: numberOptionalCoerceSchema(z.number().nullable().optional()),
  paymentAddress: z.string().trim().nullable().optional(),
  paymentTx: z.string().trim().nullable().optional(),
  grantTx: z.string().trim().nullable().optional(),
  status: z.nativeEnum(dataCapEnumerators.status).nullable().optional(),
  dataset: objectToUuidSchema,
  importHash: z.string().optional(),
});

export const dataCapImportInputSchema =
  dataCapCreateInputSchema.merge(importerInputSchema);

export const dataCapImportFileSchema = z
  .object({
    tranche: z.string(),
    clientAddress: z.string(),
    amountInTiB: z.string(),
    filPerTiB: z.string(),
    filTotal: z.string(),
    paymentAddress: z.string(),
    paymentTx: z.string(),
    grantTx: z.string(),
    status: z.string(),
    dataset: z.string(),
  })
  .partial();

export const dataCapUpdateParamsInputSchema = z.object({
  id: z.string(),
});

export const dataCapUpdateBodyInputSchema =
  dataCapCreateInputSchema.partial();

export interface DataCapWithRelationships extends DataCap {
  dataset?: DataSet;
  createdByMembership?: Membership;
  updatedByMembership?: Membership;
}
