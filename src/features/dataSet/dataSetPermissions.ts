import { roles } from 'src/features/roles';
import { storage } from 'src/features/storage';

export const dataSetPermissions = {
  dataSetImport: {
    id: 'dataSetImport',
    allowedRoles: [roles.admin],
  },

  dataSetCreate: {
    id: 'dataSetCreate',
    allowedRoles: [roles.admin],
    allowedStorage: [storage.dataSetMetadataUpload.id],
  },

  dataSetUpdate: {
    id: 'dataSetUpdate',
    allowedRoles: [roles.admin],
    allowedStorage: [storage.dataSetMetadataUpload.id],
  },

  dataSetRead: {
    id: 'dataSetRead',
    allowedRoles: [roles.admin, roles.custom],
  },

  dataSetAutocomplete: {
    id: 'dataSetAutocomplete',
    allowedRoles: [roles.admin, roles.custom],
  },

  dataSetDestroy: {
    id: 'dataSetDestroy',
    allowedRoles: [roles.admin],
  },
};
