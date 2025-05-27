const areasData = [
  {
    "faculdade": "FACE",
    "area": "Administração Geral/Gestão de Materiais e Logística",
    "pontosSorteados": [],
    "pontos": [
      "1- Fundamentos da Administração: Áreas funcionais da Organização",
      "2- Gerenciamento da Cadeia de Suprimentos",
      "3- Administração Patrimonial",
      "4- Gestão de Estoques",
      "5- Gestão da distribuição- Logística"
    ]
  },
  {
    "faculdade": "FACE",
    "area": "Administração Geral/Gestão de Pessoas",
    "pontosSorteados": [],
    "pontos": [
      "1- Gestão estratégica de Recursos Humanos",
      "2- Estratégias de Gestão de Pessoas",
      "3- Gestão por Competências",
      "4- Remuneração Estratégica",
      "5- Fundamentos da Administração: Áreas funcionais da Organização"
    ]
  },
  {
    "faculdade": "FCA",
    "area": "Agronomia/Produção Vegetal",
    "pontosSorteados": [],
    "pontos": [
      "1- Características agronômicas, fases de desenvolvimento, adubação, manejo de solo, variedades, fisiologia da produção e colheita de grandes culturas.",
      "2- Manejo e controle de pragas, doenças e plantas daninhas de grandes culturas.",
      "3- Sistemas de manejo na integração lavoura-pecuária.",
      "4- Morfologia e Sistemática Vegetal: organografia da raiz, caule, folha, flor, fruto e semente; botânica sistemática.",
      "5- Silvicultura: formação, manejo, mensuração e regeneração de florestas plantadas"
    ]
  },
  {
    "faculdade": "FALE",
    "area": "Artes Cênicas/Dramaturgias e Teorias do Teatro",
    "pontosSorteados": [],
    "pontos": [
      "1- Poéticas e elementos do texto dramatúrgico",
      "2- Teoria do Drama",
      "3- Vanguardas artísticas do Séc. XX",
      "4- Do Teatro Épico ao Teatro Pós-Dramático",
      "5- Processos de criações dramatúrgicas"
    ]
  },
  {
    "faculdade": "FCBA",
    "area": "Biologia/Botânica",
    "pontosSorteados": [],
    "pontos": [
      "1- Origem, diversificação e sistemática de Embriófitas.",
      "2- A origem e evolução das Angiospermas e suas inovações-chave morfológicas.",
      "3- Relações filogenéticas e caracterização das principais linhagens de Eudicotiledôneas.",
      "4- Relações filogenéticas e caracterização das principais linhagens de Monocotiledôneas.",
      "5- História e filosofia dos sistemas de classificação das Angiospermas."
    ]
  },
  {
    "faculdade": "FCBA",
    "area": "Biologia/Educação Ambiental",
    "pontosSorteados": [],
    "pontos": [
      "1- Princípios, diretrizes e bases filosóficas da Educação Ambiental e suas principais correntes pedagógicas.",
      "2- O papel da Política Nacional de Educação Ambiental na implementação das demais Políticas Nacionais de Meio Ambiente.",
      "3- Educação Ambiental como ferramenta de gestão em projetos na área socioambiental.",
      "4- Evolução histórica do desenvolvimento sustentável. Papel dos movimentos sociais e sua influência na criação de políticas públicas nas áreas socioambientais.",
      "5- Planejamento, programação, implantação e avaliação de projetos em Educação Ambiental."
    ]
  },
  {
    "faculdade": "FACET",
    "area": "Ciência da Computação /Algoritmos e Estruturas de dados",
    "pontosSorteados": [],
    "pontos": [
      "1- Estruturas de Dados Homogêneas",
      "2- Algoritmos de Ordenação",
      "3- Manipulação de Arquivos em Disco",
      "4- Pilhas e Filas",
      "5- Estruturas de Dados Heterogêneas"
    ]
  },
  {
    "faculdade": "FAIND",
    "area": "Ciências da Natureza",
    "pontosSorteados": [],
    "pontos": [
      "1- Biodiversidade, ecossistemas, interações entre os seres vivos no ensino e na formação intercultural de professores de Ciências/Biologia",
      "2- Interculturalidade e TICs no ensino e na formação de professores de Ciências",
      "3- Educação para a Saúde e Educação Ambiental na escola indígena intercultural;",
      "4- Saberes tradicionais e ciência ocidental no currículo de formação de professores indígenas: perspectivas teóricas e metodológicas",
      "5- Alterações da paisagem e mudanças climáticas: desafios para a gestão ambiental e territorial nas aldeias Guarani e Kaiowá em MS"
    ]
  },
  {
    "faculdade": "FCS",
    "area": "Ciências Morfofuncionais",
    "pontosSorteados": [],
    "pontos": [
      "1- Reações de hiperssensibilidade",
      "2- Tolerância Imunológica e autoimunidade",
      "3- Imunologia dos tumores",
      "4- Imunodeficiências congênitas e adquiridas",
      "5- Imunologia das doenças infecciosas"
    ]
  },
  {
    "faculdade": "FCS",
    "area": "Dietética",
    "pontosSorteados": [],
    "pontos": [
      "1- Classificação NOVA e o Guia alimentar para a população brasileira",
      "2- Avaliação nutricional, Recomendações nutricionais e planejamento dietético do adulto",
      "3- Avaliação nutricional, recomendações nutricionais e planejamento dietético para gestantes",
      "4- Avaliação nutricional, recomendações nutricionais e planejamento dietético para lactantes",
      "5- Introdução Alimentar e complementar: definição, recomendações e planejamento"
    ]
  },
  {
    "faculdade": "FADIR",
    "area": "Direito/Direito Processual Civil",
    "pontosSorteados": [],
    "pontos": [
      "1- Princípios Constitucionais e Infraconstitucionais do Processo Civil",
      "2- Competência e Conflitos de Competência",
      "3- Tutela Provisória",
      "4- Recursos no Processo Civil",
      "5- Efetividade do Processo e Cumprimento de Sentença"
    ]
  },
  {
    "faculdade": "FAEN",
    "area": "Engenharia de Alimentos / Tecnologia de Alimentos",
    "pontosSorteados": [],
    "pontos": [
      "1- Parâmetros de qualidade da carne fresca.",
      "2- Processamento de carnes e derivados.",
      "3- Conservação de frutas e hortaliças por remoção de calor (refrigeração e congelamento).",
      "4- Obtenção, composição e qualidade tecnológica de farinha de trigo.",
      "5- Desenvolvimento de plano de negócio e avaliação técnica econômica de projetos agroindustriais"
    ]
  },
  {
    "faculdade": "FCA",
    "area": "Engenharia/Eletrônica e Eletrotécnica",
    "pontosSorteados": [],
    "pontos": [
      "1- Instrumentação e Componentes Eletrônicos Aplicados à Agricultura (utilização de sensores, resistores, capacitores e semicondutores no monitoramento e controle agrícola; ferramentas de medição e técnicas de busca de falhas em circuitos eletrônicos; potencial elétrico, corrente elétrica, resistência elétrica, Lei de Ohm, potência elétrica, energia e queda de tensão).",
      "2- Sistemas de Controle Eletrônico e Potência (circuitos retificadores, acionamentos por transistores e controle de potência usando tiristores; amplificadores operacionais e temporizadores (família 555) aplicados em sistemas agrícolas).",
      "3- Eletrônica Digital e Confecção de Placas de Circuito Impresso (PCI) – (introdução à eletrônica digital: sinais e funções digitais; desenvolvimento, simulação e montagem de circuitos por computador; técnicas de soldagem e confecção de PCI).",
      "4- Instalações Elétricas Rurais, NR-10 e Força Eletromotriz (regras de segurança elétrica segundo a NR-10 para instalações em ambientes rurais; montagem e manutenção de instalações elétricas residenciais e prediais; produção de força eletromotriz por geradores monofásicos e trifásicos; grandezas em circuitos de corrente alternada).",
      "5- Motores, Transformadores e Potência para Aplicações Rurais (funcionamento e aplicação de geradores e motores de corrente contínua e alternada no campo; circuitos trifásicos e ligação dos enrolamentos dos geradores; expressão e correção do fator de potência; cálculo do rendimento e otimização energética rural)."
    ]
  },
  {
    "faculdade": "FACET",
    "area": "Física/Ensino de Física",
    "pontosSorteados": [],
    "pontos": [
      "1- Experimentação no ensino de Física",
      "2- Teorias da aprendizagem para o ensino de Física",
      "3- Divulgação científica e o ensino de Física",
      "4- Formação inicial e continuada de professores de Física",
      "5- História da ciência, epistemologia e ensino de Física"
    ]
  },
  {
    "faculdade": "FAED",
    "area": "Formação de Professores/as, Currículo e Estágio Supervisionado",
    "pontosSorteados": [],
    "pontos": [
      "1- Didática e formação de professores",
      "2- Teoria e prática do currículo",
      "3- Avaliação da aprendizagem",
      "4- Desafios do estágio supervisionado na Pedagogia",
      "5- Planejamento das práticas pedagógicas"
    ]
  },
  {
    "faculdade": "FALE",
    "area": "Linguística / Linguística Aplicada\n",
    "pontosSorteados": [],
    "pontos": [
      "1- Concepções de linguagem",
      "2- Gêneros textuais e tipologias",
      "3- Fatores de textualidade",
      "4- Letramentos e suas implicações para o ensino",
      "5- Letramento acadêmico"
    ]
  },
  {
    "faculdade": "FCS",
    "area": "Nutrição em Alimentação Coletiva",
    "pontosSorteados": [],
    "pontos": [
      "1- Gestão e controle do processo produtivo em Unidades Produtoras de Refeições (UPR).",
      "2- Planejamento físico-funcional de Unidades Produtoras de Refeições (UPR).",
      "3- Ergonomia e segurança no trabalho no âmbito de Unidades Produtoras de Refeições (UPR).",
      "4- Sustentabilidade em Unidades Produtoras de Refeições (UPR).",
      "5- Planejamento de cardápios e de compras, aplicado ao Programa de Alimentação do Trabalhador e Programa Nacional de Alimentação Escolar."
    ]
  },
  {
    "faculdade": "FCS",
    "area": "Nutrição em Saúde Coletiva",
    "pontosSorteados": [],
    "pontos": [
      "1- Política Nacional de Alimentação e Nutrição (PNAN)",
      "2- Políticas e Programas intersetoriais de Alimentação e Nutrição: histórico e avanços",
      "3- Vigilância Alimentar e Nutricional",
      "4- Saúde e Nutrição de Povos Indígenas do Brasil",
      "5- Políticas Públicas de Saúde Indígena"
    ]
  },
  {
    "faculdade": "FAED",
    "area": "Pedagogia / Educação Especial",
    "pontosSorteados": [],
    "pontos": [
      "1- História da Educação Especial.",
      "2- Políticas públicas de Educação Especial.",
      "3- Inclusão escolar: raízes históricas, definição e características.",
      "4- O atendimento educacional especializado voltado ao aluno público alvo da Educação Especial.",
      "5- Práticas pedagógicas inclusivas."
    ]
  },
  {
    "faculdade": "FCH",
    "area": "Processos Avaliativos em Psicologia",
    "pontosSorteados": [],
    "pontos": [
      "1- A Escuta em Psicologia – Conceito, Função. A Escuta em processos avaliativos e de acompanhamento.",
      "2- A Empatia na avaliação psicológica e nas psicoterapias - Conceito e Diferenciações.",
      "3- A Entrevista Psicológica – Conceitos, tipos e Finalidades na em processos de avaliação e acompanhamento.",
      "4- Subjetividade do Entrevistador: Conceito, Relevância para as entrevistas e relação com autoconhecimento.",
      "5- Documentos resultantes de avaliação psicológica: Indicações da Resolução 06/2019 e o Compromisso Ético."
    ]
  },
  {
    "faculdade": "FCH",
    "area": "Psicanálise e Saúde Coletiva",
    "pontosSorteados": [],
    "pontos": [
      "1- A Estrutura e funcionamento do psiquismo",
      "2- Teoria da técnica psicanalítica: transferência, contratransferência, resistência e interpretação.",
      "3- A clínica psicanalítica na contemporaneidade: cultura, ética e sujeito",
      "4- Psicanálise e Clínica Ampliada.",
      "5- A neurose e psicose na clínica psicanalítica"
    ]
  },
  {
    "faculdade": "FACET",
    "area": "Química / Analítica",
    "pontosSorteados": [],
    "pontos": [
      "1- Estrutura atômica",
      "2- Estequiometria",
      "3- Conceitos básicos de ligação química",
      "4- Geometria e polaridade moleculares",
      "5- Equilíbrio ácido-base."
    ]
  },
  {
    "faculdade": "FADIR",
    "area": "Relações Internacionais/Política Internacional",
    "pontosSorteados": [],
    "pontos": [
      "1- Organismos multilaterais e a governança global",
      "2- Cooperação Internacional e Governança Global",
      "3- Meio ambiente, crise climática e política global",
      "4- Integração Regional e fluxos transfronteiriços",
      "5- Direitos Humanos, Soberania e Relações Internacionais"
    ]
  },
  {
    "faculdade": "FAEN",
    "area": "Sistemas Elétricos de Potência",
    "pontosSorteados": [],
    "pontos": [
      "1- Planejamento da Operação e Expansão de Sistemas Energéticos;",
      "2- Modelagem matricial de sistemas de potência e análise de fluxo de potência;",
      "3- Projeto de sistemas de distribuição de energia;",
      "4- Projeto elétrico de cabine de medição, proteção e transformação de energia em média tensão;",
      "5- Gestão e eficiência energética."
    ]
  },
  {
    "faculdade": "FAIND",
    "area": "Sociologia da Educação / Ciências Políticas",
    "pontosSorteados": [],
    "pontos": [
      "1- Movimentos Sociais e Educação;",
      "2- Princípios e conceitos da Educação do Campo",
      "3- Panorama Histórico da Educação no Brasil: O Ensino da Sociologia, a “Educação Rural” e as Licenciaturas",
      "4- Sociologia, Educação do Campo e Territórios Etnoeducacionais",
      "5- A Agroecologia como proposta de Sociedade: Epistemologia Indígena e de Povos Tradicionais na Educação"
    ]
  },
  {
    "faculdade": "FCS",
    "area": "Técnica e Dietética",
    "pontosSorteados": [],
    "pontos": [
      "1- Introdução ao estudo de Técnica Dietética: conceitos e objetivos. Metodologia para pesos e medidas",
      "2- Estudo das quantificações: per capita, porção, custo, lista de compra e Indicadores culinários",
      "3- Técnicas básicas: pré-preparo, preparo dos alimentos e métodos de cocção: óleos e gorduras",
      "4- Técnicas básicas: pré-preparo, preparo dos alimentos e métodos de cocção: leite e derivados",
      "5- Técnicas básicas: pré-preparo, preparo dos alimentos e métodos de cocção: Frutas e Hortaliças: verduras e legumes"
    ]
  },
  {
    "faculdade": "FAEN",
    "area": "Transportes/Administração/Gestão",
    "pontosSorteados": [],
    "pontos": [
      "1- Sistemas de transporte",
      "2- Mobilidade urbana",
      "3- Controle e produtividade em canteiros de obra",
      "4- Sistemas de gestão da qualidade",
      "5- Aplicações da qualidade na construção civil"
    ]
  }
]
