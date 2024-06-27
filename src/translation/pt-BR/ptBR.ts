const dictionary = {
  

  projectName: 'Projeto',

  shared: {
    yes: 'Sim',
    no: 'Não',
    cancel: 'Cancelar',
    save: 'Salvar',
    clear: 'Limpar',
    decline: 'Recusar',
    accept: 'Aceitar',
    dashboard: 'Painel',
    new: 'Novo',
    searchNotFound: 'Nada encontrado.',
    searchPlaceholder: 'Pesquisar...',
    selectPlaceholder: 'Escolher uma opção',
    datePlaceholder: 'Escolha uma data',
    timePlaceholder: 'Escolha um horário',
    dateFormat: 'DD MMM, YYYY',
    timeFormat: 'hh:mmA',
    datetimeFormat: 'DD MMM, YYYY hh:mmA',
    tagsPlaceholder: 'Digite e aperte enter para adicionar',
    edit: 'Editar',
    delete: 'Excluir',
    openMenu: 'Abrir menu',
    submit: 'Enviar',
    search: 'Pesquisar',
    reset: 'Redefinir',
    min: 'Mín',
    max: 'Máx',
    view: 'Visualizar',
    copiedToClipboard: 'Copiado para a área de transferência',
    exportToCsv: 'Exportar para CSV',
    import: 'Importar',
    pause: 'Pausar',
    discard: 'Descartar',
    preferences: 'Preferências',
    session: 'Sessão',
    deleted: 'Excluído',
    remove: 'Remover',
    startDate: 'Data de Início',
    endDate: 'Data de Término',

    importer: {
      importHashAlreadyExists: 'Dados já foram importados',
      title: 'Importar arquivo CSV',
      menu: 'Importar arquivo CSV',
      line: 'Linha',
      status: 'Status',
      pending: 'Pendente',
      success: 'Importado',
      error: 'Erro',
      total: `{0} importados, {1} pendentes e {2} com erro`,
      importedMessage: `Processado {0} de {1}.`,
      noValidRows: 'Não há linhas válidas.',
      noNavigateAwayMessage:
        'Não saia desta página ou a importação será interrompida.',
      completed: {
        success:
          'Importação concluída. Todas as linhas foram importadas com sucesso.',
        someErrors:
          'Processamento concluído, mas algumas linhas não puderam ser importadas.',
        allErrors: 'Falha na importação. Não há linhas válidas.',
      },
      form: {
        downloadTemplate: 'Baixar modelo',
      },
      list: {
        newConfirm: 'Tem certeza?',
        discardConfirm: 'Tem certeza? Dados não importados serão perdidos.',
      },
      errors: {
        invalidFileEmpty: 'O arquivo está vazio',
        invalidFileCsv: 'Somente arquivos CSV (.csv) são permitidos',
        invalidFileUpload:
          'Arquivo inválido. Certifique-se de usar a última versão do modelo.',
        importHashRequired: 'Hash de importação é obrigatório',
        importHashExistent: 'Dados já foram importados',
      },
    },

    dataTable: {
      filters: 'Filtros',
      noResults: 'Nenhum resultado encontrado.',
      viewOptions: 'Visualizar',
      toggleColumns: 'Alternar colunas',
      actions: 'Ações',

      sortAscending: 'Asc',
      sortDescending: 'Desc',
      hide: 'Ocultar',

      selectAll: 'Selecionar tudo',
      selectRow: 'Selecionar linha',
      paginationTotal: 'Total: {0} linha(s)',
      paginationSelected: '{0} linha(s) selecionada(s)',
      paginationRowsPerPage: 'Linhas por página',
      paginationCurrent: `Página {0} de {1}`,
      paginationGoToFirst: 'Ir para a primeira página',
      paginationGoToPrevious: 'Ir para a página anterior',
      paginationGoToNext: 'Ir para a próxima página',
      paginationGoToLast: 'Ir para a última página',
    },

    locales: {
      en: 'Inglês',
      es: 'Espanhol',
      de: 'Alemão',
      'pt-BR': 'Português (Brasil)',
    },

    localeSwitcher: {
      searchPlaceholder: 'Procurar idioma...',
      title: 'Idioma',
      placeholder: 'Selecionar um idioma',
      searchEmpty: 'Nenhum idioma encontrado.',
    },

    theme: {
      toggle: 'Tema',
      light: 'Claro',
      dark: 'Escuro',
      system: 'Sistema',
    },

    errors: {
      cannotDeleteReferenced: `Não é possível excluir {0} porque está referenciado por um ou mais {1}.`,
      timezone: 'Fuso horário inválido',
      required: `{0} é um campo obrigatório`,
      invalid: `{0} é inválido`,
      dateFuture: `{0} deve estar no futuro`,
      unknown: 'Ocorreu um erro',
      unique: 'O {0} deve ser único',
    },
  },

  apiKey: {
    docs: {
      menu: 'Documentação da API',
    },
    form: {
      addAll: 'Adicionar Tudo',
    },
    edit: {
      menu: 'Editar Chave da API',
      title: 'Editar Chave da API',
      success: 'Chave da API atualizada com sucesso',
    },
    new: {
      menu: 'Nova Chave da API',
      title: 'Nova Chave da API',
      success: 'Chave da API criada com sucesso',
      text: `Salve sua chave da API! Por razões de segurança, você só poderá vê-la uma vez.`,
      subtext: `Você deve adicioná-la ao cabeçalho Authorization das suas chamadas de API.`,
      backToApiKeys: 'Voltar para Chaves da API',
    },
    list: {
      menu: 'Chaves da API',
      title: 'Chaves da API',
      viewActivity: 'Ver Atividade',
      noResults: 'Nenhuma chave da API encontrada.',
    },
    destroy: {
      confirmTitle: 'Excluir Chave da API?',
      success: 'Chave da API excluída com sucesso',
    },
    enumerators: {
      status: {
        active: 'Ativo',
        disabled: 'Desativado',
        expired: 'Expirado',
      },
    },
    fields: {
      apiKey: 'Chave da API',
      membership: 'Usuário',
      name: 'Nome',
      keyPrefix: 'Prefixo da Chave',
      key: 'Chave',
      scopes: 'Escopos',
      expiresAt: 'Expira Em',
      status: 'Status',
      createdAt: 'Criado Em',
      disabled: 'Desativado',
    },
    disabledTooltip: `Desativado em {0}.`,
    errors: {
      invalidScopes: 'escopos devem corresponder ao papel do usuário',
    },
  },

  file: {
    button: 'Enviar',
    delete: 'Excluir',
    errors: {
      formats: `Formato inválido. Deve ser um dos seguintes: {0}.`,
      notImage: `O arquivo deve ser uma imagem`,
      tooBig: `O arquivo é muito grande. O tamanho atual é {0} bytes, o tamanho máximo é {1} bytes`,
    },
  },

  auth: {
    signIn: {
      oauthError: 'Não é possível entrar com esse provedor. Use outro.',
      title: 'Entrar',
      button: 'Entrar com Email',
      success: 'Entrou com sucesso',
      email: 'Email',
      password: 'Senha',
      socialHeader: 'Ou continue com',
      facebook: 'Facebook',
      github: 'GitHub',
      google: 'Google',
      passwordResetRequestLink: 'Esqueceu a senha?',
      signUpLink: 'Não tem uma conta? Crie uma',
    },
    signUp: {
      title: 'Cadastrar',
      signInLink: 'Já tem uma conta? Entre',
      button: 'Cadastrar',
      success: 'Cadastro realizado com sucesso',
      email: 'Email',
      password: 'Senha',
    },
    verifyEmailRequest: {
      title: 'Reenviar verificação de email',
      button: 'Reenviar verificação de email',
      message:
        'Por favor, confirme seu email em <strong>{0}</strong> para continuar.',
      success: 'Verificação de email enviada com sucesso!',
    },
    verifyEmailConfirm: {
      title: 'Verifique seu email',
      success: 'Email verificado com sucesso.',
      loadingMessage: 'Só um momento, seu email está sendo verificado...',
    },
    passwordResetRequest: {
      title: 'Esqueceu a Senha',
      signInLink: 'Cancelar',
      button: 'Enviar email para redefinir senha',
      email: 'Email',
      success: 'Email para redefinição de senha enviado com sucesso',
    },
    passwordResetConfirm: {
      title: 'Redefinir Senha',
      signInLink: 'Cancelar',
      button: 'Redefinir Senha',
      password: 'Senha',
      success: 'Senha alterada com sucesso',
    },
    noPermissions: {
      title: 'Aguardando Permissões',
      message:
        'Você ainda não tem permissões. Aguarde o administrador concedê-las.',
    },
    invitation: {
      title: 'Convites',
      success: 'Convite aceito com sucesso',
      acceptWrongEmail: 'Aceitar Convite Com Este Email',
      loadingMessage: 'Só um momento, estamos aceitando o convite...',
      invalidToken: 'Token de convite expirado ou inválido.',
    },
    tenant: {
      title: 'Espaços de Trabalho',
      create: {
        name: 'Nome do Espaço de Trabalho',
        success: 'Espaço de Trabalho criado com sucesso',
        button: 'Criar Espaço de Trabalho',
      },
      select: {
        tenant: 'Selecionar um Espaço de Trabalho',
        joinSuccess: 'Entrou com sucesso no espaço de trabalho',
        select: 'Selecionar Espaço de Trabalho',
        acceptInvitation: 'Aceitar Convite',
      },
    },
    passwordChange: {
      title: 'Alterar Senha',
      subtitle: 'Forneça sua senha antiga e nova.',
      menu: 'Alterar Senha',
      oldPassword: 'Senha Antiga',
      newPassword: 'Nova Senha',
      newPasswordConfirmation: 'Confirmação da Nova Senha',
      button: 'Salvar Senha',
      success: 'Senha alterada com sucesso',
      mustMatch: 'As senhas devem coincidir',
      cancel: 'Cancelar',
    },
    profile: {
      title: 'Perfil',
      subtitle:
        'Seu perfil será compartilhado com outros usuários no seu espaço de trabalho.',
      menu: 'Perfil',
      firstName: 'Primeiro Nome',
      lastName: 'Sobrenome',
      avatars: 'Avatar',
      button: 'Salvar Perfil',
      success: 'Perfil salvo com sucesso',
      cancel: 'Cancelar',
    },
    profileOnboard: {
      title: 'Perfil',
      firstName: 'Primeiro Nome',
      lastName: 'Sobrenome',
      avatars: 'Avatar',
      button: 'Salvar Perfil',
      success: 'Perfil salvo com sucesso',
    },
    signOut: {
      menu: 'Sair',
      button: 'Sair',
      title: 'Sair',
      loading: 'Você está sendo desconectado...',
    },
    errors: {
      invalidApiKey: 'Chave de API inválida ou expirada',
      emailNotFound: 'Email não encontrado',
      userNotFound: 'Desculpe, não reconhecemos suas credenciais',
      wrongPassword: 'Desculpe, não reconhecemos suas credenciais',
      weakPassword: 'Esta senha é muito fraca',
      emailAlreadyInUse: 'Email já está em uso',
      invalidPasswordResetToken:
        'Link para redefinir senha é inválido ou expirou',
      invalidVerifyEmailToken:
        'Link para verificar email é inválido ou expirou',
      wrongOldPassword: 'A senha antiga está errada',
    },
  },

  tenant: {
    switcher: {
      title: 'Espaços de Trabalho',
      placeholder: 'Selecione um Espaço de Trabalho',
      searchPlaceholder: 'Pesquisar espaço de trabalho...',
      searchEmpty: 'Nenhum espaço de trabalho encontrado.',
      create: 'Criar Espaço de Trabalho',
    },

    invite: {
      title: `Aceitar Convite para {0}`,
      message: `Você foi convidado para {0}. Você pode escolher aceitar ou recusar.`,
    },

    form: {
      name: 'Nome',

      new: {
        title: 'Criar Espaço de Trabalho',
        success: 'Espaço de Trabalho criado com sucesso',
      },

      edit: {
        title: 'Configurações do Espaço de Trabalho',
        success: 'Espaço de Trabalho atualizado com sucesso',
      },
    },

    destroy: {
      success: 'Espaço de Trabalho excluído com sucesso',
      confirmTitle: 'Deletar Espaço de Trabalho?',
      confirmDescription:
        'Tem certeza de que deseja excluir o espaço de trabalho {0}? Esta ação é irreversível!',
    },
  },

  membership: {
    dashboardCard: {
      title: 'Usuários',
    },

    showActivity: 'Atividade',

    view: {
      title: 'Ver Usuário',
    },

    list: {
      menu: 'Usuários',
      title: 'Usuários',
      noResults: 'Nenhum usuário encontrado.',
    },

    export: {
      success: 'Usuários exportados com sucesso',
    },

    edit: {
      menu: 'Editar Usuário',
      title: 'Editar Usuário',
      success: 'Usuário atualizado com sucesso',
    },

    new: {
      menu: 'Novo Usuário',
      title: 'Novo Usuário',
      success: 'Usuário criado com sucesso',
    },

    destroyMany: {
      success: 'Usuário(s) deletado(s) com sucesso',
      noSelection: 'Você deve selecionar pelo menos um usuário para deletar.',
      confirmTitle: 'Deletar Usuário(s)?',
      confirmDescription:
        'Tem certeza de que deseja deletar os {0} usuários selecionados?',
    },

    destroy: {
      success: 'Usuário deletado com sucesso',
      noSelection: 'Você deve selecionar pelo menos um usuário para deletar.',
      confirmTitle: 'Deletar Usuário?',
    },

    resendInvitationEmail: {
      button: 'Reenviar Email de Convite',
      success: 'Email de convite reenviado com sucesso',
    },

    fields: {
      avatars: 'Avatar',
      fullName: 'Nome Completo',
      firstName: 'Primeiro Nome',
      lastName: 'Sobrenome',
      email: 'Email',
      roles: 'Funções',
      status: 'Status',
    },

    enumerators: {
      roles: {
        admin: 'Admin',
        custom: 'Custom',
      },

      status: {
        invited: 'Convidado',
        active: 'Ativo',
        disabled: 'Desativado',
      },
    },

    errors: {
      cannotRemoveSelfAdminRole:
        'Você não pode remover seu próprio papel de admin',
      cannotDeleteSelf: 'Você não pode remover sua própria associação',
      notInvited: 'Você não está convidado',
      invalidStatus: `Status inválido: {0}`,
      alreadyMember: `{0} já é um membro`,
      notSameEmail: `Este convite foi enviado para {0}, mas você está logado como {1}. Deseja continuar?`,
    },
  },

  subscription: {
    menu: 'Assinatura',
    title: 'Planos e Preços',
    current: 'Plano Atual',

    subscribe: 'Assinar',
    manage: 'Gerenciar',
    notPlanUser: 'Você não é o gerente desta assinatura.',
    cancelAtPeriodEnd: 'Este plano será cancelado no final do período.',

    plans: {
      free: {
        title: 'Grátis',
        price: 'R$0',
        pricingPeriod: '/mês',
        features: {
          first: 'Primeira descrição do recurso',
          second: 'Segunda descrição do recurso',
          third: 'Terceira descrição do recurso',
        },
      },
      basic: {
        title: 'Básico',
        price: 'R$10',
        pricingPeriod: '/mês',
        features: {
          first: 'Primeira descrição do recurso',
          second: 'Segunda descrição do recurso',
          third: 'Terceira descrição do recurso',
        },
      },
      enterprise: {
        title: 'Empresarial',
        price: 'R$50',
        pricingPeriod: '/mês',
        features: {
          first: 'Primeira descrição do recurso',
          second: 'Segunda descrição do recurso',
          third: 'Terceira descrição do recurso',
        },
      },
    },

    errors: {
      disabled: 'As assinaturas estão desativadas nesta plataforma',
      alreadyExistsActive: 'Já existe uma assinatura ativa',
      stripeNotConfigured: 'As variáveis de ambiente do Stripe estão faltando',
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
      noResults: 'Nenhum datasources encontrado.',
    },

    export: {
      success: 'DataSources exportados com sucesso',
    },

    new: {
      menu: 'Novo DataSource',
      title: 'Novo DataSource',
      success: 'DataSource criado com sucesso',
    },

    view: {
      title: 'Ver DataSource',
    },

    edit: {
      menu: 'Editar DataSource',
      title: 'Editar DataSource',
      success: 'DataSource atualizado com sucesso',
    },

    destroyMany: {
      success: 'DataSource(s) excluído(s) com sucesso',
      noSelection: 'Você deve selecionar pelo menos um DataSource para excluir.',
      confirmTitle: 'Excluir DataSource(s)?',
      confirmDescription:
        'Tem certeza de que deseja excluir os {0} DataSource(s) selecionados?',
    },

    destroy: {
      success: 'DataSource excluído com sucesso',
      noSelection: 'Você deve selecionar pelo menos um DataSource para excluir.',
      confirmTitle: 'Excluir DataSource?',
    },

    fields: {
      name: 'Name',
      sourceType: 'Source Type',
      sizeInTiB: 'Size in TiB',
      sourceURL: 'Source URL',
      dataset: 'Dataset',
      createdByMembership: 'Criado Por',
      updatedByMembership: 'Atualizado Por',
      createdAt: 'Criado em',
      updatedAt: 'Atualizado em',
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
      noResults: 'Nenhum datasets encontrado.',
    },

    export: {
      success: 'DataSets exportados com sucesso',
    },

    new: {
      menu: 'Novo DataSet',
      title: 'Novo DataSet',
      success: 'DataSet criado com sucesso',
    },

    view: {
      title: 'Ver DataSet',
    },

    edit: {
      menu: 'Editar DataSet',
      title: 'Editar DataSet',
      success: 'DataSet atualizado com sucesso',
    },

    destroyMany: {
      success: 'DataSet(s) excluído(s) com sucesso',
      noSelection: 'Você deve selecionar pelo menos um DataSet para excluir.',
      confirmTitle: 'Excluir DataSet(s)?',
      confirmDescription:
        'Tem certeza de que deseja excluir os {0} DataSet(s) selecionados?',
    },

    destroy: {
      success: 'DataSet excluído com sucesso',
      noSelection: 'Você deve selecionar pelo menos um DataSet para excluir.',
      confirmTitle: 'Excluir DataSet?',
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
      createdByMembership: 'Criado Por',
      updatedByMembership: 'Atualizado Por',
      createdAt: 'Criado em',
      updatedAt: 'Atualizado em',
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
      noResults: 'Nenhum datacaps encontrado.',
    },

    export: {
      success: 'DataCaps exportados com sucesso',
    },

    new: {
      menu: 'Novo DataCap',
      title: 'Novo DataCap',
      success: 'DataCap criado com sucesso',
    },

    view: {
      title: 'Ver DataCap',
    },

    edit: {
      menu: 'Editar DataCap',
      title: 'Editar DataCap',
      success: 'DataCap atualizado com sucesso',
    },

    destroyMany: {
      success: 'DataCap(s) excluído(s) com sucesso',
      noSelection: 'Você deve selecionar pelo menos um DataCap para excluir.',
      confirmTitle: 'Excluir DataCap(s)?',
      confirmDescription:
        'Tem certeza de que deseja excluir os {0} DataCap(s) selecionados?',
    },

    destroy: {
      success: 'DataCap excluído com sucesso',
      noSelection: 'Você deve selecionar pelo menos um DataCap para excluir.',
      confirmTitle: 'Excluir DataCap?',
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
      createdByMembership: 'Criado Por',
      updatedByMembership: 'Atualizado Por',
      createdAt: 'Criado em',
      updatedAt: 'Atualizado em',
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
      menu: 'Logs de Auditoria',
      title: 'Logs de Auditoria',
      noResults: 'Nenhum log de auditoria encontrado.',
    },

    changesDialog: {
      title: 'Log de Auditoria',
      changes: 'Mudanças',
      noChanges: 'Não há mudanças neste log.',
    },

    export: {
      success: 'Logs de Auditoria exportados com sucesso',
    },

    fields: {
      timestamp: 'Data',
      entityName: 'Entidade',
      entityNames: 'Entidades',
      entityId: 'ID da Entidade',
      operation: 'Operação',
      operations: 'Operações',
      membership: 'Usuário',
      apiKey: 'Chave da API',
      apiEndpoint: 'Endpoint da API',
      apiHttpResponseCode: 'Status da API',
      transactionId: 'ID da Transação',
    },

    enumerators: {
      operation: {
        SI: 'Entrou',
        SO: 'Saiu',
        SU: 'Cadastrou-se',
        PRR: 'Solicitou Redefinição de Senha',
        PRC: 'Confirmou Redefinição de Senha',
        PC: 'Alterou Senha',
        VER: 'Solicitou Verificação de Email',
        VEC: 'Confirmou Verificação de Email',
        C: 'Criou',
        U: 'Atualizou',
        D: 'Excluiu',
        AG: 'API Get',
        APO: 'API Post',
        APU: 'API Put',
        AD: 'API Delete',
      },
    },

    dashboardCard: {
      activityChart: 'Atividade',
      activityList: 'Atividade Recente',
    },

    readableOperations: {
      SI: '{0} entrou',
      SU: '{0} se registrou',
      PRR: '{0} solicitou redefinição de senha',
      PRC: '{0} confirmou redefinição de senha',
      PC: '{0} alterou a senha',
      VER: '{0} solicitou verificação de email',
      VEC: '{0} verificou o email',
      C: '{0} criou {1} {2}',
      U: '{0} atualizou {1} {2}',
      D: '{0} excluiu {1} {2}',
    },
  },

  recaptcha: {
    errors: {
      disabled:
        'O reCAPTCHA está desativado nesta plataforma. Verificação ignorada.',
      invalid: 'reCAPTCHA inválido',
    },
  },

  emails: {
    passwordResetEmail: {
      subject: `Redefina sua senha para {0}`,
      content: `<p>Olá,</p> <p>Siga este link para redefinir a senha da sua conta {0}.</p> <p><a href="{1}">{1}</a></p> <p>Se você não solicitou a redefinição de senha, pode ignorar este e-mail.</p> <p>Obrigado,</p> <p>Equipe {0}</p>`,
    },
    verifyEmailEmail: {
      subject: `Verifique seu e-mail para {0}`,
      content: `<p>Olá,</p><p>Siga este link para verificar seu endereço de e-mail.</p><p><a href="{1}">{1}</a></p><p>Se você não solicitou essa verificação, pode ignorar este e-mail.</p> <p>Obrigado,</p> <p>Equipe {0}</p>`,
    },
    invitationEmail: {
      singleTenant: {
        subject: `Você foi convidado para {0}`,
        content: `<p>Olá,</p> <p>Você foi convidado para {0}.</p> <p>Siga este link para se registrar.</p> <p><a href="{1}">{1}</a></p> <p>Obrigado,</p> <p>Equipe {0}</p>`,
      },
      multiTenant: {
        subject: `Você foi convidado para {1} em {0}`,
        content: `<p>Olá,</p> <p>Você foi convidado para {2}.</p> <p>Siga este link para se registrar.</p> <p><a href="{1}">{1}</a></p> <p>Obrigado,</p> <p>Equipe {0}</p>`,
      },
    },
    errors: {
      emailNotConfigured: 'Variáveis de ambiente de e-mail estão faltando',
    },
  },
};

export default dictionary;
