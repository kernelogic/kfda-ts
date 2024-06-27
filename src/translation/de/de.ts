const dictionary = {
  

  projectName: 'Projekt',

  shared: {
    yes: 'Ja',
    no: 'Nein',
    cancel: 'Abbrechen',
    save: 'Speichern',
    clear: 'Leeren',
    decline: 'Ablehnen',
    accept: 'Akzeptieren',
    dashboard: 'Dashboard',
    new: 'Neu',
    searchNotFound: 'Nichts gefunden.',
    searchPlaceholder: 'Suchen...',
    selectPlaceholder: 'Option auswählen',
    datePlaceholder: 'Datum auswählen',
    timePlaceholder: 'Zeit auswählen',
    dateFormat: 'DD. MMM YYYY',
    timeFormat: 'HH:mm',
    datetimeFormat: 'DD. MMM YYYY HH:mm',
    tagsPlaceholder: 'Tippen und Enter drücken, um hinzuzufügen',
    edit: 'Bearbeiten',
    delete: 'Löschen',
    openMenu: 'Menü öffnen',
    submit: 'Absenden',
    search: 'Suche',
    reset: 'Zurücksetzen',
    min: 'Min',
    max: 'Max',
    view: 'Ansicht',
    copiedToClipboard: 'In die Zwischenablage kopiert',
    exportToCsv: 'Als CSV exportieren',
    import: 'Importieren',
    pause: 'Pausieren',
    discard: 'Verwerfen',
    preferences: 'Einstellungen',
    session: 'Sitzung',
    deleted: 'Gelöscht',
    remove: 'Entfernen',
    startDate: 'Startdatum',
    endDate: 'Enddatum',

    importer: {
      importHashAlreadyExists: 'Daten wurden bereits importiert',
      title: 'CSV-Datei importieren',
      menu: 'CSV-Datei importieren',
      line: 'Zeile',
      status: 'Status',
      pending: 'Ausstehend',
      success: 'Importiert',
      error: 'Fehler',
      total: `{0} importiert, {1} ausstehend und {2} mit Fehler`,
      importedMessage: `{0} von {1} verarbeitet.`,
      noValidRows: 'Keine gültigen Zeilen.',
      noNavigateAwayMessage:
        'Diese Seite nicht verlassen, sonst wird der Import gestoppt.',
      completed: {
        success:
          'Import abgeschlossen. Alle Zeilen wurden erfolgreich importiert.',
        someErrors:
          'Verarbeitung abgeschlossen, einige Zeilen konnten jedoch nicht importiert werden.',
        allErrors: 'Import fehlgeschlagen. Keine gültigen Zeilen.',
      },
      form: {
        downloadTemplate: 'Vorlage herunterladen',
      },
      list: {
        newConfirm: 'Sind Sie sicher?',
        discardConfirm:
          'Sind Sie sicher? Nicht importierte Daten gehen verloren.',
      },
      errors: {
        invalidFileEmpty: 'Die Datei ist leer',
        invalidFileCsv: 'Nur CSV (.csv) Dateien sind erlaubt',
        invalidFileUpload:
          'Ungültige Datei. Stellen Sie sicher, dass Sie die neueste Version der Vorlage verwenden.',
        importHashRequired: 'Import-Hash ist erforderlich',
        importHashExistent: 'Daten wurden bereits importiert',
      },
    },

    dataTable: {
      filters: 'Filter',
      noResults: 'Keine Ergebnisse gefunden.',
      viewOptions: 'Ansicht',
      toggleColumns: 'Spalten umschalten',
      actions: 'Aktionen',
      sortAscending: 'Aufsteigend',
      sortDescending: 'Absteigend',
      hide: 'Ausblenden',
      selectAll: 'Alles auswählen',
      selectRow: 'Zeile auswählen',
      paginationTotal: 'Insgesamt: {0} Zeile(n)',
      paginationSelected: '{0} Zeile(n) ausgewählt.',
      paginationRowsPerPage: 'Zeilen pro Seite',
      paginationCurrent: `Seite {0} von {1}`,
      paginationGoToFirst: 'Zur ersten Seite gehen',
      paginationGoToPrevious: 'Zur vorherigen Seite gehen',
      paginationGoToNext: 'Zur nächsten Seite gehen',
      paginationGoToLast: 'Zur letzten Seite gehen',
    },

    locales: {
      en: 'Englisch',
      es: 'Spanisch',
      de: 'Deutsch',
      'pt-BR': 'Portugiesisch (Brasilien)',
    },

    localeSwitcher: {
      searchPlaceholder: 'Sprache suchen...',
      title: 'Sprache',
      placeholder: 'Sprache auswählen',
      searchEmpty: 'Keine Sprache gefunden.',
    },

    theme: {
      toggle: 'Design',
      light: 'Hell',
      dark: 'Dunkel',
      system: 'System',
    },

    errors: {
      cannotDeleteReferenced: `Kann {0} nicht löschen, da es von einem oder mehreren {1} referenziert wird.`,
      timezone: 'Ungültige Zeitzone',
      required: `{0} ist ein Pflichtfeld`,
      invalid: `{0} ist ungültig`,
      dateFuture: `{0} muss in der Zukunft liegen`,
      unknown: 'Ein Fehler ist aufgetreten',
      unique: `{0} muss eindeutig sein`,
    },
  },

  apiKey: {
    docs: {
      menu: 'API-Dokumentation',
    },
    form: {
      addAll: 'Alle hinzufügen',
    },
    edit: {
      menu: 'API-Schlüssel bearbeiten',
      title: 'API-Schlüssel bearbeiten',
      success: 'API-Schlüssel erfolgreich aktualisiert',
    },
    new: {
      menu: 'Neuer API-Schlüssel',
      title: 'Neuer API-Schlüssel',
      success: 'API-Schlüssel erfolgreich erstellt',
      text: `Speichern Sie Ihren API-Schlüssel! Aus Sicherheitsgründen können Sie den API-Schlüssel nur einmal sehen.`,
      subtext: `Sie müssen ihn im Authorization-Header Ihrer API-Aufrufe hinzufügen.`,
      backToApiKeys: 'Zurück zu API-Schlüsseln',
    },
    list: {
      menu: 'API-Schlüssel',
      title: 'API-Schlüssel',
      viewActivity: 'Aktivität anzeigen',
      noResults: 'Keine API-Schlüssel gefunden.',
    },
    destroy: {
      confirmTitle: 'API-Schlüssel löschen?',
      success: 'API-Schlüssel erfolgreich gelöscht',
    },
    enumerators: {
      status: {
        active: 'Aktiv',
        disabled: 'Deaktiviert',
        expired: 'Abgelaufen',
      },
    },
    fields: {
      apiKey: 'API-Schlüssel',
      membership: 'Benutzer',
      name: 'Name',
      keyPrefix: 'Schlüsselpräfix',
      key: 'Schlüssel',
      scopes: 'Bereiche',
      expiresAt: 'Läuft ab am',
      status: 'Status',
      createdAt: 'Erstellt am',
      disabled: 'Deaktiviert',
    },
    disabledTooltip: `Deaktiviert am {0}.`,
    errors: {
      invalidScopes: 'Bereiche müssen der Rolle des Benutzers entsprechen',
    },
  },

  file: {
    button: 'Hochladen',
    delete: 'Löschen',
    errors: {
      formats: `Ungültiges Format. Muss eines der folgenden sein: {0}.`,
      notImage: `Datei muss ein Bild sein`,
      tooBig: `Datei ist zu groß. Aktuelle Größe ist {0} Bytes, maximale Größe ist {1} Bytes`,
    },
  },

  auth: {
    signIn: {
      oauthError:
        'Anmeldung mit diesem Anbieter nicht möglich. Bitte einen anderen verwenden.',
      title: 'Anmelden',
      button: 'Mit E-Mail anmelden',
      success: 'Erfolgreich angemeldet',
      email: 'E-Mail',
      password: 'Passwort',
      socialHeader: 'Oder weiter mit',
      facebook: 'Facebook',
      github: 'GitHub',
      google: 'Google',
      passwordResetRequestLink: 'Passwort vergessen?',
      signUpLink: 'Noch kein Konto? Erstellen',
    },
    signUp: {
      title: 'Registrieren',
      signInLink: 'Bereits ein Konto? Anmelden',
      button: 'Registrieren',
      success: 'Erfolgreich registriert',
      email: 'E-Mail',
      password: 'Passwort',
    },
    verifyEmailRequest: {
      title: 'E-Mail-Verifikation erneut senden',
      button: 'E-Mail-Verifikation erneut senden',
      message:
        'Bitte bestätige deine E-Mail-Adresse bei <strong>{0}</strong>, um fortzufahren.',
      success: 'E-Mail-Verifikation erfolgreich gesendet!',
    },
    verifyEmailConfirm: {
      title: 'E-Mail verifizieren',
      success: 'E-Mail erfolgreich verifiziert.',
      loadingMessage: 'Einen Moment, deine E-Mail wird verifiziert...',
    },
    passwordResetRequest: {
      title: 'Passwort vergessen',
      signInLink: 'Abbrechen',
      button: 'E-Mail zum Zurücksetzen des Passworts senden',
      email: 'E-Mail',
      success: 'E-Mail zum Zurücksetzen des Passworts erfolgreich gesendet',
    },
    passwordResetConfirm: {
      title: 'Passwort zurücksetzen',
      signInLink: 'Abbrechen',
      button: 'Passwort zurücksetzen',
      password: 'Passwort',
      success: 'Passwort erfolgreich geändert',
    },
    noPermissions: {
      title: 'Warten auf Berechtigungen',
      message:
        'Du hast noch keine Berechtigungen. Bitte warte, bis der Admin dir Rechte gewährt.',
    },
    invitation: {
      title: 'Einladungen',
      success: 'Einladung erfolgreich angenommen',
      acceptWrongEmail: 'Einladung mit dieser E-Mail annehmen',
      loadingMessage: 'Einen Moment, wir akzeptieren die Einladung...',
      invalidToken: 'Abgelaufener oder ungültiger Einladungstoken.',
    },
    tenant: {
      title: 'Arbeitsbereiche',
      create: {
        name: 'Name des Arbeitsbereichs',
        success: 'Arbeitsbereich erfolgreich erstellt',
        button: 'Arbeitsbereich erstellen',
      },
      select: {
        tenant: 'Einen Arbeitsbereich auswählen',
        joinSuccess: 'Erfolgreich dem Arbeitsbereich beigetreten',
        select: 'Arbeitsbereich auswählen',
        acceptInvitation: 'Einladung annehmen',
      },
    },
    passwordChange: {
      title: 'Passwort ändern',
      subtitle: 'Bitte gib dein altes und dein neues Passwort ein.',
      menu: 'Passwort ändern',
      oldPassword: 'Altes Passwort',
      newPassword: 'Neues Passwort',
      newPasswordConfirmation: 'Neues Passwort bestätigen',
      button: 'Passwort speichern',
      success: 'Passwort erfolgreich gespeichert',
      mustMatch: 'Passwörter müssen übereinstimmen',
      cancel: 'Abbrechen',
    },
    profile: {
      title: 'Profil',
      subtitle:
        'Dein Profil wird unter den anderen Benutzern in deinem Arbeitsbereich geteilt.',
      menu: 'Profil',
      firstName: 'Vorname',
      lastName: 'Nachname',
      avatars: 'Avatar',
      button: 'Profil speichern',
      success: 'Profil erfolgreich gespeichert',
      cancel: 'Abbrechen',
    },
    profileOnboard: {
      title: 'Profil',
      firstName: 'Vorname',
      lastName: 'Nachname',
      avatars: 'Avatar',
      button: 'Profil speichern',
      success: 'Profil erfolgreich gespeichert',
    },
    signOut: {
      menu: 'Abmelden',
      button: 'Abmelden',
      title: 'Abmelden',
      loading: 'Sie werden abgemeldet...',
    },
    errors: {
      invalidApiKey: 'Ungültiger oder abgelaufener API-Schlüssel',
      emailNotFound: 'E-Mail nicht gefunden',
      userNotFound: 'Leider erkennen wir deine Anmeldedaten nicht',
      wrongPassword: 'Leider erkennen wir deine Anmeldedaten nicht',
      weakPassword: 'Dieses Passwort ist zu schwach',
      emailAlreadyInUse: 'E-Mail wird bereits verwendet',
      invalidPasswordResetToken:
        'Link zum Zurücksetzen des Passworts ist ungültig oder abgelaufen',
      invalidVerifyEmailToken:
        'E-Mail-Verifizierungslink ist ungültig oder abgelaufen',
      wrongOldPassword: 'Das alte Passwort ist falsch',
    },
  },

  tenant: {
    switcher: {
      title: 'Arbeitsbereiche',
      placeholder: 'Einen Arbeitsbereich auswählen',
      searchPlaceholder: 'Arbeitsbereich suchen...',
      searchEmpty: 'Kein Arbeitsbereich gefunden.',
      create: 'Arbeitsbereich erstellen',
    },

    invite: {
      title: `Einladung zu {0} annehmen`,
      message: `Du wurdest zu {0} eingeladen. Du kannst wählen, ob du annimmst oder ablehnst.`,
    },

    form: {
      name: 'Name',

      new: {
        title: 'Arbeitsbereich erstellen',
        success: 'Arbeitsbereich erfolgreich erstellt',
      },

      edit: {
        title: 'Einstellungen des Arbeitsbereichs',
        success: 'Arbeitsbereich erfolgreich aktualisiert',
      },
    },

    destroy: {
      success: 'Arbeitsbereich erfolgreich gelöscht',
      confirmTitle: 'Arbeitsbereich löschen?',
      confirmDescription:
        'Sind Sie sicher, dass Sie den Arbeitsbereich {0} löschen möchten? Diese Aktion ist nicht rückgängig zu machen!',
    },
  },

  membership: {
    dashboardCard: {
      title: 'Benutzer',
    },

    showActivity: 'Aktivität',

    view: {
      title: 'Benutzer anzeigen',
    },

    list: {
      menu: 'Benutzer',
      title: 'Benutzer',
      noResults: 'Keine Benutzer gefunden.',
    },

    export: {
      success: 'Benutzer erfolgreich exportiert',
    },

    edit: {
      menu: 'Benutzer bearbeiten',
      title: 'Benutzer bearbeiten',
      success: 'Benutzer erfolgreich aktualisiert',
    },

    new: {
      menu: 'Neuer Benutzer',
      title: 'Neuer Benutzer',
      success: 'Benutzer erfolgreich erstellt',
    },

    destroyMany: {
      success: 'Benutzer erfolgreich gelöscht',
      noSelection: 'Du musst mindestens einen Benutzer auswählen, um ihn zu löschen.',
      confirmTitle: 'Benutzer löschen?',
      confirmDescription:
        'Bist du sicher, dass du die {0} ausgewählten Benutzer löschen möchtest?',
    },

    destroy: {
      success: 'Benutzer erfolgreich gelöscht',
      noSelection: 'Du musst mindestens einen Benutzer auswählen, um ihn zu löschen.',
      confirmTitle: 'Benutzer löschen?',
    },

    resendInvitationEmail: {
      button: 'Einladungsemail erneut senden',
      success: 'Einladungsemail erfolgreich gesendet',
    },

    fields: {
      avatars: 'Avatar',
      fullName: 'Vollständiger Name',
      firstName: 'Vorname',
      lastName: 'Nachname',
      email: 'E-Mail',
      roles: 'Rollen',
      status: 'Status',
    },

    enumerators: {
      roles: {
        admin: 'Admin',
        custom: 'Benutzerdefiniert',
      },

      status: {
        invited: 'Eingeladen',
        active: 'Aktiv',
        disabled: 'Deaktiviert',
      },
    },

    errors: {
      cannotRemoveSelfAdminRole:
        'Du kannst deine eigene Admin-Rolle nicht entfernen',
      cannotDeleteSelf: 'Du kannst deine eigene Mitgliedschaft nicht entfernen',
      notInvited: 'Du bist nicht eingeladen',
      invalidStatus: `Ungültiger Status: {0}`,
      alreadyMember: `{0} ist bereits Mitglied`,
      notSameEmail: `Diese Einladung wurde an {0} gesendet, aber du bist als {1} angemeldet. Möchtest du fortfahren?`,
    },
  },

  subscription: {
    menu: 'Abonnement',
    title: 'Tarife und Preise',
    current: 'Aktueller Tarif',

    subscribe: 'Abonnieren',
    manage: 'Verwalten',
    notPlanUser: 'Du bist nicht der Manager dieses Abonnements.',
    cancelAtPeriodEnd: 'Dieser Tarif wird am Ende des Zeitraums gekündigt.',

    plans: {
      free: {
        title: 'Kostenlos',
        price: '0 €',
        pricingPeriod: '/Monat',
        features: {
          first: 'Erste Funktion Beschreibung',
          second: 'Zweite Funktion Beschreibung',
          third: 'Dritte Funktion Beschreibung',
        },
      },
      basic: {
        title: 'Basis',
        price: '10 €',
        pricingPeriod: '/Monat',
        features: {
          first: 'Erste Funktion Beschreibung',
          second: 'Zweite Funktion Beschreibung',
          third: 'Dritte Funktion Beschreibung',
        },
      },
      enterprise: {
        title: 'Unternehmen',
        price: '50 €',
        pricingPeriod: '/Monat',
        features: {
          first: 'Erste Funktion Beschreibung',
          second: 'Zweite Funktion Beschreibung',
          third: 'Dritte Funktion Beschreibung',
        },
      },
    },

    errors: {
      disabled: 'Abonnements sind auf dieser Plattform deaktiviert',
      alreadyExistsActive: 'Es gibt bereits ein aktives Abonnement',
      stripeNotConfigured: 'Stripe-Umgebungsvariablen fehlen',
    },
  },

  dataSource: {
    label: 'DataSources',

    dashboardCard: {
      title: 'DataSources',
    },

    list: {
      menu: 'DataSources',
      title: 'DataSources',
      noResults: 'Keine datasources gefunden.',
    },

    export: {
      success: 'DataSources erfolgreich exportiert',
    },

    view: {
      title: 'Ansehen DataSource',
    },

    new: {
      menu: 'Neuer DataSource',
      title: 'Neuer DataSource',
      success: 'DataSource erfolgreich erstellt',
    },

    edit: {
      menu: 'DataSources bearbeiten',
      title: 'DataSources bearbeiten',
      success: 'DataSource erfolgreich aktualisiert',
    },

    destroyMany: {
      success: 'DataSource(n) erfolgreich gelöscht',
      noSelection:
        'Sie müssen mindestens einen DataSources auswählen, um ihn zu löschen.',
      confirmTitle: 'DataSource(n) löschen?',
      confirmDescription:
        'Sind Sie sicher, dass Sie die {0} ausgewählten DataSources löschen möchten?',
    },

    destroy: {
      success: 'DataSource erfolgreich gelöscht',
      noSelection:
        'Sie müssen mindestens einen DataSources auswählen, um ihn zu löschen.',
      confirmTitle: 'DataSources löschen?',
    },

    fields: {
      name: 'Name',
      sourceType: 'Source Type',
      sizeInTiB: 'Size in TiB',
      sourceURL: 'Source URL',
      dataset: 'Dataset',
      createdByMembership: 'Erstellt von',
      updatedByMembership: 'Aktualisiert von',
      createdAt: 'Erstellt am',
      updatedAt: 'Aktualisiert am',
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
    label: 'DataSets',

    dashboardCard: {
      title: 'DataSets',
    },

    list: {
      menu: 'DataSets',
      title: 'DataSets',
      noResults: 'Keine datasets gefunden.',
    },

    export: {
      success: 'DataSets erfolgreich exportiert',
    },

    view: {
      title: 'Ansehen DataSet',
    },

    new: {
      menu: 'Neuer DataSet',
      title: 'Neuer DataSet',
      success: 'DataSet erfolgreich erstellt',
    },

    edit: {
      menu: 'DataSets bearbeiten',
      title: 'DataSets bearbeiten',
      success: 'DataSet erfolgreich aktualisiert',
    },

    destroyMany: {
      success: 'DataSet(n) erfolgreich gelöscht',
      noSelection:
        'Sie müssen mindestens einen DataSets auswählen, um ihn zu löschen.',
      confirmTitle: 'DataSet(n) löschen?',
      confirmDescription:
        'Sind Sie sicher, dass Sie die {0} ausgewählten DataSets löschen möchten?',
    },

    destroy: {
      success: 'DataSet erfolgreich gelöscht',
      noSelection:
        'Sie müssen mindestens einen DataSets auswählen, um ihn zu löschen.',
      confirmTitle: 'DataSets löschen?',
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
      createdByMembership: 'Erstellt von',
      updatedByMembership: 'Aktualisiert von',
      createdAt: 'Erstellt am',
      updatedAt: 'Aktualisiert am',
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
    label: 'DataCaps',

    dashboardCard: {
      title: 'DataCaps',
    },

    list: {
      menu: 'DataCaps',
      title: 'DataCaps',
      noResults: 'Keine datacaps gefunden.',
    },

    export: {
      success: 'DataCaps erfolgreich exportiert',
    },

    view: {
      title: 'Ansehen DataCap',
    },

    new: {
      menu: 'Neuer DataCap',
      title: 'Neuer DataCap',
      success: 'DataCap erfolgreich erstellt',
    },

    edit: {
      menu: 'DataCaps bearbeiten',
      title: 'DataCaps bearbeiten',
      success: 'DataCap erfolgreich aktualisiert',
    },

    destroyMany: {
      success: 'DataCap(n) erfolgreich gelöscht',
      noSelection:
        'Sie müssen mindestens einen DataCaps auswählen, um ihn zu löschen.',
      confirmTitle: 'DataCap(n) löschen?',
      confirmDescription:
        'Sind Sie sicher, dass Sie die {0} ausgewählten DataCaps löschen möchten?',
    },

    destroy: {
      success: 'DataCap erfolgreich gelöscht',
      noSelection:
        'Sie müssen mindestens einen DataCaps auswählen, um ihn zu löschen.',
      confirmTitle: 'DataCaps löschen?',
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
      createdByMembership: 'Erstellt von',
      updatedByMembership: 'Aktualisiert von',
      createdAt: 'Erstellt am',
      updatedAt: 'Aktualisiert am',
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
      menu: 'Prüfprotokolle',
      title: 'Prüfprotokolle',
      noResults: 'Keine Prüfprotokolle gefunden.',
    },

    changesDialog: {
      title: 'Prüfprotokoll',
      changes: 'Änderungen',
      noChanges: 'In diesem Protokoll gibt es keine Änderungen.',
    },

    export: {
      success: 'Prüfprotokolle erfolgreich exportiert',
    },

    fields: {
      timestamp: 'Datum',
      entityName: 'Entität',
      entityNames: 'Entitäten',
      entityId: 'Entitäts-ID',
      operation: 'Vorgang',
      operations: 'Vorgänge',
      membership: 'Benutzer',
      apiKey: 'API-Schlüssel',
      apiEndpoint: 'API-Endpunkt',
      apiHttpResponseCode: 'API-Status',
      transactionId: 'Transaktions-ID',
    },

    enumerators: {
      operation: {
        SI: 'Anmeldung',
        SO: 'Abmeldung',
        SU: 'Registrierung',
        PRR: 'Passwortzurücksetzung angefordert',
        PRC: 'Passwortzurücksetzung bestätigt',
        PC: 'Passwort geändert',
        VER: 'E-Mail-Überprüfung angefordert',
        VEC: 'E-Mail bestätigt',
        C: 'Erstellen',
        U: 'Aktualisieren',
        D: 'Löschen',
        AG: 'API Abruf',
        APO: 'API Post',
        APU: 'API Put',
        AD: 'API Löschen',
      },
    },

    dashboardCard: {
      activityChart: 'Aktivität',
      activityList: 'Kürzliche Aktivitäten',
    },

    readableOperations: {
      SI: '{0} hat sich angemeldet',
      SU: '{0} hat sich registriert',
      PRR: '{0} hat eine Passwortzurücksetzung angefordert',
      PRC: '{0} hat die Passwortzurücksetzung bestätigt',
      PC: '{0} hat das Passwort geändert',
      VER: '{0} hat eine E-Mail-Überprüfung angefordert',
      VEC: '{0} hat die E-Mail bestätigt',
      C: '{0} hat {1} {2} erstellt',
      U: '{0} hat {1} {2} aktualisiert',
      D: '{0} hat {1} {2} gelöscht',
    },
  },

  recaptcha: {
    errors: {
      disabled:
        'reCAPTCHA ist auf dieser Plattform deaktiviert. Überprüfung wird übersprungen.',
      invalid: 'Ungültiges reCAPTCHA',
    },
  },

  emails: {
    passwordResetEmail: {
      subject: `Setzen Sie Ihr Passwort für {0} zurück`,
      content: `<p>Hallo,</p> <p>Folgen Sie diesem Link, um Ihr Passwort für {0} zurückzusetzen.</p> <p><a href="{1}">{1}</a></p> <p>Wenn Sie nicht darum gebeten haben, Ihr Passwort zurückzusetzen, können Sie diese E-Mail ignorieren.</p> <p>Danke,</p> <p>Ihr {0} Team</p>`,
    },
    verifyEmailEmail: {
      subject: `Bestätigen Sie Ihre E-Mail für {0}`,
      content: `<p>Hallo,</p><p>Folgen Sie diesem Link, um Ihre E-Mail-Adresse zu bestätigen.</p><p><a href="{1}">{1}</a></p><p>Wenn Sie nicht darum gebeten haben, diese Adresse zu bestätigen, können Sie diese E-Mail ignorieren.</p> <p>Danke,</p> <p>Ihr {0} Team</p>`,
    },
    invitationEmail: {
      singleTenant: {
        subject: `Sie wurden zu {0} eingeladen`,
        content: `<p>Hallo,</p> <p>Sie wurden zu {0} eingeladen.</p> <p>Folgen Sie diesem Link zur Registrierung.</p> <p><a href="{1}">{1}</a></p> <p>Danke,</p> <p>Ihr {0} Team</p>`,
      },
      multiTenant: {
        subject: `Sie wurden zu {1} bei {0} eingeladen`,
        content: `<p>Hallo,</p> <p>Sie wurden zu {2} eingeladen.</p> <p>Folgen Sie diesem Link zur Registrierung.</p> <p><a href="{1}">{1}</a></p> <p>Danke,</p> <p>Ihr {0} Team</p>`,
      },
    },
    errors: {
      emailNotConfigured: 'E-Mail ENV-Variablen fehlen',
    },
  },
};

export default dictionary;
