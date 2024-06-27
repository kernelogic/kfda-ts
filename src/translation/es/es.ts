const dictionary = {
  

  projectName: 'Proyecto',

  shared: {
    yes: 'Sí',
    no: 'No',
    cancel: 'Cancelar',
    save: 'Guardar',
    clear: 'Limpiar',
    decline: 'Rechazar',
    accept: 'Aceptar',
    dashboard: 'Tablero',
    new: 'Nuevo',
    searchNotFound: 'Nada encontrado.',
    searchPlaceholder: 'Buscar...',
    selectPlaceholder: 'Seleccionar una opción',
    datePlaceholder: 'Elegir una fecha',
    timePlaceholder: 'Elegir una hora',
    dateFormat: 'DD MMM, YYYY',
    timeFormat: 'HH:mm',
    datetimeFormat: 'DD MMM, YYYY HH:mm',
    tagsPlaceholder: 'Escriba y presione enter para agregar',
    edit: 'Editar',
    delete: 'Eliminar',
    openMenu: 'Abrir menú',
    submit: 'Enviar',
    search: 'Buscar',
    reset: 'Restablecer',
    min: 'Mín',
    max: 'Máx',
    view: 'Ver',
    copiedToClipboard: 'Copiado al portapapeles',
    exportToCsv: 'Exportar a CSV',
    import: 'Importar',
    pause: 'Pausar',
    discard: 'Descartar',
    preferences: 'Preferencias',
    session: 'Sesión',
    deleted: 'Eliminado',
    remove: 'Remover',
    startDate: 'Fecha de inicio',
    endDate: 'Fecha de finalización',

    importer: {
      importHashAlreadyExists: 'Los datos ya han sido importados',
      title: 'Importar archivo CSV',
      menu: 'Importar archivo CSV',
      line: 'Línea',
      status: 'Estado',
      pending: 'Pendiente',
      success: 'Importado',
      error: 'Error',
      total: `{0} importados, {1} pendientes y {2} con error`,
      importedMessage: `Procesado {0} de {1}.`,
      noValidRows: 'No hay filas válidas.',
      noNavigateAwayMessage:
        'No se aleje de esta página o la importación se detendrá.',
      completed: {
        success:
          'Importación completa. Todas las filas se importaron con éxito.',
        someErrors:
          'Procesamiento completado, pero algunas filas no pudieron ser importadas.',
        allErrors: 'La importación falló. No hay filas válidas.',
      },
      form: {
        downloadTemplate: 'Descargar la plantilla',
      },
      list: {
        newConfirm: '¿Estás seguro?',
        discardConfirm: '¿Estás seguro? Los datos no importados se perderán.',
      },
      errors: {
        invalidFileEmpty: 'El archivo está vacío',
        invalidFileCsv: 'Solo se permiten archivos CSV (.csv)',
        invalidFileUpload:
          'Archivo inválido. Asegúrese de estar utilizando la última versión de la plantilla.',
        importHashRequired: 'Se requiere el hash de importación',
        importHashExistent: 'Los datos ya han sido importados',
      },
    },

    dataTable: {
      filters: 'Filtros',
      noResults: 'No se encontraron resultados.',
      viewOptions: 'Ver',
      toggleColumns: 'Alternar columnas',
      actions: 'Acciones',

      sortAscending: 'Asc',
      sortDescending: 'Desc',
      hide: 'Ocultar',

      selectAll: 'Seleccionar todo',
      selectRow: 'Seleccionar fila',
      paginationTotal: 'Total: {0} fila(s)',
      paginationSelected: '{0} fila(s) seleccionada(s).',
      paginationRowsPerPage: 'Filas por página',
      paginationCurrent: `Página {0} de {1}`,
      paginationGoToFirst: 'Ir a la primera página',
      paginationGoToPrevious: 'Ir a la página anterior',
      paginationGoToNext: 'Ir a la siguiente página',
      paginationGoToLast: 'Ir a la última página',
    },

    locales: {
      en: 'Inglés',
      es: 'Español',
      de: 'Alemán',
      'pt-BR': 'Portugués (Brasil)',
    },

    localeSwitcher: {
      searchPlaceholder: 'Buscar idioma...',
      title: 'Idioma',
      placeholder: 'Seleccionar un idioma',
      searchEmpty: 'No se encontró el idioma.',
    },

    theme: {
      toggle: 'Tema',
      light: 'Claro',
      dark: 'Oscuro',
      system: 'Sistema',
    },

    errors: {
      cannotDeleteReferenced: `No se puede eliminar {0} porque está referenciado por uno o más {1}.`,
      timezone: 'Zona horaria inválida',
      required: `{0} es un campo obligatorio`,
      invalid: `{0} es inválido`,
      dateFuture: `{0} debe estar en el futuro`,
      unknown: 'Ocurrió un error',
      unique: 'El {0} ya existe',
    },
  },

  apiKey: {
    docs: {
      menu: 'Documentación de API',
    },
    form: {
      addAll: 'Añadir Todo',
    },
    edit: {
      menu: 'Editar Clave de API',
      title: 'Editar Clave de API',
      success: 'Clave de API actualizada exitosamente',
    },
    new: {
      menu: 'Nueva Clave de API',
      title: 'Nueva Clave de API',
      success: 'Clave de API creada exitosamente',
      text: `¡Guarda tu clave de API! Por razones de seguridad, solo podrás ver la clave de API una vez.`,
      subtext: `Debes añadirla al encabezado de autorización de tus llamadas a la API.`,
      backToApiKeys: 'Volver a Claves de API',
    },
    list: {
      menu: 'Claves de API',
      title: 'Claves de API',
      viewActivity: 'Ver Actividad',
      noResults: 'No se encontraron claves de API.',
    },
    destroy: {
      confirmTitle: '¿Eliminar Clave de API?',
      success: 'Clave de API eliminada exitosamente',
    },
    enumerators: {
      status: {
        active: 'Activo',
        disabled: 'Deshabilitado',
        expired: 'Expirado',
      },
    },
    fields: {
      apiKey: 'Clave de API',
      membership: 'Usuario',
      name: 'Nombre',
      keyPrefix: 'Prefijo de Clave',
      key: 'Clave',
      scopes: 'Alcances',
      expiresAt: 'Expira En',
      status: 'Estado',
      createdAt: 'Creado En',
      disabled: 'Deshabilitado',
    },
    disabledTooltip: `Deshabilitado en {0}.`,
    errors: {
      invalidScopes: 'los alcances deben coincidir con el rol del usuario',
    },
  },

  file: {
    button: 'Subir',
    delete: 'Eliminar',
    errors: {
      formats: `Formato no válido. Debe ser uno de: {0}.`,
      notImage: `El archivo debe ser una imagen`,
      tooBig: `El archivo es demasiado grande. El tamaño actual es {0} bytes, el tamaño máximo es {1} bytes`,
    },
  },

  auth: {
    signIn: {
      oauthError:
        'No es posible iniciar sesión con este proveedor. Utiliza otro.',
      title: 'Iniciar Sesión',
      button: 'Iniciar Sesión con Correo',
      success: 'Inicio de sesión exitoso',
      email: 'Correo',
      password: 'Contraseña',
      socialHeader: 'O continuar con',
      facebook: 'Facebook',
      github: 'GitHub',
      google: 'Google',
      passwordResetRequestLink: '¿Olvidaste tu contraseña?',
      signUpLink: '¿No tienes una cuenta? Crea una',
    },
    signUp: {
      title: 'Registrarse',
      signInLink: '¿Ya tienes una cuenta? Inicia sesión',
      button: 'Registrarse',
      success: 'Registro exitoso',
      email: 'Correo',
      password: 'Contraseña',
    },
    verifyEmailRequest: {
      title: 'Reenviar verificación de correo',
      button: 'Reenviar verificación de correo',
      message:
        'Por favor confirma tu correo en <strong>{0}</strong> para continuar.',
      success: 'Verificación de correo enviada exitosamente',
    },
    verifyEmailConfirm: {
      title: 'Verifica tu correo',
      success: 'Correo verificado exitosamente',
      loadingMessage: 'Un momento, tu correo está siendo verificado...',
    },
    passwordResetRequest: {
      title: 'Olvidé mi Contraseña',
      signInLink: 'Cancelar',
      button: 'Enviar correo para restablecer contraseña',
      email: 'Correo',
      success: 'Correo para restablecer contraseña enviado exitosamente',
    },
    passwordResetConfirm: {
      title: 'Restablecer Contraseña',
      signInLink: 'Cancelar',
      button: 'Restablecer Contraseña',
      password: 'Contraseña',
      success: 'Contraseña cambiada exitosamente',
    },
    noPermissions: {
      title: 'Esperando Permisos',
      message:
        'Todavía no tienes permisos. Por favor espera a que el administrador te conceda privilegios.',
    },
    invitation: {
      title: 'Invitaciones',
      success: 'Invitación aceptada exitosamente',
      acceptWrongEmail: 'Aceptar Invitación con Este Correo',
      loadingMessage: 'Un momento, estamos aceptando la invitación...',
      invalidToken: 'Token de invitación expirado o inválido.',
    },
    tenant: {
      title: 'Espacios de Trabajo',
      create: {
        name: 'Nombre del Espacio de Trabajo',
        success: 'Espacio de trabajo creado exitosamente',
        button: 'Crear Espacio de Trabajo',
      },
      select: {
        tenant: 'Selecciona un Espacio de Trabajo',
        joinSuccess: 'Te has unido al espacio de trabajo exitosamente',
        select: 'Seleccionar Espacio de Trabajo',
        acceptInvitation: 'Aceptar Invitación',
      },
    },
    passwordChange: {
      title: 'Cambiar Contraseña',
      subtitle: 'Por favor proporciona tu contraseña anterior y la nueva.',
      menu: 'Cambiar Contraseña',
      oldPassword: 'Contraseña Anterior',
      newPassword: 'Nueva Contraseña',
      newPasswordConfirmation: 'Confirmación de Nueva Contraseña',
      button: 'Guardar Contraseña',
      success: 'Contraseña cambiada y guardada exitosamente',
      mustMatch: 'Las contraseñas deben coincidir',
      cancel: 'Cancelar',
    },
    profile: {
      title: 'Perfil',
      subtitle:
        'Tu perfil será compartido entre otros usuarios en tu espacio de trabajo.',
      menu: 'Perfil',
      firstName: 'Nombre',
      lastName: 'Apellido',
      avatars: 'Avatar',
      button: 'Guardar Perfil',
      success: 'Perfil guardado exitosamente',
      cancel: 'Cancelar',
    },
    profileOnboard: {
      title: 'Perfil',
      firstName: 'Nombre',
      lastName: 'Apellido',
      avatars: 'Avatar',
      button: 'Guardar Perfil',
      success: 'Perfil guardado exitosamente',
    },
    signOut: {
      menu: 'Cerrar Sesión',
      button: 'Cerrar Sesión',
      title: 'Cerrar Sesión',
      loading: 'Se le está desconectand...',
    },
    errors: {
      invalidApiKey: 'Clave API inválida o expirada',
      emailNotFound: 'Correo no encontrado',
      userNotFound: 'Lo siento, no reconocemos tus credenciales',
      wrongPassword: 'Lo siento, no reconocemos tus credenciales',
      weakPassword: 'Esta contraseña es demasiado débil',
      emailAlreadyInUse: 'Correo ya en uso',
      invalidPasswordResetToken:
        'Enlace para restablecer contraseña inválido o expirado',
      invalidVerifyEmailToken:
        'Enlace para verificar correo inválido o expirado',
      wrongOldPassword: 'La contraseña anterior es incorrecta',
    },
  },

  tenant: {
    switcher: {
      title: 'Espacios de trabajo',
      placeholder: 'Selecciona un espacio de trabajo',
      searchPlaceholder: 'Buscar espacio de trabajo...',
      searchEmpty: 'Ningún espacio de trabajo encontrado.',
      create: 'Crear espacio de trabajo',
    },

    invite: {
      title: `Aceptar invitación a {0}`,
      message: `Has sido invitado a {0}. Puedes elegir aceptar o rechazar.`,
    },

    form: {
      name: 'Nombre',

      new: {
        title: 'Crear espacio de trabajo',
        success: 'Espacio de trabajo creado con éxito',
      },

      edit: {
        title: 'Configuración del espacio de trabajo',
        success: 'Espacio de trabajo actualizado con éxito',
      },
    },

    destroy: {
      success: 'Espacio de trabajo eliminado exitosamente',
      confirmTitle: '¿Eliminar Espacio de Trabajo?',
      confirmDescription:
        '¿Estás seguro de que quieres eliminar el espacio de trabajo {0}? ¡Esta acción es irreversible!',
    },
  },

  membership: {
    dashboardCard: {
      title: 'Usuarios',
    },

    view: {
      title: 'Ver Usuario',
    },

    showActivity: 'Actividad',

    list: {
      menu: 'Usuarios',
      title: 'Usuarios',
      noResults: 'No se encontraron usuarios.',
    },

    export: {
      success: 'Usuarios exportados exitosamente',
    },

    edit: {
      menu: 'Editar Usuario',
      title: 'Editar Usuario',
      success: 'Usuario actualizado exitosamente',
    },

    new: {
      menu: 'Nuevo Usuario',
      title: 'Nuevo Usuario',
      success: 'Usuario creado exitosamente',
    },

    destroyMany: {
      success: 'Usuario(s) eliminado(s) exitosamente',
      noSelection: 'Debes seleccionar al menos un usuario para eliminar.',
      confirmTitle: '¿Eliminar Usuario(s)?',
      confirmDescription:
        '¿Estás seguro de que quieres eliminar los {0} usuario(s) seleccionado(s)?',
    },

    destroy: {
      success: 'Usuario eliminado exitosamente',
      noSelection: 'Debes seleccionar al menos un usuario para eliminar.',
      confirmTitle: '¿Eliminar Usuario?',
    },

    resendInvitationEmail: {
      button: 'Reenviar Correo de Invitación',
      success: 'Correo de invitación enviado exitosamente',
    },

    fields: {
      avatars: 'Avatar',
      fullName: 'Nombre Completo',
      firstName: 'Nombre',
      lastName: 'Apellido',
      email: 'Correo Electrónico',
      roles: 'Roles',
      status: 'Estado',
    },

    enumerators: {
      roles: {
        admin: 'Admin',
        custom: 'Custom',
      },

      status: {
        invited: 'Invitado',
        active: 'Activo',
        disabled: 'Deshabilitado',
      },
    },

    errors: {
      cannotRemoveSelfAdminRole: 'No puedes eliminar tu propio rol de admin',
      cannotDeleteSelf: 'No puedes eliminar tu propia membresía',
      notInvited: 'No estás invitado',
      invalidStatus: `Estado inválido: {0}`,
      alreadyMember: `{0} ya es un miembro`,
      notSameEmail: `Esta invitación fue enviada a {0} pero estás ingresado como {1}. ¿Quieres continuar?`,
    },
  },

  subscription: {
    menu: 'Suscripción',
    title: 'Planes y Precios',
    current: 'Plan Actual',

    subscribe: 'Suscribirse',
    manage: 'Administrar',
    notPlanUser: 'No eres el administrador de esta suscripción.',
    cancelAtPeriodEnd: 'Este plan se cancelará al final del período.',

    plans: {
      free: {
        title: 'Gratis',
        price: '$0',
        pricingPeriod: '/mes',
        features: {
          first: 'Descripción de la primera función',
          second: 'Descripción de la segunda función',
          third: 'Descripción de la tercera función',
        },
      },
      basic: {
        title: 'Básico',
        price: '$10',
        pricingPeriod: '/mes',
        features: {
          first: 'Descripción de la primera función',
          second: 'Descripción de la segunda función',
          third: 'Descripción de la tercera función',
        },
      },
      enterprise: {
        title: 'Empresarial',
        price: '$50',
        pricingPeriod: '/mes',
        features: {
          first: 'Descripción de la primera función',
          second: 'Descripción de la segunda función',
          third: 'Descripción de la tercera función',
        },
      },
    },

    errors: {
      disabled: 'Las suscripciones están deshabilitadas en esta plataforma',
      alreadyExistsActive: 'Ya existe una suscripción activa',
      stripeNotConfigured: 'Faltan las variables de entorno de Stripe',
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
      noResults: 'No se encontraron datasources.',
    },

    export: {
      success: 'DataSources exportados con éxito',
    },

    new: {
      menu: 'Nuevo DataSource',
      title: 'Nuevo DataSource',
      success: 'DataSource creado con éxito',
    },

    view: {
      title: 'Ver DataSource',
    },

    edit: {
      menu: 'Editar DataSource',
      title: 'Editar DataSource',
      success: 'DataSource actualizado con éxito',
    },

    destroyMany: {
      success: 'DataSource(s) eliminado(s) con éxito',
      noSelection: 'Debes seleccionar al menos un DataSource para eliminar.',
      confirmTitle: '¿Eliminar DataSource(s)?',
      confirmDescription:
        '¿Estás seguro de que quieres eliminar los {0} DataSource(s) seleccionados?',
    },

    destroy: {
      success: 'DataSource eliminado con éxito',
      noSelection: 'Debes seleccionar al menos un DataSource para eliminar.',
      confirmTitle: '¿Eliminar DataSource?',
    },

    fields: {
      name: 'Name',
      sourceType: 'Source Type',
      sizeInTiB: 'Size in TiB',
      sourceURL: 'Source URL',
      dataset: 'Dataset',
      createdByMembership: 'Creado por',
      updatedByMembership: 'Actualizado por',
      createdAt: 'Creado el',
      updatedAt: 'Actualizado el',
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
      noResults: 'No se encontraron datasets.',
    },

    export: {
      success: 'DataSets exportados con éxito',
    },

    new: {
      menu: 'Nuevo DataSet',
      title: 'Nuevo DataSet',
      success: 'DataSet creado con éxito',
    },

    view: {
      title: 'Ver DataSet',
    },

    edit: {
      menu: 'Editar DataSet',
      title: 'Editar DataSet',
      success: 'DataSet actualizado con éxito',
    },

    destroyMany: {
      success: 'DataSet(s) eliminado(s) con éxito',
      noSelection: 'Debes seleccionar al menos un DataSet para eliminar.',
      confirmTitle: '¿Eliminar DataSet(s)?',
      confirmDescription:
        '¿Estás seguro de que quieres eliminar los {0} DataSet(s) seleccionados?',
    },

    destroy: {
      success: 'DataSet eliminado con éxito',
      noSelection: 'Debes seleccionar al menos un DataSet para eliminar.',
      confirmTitle: '¿Eliminar DataSet?',
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
      createdByMembership: 'Creado por',
      updatedByMembership: 'Actualizado por',
      createdAt: 'Creado el',
      updatedAt: 'Actualizado el',
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
      noResults: 'No se encontraron datacaps.',
    },

    export: {
      success: 'DataCaps exportados con éxito',
    },

    new: {
      menu: 'Nuevo DataCap',
      title: 'Nuevo DataCap',
      success: 'DataCap creado con éxito',
    },

    view: {
      title: 'Ver DataCap',
    },

    edit: {
      menu: 'Editar DataCap',
      title: 'Editar DataCap',
      success: 'DataCap actualizado con éxito',
    },

    destroyMany: {
      success: 'DataCap(s) eliminado(s) con éxito',
      noSelection: 'Debes seleccionar al menos un DataCap para eliminar.',
      confirmTitle: '¿Eliminar DataCap(s)?',
      confirmDescription:
        '¿Estás seguro de que quieres eliminar los {0} DataCap(s) seleccionados?',
    },

    destroy: {
      success: 'DataCap eliminado con éxito',
      noSelection: 'Debes seleccionar al menos un DataCap para eliminar.',
      confirmTitle: '¿Eliminar DataCap?',
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
      createdByMembership: 'Creado por',
      updatedByMembership: 'Actualizado por',
      createdAt: 'Creado el',
      updatedAt: 'Actualizado el',
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
      menu: 'Registros de Auditoría',
      title: 'Registros de Auditoría',
      noResults: 'No se encontraron registros de auditoría.',
    },

    changesDialog: {
      title: 'Registro de Auditoría',
      changes: 'Cambios',
      noChanges: 'No hay cambios en este registro.',
    },

    export: {
      success: 'Registros de auditoría exportados exitosamente',
    },

    fields: {
      timestamp: 'Fecha',
      entityName: 'Entidad',
      entityNames: 'Entidades',
      entityId: 'ID de Entidad',
      operation: 'Operación',
      operations: 'Operaciones',
      membership: 'Usuario',
      apiKey: 'Clave API',
      apiEndpoint: 'Endpoint API',
      apiHttpResponseCode: 'Estado API',
      transactionId: 'ID de Transacción',
    },

    enumerators: {
      operation: {
        SI: 'Iniciar Sesión',
        SO: 'Cerrar Sesión',
        SU: 'Registrarse',
        PRR: 'Solicitud de Restablecimiento de Contraseña',
        PRC: 'Confirmación de Restablecimiento de Contraseña',
        PC: 'Cambio de Contraseña',
        VER: 'Solicitud de Verificación de Correo',
        VEC: 'Confirmación de Verificación de Correo',
        C: 'Crear',
        U: 'Actualizar',
        D: 'Eliminar',
        AG: 'API Get',
        APO: 'API Post',
        APU: 'API Put',
        AD: 'API Delete',
      },
    },

    dashboardCard: {
      activityChart: 'Actividad',
      activityList: 'Actividad Reciente',
    },

    readableOperations: {
      SI: '{0} inició sesión',
      SU: '{0} se registró',
      PRR: '{0} solicitó restablecer la contraseña',
      PRC: '{0} confirmó el restablecimiento de la contraseña',
      PC: '{0} cambió la contraseña',
      VER: '{0} solicitó verificar el correo',
      VEC: '{0} verificó el correo',
      C: '{0} creó {1} {2}',
      U: '{0} actualizó {1} {2}',
      D: '{0} eliminó {1} {2}',
    },
  },

  recaptcha: {
    errors: {
      disabled:
        'reCAPTCHA está deshabilitado en esta plataforma. Omitiendo verificación.',
      invalid: 'reCAPTCHA inválido',
    },
  },

  emails: {
    passwordResetEmail: {
      subject: `Restablecer tu contraseña para {0}`,
      content: `<p>Hola,</p> <p>Sigue este enlace para restablecer la contraseña de tu cuenta {0}. </p> <p><a href="{1}">{1}</a></p> <p>Si no has solicitado restablecer tu contraseña, puedes ignorar este correo.</p> <p>Gracias,</p> <p>Tu equipo de {0}</p>`,
    },
    verifyEmailEmail: {
      subject: `Verifica tu correo electrónico para {0}`,
      content: `<p>Hola,</p><p>Sigue este enlace para verificar tu dirección de correo electrónico.</p><p><a href="{1}">{1}</a></p><p>Si no has solicitado verificar esta dirección, puedes ignorar este correo.</p> <p>Gracias,</p> <p>Tu equipo de {0}</p>`,
    },
    invitationEmail: {
      singleTenant: {
        subject: `Has sido invitado a {0}`,
        content: `<p>Hola,</p> <p>Has sido invitado a {0}.</p> <p>Sigue este enlace para registrarte.</p> <p><a href="{1}">{1}</a></p> <p>Gracias,</p> <p>Tu equipo de {0}</p>`,
      },
      multiTenant: {
        subject: `Has sido invitado a {1} en {0}`,
        content: `<p>Hola,</p> <p>Has sido invitado a {2}.</p> <p>Sigue este enlace para registrarte.</p> <p><a href="{1}">{1}</a></p> <p>Gracias,</p> <p>Tu equipo de {0}</p>`,
      },
    },

    errors: {
      emailNotConfigured:
        'Faltan las variables de entorno de correo electrónico',
    },
  },
};

export default dictionary;
