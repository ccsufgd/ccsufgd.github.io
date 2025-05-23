const areasData = [
  {
    faculdade: "FCA",
    area: "Animais Aquáticos Cultiváveis",
    pontosSorteados: [],
    pontos: [
      "1 - Peixes ornamentais.",
      "2 - Ranicultura.",
      "3 - Produção de jacarés e quelônios.",
      "4 - Alimentação na larvicultura.",
      "5 - Produção de peixes aplicados à isca viva.",
      "6 - Produção de moluscos.",
    ],
  },
  {
    faculdade: "FCA",
    area: "Aquicultura",
    pontosSorteados: [],
    pontos: [
      "1 - Produção de peixes nativos.",
      "2 - Tilapicultura.",
      "3 - Qualidade de água: compostos nitrogenados.",
      "4 - Oxigênio dissolvido: importância e aplicação",
      "5 - Doenças emergentes.",
      "6 - Profilaxia na aquicultura.",
    ],
  },
  {
    faculdade: "FCS",
    area: "Clínica Médica: Reumatologia e Imunologia Clínica",
    pontosSorteados: [],
    pontos: [
      "1 - Imunodeficiências primárias.",
      "2 - Mecanismos de regulação do sistema imunológico.",
      "3 - Sarcoidose.",
      "4 - Doenças autoinflamatórias hereditárias.",
      "5 - Febre reumática aguda.",
      "6 - Lúpus Eritematoso Sistêmico.",
      "7 - Miopatias inflamatórias.",
    ],
  },
  {
    faculdade: "FACET",
    area: "Computação/Automação Industrial",
    pontosSorteados: [],
    pontos: [
      "1 - Arquiteturas e programação de microcontroladores com linguagens de baixo e alto níveis.",
      "2 - Sensores e transdutores analógicos e digitais (indutivos, capacitivos, resistivos, óticos, ultrassom, de efeito hall).",
      "3 - Programação de Controlador Lógico Programável (CLP).",
      "4 - Redes locais industriais: características das redes industriais, projetos de padronização, protocolos industriais de comunicação.",
      "5 - Corrente contínua: leis básicas, teoremas e métodos de análise em circuitos; Circuitos de Primeira Ordem e de Segunda Ordem.",
      "6 - Sinais e Sistemas Lineares; Análise de sistemas em tempo contínuo e discreto pela transformada de Laplace; Análise de Fourier.",
      "7 - Materiais Semicondutores; Diodos Semicondutores; Transistores Bipolares e Transistores de Efeito de Campo: Funcionamento, circuitos básicos e polarização.",
    ],
  },
  {
    faculdade: "FACET",
    area: "Computação/Redes de Computadores",
    pontosSorteados: [],
    pontos: [
      "1 - Algoritmos e Protocolos de Roteamento, roteamento com vetor de distância, estado de enlace, roteamento hierárquico, por difusão, por multidifusão, roteamento para hosts móveis, roteamento em redes ad-hoc, protocolos RIP, OSPF BGP.",
      "2 - Protocolo de Transporte TCP (modelo de serviço, cabeçalho, estabelecimento de conexão, encerramento de conexão, gerenciamento de conexão, controle de congestionamento, políticas de transmissão e gerenciamento de timers do protocolo TCP). Protocolo de Transporte UDP.",
      "3 - LANs sem Fio de banda larga, protocolos de redes locais WiFi 802.11 A,B,G,N,AC e AX (pilha de protocolos, camada física, protocolo da subcamada MAC, estrutura do quadro).",
      "4 - Criptografia, Algoritmos de chave simétrica (DES, AES), modos de cifra, algoritmos de chave pública (RSA).",
      "5 - Algoritmos de controle de congestionamento, princípios de controle de congestionamento, políticas de prevenção de congestionamento, controle de congestionamento em sub-redes de circuitos virtuais, controle de congestionamento em sub-redes de datagrama, escoamento de carga, controle de flutuação. Qualidade de Serviço, requisitos, serviços integrados, serviços diferenciados, classificações, marcação, e policiamento.",
      "6 - Assinaturas e certificados digitais, gerenciamento de chaves públicas (certificados, x.509), infraestrutura de chave pública.",
      "7 - Segurança da comunicação, IPSec, Firewall, IDS, VPN.",
    ],
  },
  {
    faculdade: "FACET",
    area: "Computação/Sistemas Distribuídos",
    pontosSorteados: [],
    pontos: [
      "1 - Arquiteturas de sistemas distribuídos.",
      "2 - Comunicação usando processos e threads (Sockets e Message Passing).",
      "3 - Sincronização com relógios lógicos e físicos.",
      "4 - Estados Globais.",
      "5 - Exclusão Mútua Distribuída.",
      "6 - Eleição de Líder.",
      "7 - Multicast.",
      "8 - Consenso.",
      "9 - Replicação.",
    ],
  },
  {
    faculdade: "FADIR",
    area: "Direito Privado",
    pontosSorteados: [],
    pontos: [
      "1 - Propriedade industrial, intelectual, direitos autorais e software; órgãos de registro e procedimento; cessão e perda.",
      "2 - Títulos de crédito; protesto; exequibilidade; defesas reais e pessoais; prescrição.",
      "3 - Empresa e empresário: sociedades, sócio e administrador; sistema de registros, atos, procedimentos e impugnações; enquadramento, suas alterações e proibições; dissolução.",
      "4 - Recuperação extrajudicial e direito falimentar: requisitos e efeitos; pedido de homologação da recuperação, sua impugnação e sentença; ações para com o administrador judicial e a atuação do falido.",
      "5 - Comércio eletrônico: O comércio eletrônico e as relações interempresariais; Contrato eletrônico: princípios e regras, requisitos de validade e formação. Problemas práticos.",
      "6 - A Lei de Introdução às Normas do Direito Brasileiro com as inovações introduzidas pela lei n. 13.655, de 25 de abril de 2018.",
      "7 - Conceitos e elementos essenciais constitutivos da relação obrigacional.",
      "8 - Pressupostos da responsabilidade civil e a responsabilidade civil nos meios eletrônicos.",
      "9 - Pressupostos e requisitos da responsabilidade civil.",
      "10 - A constitucionalização do direito privado, no tocante aos princípios contratuais e à sua função social.",
    ],
  },
  {
    faculdade: "FADIR",
    area: "Direito Público",
    pontosSorteados: [],
    pontos: [
      "1 - Princípios do direito administrativo. Subtópicos: 01.1 Legalidade. 01.2 Supremacia do Interesse público. 01.03 Impessoalidade. 01.04 Presunção de legitimidade ou de veracidade. 01.05 Especialidade. 01.6 Controle ou Tutela. 02.7 Autotutela. 01.8 Hierarquia. 01.9 Continuidade. 01.10 Publicidade. 01.11 Moralidade. 01.12 Razoabilidade. 01.13 Motivação. 01.14 Eficiência. 01.14 Segurança Jurídica.",
      "2 - Atos administrativos. Subtópicos: 02.1 Atos da Administração.02.2 Conceito. 02.3 Atributos. 02.4 Elementos. 02.5 Discricionariedade. 02.6 Legalidade. 02.07 Classificação. 02.8 Controle Judicial dos Atos Administrativos. 02.9 Atos Administrativos em Espécie. 02.10 Extinção dos Atos Administrativos. 02.11 Anulação ou invalidação.02.12 Vícios dos atos administrativos e suas consequências. 02.13 Confirmação e Revogação.",
      "3 - Organização da Administração Pública. Subtópicos: 03.1 Administração Pública e organização administrativa. 03.2 Órgãos públicos. 03.3 Administração pública direita e indireta: autarquias, agências reguladoras, fundações públicas, agências executivas e empresas estatais. 03.4 Regimes jurídicos dos diversos órgãos da administração pública.",
      "4 - Licitações. Subtópicos: 04.1 Conceito. 04.2 Princípios. 04.3 Modalidades. 04.4 Procedimento. 04.5 Sistema de registro de preços. 04.6 Anulação e revogação. 04.7 Recursos Administrativos. 04.8 Licitação no Regime Diferenciado de Contratação.",
      "5 - Processo Administrativo. Subtópicos: 05.1 Processos Estatais. 05.2 Modalidades. 05.3 Princípios. 05.4 Processo Administrativo Disciplinar. 05.5 Processo Sumário",
      "6 - Atividade financeira do Estado. Subtópicos: 06.1 Conceito, natureza e funções. 06.2 Autonomia e relação do Direito Financeiro com o Direito Tributário. 06.3 Federalismo fiscal, cidadania fiscal, educação fiscal. 06.4 Constituição financeira, sistemas tributário e orçamentário; 06.5. Fontes do Direito Financeiro.",
      "7 - Orçamento Público. Subtópicos: 07.1 Conceito, aspectos, espécies e natureza jurídico do orçamento público. 07.2 Princípios orçamentários. 07.3 Leis orçamentárias. 07.4. Controle do orçamento público e a Lei de Responsabilidade Fiscal em perspectiva. 07.5 Aspectos polêmicos do orçamento público na jurisprudência do STF.",
      "8 - Competência tributária e limitações constitucionais ao poder de tributar. Subtópicos: 08.1 Conceito e caracterização. 08.2 Legalidade. 08.3 Isonomia. 08.4 Irretroatividade. 08.5 Anterioridade. 08.6 Não confisco. 08.7 Liberdade de tráfego. 08.8 Imunidades.",
      "9 - Tributos em espécie. Subtópicos: 09.1 Conceito de tributo. 09.2. Classificação dos tributos: visão constitucional, doutrinária e jurisprudencial. 09.2.1 Impostos federais, estaduais e municipais. 09.2.2 Taxas. 09.2.3. Contribuição de melhoria. 09.2.4 Contribuições. 09.2.5. Empréstimos compulsórios. 9.3 Tributos em espécie e a inovações promovidas pela reforma tributária (Emenda Constitucional nº 132, de 2023)",
      "10 - Obrigação tributária. Subtópicos: 10.1 Conceito e espécies. 10.2 Fato gerador: conceito e classificações. 10.2.1 Planejamento tributário e normal geral antielisão. 10.3 Sujeito ativo. 10.4. Sujeito passivo. 10.5. Responsabilidade tributária",
    ],
  },
  {
    faculdade: "FACET",
    area: "Educação Matemática",
    pontosSorteados: [],
    pontos: [
      "1 - Articulações entre o ensino de estatística e o uso de tecnologias: desafios e possibilidades da equidade na Licenciatura em Matemática e na Educação Básica.",
      "2 - Ensino de álgebra e metodologias de ensino: saberes docentes e possibilidades para uma educação matemática inclusiva.",
      "3 - O Estágio Supervisionado: a constituição da identidade profissional do professor de matemática e o compromisso político docente na Educação Básica.",
      "4 - Articulações entre o ensino de funções e o uso de tecnologias: propostas didático-pedagógicas de educação matemática para a diversidade étnico-racial.",
      "5 - Currículo e ensino de geometria: possibilidades e desafios pedagógicos no desenvolvimento de uma perspectiva multicultural.",
      "6 - Educação financeira na perspectiva da educação matemática crítica: potencialidades para a problematização das questões sociais e a formação emancipatória dos sujeitos.",
    ],
  },
  {
    faculdade: "FAEN",
    area: "Engenharia Civil / Geotecnia",
    pontosSorteados: [],
    pontos: [
      "1 - Granulometria e limites de consistência do solo.",
      "2 - Índices físicos, classificação e compactação dos solos.",
      "3 - Tensões geostáticas e acréscimos de tensão devido a cargas aplicadas.",
      "4 - Resistência ao cisalhamento dos solos.",
      "5 - Recalques e adensamento dos solos.",
      "6 - Obras de terra e estabilidade de taludes.",
      "7 - Tipos de fundações. Critérios para seleção e escolha do tipo de fundação.",
      "8 - Fundações profundas. Fundações diretas.",
      "9 - Dimensionamento de pavimentos rígidos e flexíveis.",
      "10 - Drenagem de pavimentos e Manutenção de pavimentos.",
    ],
  },
  {
    faculdade: "FAEN",
    area: "Engenharia Civil / Hidrotecnia",
    pontosSorteados: [],
    pontos: [
      "1 - Gestão dos serviços públicos de saneamento básico.",
      "2 - Dimensionamento de sistemas de microdrenagem urbana.",
      "3 - Perda de carga distribuída.",
      "4 - Sistemas elevatórios: bombas.",
      "5 - Estruturas hidráulicas de reservação e controle.",
      "6 - Escoamento permanente em canais.",
      "7 - Hidrologia estatística.",
      "8 - Dimensionamento e elaboração de projetos de instalações prediais de águas pluviais.",
      "9 - Sistemas de abastecimento de água e suas partes constitutivas.",
      "10 - Dimensionamento e elaboração de projetos de instalações prediais de água fria.",
    ],
  },
  {
    faculdade: "FAEN",
    area: "Engenharia da Qualidade e do Trabalho",
    pontosSorteados: [],
    pontos: [
      "1 - Gestão da qualidade e gerência da qualidade total.",
      "2 - Modelo Seis Sigma.",
      "3 - Controle Estatístico do Processo.",
      "4 - Custos da qualidade e variáveis econômicas envolvidas na gestão da qualidade.",
      "5 - Análise Ergonômica do Trabalho.",
      "6 - Qualidade de vida no trabalho.",
      "7 - Liderança e gestão de pessoas.",
      "8 - Projetos de postos de trabalho.",
      "9 - Prototipagem rápida; simulação aplicada aos processos de fabricação",
    ],
  },
  {
    faculdade: "FAEN",
    area: "Engenharia de Produção",
    pontosSorteados: [],
    pontos: [
      "1 - Automação dos Processos Industriais.",
      "2 - Tecnologias da Indústria 4.0 aplicadas à engenharia.",
      "3 - Diagrama de equilíbrio de fases.",
      "4 - Ensaios de tração e compressão.",
      "5 - Perdas de carga distribuída e localizadas em tubulações.",
      "6 - Equilíbrio dos Corpos Rígidos.",
      "7 - Controle numérico computadorizado (CNC) aplicado na engenharia.",
      "8 - Liderança e gestão de pessoas.",
    ],
  },
  {
    faculdade: "FAEN",
    area: "Engenharia Mecânica/ Ciências Térmicas",
    pontosSorteados: [],
    pontos: [
      "1 - Ciclo a Vapor de Carnot.",
      "2 - Ciclos de Combustão Interna Otto e Diesel – ideais e reais; análises conforme 1a e 2a Lei da Termodinâmica; Eficiência térmica.",
      "3 - Ciclos de Potência a Gás Brayton e Propulsão a Jato – ideais e reais; análises conforme 1a e 2ª Lei da Termodinâmica; eficiência térmica.",
      "4 - Ciclos de Potência a Vapor Rankine – ideais e reais; análises conforme 1a e 2a Lei da Termodinâmica; eficiência térmica.",
      "5 - Ciclo Reverso de Carnot.",
      "6 - Ciclo de Refrigeração por Compressão de Vapor; análises conforme 1a e 2a Lei da Termodinâmica; eficiência térmica.",
      "7 - Cogeração: análise termodinâmica.",
      "8 - Gerador de vapor: Caldeiras aquatubulares e flamotubulares.",
    ],
  },
  {
    faculdade: "FAEN",
    area: "Engenharia Mecânica/ Materiais e Processos de Fabricação",
    pontosSorteados: [],
    pontos: [
      "1 - Propriedades Mecânicas dos Materiais.",
      "2 - Processos Industriais de Fabricação.",
      "3 - Usinagem.",
      "4 - Seleção de Materiais.",
      "5 - Desenho Técnico Mecânico.",
      "6 - Ciência dos Materiais.",
      "7 - Conformação Mecânica.",
      "8 - Soldagem.",
      "9 - Metrologia.",
    ],
  },
  {
    faculdade: "FAEN",
    area: "Engenharia Mecânica/ Mecânica dos Sólidos",
    pontosSorteados: [],
    pontos: [
      "1 - Estática dos Corpos Rígidos: mecânica vetorial de forças e momentos. Forças resultantes e vínculos/restrições nos sistemas em equilíbrio estático. Condições de equilíbrio de um corpo rígido. Análise estrutural (treliças, método dos nós e das seções).",
      "2 - Estática dos Corpos Rígidos: Forças internas (equações e diagramas, carregamento distribuído, forças de cisalhamento e momentos fletores e torsores). Atrito. Centros de gravidade e geométrico/centróide. Momentos de inércia. Trabalho virtual.",
      "3 - Resistência dos Materiais: tensão, deformação, propriedades mecânicas e carregamentos simples (axial, torção, flexão e cisalhamento).",
      "4 - Resistência dos Materiais: cargas combinadas, transformação de tensão e de deformação, deflexão e projetos de vigas e eixos, flambagem de colunas, métodos de energia.",
      "5 - Elementos de máquinas: prevenção de falhas (teoria das falhas por impacto no carregamento estático e por fadiga no carregamento variável). Fatores de segurança e confiabilidade. Danos em superfícies.",
      "6 - Elementos de máquinas: Elementos de fixação rosqueados e parafusos de potência. Juntas rebitadas, soldadas e coladas. Molas mecânicas. Mancais e lubrificação; engrenagens, eixos, embreagens, freios, acoplamentos, volantes, polias e correias).",
    ],
  },
  {
    faculdade: "FAIND",
    area: "Ensino Intercultural em Ciências Humanas ",
    pontosSorteados: [],
    pontos: [
      "1 - Educação Intercultural e Decolonial em Ciências Humanas entre os Kaiowa e Guarani",
      "2 - Metodologias Interdisciplinares para o Ensino de Ciências Humanas em Terras Indígenas Guarani e Kaiowa",
      "3 - Territorialidades e Saberes Indígenas no Ensino de Ciências Humanas em Escolas Indígenas Guarani e Kaiowa",
      "4 - Abordagens Pedagógicas: Língua, Cultura e Território no Ensino de Ciências Humanas entre os Kaiowa e Guarani",
      "5 - Formação Docente e Desafios na Educação Escolar Indígena Guarani e Kaiowa",
    ],
  },
  {
    faculdade: "FCS",
    area: "Estágios supervisionados",
    pontosSorteados: [],
    pontos: [
      "1 - Refluxo Gastroesofágico e Doenças Gastroduodenais Pépticas.",
      "2 - Hepatomegalias e esplenomegalias.",
      "3 - Ressuscitação cardiopulmonar.",
      "4 - Prevenção primária e secundária do câncer.",
      "5 - Dor: fisiopatologia e manejo.",
      "6 - Obesidade: biopatologia, avaliação e tratamento.",
      "7 - Dor torácica.",
      "8 - Atendimento inicial de paciente com politrauma.",
      "9 - Distúrbios da pleura.",
      "10 - Sangramento gastrointestinal.",
    ],
  },
  {
    faculdade: "FACET",
    area: "Estatística",
    pontosSorteados: [],
    pontos: [
      "1 - Probabilidade.",
      "2 - Variáveis aleatórias e distribuições de probabilidades.",
      "3 - Teoria da estimação.",
      "4 - Testes de hipóteses.",
      "5 - Estatística experimental.",
      "6 - Regressão linear.",
      "7 - Modelos lineares generalizados e suas aplicações.",
    ],
  },
  {
    faculdade: "FACET",
    area: "Física/Ensino de Física/Física e Ensino de Física para comunidades tradicionais",
    pontosSorteados: [],
    pontos: [
      "1 - Eletricidade e Magnetismo e seu ensino na Educação Básica.",
      "2 - O ensino dos conceitos de Energia e movimento.",
      "3 - Astronomia indígena.",
      "4 - Formação inicial e continuada de professores de Física e de Ciências.",
      "5 - O ensino e a aprendizagem de conceitos de Física.",
      "6 - O ensino de Física e de Ciências em comunidades tradicionais.",
      "7 - Experimentação no Ensino de Física e de Ciências.",
      "8 - Ciência, Tecnologia e Sociedade e o ensino de Física em espaços não formais.",
      "9 - O papel da extensão universitária na formação de professores de Física.",
      "10 - Física Moderna e Contemporânea na formação de professores de Física.",
    ],
  },
  {
    faculdade: "FCBA",
    area: "Geologia/Recursos Hídricos/ Paleontologia",
    pontosSorteados: [],
    pontos: [
      "1 - Bioestratigrafia aplicada à paleopalinologia, paleoecologia e evolução das plantas terrestres.",
      "2 - Extinções em massa, registros fósseis e períodos geológicos.",
      "3 - Paleontologia de invertebrados e vertebrados: Surgimento, diversificação e evolução.",
      "4 - Efeitos das mudanças climáticas nos padrões hidrológicos, incluindo alterações na precipitação, evaporação e disponibilidade de recursos hídricos.",
      "5 - Caracterização de bacias hidrográficas: análise das características físicas, geográficas e climáticas das áreas de drenagem de cursos de água.",
      "6 - Gestão de recursos hídricos: instrumentos de gestão e legislação aplicável.",
      "7 - Mapeamento geológico: fundamentos e aplicações na área ambiental.",
      "8 - Aplicações da Geomorfologia, Geologia estrutural e Petrologia em Ciências Ambientais.",
      "9 - Sedimentologia e Geoquímica sedimentar, orgânica e ambiental.",
      "10 - Geologia econômica, ambiental e urbana: Fundamentos e aplicações.",
    ],
  },
  {
    faculdade: "FCS",
    area: "Ginecologia e Obstetrícia",
    pontosSorteados: [],
    pontos: [
      "1 - Avaliação da vitalidade fetal.",
      "2 - Avaliação de sangramento uterino anormal.",
      "3 - Câncer de colo uterino.",
      "4 - Trabalho de Parto prematuro.",
      "5 - Rotura prematura de membranas.",
      "6 - Endometriose.",
      "7 - Mioma Uterino.",
      "8 - Assistência ao parto.",
      "9 - Doenças sexualmente transmissíveis na mulher.",
      "10 - Planejamento familiar.",
    ],
  },
  {
    faculdade: "FCS",
    area: "Medicina da Família e Comunidade",
    pontosSorteados: [],
    pontos: [
      "1 - Abordagem da saúde mental pelo médico da atenção básica.",
      "2 - Cuidado domiciliar na atenção básica.",
      "3 - Rastreamento de câncer de colo de útero e mama.",
      "4 - Diabetes melito.",
      "5 - Administração do serviço de atendimento médico na atenção básica.",
      "6 - Vômito e diarreia no lactante.",
      "7 - Pré-natal de baixo risco.",
      "8 - Sangramento vaginal e distúrbios menstruais.",
      "9 - Asma em crianças e adultos.",
      "10 - Infecção de vias aéreas superiores.",
    ],
  },
  {
    faculdade: "FCS",
    area: "Medicina Legal e Perícia Médica",
    pontosSorteados: [],
    pontos: [
      "1 - Antropologia Forense.",
      "2 - Asfixiologia Forense.",
      "3 - Traumatologia Forense.",
      "4 - Tanatologia Forense.",
      "5 - Infanticídio.",
      "6 - Aborto.",
      "7 - Sexologia Forense.",
      "8 - Toxicologia Forense.",
      "9 - Perícias médicos legais.",
      "10 - Exclusão de Paternidade.",
    ],
  },
  {
    faculdade: "FCS",
    area: "Nefrologia",
    pontosSorteados: [],
    pontos: [
      "1 - Metabolismo do sódio e edema.",
      "2 - Distúrbios do equilíbrio ácido-básico.",
      "3 - Avaliação clínica e laboratorial da função renal.",
      "4 - Insuficiência renal aguda.",
      "5 - Manifestações renais das doenças sistêmicas.",
      "6 - Glomerulonefrites primárias.",
      "7 - Manejo clínico da doença renal crônica.",
      "8 - Nefropatias tóxicas e tubulointersticiais.",
      "9 - Nefropatia diabética.",
      "10 - Obstrução do trato urinário.",
    ],
  },
  {
    faculdade: "FCS",
    area: "Pediatria",
    pontosSorteados: [],
    pontos: [
      "1 - Viroses exantemáticas.",
      "2 - Imunizações.",
      "3 - Sopro cardíaco na criança.",
      "4 - Bronquiolite viral aguda.",
      "5 - Febre reumática.",
      "6 - Convulsão e estado de mal epiléptico.",
      "7 - Diarreia aguda e crônica.",
      "8 - Distúrbios respiratórios do recém-nascido.",
      "9 - Dores nos membros inferiores na criança.",
      "10 - Infecções Congênitas do recém-nascido.",
    ],
  },
  {
    faculdade: "FCH",
    area: "Pesquisa em Psicologia e Formação de Psicólogo",
    pontosSorteados: [],
    pontos: [
      "1 - Conceito de cientificidade e a Ciência nas Humanidades.",
      "2 - Concepções teórico-metodológicas de investigação científica.",
      "3 - Métodos e técnicas de Pesquisa em Psicologia.",
      "4 - Tipos de conhecimentos, conhecimento científico e pesquisa científica.",
      "5 - Competências e habilidades na formação de profissionais em Psicologia.",
      "6 - Formação em Psicologia no Brasil.",
      "7 - Avaliação da profissão e perspectivas futuras.",
      "8 - A clínica como espaço de prática profissional e de pesquisa.",
      "9 - Desafios na vivência da formação em psicologia.",
      "10 - Ética e formação em psicologia.",
    ],
  },
  {
    faculdade: "FCS",
    area: "Radiologia e/ou diagnóstico por imagem",
    pontosSorteados: [],
    pontos: [
      "1 - Imagem em doenças do mediastino.",
      "2 - Radiografias abdominais.",
      "3 - Diagnóstico por imagem de tumores hepáticos.",
      "4 - Diagnóstico por imagem das infecções pulmonares.",
      "5 - Diagnóstico por imagem no trauma do sistema nervoso central.",
      "6 - Diagnóstico por imagem de doenças da mama.",
      "7 - Diagnóstico por imagem das infecções ósseas e de partes moles.",
      "8 - Ultrassonografia dos rins e vias urnárias.",
      "9 - Radiografia de tórax.",
      "10 - Estudo por imagem das vias biliares.",
    ],
  },
  {
    faculdade: "FCA",
    area: "Sistema de Recirculação para Aquicultura",
    pontosSorteados: [],
    pontos: [
      "1 - Sistemas hidráulicos.",
      "2 - Recirculação aplicada a sistemas intensivo e superintensivo da Aquicultura.",
      "3 - Coleta e análise de solos para construção de viveiros aquáticos.",
      "4 - Tecnologias de automação para sistemas aquícolas.",
      "5 - Aplicação da Eletrônica na Aquicultura.",
    ],
  },
  {
    faculdade: "FCA",
    area: "Topografia e Geodésia",
    pontosSorteados: [],
    pontos: [
      "1 - Métodos e técnicas de medida angular e de medida de distâncias.",
      "2 - Levantamento e cálculo de poligonais fechadas.",
      "3 - Nivelamento geométrico e trigonométrico. Cota, altitude geométrica (elipsoidal), altitude ortométrica e ondulação geoidal.",
      "4 - Representação Gráfica dos levantamentos topográficos",
      "5 - Superfícies de referência, sistemas geodésicos de referência, datum vertical brasileiro, sistemas de coordenadas cartesianas /geográficas / UTM.",
      "6 - Redes Geodésicas: planimétricas, altimétricas, tridimensionais, passivas, ativas e Sistema Geodésico Brasileiro",
      "7 - Posicionamento por GNSS (Global Navigation Satellite System): sistemas GNSS, princípio de funcionamento, métodos e técnicas de posicionamento, tipos de receptores.",
      "8 - Georreferenciamento de Imóveis Rurais.",
      "9 - Projeções cartográficas: tipos, fundamentos, propriedades e aplicações.",
      "10 - Ajustamento de observações: método paramétrico, MMQ paramétrico com injunção relativa, MMQ paramétrico com injunção absoluta",
    ],
  },
];
