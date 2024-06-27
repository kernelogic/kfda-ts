import { roles } from 'src/features/roles';
import { storage } from 'src/features/storage';

export const dataSourcePermissions = {
  dataSourceImport: {
    id: 'dataSourceImport',
    allowedRoles: [roles.admin],
  },

  dataSourceCreate: {
    id: 'dataSourceCreate',
    allowedRoles: [roles.admin],
    allowedStorage: [],
  },

  dataSourceUpdate: {
    id: 'dataSourceUpdate',
    allowedRoles: [roles.admin],
    allowedStorage: [],
  },

  dataSourceRead: {
    id: 'dataSourceRead',
    allowedRoles: [roles.admin, roles.custom],
  },

  dataSourceAutocomplete: {
    id: 'dataSourceAutocomplete',
    allowedRoles: [roles.admin, roles.custom],
  },

  dataSourceDestroy: {
    id: 'dataSourceDestroy',
    allowedRoles: [roles.admin],
  },
};
