/**
 * =============================================================================
 * CATÁLOGO CENTRAL DA CARTA DE VINHOS — ENNOVIN • ADEGA VINHO24H
 * Residencial Portal das Hortênsias (Atibaia)
 * =============================================================================
 *
 * COMO ATIVAR OU DESATIVAR UM VINHO NA CARTA (index.html):
 *   - Para MOSTRAR o vinho na vitrine:  ativo: true
 *   - Para ESCONDER o vinho (sem apagar a página dele): ativo: false
 *
 * COMO ADICIONAR UM NOVO RÓTULO PARA EU CRIAR A PÁGINA:
 *   1. Copie o modelo em branco no final deste arquivo e cole dentro de CATALOGO_VINHOS.
 *   2. Preencha obrigatoriamente: `categoria`, `nome` e `arquivoImagem` (se já tiver a foto).
 *   3. Preencha o que já souber nos 4 pilares abaixo; o que estiver em branco ""
 *      eu pesquiso e estruturo em linguagem simples para montar a página completa.
 *
 * ESTRUTURA DAS COLUNAS (ALINHADA AOS 4 PILARES DE CURADORIA):
 *   [VITRINE / CONTROLE NO index.html]
 *     - ativo, categoria, nome, arquivoPagina, arquivoImagem, imagemRegiao
 *     - paisRegiao, bandeira, seloDestaque, destaqueOuro, resumoCard, tags
 *     - perfilSensorial (opcional: barras de Corpo, Maciez, Doçura e Frescor)
 *
 *   [1. CONHECIMENTO DO VINHO]
 *     - denominacao, terroir, uvas, produtor, safra, metodo, sensoriais
 *
 *   [2. CONHECIMENTO SOBRE O RÓTULO]
 *     - fichaProdutor, analiseTecnica, avaliacoes, precoMedioMercado, historiaRotulo
 *
 *   [3. CONHECIMENTO DO INDIVÍDUO]
 *     - paladar, historicoPublico, rejeicoesQueEvita, preferenciasAtendidas
 *
 *   [4. CONTEXTO]
 *     - harmonizacaoSalgada, harmonizacaoDoce, ocasiao, companhia,
 *       temperatura, horario, orcamento, intencao
 * =============================================================================
 */

