const areasData = [
    {
        "faculdade": "FACET",
        "area": "Ciência da Computação/Algoritmos e Teoria da Computação I",
        "pontosSorteados": [],
        "pontos": [
            "1. Vetores, matrizes e registros.",
            "2. Algoritmos de Ordenação.",
            "3. Autômatos Finitos.",
            "4. Pilhas e Filas.",
            "5. Linguagens Regulares."
        ]
    },
    {
        "faculdade": "FCS",
        "area": "Ciências morfofuncionais",
        "pontosSorteados": [],
        "pontos": [
            "1. Lesão e Morte celular;",
            "2. Doenças ambientais;",
            "3. Imunidade aos microrganismos;",
            "4. Mecanismo das reações de hipersensibilidade;",
            "5. Imunodeficiências primárias e adquiridas."
        ]
    },
    {
        "faculdade": "FCS",
        "area": "Dietética nos Ciclos da Vida e Nutrição Esportiva",
        "pontosSorteados": [],
        "pontos": [
            "1. Classificação NOVA e o Guia alimentar para a população brasileira;",
            "2. Avaliação do estado nutricional de praticantes de atividade física;",
            "3. Planejamento de intervenção nutricional para diferentes modalidades esportivas, em diferentes momentos da competição;",
            "4. Fisiologia da gestação;",
            "5. Avaliação do estado nutricional e planejamento dietético para gestantes."
        ]
    },
    {
        "faculdade": "FADIR",
        "area": "Direito/Prática Jurídica",
        "pontosSorteados": [],
        "pontos": [
            "1. Conciliação, mediação e arbitragem.",
            "2. Do procedimento comum: aspectos essenciais da petição inicial e da contestação.",
            "3. Direitos do consumidor: características e princípios norteadores da relação de consumo.",
            "4. Teoria Geral dos recursos e recursos cíveis em espécies.",
            "5. Alimentos: conceito, características, espécies, aspectos materiais e processuais."
        ]
    },
    {
        "faculdade": "FAED",
        "area": "Educação Física Escolar",
        "pontosSorteados": [],
        "pontos": [
            "1. Corpo, movimento e expressão corporal na escola: o trabalho da Educação Física no desenvolvimento infantil.",
            "2. O estágio como campo de conhecimento: reflexões teórico-práticas.",
            "3. Teoria e prática da dança na Educação Física Escolar.",
            "4. Teoria e prática da ginástica na Educação Física Escolar.",
            "5. Gênero, Sexualidade e práticas corporais e esportivas."
        ]
    },
    {
        "faculdade": "FAEN",
        "area": "Engenharia Mecânica/Mecânica dos Sólidos",
        "pontosSorteados": [],
        "pontos": [
            "1. Resistência dos materiais: tensão, deformação, propriedades mecânicas e carregamentos simples (axial, torção, flexão e cisalhamento);",
            "2. Resistência dos materiais: cargas combinadas, transformação de tensão e de deformação, deflexão e projetos de vigas e eixos, flambagem de colunas;",
            "3. Elementos de máquinas: análise de carregamentos e tensões, deflexão e rigidez. Prevenção de falhas, fatores de segurança, confiabilidade e danos em superfícies;",
            "4. Elementos de máquinas: elementos de fixação (parafusos, rebites, juntas soldadas/coladas) e molas mecânicas;",
            "5. Elementos de máquinas: elementos de transmissão de potência (mancais e lubrificação; engrenagens, eixos, embreagens, freios, acoplamentos, volantes) e outros (elementos flexíveis, polias, correias, etc)."
        ]
    },
    {
        "faculdade": "FAEN",
        "area": "Engenharia de Produção/Gerenciamento Ambiental",
        "pontosSorteados": [],
        "pontos": [
            "1. Metodologia Científica para Engenharia de Produção: Importância da metodologia científica na pesquisa e desenvolvimento de projetos em engenharia.",
            "2. Gerenciamento de Recursos Naturais e Energéticos: Estratégias para a utilização eficiente de recursos energéticos renováveis e não renováveis;",
            "3. Segurança e Saúde do Trabalho: Normas e regulamentações de segurança no ambiente de trabalho;",
            "4. Gerenciamento Ambiental: Planejamento e implementação de sistemas de gestão ambiental;",
            "5. ESG (Environmental, Social, and Governance): Implementação de práticas ESG para melhorar a sustentabilidade e responsabilidade social."
        ]
    },
    {
        "faculdade": "FCA",
        "area": "Engenharia/Eletrônica e Eletrotécnica",
        "pontosSorteados": [],
        "pontos": [
            "1. Instrumentação e Componentes Eletrônicos Aplicados à Agricultura (utilização de sensores, resistores, capacitores e semicondutores no monitoramento e controle agrícola; ferramentas de medição e técnicas de busca de falhas em circuitos eletrônicos; potencial elétrico, corrente elétrica, resistência elétrica, Lei de Ohm, potência elétrica, energia e queda de tensão);",
            "2. Sistemas de Controle Eletrônico e Potência (circuitos retificadores, acionamentos por transistores e controle de potência usando tiristores; amplificadores operacionais e temporizadores (família 555) aplicados em sistemas agrícolas);",
            "3. Eletrônica Digital e Confecção de Placas de Circuito Impresso (PCI) – (introdução à eletrônica digital: sinais e funções digitais; desenvolvimento, simulação e montagem de circuitos por computador; técnicas de soldagem e confecção de PCI);",
            "4. Instalações Elétricas Rurais, NR-10 e Força Eletromotriz (regras de segurança elétrica segundo a NR-10 para instalações em ambientes rurais; montagem e manutenção de instalações elétricas residenciais e prediais; produção de força eletromotriz por geradores monofásicos e trifásicos; grandezas em circuitos de corrente alternada);",
            "5. Motores, Transformadores e Potência para Aplicações Rurais (funcionamento e aplicação de geradores e motores de corrente contínua e alternada no campo; circuitos trifásicos e ligação dos enrolamentos dos geradores; expressão e correção do fator de potência; cálculo do rendimento e otimização energética rural)."
        ]
    },
    {
        "faculdade": "FAEN",
        "area": "Estruturas/Solos/Instalações Prediais",
        "pontosSorteados": [],
        "pontos": [
            "1. Mecânica vetorial de forças e Momentos.",
            "2. Análise estrutural (treliças, método dos nós e das seções).",
            "3. Propriedades mecânicas dos materiais.",
            "4. Atribuições, direitos e deveres do profissional da Engenharia Civil.",
            "5. Instalações prediais de água fria."
        ]
    },
    {
        "faculdade": "FCH",
        "area": "Estágio supervisionado em História/metodologias do ensino e da pesquisa em História",
        "pontosSorteados": [],
        "pontos": [
            "1. O estágio supervisionado na formação do professor de História;",
            "2. Currículo e ensino de História;",
            "3. Metodologias da História e interdisciplinaridade;",
            "4. Fontes para o ensino de História;",
            "5. O professor e a pesquisa histórica."
        ]
    },
    {
        "faculdade": "FAED",
        "area": "Formação de Professores(as), Currículo e Estágio Supervisionado",
        "pontosSorteados": [],
        "pontos": [
            "1. Didática e formação de professores.",
            "2. Teoria e prática do currículo.",
            "3. Avaliação da aprendizagem.",
            "4. Desafios do estágio supervisionado na Pedagogia.",
            "5. Planejamento das práticas pedagógicas."
        ]
    },
    {
        "faculdade": "FCH",
        "area": "Geografia Humana",
        "pontosSorteados": [],
        "pontos": [
            "1. Lugar e identidade na Geografia;",
            "2. Gênese da Geografia Cultural;",
            "3. Formação socioespacial brasileira;",
            "4. Relações entre cultura, sociedade e espaço;",
            "5. Metodologias qualitativas em trabalho de campo."
        ]
    },
    {
        "faculdade": "FCS",
        "area": "Ginecologia e Obstetrícia",
        "pontosSorteados": [],
        "pontos": [
            "1. Dor pélvica e dismenorreia;",
            "2. Infecções genito-urinárias;",
            "3. Síndrome de Ovários Policísticos;",
            "4. Assistência pré-natal;",
            "5. Distócias."
        ]
    },
    {
        "faculdade": "FALE",
        "area": "Linguística e Língua Portuguesa",
        "pontosSorteados": [],
        "pontos": [
            "1. Concepções teóricas de língua, linguagem e gramática e o ensino de línguas;",
            "2. Gêneros discursivos acadêmicos;",
            "3. Língua e discurso;",
            "4. Linguagem, sociedade e escola: norma, uso, variação e preconceito linguístico;",
            "5. Texto e textualidade no ensino de língua portuguesa e nos gêneros discursivos."
        ]
    },
    {
        "faculdade": "FAED",
        "area": "Pedagogia/Educação Especial",
        "pontosSorteados": [],
        "pontos": [
            "1. História da Educação Especial.",
            "2. Políticas públicas de Educação Especial.",
            "3. Inclusão escolar: raízes históricas, definição e características.",
            "4. O atendimento educacional especializado voltado ao aluno público-alvo da Educação Especial.",
            "5. Práticas pedagógicas inclusivas."
        ]
    },
    {
        "faculdade": "FAED",
        "area": "Pedagogia/História da Educação",
        "pontosSorteados": [],
        "pontos": [
            "1. História e historiografia da Educação Brasileira.",
            "2. Aspectos teórico-metodológicos da pesquisa em História da Educação.",
            "3. Perspectivas de pesquisa em Memória e História da Educação.",
            "4. História da Educação e instituições educativas.",
            "5. História da Educação, práticas e representações."
        ]
    },
    {
        "faculdade": "FAED",
        "area": "Pedagogia/Política e Gestão da Educação",
        "pontosSorteados": [],
        "pontos": [
            "1. Políticas educacionais para a Educação Básica.",
            "2. Organização e gestão da educação escolar.",
            "3. Gestão educacional e escolar.",
            "4. Planejamento Educacional Brasileiro.",
            "5. Medidas e avaliação da educação."
        ]
    },
    {
        "faculdade": "FCA",
        "area": "Produção Animal – Aquicultura",
        "pontosSorteados": [],
        "pontos": [
            "1. Parâmetros Genéticos Aplicados no Melhoramento de Organismos Aquáticos;",
            "2. Diagnóstico Participativo Rural e Sustentabilidade no Desenvolvimento da Aquicultura;",
            "3. Seleção Genética de Organismos Aquáticos;",
            "4. Produção de Híbridos: Impactos e Potencialidades;",
            "5. A Bromatologia como Ferramenta de Sustentabilidade na Aquicultura."
        ]
    },
    {
        "faculdade": "FCH",
        "area": "Psicologia / Orientação Profissional",
        "pontosSorteados": [],
        "pontos": [
            "1. Teorias da motivação no trabalho;",
            "2. Percepção organizacional;",
            "3. Saúde mental no trabalho;",
            "4. Análise crítica em Orientação Profissional e de Carreira;",
            "5. Orientação Profissional e de Carreira na interface com o mundo do trabalho."
        ]
    },
    {
        "faculdade": "FCH",
        "area": "Psicologia/Psicologia do Desenvolvimento",
        "pontosSorteados": [],
        "pontos": [
            "1. Diferentes perspectivas em desenvolvimento humano;",
            "2. Estabilidade e mudança durante o ciclo vital;",
            "3. Pesquisa e intervenção no campo de desenvolvimento humano: limites e possibilidades;",
            "4. Teorias da Personalidade. Análise da estrutura, dinâmica e desenvolvimento da personalidade segundo diferentes teorias. Influências do temperamento no desenvolvimento humano;",
            "5. Intervenção precoce e múltiplos olhares sobre as potencialidades e necessidades das famílias."
        ]
    },
    {
        "faculdade": "FADIR",
        "area": "Relações Internacionais/Política Internacional",
        "pontosSorteados": [],
        "pontos": [
            "1. Organismos multilaterais e a governança global.",
            "2. Cooperação Internacional e Governança Global.",
            "3. Meio ambiente, crise climática e política global.",
            "4. Integração Regional e fluxos transfronteiriços.",
            "5. Direitos Humanos, Soberania e Relações Internacionais."
        ]
    },
    {
        "faculdade": "FAEN",
        "area": "Sistemas Elétricos de Potência",
        "pontosSorteados": [],
        "pontos": [
            "1. Planejamento da Operação e Expansão de Sistemas Energéticos;",
            "2. Modelagem matricial de sistemas de potência e análise de fluxo de potência;",
            "3. Projeto de sistemas de distribuição de energia;",
            "4. Projeto elétrico de cabine de medição, proteção e transformação de energia em média tensão;",
            "5. Gestão e eficiência energética."
        ]
    },
    {
        "faculdade": "FAIND",
        "area": "Sociologia da Educação/Ciências Políticas",
        "pontosSorteados": [],
        "pontos": [
            "1. Movimentos Sociais e Educação.",
            "2. Princípios e conceitos da Educação do Campo.",
            "3. Panorama Histórico da Educação no Brasil: O Ensino da Sociologia, a “Educação Rural” e as Licenciaturas",
            "4. Sociologia, Educação do Campo e Territórios Etnoeducacionais.",
            "5. A Agroecologia como proposta de Sociedade: Epistemologia Indígena e de Povos Tradicionais na Educação."
        ]
    },
    {
        "faculdade": "FALE",
        "area": "Teoria do Teatro",
        "pontosSorteados": [],
        "pontos": [
            "1. Poéticas e elementos do texto dramatúrgico;",
            "2. Vanguardas artísticas do Séc. XX;",
            "3. O Teatro do Absurdo;",
            "4. O Teatro Épico;",
            "5. O Teatro Pós-Dramático."
        ]
    },
    {
        "faculdade": "FCA",
        "area": "Topografia e Geodésia",
        "pontosSorteados": [],
        "pontos": [
            "1. Medida direta e indireta de distâncias;",
            "2. Ângulos horizontais, ângulos verticais e ângulos de orientação;",
            "3. Tipos de levantamento topográfico planimétrico;",
            "4. Altimetria: Cotas e altitude; levantamento altimétrico;",
            "5. Sistemas sensores: Caracterização, classificação; níveis de coleta de dados espectral."
        ]
    },
    {
        "faculdade": "FAEAD",
        "area": "Tradução e Interpretação em Libras/Língua Portuguesa",
        "pontosSorteados": [],
        "pontos": [
            "1. Interpretação comunitária e os papéis em diferentes espaços de atuação.",
            "2. Estratégias de escolhas tradutórias no processo de elaboração de glosas.",
            "3. Conceitos, tipologias e conscientização dos problemas teóricos e práticos da tradução.",
            "4. Metodologia do Ensino de Libras como L2.",
            "5. Metodologia do Ensino de Libras como L1."
        ]
    }
]
