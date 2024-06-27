import { roles } from 'src/features/roles';
import { storage } from 'src/features/storage';

export const dataCapPermissions = {
  dataCapImport: {
    id: 'dataCapImport',
    allowedRoles: [roles.admin],
  },

  dataCapCreate: {
    id: 'dataCapCreate',
    allowedRoles: [roles.admin],
    allowedStorage: [],
  },

  dataCapUpdate: {
    id: 'dataCapUpdate',
    allowedRoles: [roles.admin],
    allowedStorage: [],
  },

  dataCapRead: {
    id: 'dataCapRead',
    allowedRoles: [roles.admin, roles.custom],
  },

  dataCapAutocomplete: {
    id: 'dataCapAutocomplete',
    allowedRoles: [roles.admin, roles.custom],
  },

  dataCapDestroy: {
    id: 'dataCapDestroy',
    allowedRoles: [roles.admin],
  },
};