const CATALOGO_VINHOS = [
    // =========================================================================
    // VINHOS TINTOS
    // =========================================================================
    {
        // --- Controle e Vitrine (index.html) ---
        ativo: true,
        categoria: "tintos",
        nome: "Alfacinha Regional Lisboa Tinto 2024",
        arquivoPagina: "alfacinha-tinto-2024.html",
        arquivoImagem: "ALFACINHA REGIONAL LISBOA TINTO 2024.png",
        imagemRegiao: "https://images.unsplash.com/photo-1585208798174-6cedd86e019a?auto=format&fit=crop&w=800&q=75",
        paisRegiao: "Lisboa, Portugal",
        bandeira: "🇵🇹",
        seloDestaque: "🏅 Double Gold 2026",
        destaqueOuro: true,
        resumoCard: "Tinto jovem, macio e vibrante, com notas de amora e framboesa. Não amarra a boca e agrada já no primeiro gole.",
        tags: ["Macio", "Frutado", "Meio Seco"],
        perfilSensorial: {
            corpo: { rotulo: "Leve a Médio", nivel: 45 },
            maciez: { rotulo: "Muito Macio", nivel: 82 },
            docura: { rotulo: "Meio Seco", nivel: 35 },
            frescor: { rotulo: "Equilibrado", nivel: 60 }
        },

        // --- 1. Conhecimento do Vinho ---
        conhecimentoVinho: {
            denominacao: "Vinho Regional Lisboa (IG Lisboa)",
            terroir: "Colinas suaves próximas ao litoral com forte influência do Oceano Atlântico e solos argilo-calcários e arenosos, garantindo maturação equilibrada e acidez fresca.",
            uvas: "Tinta Roriz, Touriga Nacional e Castelão",
            produtor: "Parras Wines",
            safra: "2024",
            metodo: "Fermentação por curtimenta em cubas de aço inox de pequena capacidade com controle de temperatura (~28 °C), sem passagem por madeira.",
            sensoriais: "Visual vermelho-rubi vibrante; aromas marcantes de frutas vermelhas frescas (amora e framboesa); paladar meio seco, corpo leve a médio, taninos maduros e macios, acidez equilibrada e final agradável."
        },

        // --- 2. Conhecimento sobre o Rótulo ---
        conhecimentoRotulo: {
            fichaProdutor: "Parras Wines — grupo português fundado em 2010 por Luís Parras, com sede em Alcobaça e atuação em regiões como Lisboa, Tejo, Dão e Douro.",
            analiseTecnica: "Teor alcoólico: 12,5% vol. | Estilo: Meio Seco | Acidez natural atlântica equilibrada | Guarda: Pronto para beber (até 4 anos).",
            avaliacoes: "Medalha Double Gold no Sakura Japan Women's Wine Awards (safra 2024) e média acima de 4,5/5 estrelas em avaliações de consumidores no varejo brasileiro.",
            precoMedioMercado: "R$ 40 a R$ 60 no varejo brasileiro (uso interno para curadoria; na adega segue o preço único da casa).",
            historiaRotulo: "'Alfacinha' é o apelido carinhoso dos habitantes de Lisboa, popularizado no século XIX por Almeida Garrett em 'Viagens na Minha Terra'. O rótulo com o tradicional elétrico amarelo celebra uma viagem pelas ruas históricas da capital portuguesa."
        },

        // --- 3. Conhecimento do Indivíduo ---
        conhecimentoIndividuo: {
            paladar: "Ideal para quem prefere vinhos tintos macios, frutados e fáceis de beber — desde iniciantes até quem busca um tinto descomplicado.",
            historicoPublico: "Rótulo de altíssima aceitação popular pela suavidade e equilíbrio entre fruta fresca e leve doçura natural.",
            rejeicoesQueEvita: "Não 'amarra' a boca (taninos bem suaves), não tem amargor excessivo e não traz peso ou gosto marcado de madeira/carvalho.",
            preferenciasAtendidas: "Aroma limpo de frutas vermelhas, toque meio seco agradável e sensação aveludada na boca."
        },

        // --- 4. Contexto ---
        contexto: {
            harmonizacaoSalgada: [
                "Pizzas (calabresa, marguerita) e massas com molho de tomate (lasanha, ravióli)",
                "Hambúrguer artesanal, carnes vermelhas macias grelhadas ou costela suína assada",
                "Queijos de cura média (prato, gouda, meia-cura) e embutidos leves"
            ],
            harmonizacaoDoce: [
                "Chocolate ao leite ou meio amargo suave (50% a 60% cacau)",
                "Cheesecake ou tortas de frutas vermelhas (amora, framboesa)",
                "Brownie tradicional ou pavê de chocolate suave"
            ],
            ocasiao: "Noite da pizza, jantar prático no meio da semana, encontro descontraído ou taça relaxante.",
            companhia: "Casal, família, amigos ou apreciação individual no sofá.",
            temperatura: "16 °C (deixar 15 a 20 minutos na geladeira antes de abrir).",
            horario: "Final de tarde, jantar ou noite.",
            orcamento: "Preço único da Adega VINHO24H (autoatendimento no condomínio).",
            intencao: "Escolha segura e sem erro para agradar diferentes gostos na primeira taça."
        }
    },

    {
        // --- Controle e Vitrine (index.html) ---
        ativo: true,
        categoria: "tintos",
        nome: "Tantehue Carménère",
        arquivoPagina: "tantehue-carmenere.html",
        arquivoImagem: "TANTEHUE CARMENERE.png",
        imagemRegiao: "Tintos/Imagens/regiao-vale-central-chile.jpg",
        paisRegiao: "Vale Central, Chile",
        bandeira: "🇨🇱",
        seloDestaque: "🏆 Viña Ventisquero",
        destaqueOuro: false,
        resumoCard: "Carménère chileno seco, porém macio e aveludado, com notas de morango, amora, cereja e leve toque especiado sem madeira.",
        tags: ["Seco", "Aveludado", "Frutas Vermelhas"],
        perfilSensorial: {
            corpo: { rotulo: "Médio", nivel: 55 },
            maciez: { rotulo: "Macio e Aveludado", nivel: 78 },
            docura: { rotulo: "Seco Frutado", nivel: 15 },
            frescor: { rotulo: "Equilibrado", nivel: 60 }
        },

        // --- 1. Conhecimento do Vinho ---
        conhecimentoVinho: {
            denominacao: "D.O. Valle Central (Central Valley), Chile",
            terroir: "Clima mediterrâneo entre a Cordilheira dos Andes e a Cordilheira da Costa, com dias ensolarados e noites frescas (forte amplitude térmica) sobre solos aluviais profundos e férteis.",
            uvas: "Carménère (com pequeno toque de Syrah)",
            produtor: "Viña Ventisquero",
            safra: "Não Safrado / Corrente",
            metodo: "Fermentação em tanques de aço inoxidável com controle de temperatura, sem passagem por barricas de carvalho, seguida de breve descanso em garrafa.",
            sensoriais: "Visual vermelho-rubi claro e brilhante; aromas de morango, framboesa, amora e cereja com toque sutil herbáceo/especiado da casta; em boca tem corpo médio, taninos macios e final frutado."
        },

        // --- 2. Conhecimento sobre o Rótulo ---
        conhecimentoRotulo: {
            fichaProdutor: "Viña Ventisquero — fundada em 1998 por Gonzalo Vial, reconhecida internacionalmente pela sustentabilidade e consistência (premiada como Melhor Produtor do Chile no Berliner Wein Trophy 2019).",
            analiseTecnica: "Teor alcoólico: 12,5% vol. | Estilo: Tinto Seco | Sem passagem por carvalho.",
            avaliacoes: "Amplamente elogiado pelo excelente custo-benefício e facilidade de agradar em refeições cotidianas.",
            precoMedioMercado: "R$ 35 a R$ 55 no varejo brasileiro (uso interno para curadoria; na adega segue o preço único da casa).",
            historiaRotulo: "O nome 'Tantehue' homenageia o povoado chileno onde vive a maior parte dos trabalhadores e agricultores dos vinhedos da Viña Ventisquero."
        },

        // --- 3. Conhecimento do Indivíduo ---
        conhecimentoIndividuo: {
            paladar: "Para quem busca um vinho tinto seco leve a médio, com fruta vermelha limpa e maciez, sem sensação pesada.",
            historicoPublico: "Porta de entrada muito bem aceita para quem quer conhecer a uva ícone do Chile (Carménère).",
            rejeicoesQueEvita: "Sem gosto forte de madeira/carvalho, não é doce e não deixa a boca áspera.",
            preferenciasAtendidas: "Sabor frutado equilibrado, textura macia e ótima versatilidade à mesa."
        },

        // --- 4. Contexto ---
        contexto: {
            harmonizacaoSalgada: [
                "Carnes vermelhas magras grelhadas, lombo ou costelinha suína e hambúrguer artesanal",
                "Pizzas e massas com molhos vermelhos leves",
                "Queijos semiduros e maduros de intensidade média (gouda, prato, emmental)"
            ],
            harmonizacaoDoce: [
                "Chocolate meio amargo (60% a 70% de cacau)",
                "Torta de cereja ou frutas vermelhas pouco doce",
                "Brownie de chocolate meio amargo com nozes"
            ],
            ocasiao: "Churrasquinho na varanda, noite de hambúrguer ou jantar casual.",
            companhia: "Casal, amigos ou visita no apartamento.",
            temperatura: "14 °C a 18 °C (15 minutos na geladeira antes de servir).",
            horario: "Almoço de fim de semana, fim de tarde ou jantar.",
            orcamento: "Preço único da Adega VINHO24H (autoatendimento no condomínio).",
            intencao: "Entregar um Carménère chileno autêntico, seco e fácil de beber."
        }
    },

    {
        // --- Controle e Vitrine (index.html) ---
        ativo: true,
        categoria: "tintos",
        nome: "Cantarinha Tradição Tinto Meio Seco",
        arquivoPagina: "cantarinha-tradicao-tinto.html",
        arquivoImagem: "VINHO FINO TINTO MEIO SECO CANTARINHA.png",
        imagemRegiao: "Tintos/Imagens/regiao-alentejo-portugal.jpg",
        paisRegiao: "Alentejo, Portugal",
        bandeira: "🇵🇹",
        seloDestaque: "🏺 Tradição Alentejo",
        destaqueOuro: false,
        resumoCard: "Alentejano meio seco, macio e redondo, cheio de frutas escuras maduras (ameixa e amora) com toque sutil de especiarias.",
        tags: ["Meio Seco", "Alentejo", "Redondo"],
        perfilSensorial: {
            corpo: { rotulo: "Médio a Encorpado", nivel: 64 },
            maciez: { rotulo: "Macio e Redondo", nivel: 80 },
            docura: { rotulo: "Meio Seco", nivel: 38 },
            frescor: { rotulo: "Equilibrado", nivel: 55 }
        },

        // --- 1. Conhecimento do Vinho ---
        conhecimentoVinho: {
            denominacao: "Vinho Regional Alentejano (Redondo, Alentejo)",
            terroir: "Clima mediterrâneo ensolarado com noites frescas (amplitude térmica) e solos graníticos, xistosos e argilo-calcários na sub-região de Redondo.",
            uvas: "Aragonês, Castelão, Trincadeira e Syrah",
            produtor: "Adega Cooperativa de Redondo",
            safra: "Não Safrado / Corrente",
            metodo: "Vinificação alentejana tradicional focada em maturação plena da fruta, resultando em taninos maduros e boca arredondada.",
            sensoriais: "Cor rubi/granada intensa; aromas de frutas vermelhas e negras maduras (ameixa e amora) com especiarias sutis; em boca é macio, redondo e harmonioso."
        },

        // --- 2. Conhecimento sobre o Rótulo ---
        conhecimentoRotulo: {
            fichaProdutor: "Adega de Redondo — fundada em 1956 na vila de Redondo (Alentejo), uma das cooperativas mais tradicionais e premiadas de Portugal (criadora de Porta da Ravessa).",
            analiseTecnica: "Teor alcoólico: 13% vol. | Estilo: Tinto Meio Seco | 750ml.",
            avaliacoes: "Muito apreciado pelo público brasileiro que busca a maciez e o calor característicos dos vinhos do Alentejo.",
            precoMedioMercado: "R$ 50 a R$ 75 no varejo brasileiro (uso interno para curadoria; na adega segue o preço único da casa).",
            historiaRotulo: "O nome homenageia as tradicionais cantarinhas de barro da cultura rural do Alentejo, retratadas no próprio rótulo ao lado da paisagem campestre."
        },

        // --- 3. Conhecimento do Indivíduo ---
        conhecimentoIndividuo: {
            paladar: "Ideal para quem gosta de tintos mais maduros, redondos e levemente adocicados (meio seco), com presença de fruta escura.",
            historicoPublico: "Vinhos alentejanos estão entre os favoritos dos brasileiros pela maciez e sensação aconchegante.",
            rejeicoesQueEvita: "Sem adstringência agressiva e sem acidez cortante.",
            preferenciasAtendidas: "Sensação cheia e redonda na boca, frutas maduras e final macio."
        },

        // --- 4. Contexto ---
        contexto: {
            harmonizacaoSalgada: [
                "Carnes vermelhas grelhadas ou assadas, carne de panela e pratos de forno",
                "Massas com molhos ricos (ragu, bolonhesa, quatro queijos)",
                "Embutidos e queijos curados ou semiduros"
            ],
            harmonizacaoDoce: [
                "Chocolate ao leite ou 50% cacau e trufas",
                "Torta de amora, doce de ameixa ou queijo minas com compota",
                "Pastel de nata ou pavê de chocolate suave"
            ],
            ocasiao: "Almoço em família, jantar especial em casa ou tábua de queijos e frios.",
            companhia: "Família, casal ou amigos que apreciam vinhos macios.",
            temperatura: "16 °C a 18 °C (15 minutos na geladeira antes de servir).",
            horario: "Almoço de domingo, jantar ou fim de noite.",
            orcamento: "Preço único da Adega VINHO24H (autoatendimento no condomínio).",
            intencao: "Oferecer um clássico alentejano redondo e muito fácil de agradar."
        }
    },

    {
        // --- Controle e Vitrine (index.html) ---
        ativo: true,
        categoria: "tintos",
        nome: "Casa José Pedro DOC Trás-os-Montes Tinto",
        arquivoPagina: "casa-jose-pedro-tras-os-montes.html",
        arquivoImagem: "VINHO TINTO SECO PORTUGAL CASA JOSE PEDRO TRAS-OS-MONTES.png",
        imagemRegiao: "Tintos/Imagens/regiao-tras-os-montes-portugal.jpg",
        paisRegiao: "Trás-os-Montes, Portugal",
        bandeira: "🇵🇹",
        seloDestaque: "⛰️ Selo DOC Portugal",
        destaqueOuro: false,
        resumoCard: "Tinto seco autêntico do norte português, com aromas de cereja e framboesa, acidez viva gastronômica e textura aveludada.",
        tags: ["Seco", "DOC Portugal", "Aveludado"],
        perfilSensorial: {
            corpo: { rotulo: "Médio", nivel: 60 },
            maciez: { rotulo: "Aveludado", nivel: 74 },
            docura: { rotulo: "Seco Autêntico", nivel: 15 },
            frescor: { rotulo: "Vivo e Gastronômico", nivel: 72 }
        },

        // --- 1. Conhecimento do Vinho ---
        conhecimentoVinho: {
            denominacao: "DOC Trás-os-Montes (Valpaços), Portugal",
            terroir: "Solos de xisto ricos em minerais na região de Valpaços, ajudando a reter umidade e moderar a temperatura das videiras em clima continental.",
            uvas: "Alicante Bouschet, Tinta Roriz, Tinta Amarela e Touriga Franca",
            produtor: "Casa José Pedro (Quinta de Valpaços)",
            safra: "Não Safrado / Corrente",
            metodo: "Vinificação tradicional em cubas de aço inox com controle de temperatura, preservando frescor, fruta primária e mineralidade sem excesso de madeira.",
            sensoriais: "Cor rubi límpida; aromas intensos de cereja e framboesa maduras com notas florais; em boca é seco, equilibrado, com acidez viva, corpo médio e textura aveludada."
        },

        // --- 2. Conhecimento sobre o Rótulo ---
        conhecimentoRotulo: {
            fichaProdutor: "Casa José Pedro — produtor familiar da família Pedro na Quinta de Valpaços (~75 hectares em Rio Torto), unindo tradição artesanal transmontana e tecnologia moderna.",
            analiseTecnica: "Teor alcoólico: 13% vol. | Estilo: Vinho Fino Tinto Seco | 750ml.",
            avaliacoes: "Excelente reputação em custo-benefício entre os vinhos da DOC Trás-os-Montes, elogiado pela tipicidade e textura polida.",
            precoMedioMercado: "R$ 60 a R$ 100 no varejo brasileiro (uso interno para curadoria; na adega segue o preço único da casa).",
            historiaRotulo: "Produzido no coração de Trás-os-Montes, traz identidade visual moderna inspirada nas cores vibrantes e tradições culturais da região."
        },

        // --- 3. Conhecimento do Indivíduo ---
        conhecimentoIndividuo: {
            paladar: "Perfeito para quem aprecia vinhos tintos secos com bom frescor, equilíbrio gastronômico e elegância sem dulçor residual.",
            historicoPublico: "Muito bem avaliado por apreciadores de vinhos portugueses autênticos com ótimo valor agregado.",
            rejeicoesQueEvita: "Não é doce nem enjoativo, e evita a rusticidade áspera graças aos taninos macios.",
            preferenciasAtendidas: "Fruta vermelha fresca, toque floral, frescor à mesa e final persistente."
        },

        // --- 4. Contexto ---
        contexto: {
            harmonizacaoSalgada: [
                "Carnes vermelhas grelhadas (alcatra, bife ancho) e aves assadas saborosas",
                "Bacalhau ao forno, risoto de cogumelos ou massas com molho de carne",
                "Queijos curados de intensidade média (canastra maturado, parmesão)"
            ],
            harmonizacaoDoce: [
                "Chocolate amargo intenso (65% a 70% cacau)",
                "Figos assados ou pera cozida no vinho com queijo suave",
                "Torta rústica de cereja ou frutas vermelhas pouco doce"
            ],
            ocasiao: "Jantar gastronômico em casa, bife grelhado ou noite de queijos curados.",
            companhia: "Jantar a dois ou amigos que preferem vinhos secos.",
            temperatura: "16 °C a 18 °C (15 a 20 minutos na geladeira antes de servir).",
            horario: "Almoço especial de fim de semana ou jantar.",
            orcamento: "Preço único da Adega VINHO24H (grande destaque de valor dentro do preço único).",
            intencao: "Oferecer um DOC português seco de alto nível gastronômico no catálogo."
        }
    }

    // =========================================================================
    // MODELO EM BRANCO PARA ADICIONAR NOVO VINHO (COPIE, DESCOMENTE E PREENCHA)
    // Dica: Lembre-se de colocar uma vírgula "," depois da chave "}" do item anterior.
    // =========================================================================
    /*
    ,
    {
        // --- Controle e Vitrine (index.html) ---
        ativo: false,
        categoria: "brancos", // "tintos" | "brancos" | "roses" | "espumantes"
        nome: "NOME COMPLETO DO VINHO AQUI",
        arquivoPagina: "", // Ex.: "nome-do-vinho.html" (deixe "" se ainda vou criar)
        arquivoImagem: "", // Nome exato do arquivo dentro de <Categoria>/Imagens/
        imagemRegiao: "",  // URL ou caminho local opcional da paisagem da região
        paisRegiao: "",    // Ex.: "Mendoza, Argentina"
        bandeira: "🍷",    // Ex.: "🇦🇷", "🇨🇱", "🇵🇹", "🇧🇷", "🇮🇹", "🇫🇷", "🇪🇸"
        seloDestaque: "",  // Ex.: "🏅 Premiado" ou "" se não houver
        destaqueOuro: false,
        resumoCard: "",
        tags: [],
        perfilSensorial: {
            corpo: { rotulo: "", nivel: 50 },
            maciez: { rotulo: "", nivel: 50 },
            docura: { rotulo: "", nivel: 30 },
            frescor: { rotulo: "", nivel: 50 }
        },

        // --- 1. Conhecimento do Vinho ---
        conhecimentoVinho: {
            denominacao: "",
            terroir: "",
            uvas: "",
            produtor: "",
            safra: "",
            metodo: "",
            sensoriais: ""
        },

        // --- 2. Conhecimento sobre o Rótulo ---
        conhecimentoRotulo: {
            fichaProdutor: "",
            analiseTecnica: "",
            avaliacoes: "",
            precoMedioMercado: "",
            historiaRotulo: ""
        },

        // --- 3. Conhecimento do Indivíduo ---
        conhecimentoIndividuo: {
            paladar: "",
            historicoPublico: "",
            rejeicoesQueEvita: "",
            preferenciasAtendidas: ""
        },

        // --- 4. Contexto ---
        contexto: {
            harmonizacaoSalgada: [],
            harmonizacaoDoce: [],
            ocasiao: "",
            companhia: "",
            temperatura: "",
            horario: "",
            orcamento: "Preço único da Adega VINHO24H",
            intencao: ""
        }
    }
    */
];
