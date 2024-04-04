const areasData = [{
    faculdade: 'FACE',
    area: 'Administração Geral / Gestão de Materiais e Logística',
    pontosSorteados: [],
    pontos: [
        '1 - A Evolução do Pensamento em Administração',
        '2 - Áreas Funcionais da Administração',
        '3 - Administração Patrimonial',
        '4 - Gestão de Estoques',
        '5 - Normalização e Classificação de Materiais'
    ]
  },
  {
    faculdade: 'FACE',
    area: 'Administração Geral / Gestão de Pessoas',
    pontosSorteados: [],
    pontos: [
        '1 - A Evolução do Pensamento em Administração',
        '2 - Áreas Funcionais da Administração',
        '3 - Gestão por Competências',
        '4 - Gestão Estratégica de Pessoas',
        '5 - Gestão de Qualidade de Vida no Trabalho'
    ]
  },
  {
    faculdade: 'FACET',
    area: 'Ciência da Computação / Algoritmos e Teoria da Computação',
    pontosSorteados: [],
    pontos: [
        '1 - Vetores, matrizes e registros',
        '2 - Algoritmos de Ordenação',
        '3 - Operações e relações em conjuntos',
        '4 - Pilhas e filas',
        '5 - Autômatos finitos'
    ]
  },
  {
    faculdade: 'FCS',
    area: 'Ciências dos Alimentos',
    pontosSorteados: [],
    pontos: [
        '1 - Estudo dos componentes alimentares.',
        '2 - Classificação dos grupos alimentares.',
        '3 - Toxicologia de alimentos.',
        '4 - Boas práticas de fabricação de alimentos.',
        '5 - Controle de qualidade de alimentos.'
    ]
  },
  {
    faculdade: 'FAIND',
    area: 'Ciências Humanas / Ensino Intercultural em Ciências Humanas',
    pontosSorteados: [],
    pontos: [
        '1 - Ensino de Ciências Humanas na escola de educação básica Guarani e Kaiowa numa perspectiva Intercultural e decolonial',
        '2 - A territorialidade Guarani e Kaiowa e o Ensino de Ciências Humanas na escola indígena',
        '3 - A interculturalidade e a interdisciplinaridade no ensino de Ciências Humanas na escola Guarani e Kaiowa',
        '4 - A pedagogia da alternância na formação de docentes Guarani e Kaiowa',
        '5 - O uso das línguas Guarani e Kaiowa no ensino de Ciências Humanas'
    ]
  },
  {
    faculdade: 'FCS',
    area: 'Dietética',
    pontosSorteados: [],
    pontos: [
        '1 - Classificação NOVA e o Guia alimentar para a população brasileira.',
        '2 - Avaliação do estado nutricional de praticantes de atividade física.',
        '3 - Planejamento de intervenção nutricional para diferentes modalidades esportivas, em diferentes momentos da competição.',
        '4 - Fisiologia da gestação.',
        '5 - Avaliação do estado nutricional e planejamento dietético para gestantes.'
    ]
  },
  {
    faculdade: 'FADIR',
    area: 'Direito Penal e Direito Processual Penal',
    pontosSorteados: [],
    pontos: [
        '1 - Princípios do Direito Penal',
        '2 - Teoria do Crime',
        '3 - Princípios do Processo Penal',
        '4 - Medidas Cautelares de natureza pessoal no processo penal',
        '5 - Nulidades no Processo Penal'
    ]
  },
  {
    faculdade: 'FACE',
    area: 'Economia / Teoria Econômica',
    pontosSorteados: [],
    pontos: [
        '1 - Mercado de bens e modelos Keynesianos simples de determinação de renda e IS-LM.',
        '2 - Teoria Elementar da Oferta e da Demanda',
        '3 - Teoria do consumidor.',
        '4 - Estruturas de Mercado.',
        '5 - A economia brasileira pós Plano Real.'
    ]
  },
  {
    faculdade: 'FAEN',
    area: 'Engenharia de Alimentos / Ciência e Tecnologia de Alimentos',
    pontosSorteados: [],
    pontos: [
        '1 - Parâmetros de qualidade da carne fresca.',
        '2 - Processamento de carnes e derivados.',
        '3 - Ferramentas da Qualidade.',
        '4 - Fundamentos para Representações Gráficas.',
        '5 - Métodos sensoriais discriminativos.'
    ]
  },
  {
    faculdade: 'FAEN',
    area: 'Engenharia de Produto e Gestão da Qualidade',
    pontosSorteados: [],
    pontos: [
        '1 - Modelo de referência para gestão do desenvolvimento de produto.',
        '2 - Projeto informacional e conceitual de desenvolvimento de produto.',
        '3 - Ferramentas e abordagens para melhoria da qualidade.',
        '4 - Modelos de referência para o gerenciamento da qualidade.',
        '5 - Análise de riscos e falhas em produtos e processos.'
    ]
  },
  {
    faculdade: 'FACET',
    area: 'Ensino de Matemática',
    pontosSorteados: [],
    pontos: [
        '1 - A formação de professores de Matemática: desafios e perspectivas.',
        '2 - Tecnologias digitais na formação de professores de matemática e suas relações com a Educação Básica.',
        '3 - Estágios supervisionados na formação inicial de professores de Matemática.',
        '4 - O Tratamento da Informação na formação de professores de matemática e suas relações com a Educação Básica.',
        '5 - História da Matemática na formação de professores de matemática e suas relações com a Educação Básica.'
    ]
  },
  {
    faculdade: 'FACET',
    area: 'Estatística',
    pontosSorteados: [],
    pontos: [
        '1 - Estatística Descritiva.',
        '2 - Distribuições de probabilidade.',
        '3 - Teoria da Estimação: Intervalos de Confiança.',
        '4 - Testes de hipóteses.',
        '5 - Correlação e Regressão Linear.'
    ]
  },
  {
    faculdade: 'FAEN',
    area: 'Gestão de Projetos e Pesquisa Operacional',
    pontosSorteados: [],
    pontos: [
        '1 - Viabilidade econômica em projetos.',
        '2 - Introdução à pesquisa operacional e à modelagem de sistemas.',
        '3 - Planejamento e controle de projetos: escopo, cronograma e orçamento.',
        '4 - Teoria da decisão para estratégias de produção.',
        '5 - Luminotécnica.'
    ]
  },
  {
    faculdade: 'EaD',
    area: 'Libras / Linguística',
    pontosSorteados: [],
    pontos: [
        '1 - Aspectos linguísticos da Libras: Língua Brasileira de Sinais.',
        '2 - O sujeito surdo: conceitos, cultura e relação histórica da surdez com a língua de sinais.',
        '3 - Desafios do ensino de Libras no ensino superior: presencial, híbrido e EaD.',
        '4 - Linguística aplicada ao ensino da língua brasileira de sinais: desafios da didática na educação de surdos.',
        '5 - Sistemas de escrita de Línguas de Sinais.'
    ]
  },
  {
    faculdade: 'FALE',
    area: 'Linguística e Língua Portuguesa',
    pontosSorteados: [],
    pontos: [
        '1 - Concepções teóricas de língua, linguagem, gramática e ensino de línguas',
        '2 - Gêneros discursivos acadêmicos',
        '3 - Língua e discurso',
        '4 - Linguagem, sociedade e escola: norma, uso, variação e preconceito linguístico',
        '5 - Texto e textualidade no ensino de língua portuguesa e nos gêneros discursivos'
    ]
  },
  {
    faculdade: 'FAED',
    area: 'Pedagogia / Educação Especial',
    pontosSorteados: [],
    pontos: [
        '1 - História da Educação Especial.',
        '2 - Políticas públicas de Educação Especial.',
        '3 - Inclusão escolar: raízes históricas, definição e características.',
        '4 - O atendimento educacional especializado voltado ao aluno público alvo da Educação Especial.',
        '5 - Práticas pedagógicas inclusivas'
    ]
  },
  {
    faculdade: 'FAED',
    area: 'Pedagogia / Formação de Professores / Currículo e Ensino da Matemática e Estágio',
    pontosSorteados: [],
    pontos: [
        '1 - Recursos e materiais manipuláveis para o ensino da Matemática.',
        '2 - O ensino da Matemática na Educação Infantil',
        '3 - O ensino do sistema de numeração nos anos iniciais do Ensino Fundamental',
        '4 - As Operações Matemáticas nos Anos Iniciais do Ensino Fundamental',
        '5 - Práticas pedagógicas de Matemática e Estágio Supervisionados.'
    ]
  },
  {
    faculdade: 'FAED',
    area: 'Pedagogia / Política e Gestão da Educação',
    pontosSorteados: [],
    pontos: [
        '1 - Políticas educacionais para a Educação Básica.',
        '2 - Organização e gestão da educação escolar.',
        '3 - Gestão educacional e escolar.',
        '4 - Planejamento Educacional Brasileiro.',
        '5 - Medidas e avaliação da educação'
    ]
  },
  {
    faculdade: 'FALE',
    area: 'Processos de Criação e Pedagogia das Artes Cênicas',
    pontosSorteados: [],
    pontos: [
        '1 - Abordagens metodológicas do ensino de atuação.',
        '2 - Treinamento físico: diretrizes para a composição do papel.',
        '3 - A atuação teatral e suas relações com outras áreas: circo, dança e performance.',
        '4 - Procedimentos metodológicos da pedagogia teatral contemporânea.',
        '5 - Linguagem Teatral e Educação Infantil.'
    ]
  },
  {
    faculdade: 'FCH',
    area: 'Psicologia Clínica / Terapia Familiar Sistêmica',
    pontosSorteados: [],
    pontos: [
        '1 - Paradigma sistêmico e terapia familiar sistêmica;',
        '2 - O campo da terapia familiar sistêmica: dos pioneiros aos contemporâneos;',
        '3 - Avaliação do funcionamento familiar e psicoterapias;',
        '4 - O ciclo de vida familiar;',
        '5 - Problemas familiares e intervenção clínica.'
    ]
  },
  {
    faculdade: 'FCH',
    area: 'Psicologia Escolar',
    pontosSorteados: [],
    pontos: [
        '1 - A atuação do psicólogo na escola;',
        '2 - Educação Especial e Educação inclusiva;',
        '3 - Problemas de aprendizagem; A queixa escolar e a medicalização na escola;',
        '4 - História do ensino e da escola; Psicologia Escolar;',
        '5 - Psicologia do trabalho e as organizações; Saúde mental e trabalho.'
    ]
  }
];
