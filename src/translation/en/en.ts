const dictionary = {
  

  projectName: 'Project',

  shared: {
    yes: 'Yes',
    no: 'No',
    cancel: 'Cancel',
    save: 'Save',
    clear: 'Clear',
    decline: 'Decline',
    accept: 'Accept',
    dashboard: 'Dashboard',
    new: 'New',
    searchNotFound: 'Nothing found.',
    searchPlaceholder: 'Search...',
    selectPlaceholder: 'Select an option',
    datePlaceholder: 'Pick a date',
    timePlaceholder: 'Pick a time',
    dateFormat: 'MMM DD, YYYY',
    timeFormat: 'hh:mma',
    datetimeFormat: 'MMM DD, YYYY hh:mma',
    tagsPlaceholder: 'Type and press enter to add',
    edit: 'Edit',
    delete: 'Delete',
    openMenu: 'Open menu',
    submit: 'Submit',
    search: 'Search',
    reset: 'Reset',
    min: 'Min',
    max: 'Max',
    view: 'View',
    copiedToClipboard: 'Copied to clipboard',
    exportToCsv: 'Export to CSV',
    import: 'Import',
    pause: 'Pause',
    discard: 'Discard',
    preferences: 'Preferences',
    session: 'Session',
    deleted: 'Deleted',
    remove: 'Remove',
    startDate: 'Start date',
    endDate: 'End date',

    importer: {
      importHashAlreadyExists: 'Data has already been imported',
      title: 'Import CSV File',
      menu: 'Import CSV File',
      line: 'Line',
      status: 'Status',
      pending: 'Pending',
      success: 'Imported',
      error: 'Error',
      total: `{0} imported, {1} pending and {2} with error`,
      importedMessage: `Processed {0} of {1}.`,
      noValidRows: 'There are no valid rows.',
      noNavigateAwayMessage:
        'Do not navigate away from this page or import will be stopped.',
      completed: {
        success: 'Import completed. All rows were successfully imported.',
        someErrors:
          'Processing completed, but some rows were unable to be imported.',
        allErrors: 'Import failed. There are no valid rows.',
      },
      form: {
        downloadTemplate: 'Download the template',
      },
      list: {
        newConfirm: 'Are you sure?',
        discardConfirm: 'Are you sure? Non-imported data will be lost.',
      },
      errors: {
        invalidFileEmpty: 'The file is empty',
        invalidFileCsv: 'Only CSV (.csv) files are allowed',
        invalidFileUpload:
          'Invalid file. Make sure you are using the last version of the template.',
        importHashRequired: 'Import hash is required',
        importHashExistent: 'Data has already been imported',
      },
    },

    dataTable: {
      filters: 'Filters',
      noResults: 'No results found.',
      viewOptions: 'View',
      toggleColumns: 'Toggle Columns',
      actions: 'Actions',

      sortAscending: 'Asc',
      sortDescending: 'Desc',
      hide: 'Hide',

      selectAll: 'Select All',
      selectRow: 'Select Row',
      paginationTotal: 'Total: {0} row(s)',
      paginationSelected: '{0} row(s) selected.',
      paginationRowsPerPage: 'Rows per page',
      paginationCurrent: `Page {0} of {1}`,
      paginationGoToFirst: 'Go to first page',
      paginationGoToPrevious: 'Go to previous page',
      paginationGoToNext: 'Go to next page',
      paginationGoToLast: 'Go to last page',
    },

    locales: {
      en: 'English',
      es: 'Spanish',
      de: 'German',
      'pt-BR': 'Português (Brasil)',
    },

    localeSwitcher: {
      searchPlaceholder: 'Search language...',
      title: 'Language',
      placeholder: 'Select a Language',
      searchEmpty: 'No language found.',
    },

    theme: {
      toggle: 'Theme',
      light: 'Light',
      dark: 'Dark',
      system: 'System',
    },

    errors: {
      cannotDeleteReferenced: `Cannot delete {0} because it's referenced by one or more {1}.`,
      timezone: 'Invalid timezone',
      required: `{0} is a required field`,
      invalid: `{0} is invalid`,
      dateFuture: `{0} must be in the future`,
      unknown: 'An error occurred',
      unique: `{0} must be unique`,
    },
  },

  apiKey: {
    docs: {
      menu: 'API Docs',
    },
    form: {
      addAll: 'Add All',
    },
    edit: {
      menu: 'Edit API Key',
      title: 'Edit API Key',
      success: 'API Key successfully updated',
    },
    new: {
      menu: 'New API Key',
      title: 'New API Key',
      success: 'API Key successfully created',
      text: `Save your API key! For security reasons you'll be able to see the API key only once.`,
      subtext: `You must add it to the Authorization header of your API calls.`,
      backToApiKeys: 'Back to API Keys',
    },
    list: {
      menu: 'API Keys',
      title: 'API Keys',
      viewActivity: 'View Activity',
      noResults: 'No API keys found.',
    },
    destroy: {
      confirmTitle: 'Delete API Key?',
      success: 'API Key successfully deleted',
    },
    enumerators: {
      status: {
        active: 'Active',
        disabled: 'Disabled',
        expired: 'Expired',
      },
    },
    fields: {
      apiKey: 'API Key',
      membership: 'User',
      name: 'Name',
      keyPrefix: 'Key Prefix',
      key: 'Key',
      scopes: 'Scopes',
      expiresAt: 'Expires At',
      status: 'Status',
      createdAt: 'Created At',
      disabled: 'Disabled',
    },
    disabledTooltip: `Disabled at {0}.`,
    errors: {
      invalidScopes: "scopes must match user's role",
    },
  },

  file: {
    button: 'Upload',
    delete: 'Delete',
    errors: {
      formats: `Invalid format. Must be one of: {0}.`,
      notImage: `File must be an image`,
      tooBig: `File is too big. Current size is {0} bytes, maximum size is {1} bytes`,
    },
  },

  auth: {
    signIn: {
      oauthError:
        'Not possible to sign-in with this provider. Please use another one.',
      title: 'Sign In',
      button: 'Sign In with Email',
      success: 'Successfully signed in',
      email: 'Email',
      password: 'Password',
      socialHeader: 'Or continue with',
      facebook: 'Facebook',
      github: 'GitHub',
      google: 'Google',
      passwordResetRequestLink: 'Forgot Password?',
      signUpLink: `Don't have an account? Create one`,
    },
    signUp: {
      title: 'Sign Up',
      signInLink: 'Already have an account? Sign in',
      button: 'Sign Up',
      success: 'Successfully signed up',
      email: 'Email',
      password: 'Password',
    },
    verifyEmailRequest: {
      title: 'Resend email verification',
      button: 'Resend email verification',
      message: 'Please confirm your email at <strong>{0}</strong> to continue.',
      success: 'Email verification successfully sent!',
    },
    verifyEmailConfirm: {
      title: 'Verify your email',
      success: 'Email successfully verified.',
      loadingMessage: 'Just a moment, your email is being verified...',
    },
    passwordResetRequest: {
      title: 'Forgot Password',
      signInLink: 'Cancel',
      button: 'Send password reset email',
      email: 'Email',
      success: 'Password reset email successfully sent',
    },
    passwordResetConfirm: {
      title: 'Reset Password',
      signInLink: 'Cancel',
      button: 'Reset Password',
      password: 'Password',
      success: 'Password successfully changed',
    },
    noPermissions: {
      title: 'Waiting for Permissions',
      message:
        'You have no permissions yet. Please wait for the admin to grant you privileges.',
    },
    invitation: {
      title: 'Invitations',
      success: 'Invitation successfully accepted',
      acceptWrongEmail: 'Accept Invitation With This Email',
      loadingMessage: 'Just a moment, we are accepting the invitation...',
      invalidToken: 'Expired or invalid invitation token.',
    },
    tenant: {
      title: 'Workspaces',
      create: {
        name: 'Workspace Name',
        success: 'Workspace successfully created',
        button: 'Create Workspace',
      },
      select: {
        tenant: 'Select a Workspace',
        joinSuccess: 'Successfully joined workspace',
        select: 'Select Workspace',
        acceptInvitation: 'Accept Invitation',
      },
    },
    passwordChange: {
      title: 'Password Change',
      subtitle: 'Please provide your old and new passwords.',
      menu: 'Password Change',
      oldPassword: 'Old Password',
      newPassword: 'New Password',
      newPasswordConfirmation: 'New Password Confirmation',
      button: 'Save Password',
      success: 'Password changed successfully saved',
      mustMatch: 'Passwords must match',
      cancel: 'Cancel',
    },
    profile: {
      title: 'Profile',
      subtitle:
        'Your profile will be shared among other users in your workspace.',
      menu: 'Profile',
      firstName: 'First Name',
      lastName: 'Last Name',
      avatars: 'Avatar',
      button: 'Save Profile',
      success: 'Profile successfully saved',
      cancel: 'Cancel',
    },
    profileOnboard: {
      title: 'Profile',
      firstName: 'First Name',
      lastName: 'Last Name',
      avatars: 'Avatar',
      button: 'Save Profile',
      success: 'Profile successfully saved',
    },
    signOut: {
      menu: 'Sign Out',
      button: 'Sign Out',
      title: 'Sign Out',
      loading: `You're being signed out...`,
    },
    errors: {
      invalidApiKey: 'Invalid or expired API Key',
      emailNotFound: 'Email not found',
      userNotFound: "Sorry, we don't recognize your credentials",
      wrongPassword: "Sorry, we don't recognize your credentials",
      weakPassword: 'This password is too weak',
      emailAlreadyInUse: 'Email is already in use',
      invalidPasswordResetToken:
        'Password reset link is invalid or has expired',
      invalidVerifyEmailToken:
        'Email verification link is invalid or has expired',
      wrongOldPassword: 'The old password is wrong',
    },
  },

  tenant: {
    switcher: {
      title: 'Workspaces',
      placeholder: 'Select a Workspace',
      searchPlaceholder: 'Search workspace...',
      searchEmpty: 'No workspace found.',
      create: 'Create Workspace',
    },

    invite: {
      title: `Accept Invitation to {0}`,
      message: `You've been invited to {0}. You may choose to accept or decline.`,
    },

    form: {
      name: 'Name',

      new: {
        title: 'Create Workspace',
        success: 'Workspace successfully created',
      },

      edit: {
        title: 'Workspace Settings',
        success: 'Workspace successfully updated',
      },
    },

    destroy: {
      success: 'Workspace successfully deleted',
      confirmTitle: 'Delete Workspace?',
      confirmDescription:
        'Are you sure you want to delete the {0} workspace? This action is irreversible!',
    },
  },

  membership: {
    dashboardCard: {
      title: 'Users',
    },

    view: {
      title: 'View User',
    },

    showActivity: 'Activity',

    list: {
      menu: 'Users',
      title: 'Users',
      noResults: 'No users found.',
    },

    export: {
      success: 'Users successfully exported',
    },

    edit: {
      menu: 'Edit User',
      title: 'Edit User',
      success: 'User successfully updated',
    },

    new: {
      menu: 'New User',
      title: 'New User',
      success: 'User successfully created',
    },

    destroyMany: {
      success: 'User(s) successfully deleted',
      noSelection: 'You must select at least one user to delete.',
      confirmTitle: 'Delete User(s)?',
      confirmDescription:
        'Are you sure you want to delete the {0} selected user(s)?',
    },

    destroy: {
      success: 'User successfully deleted',
      noSelection: 'You must select at least one user to delete.',
      confirmTitle: 'Delete User?',
    },

    resendInvitationEmail: {
      button: 'Resend Invitation Email',
      success: 'Invitation email successfully sent',
    },

    fields: {
      avatars: 'Avatar',
      fullName: 'Full Name',
      firstName: 'First Name',
      lastName: 'Last Name',
      email: 'Email',
      roles: 'Roles',
      status: 'Status',
    },

    enumerators: {
      roles: {
        admin: 'Admin',
        custom: 'Custom',
      },

      status: {
        invited: 'Invited',
        active: 'Active',
        disabled: 'Disabled',
      },
    },

    errors: {
      cannotRemoveSelfAdminRole: "You can't remove your own admin role",
      cannotDeleteSelf: "You can't remove your own membership",
      notInvited: 'You are not invited',
      invalidStatus: `Invalid status: {0}`,
      alreadyMember: `{0} is already a member`,
      notSameEmail: `This invitation was sent to {0} but you're signed in as {1}. Do you want to continue?`,
    },
  },

  subscription: {
    menu: 'Subscription',
    title: 'Plans and Pricing',
    current: 'Current Plan',

    subscribe: 'Subscribe',
    manage: 'Manage',
    notPlanUser: 'You are not the manager of this subscription.',
    cancelAtPeriodEnd: 'This plan will be canceled at the end of the period.',

    plans: {
      free: {
        title: 'Free',
        price: '$0',
        pricingPeriod: '/month',
        features: {
          first: 'First feature description',
          second: 'Second feature description',
          third: 'Third feature description',
        },
      },
      basic: {
        title: 'Basic',
        price: '$10',
        pricingPeriod: '/month',
        features: {
          first: 'First feature description',
          second: 'Second feature description',
          third: 'Third feature description',
        },
      },
      enterprise: {
        title: 'Enterprise',
        price: '$50',
        pricingPeriod: '/month',
        features: {
          first: 'First feature description',
          second: 'Second feature description',
          third: 'Third feature description',
        },
      },
    },

    errors: {
      disabled: 'Subscriptions are disabled in this platform',
      alreadyExistsActive: 'There is an active subscription already',
      stripeNotConfigured: 'Stripe ENV vars are missing',
    },
  },

  dataSource: {
    label: 'DataSource',

    dashboardCard: {
      title: 'DataSources',
    },

    list: {
      menu: 'DataSources',
      title: 'DataSources',
      noResults: 'No datasources found.',
    },

    export: {
      success: 'DataSources successfully exported',
    },

    new: {
      menu: 'New DataSource',
      title: 'New DataSource',
      success: 'DataSource successfully created',
    },

    view: {
      title: 'View DataSource',
    },

    edit: {
      menu: 'Edit DataSource',
      title: 'Edit DataSource',
      success: 'DataSource successfully updated',
    },

    destroyMany: {
      success: 'DataSource(s) successfully deleted',
      noSelection: 'You must select at least one datasource to delete.',
      confirmTitle: 'Delete DataSource(s)?',
      confirmDescription:
        'Are you sure you want to delete the {0} selected datasource(s)?',
    },

    destroy: {
      success: 'DataSource successfully deleted',
      noSelection: 'You must select at least one datasource to delete.',
      confirmTitle: 'Delete DataSource?',
    },

    fields: {
      name: 'Name',
      sourceType: 'Source Type',
      sizeInTiB: 'Size in TiB',
      sourceURL: 'Source URL',
      dataset: 'Dataset',
      createdByMembership: 'Created By',
      updatedByMembership: 'Updated By',
      createdAt: 'Created at',
      updatedAt: 'Updated at',
    },

    hints: {
      name: '',
      sourceType: '',
      sizeInTiB: '',
      sourceURL: 'Can be the URI s3://bucketname or a descriptive URL for other data sources',
      dataset: '',
    },

    enumerators: {
      sourceType: {
        S3: 'S3',
        Other: 'Other',
      },
    },
  },

  dataSet: {
    label: 'DataSet',

    dashboardCard: {
      title: 'DataSets',
    },

    list: {
      menu: 'DataSets',
      title: 'DataSets',
      noResults: 'No datasets found.',
    },

    export: {
      success: 'DataSets successfully exported',
    },

    new: {
      menu: 'New DataSet',
      title: 'New DataSet',
      success: 'DataSet successfully created',
    },

    view: {
      title: 'View DataSet',
    },

    edit: {
      menu: 'Edit DataSet',
      title: 'Edit DataSet',
      success: 'DataSet successfully updated',
    },

    destroyMany: {
      success: 'DataSet(s) successfully deleted',
      noSelection: 'You must select at least one dataset to delete.',
      confirmTitle: 'Delete DataSet(s)?',
      confirmDescription:
        'Are you sure you want to delete the {0} selected dataset(s)?',
    },

    destroy: {
      success: 'DataSet successfully deleted',
      noSelection: 'You must select at least one dataset to delete.',
      confirmTitle: 'Delete DataSet?',
    },

    fields: {
      name: 'Name',
      dataOwnerName: 'Data Owner Name',
      dataOwnerCountry: 'Data Owner Country',
      dataOwnerContinent: 'Data Owner Continent',
      dataSetIndustry: 'Data Set Industry',
      dataOwnerRelation: 'Data Owner Relation',
      description: 'Description',
      website: 'Website',
      clientAddress: 'Client Address',
      metadataUpload: 'Metadata Upload',
      datasources: 'Datasources',
      datacaps: 'Datacaps',
      createdByMembership: 'Created By',
      updatedByMembership: 'Updated By',
      createdAt: 'Created at',
      updatedAt: 'Updated at',
    },

    hints: {
      name: '',
      dataOwnerName: '',
      dataOwnerCountry: '',
      dataOwnerContinent: '',
      dataSetIndustry: '',
      dataOwnerRelation: 'Your role related to the data set',
      description: '',
      website: '',
      clientAddress: 'Filecoin client address to receive datacap (For reference only, not final)',
      metadataUpload: 'Upload your private dataset metadata list for verification (Feature under construction, ignore for now)',
      datasources: '',
      datacaps: '',
    },

    enumerators: {
      dataOwnerContinent: {
        Asia: 'Asia',
        Africa: 'Africa',
        North_America: 'North_America',
        South_America: 'South_America',
        Antarctica: 'Antarctica',
        Europe: 'Europe',
        Australia: 'Australia',
      },

      dataSetIndustry: {
        LifeScience_HealthCare: 'LifeScience_HealthCare',
        Arts_Recreation: 'Arts_Recreation',
        Education_Training: 'Education_Training',
        Environment: 'Environment',
        Web3_Crypto: 'Web3_Crypto',
        IT_TechnologyServices: 'IT_TechnologyServices',
        ProfessionalServices: 'ProfessionalServices',
        Government: 'Government',
        NotForProfit: 'NotForProfit',
        FinancialServices: 'FinancialServices',
        Utilities: 'Utilities',
        Resources_Agriculture_Fisheries: 'Resources_Agriculture_Fisheries',
        Construction_Property_RealEstate: 'Construction_Property_RealEstate',
        Information_Media_Telecommunications: 'Information_Media_Telecommunications',
        TransportServices: 'TransportServices',
        Other: 'Other',
      },

      dataOwnerRelation: {
        Data_Owner: 'Data_Owner',
        Data_Preparer: 'Data_Preparer',
        Storage_Provider: 'Storage_Provider',
        Other: 'Other',
      },
    },
  },

  dataCap: {
    label: 'DataCap',

    dashboardCard: {
      title: 'DataCaps',
    },

    list: {
      menu: 'DataCaps',
      title: 'DataCaps',
      noResults: 'No datacaps found.',
    },

    export: {
      success: 'DataCaps successfully exported',
    },

    new: {
      menu: 'New DataCap',
      title: 'New DataCap',
      success: 'DataCap successfully created',
    },

    view: {
      title: 'View DataCap',
    },

    edit: {
      menu: 'Edit DataCap',
      title: 'Edit DataCap',
      success: 'DataCap successfully updated',
    },

    destroyMany: {
      success: 'DataCap(s) successfully deleted',
      noSelection: 'You must select at least one datacap to delete.',
      confirmTitle: 'Delete DataCap(s)?',
      confirmDescription:
        'Are you sure you want to delete the {0} selected datacap(s)?',
    },

    destroy: {
      success: 'DataCap successfully deleted',
      noSelection: 'You must select at least one datacap to delete.',
      confirmTitle: 'Delete DataCap?',
    },

    fields: {
      tranche: 'Tranche',
      clientAddress: 'Client Address',
      amountInTiB: 'Amount in TiB',
      filPerTiB: 'Fil per TiB',
      filTotal: 'Fil Total',
      paymentAddress: 'Payment Address',
      paymentTx: 'Payment Tx',
      grantTx: 'Grant Tx',
      status: 'Status',
      dataset: 'Dataset',
      createdByMembership: 'Created By',
      updatedByMembership: 'Updated By',
      createdAt: 'Created at',
      updatedAt: 'Updated at',
    },

    hints: {
      tranche: 'Sequence of datacap allocations',
      clientAddress: 'The final client address to receive datacap, cannot be changed after granted',
      amountInTiB: 'Amount of datacap in this tranche. It should be less than half of the allocator\'s balance. If the balance is less than 100TiB, you can request all of it.',
      filPerTiB: '',
      filTotal: '',
      paymentAddress: 'Please send Fil payment to this address for this tranche',
      paymentTx: 'Payment transaction hash of the payment',
      grantTx: 'Datacap grant transaction hash',
      status: '',
      dataset: '',
    },

    enumerators: {
      status: {
        Pending: 'Pending',
        Paid: 'Paid',
        Allocated: 'Allocated',
        Rejected: 'Rejected',
      },
    },
  },

  auditLog: {
    list: {
      menu: 'Audit Logs',
      title: 'Audit Logs',
      noResults: 'No audit logs found.',
    },

    changesDialog: {
      title: 'Audit Log',
      changes: 'Changes',
      noChanges: 'There are no changes in this log.',
    },

    export: {
      success: 'Audit Logs successfully exported',
    },

    fields: {
      timestamp: 'Date',
      entityName: 'Entity',
      entityNames: 'Entities',
      entityId: 'Entity ID',
      operation: 'Operation',
      operations: 'Operations',
      membership: 'User',
      apiKey: 'API Key',
      apiEndpoint: 'API Endpoint',
      apiHttpResponseCode: 'API Status',
      transactionId: 'Transaction ID',
    },

    enumerators: {
      operation: {
        SI: 'Sign In',
        SO: 'Sign Out',
        SU: 'Sign Up',
        PRR: 'Password Reset Request',
        PRC: 'Password Reset Confirm',
        PC: 'Password Change',
        VER: 'Verify Email Request',
        VEC: 'Verify Email Confirm',
        C: 'Create',
        U: 'Update',
        D: 'Delete',
        AG: 'API Get',
        APO: 'API Post',
        APU: 'API Put',
        AD: 'API Delete',
      },
    },

    dashboardCard: {
      activityChart: 'Activity',
      activityList: 'Recent Activity',
    },

    readableOperations: {
      SI: '{0} signed in',
      SU: '{0} registered',
      PRR: '{0} requested to reset the password',
      PRC: '{0} confirmed password reset',
      PC: '{0} changed the password',
      VER: '{0} requested to verify the email',
      VEC: '{0} verified the email',
      C: '{0} created {1} {2}',
      U: '{0} updated {1} {2}',
      D: '{0} deleted {1} {2}',
    },
  },

  recaptcha: {
    errors: {
      disabled:
        'reCAPTCHA is disabled in this platform. Skipping verification.',
      invalid: 'Invalid reCAPTCHA',
    },
  },

  emails: {
    passwordResetEmail: {
      subject: `Reset your password for {0}`,
      content: `<p>Hello,</p> <p> Follow this link to reset your {0} password for your account. </p> <p><a href="{1}">{1}</a></p> <p> If you didn’t ask to reset your password, you can ignore this email. </p> <p>Thanks,</p> <p>Your {0} team</p>`,
    },
    verifyEmailEmail: {
      subject: `Verify your email for {0}`,
      content: `<p>Hello,</p><p>Follow this link to verify your email address.</p><p><a href="{1}">{1}</a></p><p>If you didn’t ask to verify this address, you can ignore this email. </p> <p>Thanks,</p> <p>Your {0} team</p>`,
    },
    invitationEmail: {
      singleTenant: {
        subject: `You've been invited to {0}`,
        content: `<p>Hello,</p> <p>You've been invited to {0}.</p> <p>Follow this link to register.</p> <p><a href="{1}">{1}</a></p> <p>Thanks,</p> <p>Your {0} team</p>`,
      },
      multiTenant: {
        subject: `You've been invited to {1} at {0}`,
        content: `<p>Hello,</p> <p>You've been invited to {2}.</p> <p>Follow this link to register.</p> <p><a href="{1}">{1}</a></p> <p>Thanks,</p> <p>Your {0} team</p>`,
      },
    },

    errors: {
      emailNotConfigured: 'Email ENV vars are missing',
    },
  },
};

export default dictionary;
