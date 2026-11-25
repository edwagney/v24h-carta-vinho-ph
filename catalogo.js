/**
 * =============================================================================
 * CATÁLOGO CENTRAL DA CARTA DE VINHOS — ENNOVIN • Adega VINHO24H
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
    },

    // =========================================================================
    // VINHOS ROSÉS
    // =========================================================================
    {
        // --- Controle e Vitrine (index.html) ---
        ativo: true,
        categoria: "roses",
        nome: "Pueblo del Sol Tannat Rosé 2025",
        arquivoPagina: "pueblo-del-sol-tannat-rose.html",
        arquivoImagem: "PUEBLO DEL SOL TANNAT ROSE.png",
        imagemRegiao: "Roses/Imagens/regiao-canelones-uruguai.jpg",
        paisRegiao: "Canelones, Uruguai",
        bandeira: "🇺🇾",
        seloDestaque: "☀️ 100% Tannat Rosé",
        destaqueOuro: false,
        resumoCard: "Rosé seco uruguaio leve e refrescante, com notas de morango e cereja frescos e toque cremoso sem passagem por madeira.",
        tags: ["Rosé Seco", "Leve", "Frutas Vermelhas"],
        perfilSensorial: {
            corpo: { rotulo: "Leve", nivel: 35 },
            maciez: { rotulo: "Macio e Cremoso", nivel: 82 },
            docura: { rotulo: "Seco Frutado", nivel: 15 },
            frescor: { rotulo: "Bem Refrescante", nivel: 78 }
        },

        // --- 1. Conhecimento do Vinho ---
        conhecimentoVinho: {
            denominacao: "Canelones (Juanicó), Uruguai",
            terroir: "Solos argilo-calcários e siltosos com excelente drenagem e clima temperado refrescado pelas brisas do Oceano Atlântico e do Rio da Prata.",
            uvas: "100% Tannat (colheita manual, vinificada como rosé)",
            produtor: "Linha Pueblo del Sol (tradição Canelones / Juanicó)",
            safra: "2025",
            metodo: "Vinificação em aço inox sem passagem por carvalho, preservando frescor e fruta.",
            sensoriais: "Cor rosada clara/casca de cebola; aromas de morango, cereja e flores sutis; boca leve, macia, levemente cremosa e de acidez refrescante."
        },

        // --- 2. Conhecimento sobre o Rótulo ---
        conhecimentoRotulo: {
            fichaProdutor: "Projeto uruguaio na tradicional região de Canelones focado em vinhos jovens, expressivos e fáceis de beber.",
            analiseTecnica: "Teor alcoólico: ~12% a 12,5% vol. | Estilo: Rosé Seco | Consumo jovem (até 3 anos).",
            avaliacoes: "Muito bem aceito pelo contraste surpreendente entre a fama potente da Tannat e a leveza deste rosé.",
            precoMedioMercado: "R$ 35 a R$ 60 no varejo brasileiro (uso interno para curadoria; na adega segue o preço único da casa).",
            historiaRotulo: "Homenagem ao sol uruguaio que amadurece os vinhedos costeiros, ilustrando a paisagem costeira no próprio rótulo."
        },

        // --- 3. Conhecimento do Indivíduo ---
        conhecimentoIndividuo: {
            paladar: "Para quem busca um rosé seco elegante, leve e com frescor limpo.",
            historicoPublico: "Agrada quem quer algo leve para dias quentes sem doçura residual.",
            rejeicoesQueEvita: "Zero peso e zero adstringência (apesar de ser feito com Tannat).",
            preferenciasAtendidas: "Frutas vermelhas frescas, leveza e acidez refrescante."
        },

        // --- 4. Contexto ---
        contexto: {
            harmonizacaoSalgada: [
                "Frutos do mar (camarão, mariscos) e peixes grelhados",
                "Culinária japonesa (sushi e sashimi) e frango ao molho cítrico",
                "Queijos cremosos (brie, burrata) e aperitivos leves"
            ],
            harmonizacaoDoce: [
                "Morangos frescos ou torta leve de frutas vermelhas",
                "Torta leve de limão ou panna cotta de baunilha",
                "Chocolate branco suave com raspas cítricas"
            ],
            ocasiao: "Fim de tarde na varanda, happy hour ou almoço leve.",
            companhia: "Casal, amigos no pôr do sol ou apreciação individual.",
            temperatura: "8 °C a 10 °C (45 a 60 minutos na geladeira antes de abrir).",
            horario: "Almoço ensolarado, fim de tarde ou início de noite.",
            orcamento: "Preço único da Adega VINHO24H (autoatendimento no condomínio).",
            intencao: "Oferecer um rosé seco sul-americano moderno e refrescante."
        }
    },

    {
        // --- Controle e Vitrine (index.html) ---
        ativo: true,
        categoria: "roses",
        nome: "Peccato Di Vino Classic Rosé",
        arquivoPagina: "peccato-di-vino-classic-rose.html",
        arquivoImagem: "VINHO FINO ROSE SECO PECCATO DIVINO CLASSIC.png",
        imagemRegiao: "Roses/Imagens/regiao-vale-central-chile-rose.jpg",
        paisRegiao: "Vale Central, Chile",
        bandeira: "🇨🇱",
        seloDestaque: "✨ Clássico Chileno",
        destaqueOuro: false,
        resumoCard: "Rosé fino seco chileno jovem e delicado, com aromas de morango, framboesa e final limpo para acompanhar pratos leves.",
        tags: ["Rosé Seco", "Delicado", "Versátil"],
        perfilSensorial: {
            corpo: { rotulo: "Leve", nivel: 32 },
            maciez: { rotulo: "Suave e Limpo", nivel: 80 },
            docura: { rotulo: "Seco", nivel: 15 },
            frescor: { rotulo: "Equilibrado", nivel: 72 }
        },

        // --- 1. Conhecimento do Vinho ---
        conhecimentoVinho: {
            denominacao: "D.O. Central Valley (Vale do Maule), Chile",
            terroir: "Coração do Vale Central chileno, com dias ensolarados e brisas frescas que preservam a acidez e a fruta limpa.",
            uvas: "Cabernet Sauvignon e Carménère",
            produtor: "Viña de Aguirre",
            safra: "Não Safrado / Corrente",
            metodo: "Vinificação moderna em rosé focada em frescor e aromas primários de frutas vermelhas.",
            sensoriais: "Rosa claro brilhante; aromas de morango, framboesa e toque floral sutil; em boca é leve, seco, refrescante e de final limpo."
        },

        // --- 2. Conhecimento sobre o Rótulo ---
        conhecimentoRotulo: {
            fichaProdutor: "Viña de Aguirre — vinícola familiar localizada no Vale do Maule (Chile), reconhecida pela ótima relação qualidade-preço.",
            analiseTecnica: "Teor alcoólico: 12% a 13% vol. | Estilo: Vinho Fino Rosé Seco | 750ml.",
            avaliacoes: "Rótulo de entrada muito elogiado pela leveza e praticidade para o dia a dia.",
            precoMedioMercado: "R$ 25 a R$ 45 no varejo brasileiro (uso interno para curadoria; na adega segue o preço único da casa).",
            historiaRotulo: "A linha 'Peccato Di Vino' foi inspirada em 'A Divina Comédia' de Dante Alighieri, brincando com o prazer de degustar um bom vinho sem culpa."
        },

        // --- 3. Conhecimento do Indivíduo ---
        conhecimentoIndividuo: {
            paladar: "Para quem quer um rosé seco leve, sem sabor adocicado e fácil de combinar.",
            historicoPublico: "Boa aceitação como vinho descomplicado para happy hour e refeições leves.",
            rejeicoesQueEvita: "Sem amargor, sem dulçor excessivo e sem peso.",
            preferenciasAtendidas: "Delicadeza aromática, frescor e praticidade."
        },

        // --- 4. Contexto ---
        contexto: {
            harmonizacaoSalgada: [
                "Saladas frescas e pratos mediterrâneos leves",
                "Frutos do mar, peixes grelhados e comida japonesa (sushi/sashimi)",
                "Queijo de cabra, queijos frescos e aperitivos"
            ],
            harmonizacaoDoce: [
                "Morangos e framboesas frescas ou pavlova leve",
                "Panna cotta com calda leve de frutas vermelhas",
                "Bombons de chocolate branco"
            ],
            ocasiao: "Happy hour em casa, jantar leve ou aperitivo de fim de tarde.",
            companhia: "Amigos, casal ou momento relaxante pós-trabalho.",
            temperatura: "8 °C a 10 °C (45 a 60 minutos na geladeira antes de abrir).",
            horario: "Fim de tarde ou jantar leve.",
            orcamento: "Preço único da Adega VINHO24H (autoatendimento no condomínio).",
            intencao: "Oferecer um rosé chileno seco versátil e direto ao ponto."
        }
    },

    {
        // --- Controle e Vitrine (index.html) ---
        ativo: true,
        categoria: "roses",
        nome: "Bons Ventos Fresh Rosé",
        arquivoPagina: "bons-ventos-fresh-rose.html",
        arquivoImagem: "BONS VENTOS FRESH ROSE.png",
        imagemRegiao: "Roses/Imagens/regiao-lisboa-bons-ventos.jpg",
        paisRegiao: "Lisboa, Portugal",
        bandeira: "🇵🇹",
        seloDestaque: "🌬️ Levíssimo 9,5%",
        destaqueOuro: true,
        resumoCard: "Rosé português meio seco de baixo teor alcoólico (9,5%), super refrescante, macio e cheio de morango, framboesa e cereja.",
        tags: ["Meio Seco", "9,5% Álcool", "Super Refrescante"],
        perfilSensorial: {
            corpo: { rotulo: "Bem Leve", nivel: 25 },
            maciez: { rotulo: "Super Macio", nivel: 88 },
            docura: { rotulo: "Meio Seco Suave", nivel: 45 },
            frescor: { rotulo: "Muito Refrescante", nivel: 82 }
        },

        // --- 1. Conhecimento do Vinho ---
        conhecimentoVinho: {
            denominacao: "Vinho Regional Lisboa (Alenquer), Portugal",
            terroir: "Vinhedos de encosta em Alenquer (a ~45 km de Lisboa) com forte brisa atlântica que preserva aromas e acidez.",
            uvas: "Castelão, Camarate e Cabernet Sauvignon",
            produtor: "Casa Santos Lima (Quinta de Bons Ventos)",
            safra: "Não Safrado / Corrente",
            metodo: "Fermentação em tanques de aço inox com controle rigoroso de temperatura, sem passagem por carvalho.",
            sensoriais: "Rosa-claro cristalino; aromas intensos de morango, framboesa e cereja com toque cítrico e floral; boca bem leve, refrescante e com leve doçura equilibrada."
        },

        // --- 2. Conhecimento sobre o Rótulo ---
        conhecimentoRotulo: {
            fichaProdutor: "Casa Santos Lima — produtor familiar histórico de Alenquer (Portugal), referência internacional em vinhos de alto valor agregado.",
            analiseTecnica: "Teor alcoólico: 9,5% vol. | Estilo: Rosé Meio Seco (Demi-Sec) | 750ml.",
            avaliacoes: "Linha Quinta de Bons Ventos reconhecida internacionalmente como destaque em qualidade/preço ('Best Buy').",
            precoMedioMercado: "R$ 40 a R$ 60 no varejo brasileiro (uso interno para curadoria; na adega segue o preço único da casa).",
            historiaRotulo: "A versão 'Fresh' foi criada especialmente para climas quentes e para quem deseja menos álcool (9,5%) com máxima refrescância."
        },

        // --- 3. Conhecimento do Indivíduo ---
        conhecimentoIndividuo: {
            paladar: "Ideal para quem prefere vinhos leves no álcool, suaves/meio secos e super fáceis de beber gelados.",
            historicoPublico: "Sucesso entre iniciantes e em tardes quentes de verão.",
            rejeicoesQueEvita: "Zero aspereza, sem sensação alcoólica forte e nada seco demais.",
            preferenciasAtendidas: "Fruta vermelha docinha na medida, leveza extrema e frescor."
        },

        // --- 4. Contexto ---
        contexto: {
            harmonizacaoSalgada: [
                "Frutos do mar leves, sushi, sashimi e pokes frescos",
                "Saladas de verão, wraps e frango grelhado",
                "Queijos brancos e frescos (brie, ricota temperada, mussarela de búfala)"
            ],
            harmonizacaoDoce: [
                "Torta de morango ou cheesecake de frutas vermelhas",
                "Mousse leve de morango ou maracujá e salada de frutas",
                "Macarons de frutas vermelhas ou bombons de chocolate branco"
            ],
            ocasiao: "Tarde de sol, pós-piscina, happy hour ou taça leve sem compromisso.",
            companhia: "Amigos, casal ou quem prefere bebidas suaves.",
            temperatura: "6 °C a 8 °C (cerca de 1 hora na geladeira antes de abrir).",
            horario: "Meio da tarde, pôr do sol ou início de noite.",
            orcamento: "Preço único da Adega VINHO24H (autoatendimento no condomínio).",
            intencao: "Entregar o rosé mais leve, acessível e refrescante da carta."
        }
    },

    {
        // --- Controle e Vitrine (index.html) ---
        ativo: true,
        categoria: "roses",
        nome: "Calamares Vinho Verde DOC Rosé",
        arquivoPagina: "calamares-vinho-verde-rose.html",
        arquivoImagem: "CALAMARES VINHO VERDE ROSE.png",
        imagemRegiao: "Roses/Imagens/regiao-vinho-verde-minho.jpg",
        paisRegiao: "Vinho Verde, Portugal",
        bandeira: "🇵🇹",
        seloDestaque: "🐙 Leve Frisante DOC",
        destaqueOuro: false,
        resumoCard: "Vinho Verde rosé meio seco (10,5% vol.) com leve frisância natural, aromas de morango, cereja e groselha para beber bem gelado.",
        tags: ["Vinho Verde", "Meio Seco", "Leve Frisante"],
        perfilSensorial: {
            corpo: { rotulo: "Bem Leve", nivel: 28 },
            maciez: { rotulo: "Macio e Alegre", nivel: 85 },
            docura: { rotulo: "Meio Seco Equilibrado", nivel: 42 },
            frescor: { rotulo: "Muito Vibrante", nivel: 86 }
        },

        // --- 1. Conhecimento do Vinho ---
        conhecimentoVinho: {
            denominacao: "DOC Vinho Verde (Minho), Portugal",
            terroir: "Noroeste de Portugal com clima atlântico ameno e solos graníticos e arenosos que garantem acidez natural vibrante e frescor mineral.",
            uvas: "Espadeiro, Borraçal e Padeiro",
            produtor: "Enoport Wines",
            safra: "Não Safrado",
            metodo: "Fermentação em cubas de aço inox sob controle de temperatura, mantendo leve gás carbônico residual (aspecto levemente frisante).",
            sensoriais: "Rosa claro salmão brilhante; aromas intensos de morango, cereja madura, groselha e florais; boca leve, vibrante e meio seca equilibrada."
        },

        // --- 2. Conhecimento sobre o Rótulo ---
        conhecimentoRotulo: {
            fichaProdutor: "Enoport Wines — grupo português formado em 2005 pela união de casas vinícolas centenárias como Caves Velhas e Caves Dom Teodósio.",
            analiseTecnica: "Teor alcoólico: 10,5% vol. | Estilo: Meio Seco (Leve Frisante) | DOC Vinho Verde | 750ml.",
            avaliacoes: "Um dos Vinhos Verdes portugueses mais populares e tradicionais no Brasil.",
            precoMedioMercado: "R$ 40 a R$ 65 no varejo brasileiro (uso interno para curadoria; na adega segue o preço único da casa).",
            historiaRotulo: "Famoso pela garrafa arredondada e pelo polvo rosa no rótulo, celebrando a vocação costeira e gastronômica do Minho."
        },

        // --- 3. Conhecimento do Indivíduo ---
        conhecimentoIndividuo: {
            paladar: "Para quem ama vinhos bem gelados, jovens, com cócegas sutis de gás natural e toque meio seco refrescante.",
            historicoPublico: "Altíssima familiaridade e apelo visual no mercado brasileiro.",
            rejeicoesQueEvita: "Nunca é pesado, não tem madeira nem álcool elevado.",
            preferenciasAtendidas: "Frescor intenso, leve frisância e equilíbrio entre acidez e doçura."
        },

        // --- 4. Contexto ---
        contexto: {
            harmonizacaoSalgada: [
                "Frutos do mar (lula, camarão), bolinho de bacalhau e peixes grelhados",
                "Sushi, sashimi de salmão, ceviche suave e saladas frescas",
                "Queijos leves (minas frescal, brie, cabra) e canapés"
            ],
            harmonizacaoDoce: [
                "Torta de morango ou cheesecake de frutas vermelhas",
                "Panna cotta com calda de morango ou sorbet de frutas",
                "Doce de ovos suave ou bolo de iogurte com frutas"
            ],
            ocasiao: "Fim de semana na varanda, almoço leve ou encontro descontraído com amigos.",
            companhia: "Amigos, família ou casal.",
            temperatura: "6 °C a 8 °C (1 hora na geladeira antes de abrir).",
            horario: "Almoço de fim de semana, tarde quente ou aperitivo.",
            orcamento: "Preço único da Adega VINHO24H (autoatendimento no condomínio).",
            intencao: "Trazer um ícone português de Vinho Verde Rosé acessível e vibrante."
        }
    },

    {
        // --- Controle e Vitrine (index.html) ---
        ativo: false,
        categoria: "roses",
        nome: "Foye Reserva Rosé 2025",
        arquivoPagina: "foye-reserva-rose-2025.html",
        arquivoImagem: "foye_reserva_rose_2025.png",
        imagemRegiao: "Roses/Imagens/regiao-vale-central-chile-rose.jpg",
        paisRegiao: "Vale do Maule, Chile",
        bandeira: "🇨🇱",
        seloDestaque: "🌸 Estilo Provence",
        destaqueOuro: false,
        resumoCard: "Rosé seco chileno de cor salmão pálida (Syrah e Malbec), leve e crocante, com aromas de morango, framboesa silvestre e hortelã.",
        tags: ["Rosé Seco", "Syrah & Malbec", "Vale do Maule"],
        perfilSensorial: {
            corpo: { rotulo: "Leve", nivel: 32 },
            maciez: { rotulo: "Suave e Limpo", nivel: 78 },
            docura: { rotulo: "Seco Frutado", nivel: 14 },
            frescor: { rotulo: "Vivo e Crocante", nivel: 82 }
        },

        // --- 1. Conhecimento do Vinho ---
        conhecimentoVinho: {
            denominacao: "D.O. Valle del Maule (Secano Interior), Chile",
            terroir: "Vinhedos da Bouchon Family Wines entre as encostas da Cordilheira Costeira e terraços aluviais do Vale do Maule.",
            uvas: "Syrah e Malbec",
            produtor: "Bouchon Family Wines",
            safra: "2025",
            metodo: "Vinificação em tanques de aço inox para preservar frescor, cor salmão pálida e fruta pura, sem passagem por madeira.",
            sensoriais: "Rosa-salmão pálida brilhante; aromas frescos de morango e framboesa silvestres com flores delicadas e leve hortelã; paladar leve, seco, crocante e refrescante."
        },

        // --- 2. Conhecimento sobre o Rótulo ---
        conhecimentoRotulo: {
            fichaProdutor: "Bouchon Family Wines — vinícola familiar tradicional no Vale do Maule desde 1887.",
            analiseTecnica: "Teor alcoólico: 12,0% a 12,5% vol. | Estilo: Rosé Seco | Tampa de rosca | 750ml.",
            avaliacoes: "Muito apreciado pela delicadeza estilo Provence e acidez crocante.",
            precoMedioMercado: "R$ 45 a R$ 70 no varejo brasileiro (uso interno para curadoria; na adega segue o preço único da casa).",
            historiaRotulo: "'Foye' (ou Canelo) é a árvore sagrada do povo indígena Mapuche do sul do Chile, celebrada no rótulo."
        },

        // --- 3. Conhecimento do Indivíduo ---
        conhecimentoIndividuo: {
            paladar: "Para quem prefere rosés secos, elegantes e bem refrescantes.",
            historicoPublico: "Forte apelo em dias quentes e combinações com comida japonesa.",
            rejeicoesQueEvita: "Zero dulçor sobrando e zero peso de madeira.",
            preferenciasAtendidas: "Frutas vermelhas silvestres, leveza e acidez viva."
        },

        // --- 4. Contexto ---
        contexto: {
            harmonizacaoSalgada: [
                "Sushi, sashimi e salmão grelhado",
                "Frutos do mar, saladas frescas e culinária asiática leve",
                "Crostinis, queijos cremosos (brie, cabra)"
            ],
            harmonizacaoDoce: [
                "Morangos e framboesas frescas",
                "Panna cotta leve ou cheesecake pouco doce",
                "Sorbet de framboesa ou torta leve de limão"
            ],
            ocasiao: "Aperitivo na varanda, noite de comida japonesa ou almoço ensolarado.",
            companhia: "Amigos, casal ou fim de tarde refrescante.",
            temperatura: "8 °C a 10 °C (45 a 60 minutos na geladeira antes de servir).",
            horario: "Almoço, happy hour ou jantar leve.",
            orcamento: "Preço único da Adega VINHO24H (autoatendimento no condomínio).",
            intencao: "Oferecer um rosé chileno seco elegante no estilo Provence (ainda não abastecido)."
        }
    },

    {
        // --- Controle e Vitrine (index.html) ---
        ativo: false,
        categoria: "roses",
        nome: "Casas Del Toqui Single Estate D.O. Central Valley Rosé 2025",
        arquivoPagina: "casas-del-toqui-single-estate-rose-2025.html",
        arquivoImagem: "casas_del_toqui_single_estate_d_o_central_valley_rose_2025.png",
        imagemRegiao: "Roses/Imagens/regiao-vale-central-chile-rose.jpg",
        paisRegiao: "Vale Central, Chile",
        bandeira: "🇨🇱",
        seloDestaque: "🍓 100% Cabernet Sauv.",
        destaqueOuro: false,
        resumoCard: "Rosé seco chileno 100% Cabernet Sauvignon, macio e frutado, com notas de morango, amora, maçã vermelha e final refrescante.",
        tags: ["Rosé Seco", "100% Cabernet", "Vegano"],
        perfilSensorial: {
            corpo: { rotulo: "Leve a Médio", nivel: 38 },
            maciez: { rotulo: "Macio e Cremoso", nivel: 80 },
            docura: { rotulo: "Seco Frutado", nivel: 15 },
            frescor: { rotulo: "Refrescante", nivel: 78 }
        },

        // --- 1. Conhecimento do Vinho ---
        conhecimentoVinho: {
            denominacao: "D.O. Central Valley, Chile",
            terroir: "Vinhedos próprios da Viña Casas del Toqui no Vale Central chileno.",
            uvas: "100% Cabernet Sauvignon",
            produtor: "Viña Casas del Toqui",
            safra: "2025",
            metodo: "Maceração curta com as cascas e fermentação em tanques de aço inox, sem passagem por carvalho (adequado para veganos).",
            sensoriais: "Rosa claro a médio brilhante; aromas expressivos de morango, amora, maçã vermelha e sutil especiaria; paladar leve, cremoso e refrescante."
        },

        // --- 2. Conhecimento sobre o Rótulo ---
        conhecimentoRotulo: {
            fichaProdutor: "Viña Casas del Toqui — fundada em 1994 por aliança franco-chilena com o Château Larose Trintaudon (Bordeaux).",
            analiseTecnica: "Teor alcoólico: 13,0% vol. | Estilo: Rosé Seco | Vegano | Tampa de rosca | 750ml.",
            avaliacoes: "Rosé versátil de vinhedo único muito bem aceito no varejo brasileiro.",
            precoMedioMercado: "R$ 40 a R$ 65 no varejo brasileiro (uso interno para curadoria; na adega segue o preço único da casa).",
            historiaRotulo: "Série Single Estate celebrando a pureza varietal da uva Cabernet Sauvignon em versão rosé."
        },

        // --- 3. Conhecimento do Indivíduo ---
        conhecimentoIndividuo: {
            paladar: "Para quem gosta de rosé seco com fruta vermelha expressiva e toque levemente cremoso.",
            historicoPublico: "Excelente aceitação com aperitivos, frutos do mar e pizzas leves.",
            rejeicoesQueEvita: "Sem madeira, sem adstringência e vegano.",
            preferenciasAtendidas: "Morango maduro, cremosidade equilibrada e final limpo."
        },

        // --- 4. Contexto ---
        contexto: {
            harmonizacaoSalgada: [
                "Camarão na manteiga, frutos do mar e sushi",
                "Pizzas de massa leve e aves grelhadas",
                "Saladas frescas, queijo brie e bruschettas"
            ],
            harmonizacaoDoce: [
                "Morangos, cerejas e maçã vermelha",
                "Cheesecake leve de frutas vermelhas",
                "Pavlova ou mousse leve de chocolate branco"
            ],
            ocasiao: "Jantar leve, pizza em casa, sushi ou recepção na varanda.",
            companhia: "Casal, amigos ou família em noite descontraída.",
            temperatura: "8 °C a 9 °C (1 hora na geladeira antes de servir).",
            horario: "Almoço leve, happy hour ou jantar.",
            orcamento: "Preço único da Adega VINHO24H (autoatendimento no condomínio).",
            intencao: "Ampliar a linha de rosés chilenos secos da carta (ainda não abastecido)."
        }
    },

    // =========================================================================
    // ESPUMANTES
    // =========================================================================
    {
        // --- Controle e Vitrine (index.html) ---
        ativo: true,
        categoria: "espumantes",
        nome: "Espumante Almadén Brut Rosé",
        arquivoPagina: "almaden-brut-rose.html",
        arquivoImagem: "ESPUMANTE ALMADEN ROSE BRUT.png",
        imagemRegiao: "Espumantes/Imagens/regiao-vale-sao-francisco.jpg",
        paisRegiao: "Vale do São Francisco, Brasil",
        bandeira: "🇧🇷",
        seloDestaque: "🥂 Brut Rosé Brasil",
        destaqueOuro: false,
        resumoCard: "Espumante rosé brasileiro seco (Brut), 100% Shiraz, com borbulhas finas e aromas frescos de morango, amora e framboesa.",
        tags: ["Brut (Seco)", "100% Shiraz", "Método Charmat"],
        perfilSensorial: {
            corpo: { rotulo: "Leve", nivel: 30 },
            maciez: { rotulo: "Fina e Agradável", nivel: 78 },
            docura: { rotulo: "Brut (Seco)", nivel: 22 },
            frescor: { rotulo: "Vibrante e Refrescante", nivel: 82 }
        },

        // --- 1. Conhecimento do Vinho ---
        conhecimentoVinho: {
            denominacao: "Vale do São Francisco (BA), Brasil (raiz histórica Almadén desde 1973)",
            terroir: "Vinhedos próprios tropicais do Grupo Miolo com intensa insolação e irrigação controlada pelo Rio São Francisco.",
            uvas: "100% Shiraz (Syrah)",
            produtor: "Miolo Wine Group (Almadén)",
            safra: "Não Safrado",
            metodo: "Método Charmat em tanques de aço inox após breve maceração com as cascas para cor rosada delicada.",
            sensoriais: "Rosa de média intensidade com perlage fino; aromas limpos de morango, amora, framboesa e frutas silvestres; boca leve, equilibrada e refrescante."
        },

        // --- 2. Conhecimento sobre o Rótulo ---
        conhecimentoRotulo: {
            fichaProdutor: "Miolo Wine Group — referência da vitivinicultura nacional; adquiriu a histórica marca Almadén (fundada no RS em 1973) em 2003.",
            analiseTecnica: "Teor alcoólico: 11,5% vol. | Estilo: Espumante Natural Brut Rosé | 750ml.",
            avaliacoes: "Um dos espumantes nacionais de melhor relação custo-benefício para brindes e dia a dia.",
            precoMedioMercado: "R$ 25 a R$ 45 no varejo brasileiro (uso interno para curadoria; na adega segue o preço único da casa).",
            historiaRotulo: "Une a tradição pioneira da marca Almadén no Brasil à tecnologia tropical do Grupo Miolo."
        },

        // --- 3. Conhecimento do Indivíduo ---
        conhecimentoIndividuo: {
            paladar: "Para quem busca um espumante rosé seco leve, frutado e fácil de beber.",
            historicoPublico: "Alta aceitação em festas, jantares leves e brindes cotidianos.",
            rejeicoesQueEvita: "Não é doce nem enjoativo, e não tem amargor.",
            preferenciasAtendidas: "Frutas vermelhas frescas, leveza e borbulhas delicadas."
        },

        // --- 4. Contexto ---
        contexto: {
            harmonizacaoSalgada: [
                "Salmão grelhado, frutos do mar, sushi e sashimi",
                "Saladas frescas, massas com molhos delicados e pizzas leves",
                "Canapés, queijo brie e tábua de frios suaves"
            ],
            harmonizacaoDoce: [
                "Morangos, framboesas e cerejas frescas",
                "Cheesecake leve de frutas vermelhas ou torta pouco doce",
                "Macarons de frutas vermelhas ou suspiros com frutas"
            ],
            ocasiao: "Brindes, comemorações em casa, happy hour ou sushi à noite.",
            companhia: "Casal, amigos ou recepção descontraída.",
            temperatura: "6 °C a 8 °C (1h30 na geladeira antes de abrir).",
            horario: "Brunch, fim de tarde ou abertura de jantar.",
            orcamento: "Preço único da Adega VINHO24H (autoatendimento no condomínio).",
            intencao: "Oferecer um espumante Brut Rosé brasileiro versátil e refrescante."
        }
    },

    {
        // --- Controle e Vitrine (index.html) ---
        ativo: true,
        categoria: "espumantes",
        nome: "Espumante Tanggier Brut",
        arquivoPagina: "tanggier-brut.html",
        arquivoImagem: "ESPUMANTE LOZANO TANGGIER BRUT.png",
        imagemRegiao: "Espumantes/Imagens/regiao-la-mancha-espanha.jpg",
        paisRegiao: "Castilla-La Mancha, Espanha",
        bandeira: "🇪🇸",
        seloDestaque: "🥂 Cuvée Espanhol",
        destaqueOuro: false,
        resumoCard: "Espumante branco seco espanhol de borbulhas finas, com aromas refrescantes de pera, pêssego e leve toque mineral.",
        tags: ["Branco Brut", "Espanhol", "Frutas Brancas"],
        perfilSensorial: {
            corpo: { rotulo: "Leve a Médio", nivel: 38 },
            maciez: { rotulo: "Delicada", nivel: 72 },
            docura: { rotulo: "Brut (Seco)", nivel: 20 },
            frescor: { rotulo: "Vivo e Refrescante", nivel: 78 }
        },

        // --- 1. Conhecimento do Vinho ---
        conhecimentoVinho: {
            denominacao: "Castilla-La Mancha / Multirregional, Espanha",
            terroir: "Vinhedos ensolarados de clima mediterrâneo-continental em Villarrobledo (La Mancha), preservando aromas limpos de fruta branca.",
            uvas: "Blend de uvas brancas espanholas (como Airén e complementos)",
            produtor: "Bodegas Lozano",
            safra: "Não Safrado",
            metodo: "Vinificação em tanques de aço inox em baixas temperaturas (14 °C a 16 °C), sem passagem por carvalho.",
            sensoriais: "Amarelo-palha com reflexos esverdeados e borbulhas finas; aromas de pera, pêssego e nuances minerais; boca leve a média com acidez viva e final frutado."
        },

        // --- 2. Conhecimento sobre o Rótulo ---
        conhecimentoRotulo: {
            fichaProdutor: "Bodegas Lozano — tradição vinícola familiar iniciada em 1853 em Villarrobledo, Espanha.",
            analiseTecnica: "Teor alcoólico: 10% a 12% vol. | Estilo: Espumante Branco Brut (Special Cuvée) | 750ml.",
            avaliacoes: "Muito apreciado como espumante europeu seco de excelente custo-benefício.",
            precoMedioMercado: "R$ 45 a R$ 75 no varejo brasileiro (uso interno para curadoria; na adega segue o preço único da casa).",
            historiaRotulo: "Linha dinâmica internacional da centenária família Lozano, unindo tradição espanhola e estilo leve."
        },

        // --- 3. Conhecimento do Indivíduo ---
        conhecimentoIndividuo: {
            paladar: "Para quem aprecia espumante branco seco clássico, leve e gastronômico.",
            historicoPublico: "Popular entre apreciadores de Brut tradicional sem dulçor.",
            rejeicoesQueEvita: "Zero dulçor excessivo e sem peso de madeira.",
            preferenciasAtendidas: "Frescor mineral, frutas brancas limpas e boa vivacidade."
        },

        // --- 4. Contexto ---
        contexto: {
            harmonizacaoSalgada: [
                "Mariscos, atum, salmão, sushi e culinária asiática",
                "Saladas frescas, carpaccio, peixes brancos e carnes brancas",
                "Castanhas, queijo brie/camembert e bruschettas"
            ],
            harmonizacaoDoce: [
                "Torta leve de pera ou maçã assada pouco doce",
                "Bolo de amêndoas ou folhados leves",
                "Crème brûlée suave ou sorbet de limão/pêssego"
            ],
            ocasiao: "Brindes especiais, recepção de convidados ou aperitivo antes do jantar.",
            companhia: "Amigos, família ou jantar elegante a dois.",
            temperatura: "6 °C a 9 °C (1h30 na geladeira antes de abrir).",
            horario: "Brunch, fim de tarde ou início da noite.",
            orcamento: "Preço único da Adega VINHO24H (autoatendimento no condomínio).",
            intencao: "Oferecer um espumante branco Brut europeu clássico."
        }
    },

    {
        // --- Controle e Vitrine (index.html) ---
        ativo: true,
        categoria: "espumantes",
        nome: "Espumante Terranova Moscatel Branco Doce",
        arquivoPagina: "terranova-moscatel-branco.html",
        arquivoImagem: "ESPUMANTE MOSCATEL TERRANOVA BRANCO DOCE.png",
        imagemRegiao: "Espumantes/Imagens/regiao-vale-sao-francisco.jpg",
        paisRegiao: "Vale do São Francisco, Brasil",
        bandeira: "🇧🇷",
        seloDestaque: "🏅 Moscatel 7,5%",
        destaqueOuro: true,
        resumoCard: "Espumante branco doce (7,5% vol.), 100% Moscato, com aromas de jasmim, lichia e toque cítrico. Cremoso e nada enjoativo.",
        tags: ["Moscatel Doce", "7,5% Álcool", "Sobremesas"],
        perfilSensorial: {
            corpo: { rotulo: "Bem Leve", nivel: 28 },
            maciez: { rotulo: "Cremosa e Intensa", nivel: 86 },
            docura: { rotulo: "Doce Equilibrado", nivel: 82 },
            frescor: { rotulo: "Refrescante", nivel: 68 }
        },

        // --- 1. Conhecimento do Vinho ---
        conhecimentoVinho: {
            denominacao: "Casa Nova, Vale do São Francisco (BA), Brasil",
            terroir: "Clima tropical semiárido banhado pelo sol durante todo o ano e irrigado pelo Rio São Francisco, permitindo maturação aromática única da Moscato.",
            uvas: "100% Moscato",
            produtor: "Miolo Wine Group (Vinícola Terranova)",
            safra: "Não Safrado",
            metodo: "Método Asti (fermentação única em autoclave interrompida pelo frio para manter açúcar natural e apenas 7,5% de álcool).",
            sensoriais: "Amarelo-esverdeado com reflexos dourados e perlage intenso; aromas de jasmim, flores brancas, lichia, mel e toque cítrico; boca leve, cremosa, doce e equilibrada."
        },

        // --- 2. Conhecimento sobre o Rótulo ---
        conhecimentoRotulo: {
            fichaProdutor: "Vinícola Terranova (Miolo Wine Group) — projeto pioneiro em Casa Nova (BA) que consolidou a viticultura tropical no Brasil.",
            analiseTecnica: "Teor alcoólico: 7,5% vol. | Estilo: Espumante Branco Doce (Moscatel) | 750ml.",
            avaliacoes: "Carro-chefe da marca e um dos espumantes doces mais premiados e populares do Brasil (medalhas como Concours Mondial de Bruxelles).",
            precoMedioMercado: "R$ 38 a R$ 55 no varejo brasileiro (uso interno para curadoria; na adega segue o preço único da casa).",
            historiaRotulo: "Símbolo da inovação brasileira no Vale do São Francisco, colhendo até duas safras e meia por ano."
        },

        // --- 3. Conhecimento do Indivíduo ---
        conhecimentoIndividuo: {
            paladar: "Ideal para quem ama espumantes doces, aromáticos e com baixíssimo teor alcoólico (7,5%).",
            historicoPublico: "Sucesso absoluto entre iniciantes, festas e amantes de Moscatel.",
            rejeicoesQueEvita: "Zero amargor e sem acidez agressiva.",
            preferenciasAtendidas: "Doçura natural da uva, perfume floral/frutado e leveza extrema."
        },

        // --- 4. Contexto ---
        contexto: {
            harmonizacaoSalgada: [
                "Queijos azuis suaves (gorgonzola doce) ou brie com geleia cítrica",
                "Canapés agridoces (presunto de parma com melão)",
                "Petiscos leves com frutas secas e castanhas"
            ],
            harmonizacaoDoce: [
                "Torta de limão, mousse de maracujá e bolos cítricos",
                "Morangos, pêssegos, abacaxi e sorvetes de frutas",
                "Fondue de chocolate branco, pavlova e panetone"
            ],
            ocasiao: "Brinde de aniversário, sobremesa em família ou tarde na piscina.",
            companhia: "Amigos, família ou quem prefere bebidas doces.",
            temperatura: "4 °C a 6 °C (1h30 a 2h na geladeira antes de abrir).",
            horario: "Tarde de sol, café da tarde festivo ou hora da sobremesa.",
            orcamento: "Preço único da Adega VINHO24H (autoatendimento no condomínio).",
            intencao: "Entregar o Moscatel doce mais querido e premiado para brindes e sobremesas."
        }
    },

    // =========================================================================
    // VINHOS BRANCOS
    // =========================================================================
    {
        // --- Controle e Vitrine (index.html) ---
        ativo: true,
        categoria: "brancos",
        nome: "Lisbonita Branco",
        arquivoPagina: "lisbonita-branco.html",
        arquivoImagem: "LISBONITA BRANCO.png",
        imagemRegiao: "Brancos/Imagens/regiao-lisboa-cidade.jpg",
        paisRegiao: "Lisboa, Portugal",
        bandeira: "🇵🇹",
        seloDestaque: "🚋 Levíssimo 9,5%",
        destaqueOuro: false,
        resumoCard: "Branco português meio seco (9,5% vol.), super leve e cítrico, com notas de limão, maçã verde, pêssego e toque floral.",
        tags: ["Meio Seco", "9,5% Álcool", "Cítrico"],
        perfilSensorial: {
            corpo: { rotulo: "Bem Leve", nivel: 26 },
            maciez: { rotulo: "Suave e Fluido", nivel: 85 },
            docura: { rotulo: "Toque Suave", nivel: 38 },
            frescor: { rotulo: "Refrescante", nivel: 78 }
        },

        // --- 1. Conhecimento do Vinho ---
        conhecimentoVinho: {
            denominacao: "Vinho Regional Lisboa, Portugal",
            terroir: "Influência atlântica da região de Lisboa garantindo uvas de acidez fresca e aromas limpos.",
            uvas: "Fernão Pires, Arinto, Vital e Moscatel",
            produtor: "Casa Santos Lima",
            safra: "Não Safrado / Corrente",
            metodo: "Vinificação em tanques de aço inox sob controle de temperatura, sem passagem por carvalho.",
            sensoriais: "Amarelo-palha com reflexos esverdeados; aromas de limão, maçã verde, pêssego e toque floral; boca leve, refrescante e meio seca equilibrada."
        },

        // --- 2. Conhecimento sobre o Rótulo ---
        conhecimentoRotulo: {
            fichaProdutor: "Casa Santos Lima — maior produtora de Vinho Regional Lisboa, com raízes no final do século XIX.",
            analiseTecnica: "Teor alcoólico: 9,5% vol. | Estilo: Branco Meio Seco | 750ml.",
            avaliacoes: "Muito apreciado pelo frescor leve e pelo visual ilustrado de Lisboa.",
            precoMedioMercado: "R$ 45 a R$ 65 no varejo brasileiro (uso interno para curadoria; na adega segue o preço único da casa).",
            historiaRotulo: "O nome vem da junção de 'Lisboa' e 'Bonita', homenageando os bairros coloridos e o clássico elétrico amarelo da capital portuguesa."
        },

        // --- 3. Conhecimento do Indivíduo ---
        conhecimentoIndividuo: {
            paladar: "Para quem busca um branco bem leve no álcool (9,5%), fácil de beber e com leve toque adocicado equilibrado.",
            historicoPublico: "Sucesso entre iniciantes e em dias quentes.",
            rejeicoesQueEvita: "Zero madeira pesada, não é ácido demais nem alcoólico.",
            preferenciasAtendidas: "Cítrico delicado, floral sutil e frescor imediato."
        },

        // --- 4. Contexto ---
        contexto: {
            harmonizacaoSalgada: [
                "Camarões, lulas grelhadas e peixe branco ao limão",
                "Sushi, sashimi, ceviche suave e saladas frescas",
                "Queijo fresco, ricota temperada e queijo brie"
            ],
            harmonizacaoDoce: [
                "Torta de limão leve e mousse de maracujá",
                "Salada de frutas frescas e torta de pêssego",
                "Bolo de laranja caseiro ou pastel de nata leve"
            ],
            ocasiao: "Tarde de sol, pós-piscina, sushi em casa ou almoço leve.",
            companhia: "Amigos, casal ou quem prefere vinhos leves e refrescantes.",
            temperatura: "6 °C a 8 °C (1 hora na geladeira antes de abrir).",
            horario: "Almoço de fim de semana, meio da tarde ou happy hour.",
            orcamento: "Preço único da Adega VINHO24H (autoatendimento no condomínio).",
            intencao: "Oferecer um branco português leve e charmoso para dias quentes."
        }
    },

    {
        // --- Controle e Vitrine (index.html) ---
        ativo: true,
        categoria: "brancos",
        nome: "Peccato Di Vino Chardonnay",
        arquivoPagina: "peccato-di-vino-chardonnay.html",
        arquivoImagem: "BRANCO SECO PECCATO CHARDONNAY.png",
        imagemRegiao: "Brancos/Imagens/regiao-vale-central-chile.jpg",
        paisRegiao: "Vale Central, Chile",
        bandeira: "🇨🇱",
        seloDestaque: "🍍 Sem Carvalho",
        destaqueOuro: false,
        resumoCard: "Chardonnay chileno seco sem passagem por madeira, com aromas limpos de abacaxi, pêssego maduro e frescor cítrico.",
        tags: ["Branco Seco", "100% Chardonnay", "Tropical"],
        perfilSensorial: {
            corpo: { rotulo: "Leve a Médio", nivel: 48 },
            maciez: { rotulo: "Equilibrado", nivel: 75 },
            docura: { rotulo: "Seco Frutado", nivel: 15 },
            frescor: { rotulo: "Vivo", nivel: 75 }
        },

        // --- 1. Conhecimento do Vinho ---
        conhecimentoVinho: {
            denominacao: "D.O. Central Valley (Vale do Maule), Chile",
            terroir: "Vale do Maule com dias ensolarados que amadurecem a fruta tropical e noites frescas preservando a acidez.",
            uvas: "100% Chardonnay",
            produtor: "Viña de Aguirre",
            safra: "Não Safrado / Corrente",
            metodo: "Fermentado e mantido em cubas de aço inox (sem passagem por barricas de carvalho).",
            sensoriais: "Amarelo-limão límpido; aromas de abacaxi, pêssego maduro, notas cítricas e florais; boca leve a média com acidez viva e final frutado."
        },

        // --- 2. Conhecimento sobre o Rótulo ---
        conhecimentoRotulo: {
            fichaProdutor: "Viña de Aguirre — vinícola familiar fundada em 1955 no Vale do Maule por Pedro Etcheberry.",
            analiseTecnica: "Teor alcoólico: 12,5% vol. | Estilo: Branco Seco (sem madeira) | 750ml.",
            avaliacoes: "Chardonnay de entrada elogiado pela leveza e foco na fruta pura.",
            precoMedioMercado: "R$ 35 a R$ 65 no varejo brasileiro (uso interno para curadoria; na adega segue o preço único da casa).",
            historiaRotulo: "Série inspirada em 'A Divina Comédia' de Dante Alighieri."
        },

        // --- 3. Conhecimento do Indivíduo ---
        conhecimentoIndividuo: {
            paladar: "Para quem quer um Chardonnay seco moderno e refrescante, sem o peso amanteigado da madeira.",
            historicoPublico: "Boa aceitação em almoços e jantares cotidianos.",
            rejeicoesQueEvita: "Sem gosto de madeira pesada e sem dulçor residual.",
            preferenciasAtendidas: "Fruta tropical limpa, equilíbrio e acidez agradável."
        },

        // --- 4. Contexto ---
        contexto: {
            harmonizacaoSalgada: [
                "Peixes grelhados, salmão, camarão e mariscos",
                "Frango grelhado com ervas, risoto de limão ou massa ao molho branco suave",
                "Saladas verdes com queijo minas, búfala ou brie"
            ],
            harmonizacaoDoce: [
                "Abacaxi assado com raspas de limão ou salada de frutas",
                "Torta leve de pêssego, pera ou maçã pouco doce",
                "Crème brûlée suave ou chocolate branco com coco"
            ],
            ocasiao: "Jantar leve durante a semana, almoço de domingo ou aperitivo.",
            companhia: "Casal, amigos ou apreciadores de brancos secos.",
            temperatura: "8 °C a 10 °C (45 minutos na geladeira antes de abrir).",
            horario: "Almoço, fim de tarde ou jantar leve.",
            orcamento: "Preço único da Adega VINHO24H (autoatendimento no condomínio).",
            intencao: "Oferecer um Chardonnay chileno seco leve e descomplicado."
        }
    },

    {
        // --- Controle e Vitrine (index.html) ---
        ativo: true,
        categoria: "brancos",
        nome: "Bons Ventos Branco 2024",
        arquivoPagina: "bons-ventos-branco-2024.html",
        arquivoImagem: "BONS VENTOS BRANCO 2024.png",
        imagemRegiao: "Brancos/Imagens/regiao-lisboa-bons-ventos.jpg",
        paisRegiao: "Lisboa, Portugal",
        bandeira: "🇵🇹",
        seloDestaque: "🏅 Linha Best Buy",
        destaqueOuro: true,
        resumoCard: "Branco português seco premiado, muito aromático (limão, abacaxi, maçã verde e jasmim), leve e com textura sutilmente cremosa.",
        tags: ["Branco Seco", "Aromático", "Best Buy"],
        perfilSensorial: {
            corpo: { rotulo: "Leve a Médio", nivel: 42 },
            maciez: { rotulo: "Sutilmente Cremoso", nivel: 78 },
            docura: { rotulo: "Seco Frutado", nivel: 15 },
            frescor: { rotulo: "Cítrico Equilibrado", nivel: 80 }
        },

        // --- 1. Conhecimento do Vinho ---
        conhecimentoVinho: {
            denominacao: "Vinho Regional Lisboa, Portugal",
            terroir: "Clima atlântico de Alenquer (Lisboa) com brisas marítimas que preservam a acidez natural e os aromas.",
            uvas: "Arinto, Fernão Pires, Vital, Chardonnay e Viosinho",
            produtor: "Casa Santos Lima",
            safra: "2024",
            metodo: "Fermentação em tanques de aço inox com controle de temperatura, sem passagem por madeira.",
            sensoriais: "Amarelo-palha com reflexos verde-limão; aromas intensos de limão, abacaxi, melão, maçã verde, pera e jasmim; boca leve, equilibrada e sutilmente cremosa."
        },

        // --- 2. Conhecimento sobre o Rótulo ---
        conhecimentoRotulo: {
            fichaProdutor: "Casa Santos Lima — maior produtora da região de Lisboa, referência mundial em vinhos 'Best Buy'.",
            analiseTecnica: "Teor alcoólico: 12,5% vol. | Estilo: Branco Seco | Tampa de rosca (Screw Cap) | 750ml.",
            avaliacoes: "Rótulo constantemente reconhecido internacionalmente pelo excelente custo-benefício.",
            precoMedioMercado: "R$ 45 a R$ 67 no varejo brasileiro (uso interno para curadoria; na adega segue o preço único da casa).",
            historiaRotulo: "Selo emblemático da Quinta de Bons Ventos celebrando a brisa atlântica de Lisboa."
        },

        // --- 3. Conhecimento do Indivíduo ---
        conhecimentoIndividuo: {
            paladar: "Para quem quer um branco seco aromático, gastronômico e muito fácil de beber.",
            historicoPublico: "Um dos brancos portugueses mais populares do Brasil.",
            rejeicoesQueEvita: "Sem madeira pesada, não é ácido agressivo e tem abertura prática (rosca).",
            preferenciasAtendidas: "Aroma intenso tropical/floral, frescor equilibrado e final limpo."
        },

        // --- 4. Contexto ---
        contexto: {
            harmonizacaoSalgada: [
                "Frutos do mar (camarões, mariscos), sushi, sashimi e culinária oriental",
                "Peixes grelhados, aves com ervas e saladas frescas",
                "Queijo de cabra, queijos frescos e massas ao pesto ou limão"
            ],
            harmonizacaoDoce: [
                "Pera, maçã verde, abacaxi grelhado ou salada de frutas",
                "Torta de limão pouco doce ou crumble de maçã",
                "Biscoitos amanteigados cítricos ou brie com mel suave"
            ],
            ocasiao: "Noite de comida japonesa, peixe grelhado ou almoço de fim de semana.",
            companhia: "Casal, amigos na varanda ou almoço em família.",
            temperatura: "6 °C a 8 °C (1 hora na geladeira antes de abrir).",
            horario: "Almoço ensolarado, fim de tarde ou jantar leve.",
            orcamento: "Preço único da Adega VINHO24H (autoatendimento no condomínio).",
            intencao: "Entregar um branco seco português premiado e super versátil."
        }
    },

    {
        // --- Controle e Vitrine (index.html) ---
        ativo: true,
        categoria: "brancos",
        nome: "Calamares Vinho Verde DOC Branco",
        arquivoPagina: "calamares-vinho-verde-branco.html",
        arquivoImagem: "CALAMARES VINHO VERDE BRANCO.png",
        imagemRegiao: "Brancos/Imagens/regiao-vinho-verde-minho.jpg",
        paisRegiao: "Vinho Verde, Portugal",
        bandeira: "🇵🇹",
        seloDestaque: "🏅 Best Buy • 9%",
        destaqueOuro: true,
        resumoCard: "Vinho Verde tradicional meio seco (9% vol.), levemente frisante natural, com notas de limão, pêssego branco e lichia.",
        tags: ["Vinho Verde", "9% Álcool", "Leve Frisante"],
        perfilSensorial: {
            corpo: { rotulo: "Bem Leve", nivel: 22 },
            maciez: { rotulo: "Fluido e Fresco", nivel: 82 },
            docura: { rotulo: "Meio Seco Discreto", nivel: 32 },
            frescor: { rotulo: "Muito Vibrante", nivel: 88 }
        },

        // --- 1. Conhecimento do Vinho ---
        conhecimentoVinho: {
            denominacao: "DOC Vinho Verde (Minho), Portugal",
            terroir: "Noroeste português sob influência atlântica e solos graníticos, imprimindo acidez vibrante e mineralidade.",
            uvas: "Arinto, Trajadura e Loureiro",
            produtor: "Enoport Wines",
            safra: "Não Safrado",
            metodo: "Fermentação em aço inox com controle de temperatura, mantendo leve gás carbônico natural (levemente frisante).",
            sensoriais: "Amarelo-palha muito claro com reflexos esverdeados; aromas de limão, pêssego branco e lichia; boca bem leve, vibrante e meio seca equilibrada."
        },

        // --- 2. Conhecimento sobre o Rótulo ---
        conhecimentoRotulo: {
            fichaProdutor: "Enoport Wines — grupo formado em 2005 reunindo casas portuguesas centenárias.",
            analiseTecnica: "Teor alcoólico: 9% vol. | Estilo: Meio Seco (Leve Frisante) | DOC Vinho Verde | 750ml.",
            avaliacoes: "Premiado com selo 'Best Buy' da Wine Enthusiast (estampado no rótulo).",
            precoMedioMercado: "R$ 45 a R$ 75 no varejo brasileiro (uso interno para curadoria; na adega segue o preço único da casa).",
            historiaRotulo: "Um dos Vinhos Verdes mais icônicos e reconhecíveis do Brasil pela garrafa arredondada e o polvo no rótulo."
        },

        // --- 3. Conhecimento do Indivíduo ---
        conhecimentoIndividuo: {
            paladar: "Ideal para quem quer um Vinho Verde clássico leve no álcool (9%), cítrico e com micro-borbulhas refrescantes.",
            historicoPublico: "Favorito absoluto em dias quentes e mesas de frutos do mar.",
            rejeicoesQueEvita: "Zero madeira, baixo álcool e não é enjoativo.",
            preferenciasAtendidas: "Frescor máximo, leve frisância e final fluido."
        },

        // --- 4. Contexto ---
        contexto: {
            harmonizacaoSalgada: [
                "Peixes grelhados, bolinho de bacalhau, camarão e lula",
                "Sushi, sashimi, ceviche suave e saladas frescas",
                "Queijos brancos frescos (minas frescal, ricota) e petiscos"
            ],
            harmonizacaoDoce: [
                "Torta de limão leve, mousse de maracujá ou sorbet cítrico",
                "Salada de frutas com abacaxi, kiwi e uva verde",
                "Torta leve de pera ou bolo simples de limão"
            ],
            ocasiao: "Almoço de fim de semana, pós-piscina ou noite de sushi/petiscos.",
            companhia: "Amigos, família ou casal em dias quentes.",
            temperatura: "6 °C a 8 °C (1 hora na geladeira antes de abrir).",
            horario: "Almoço, meio da tarde ou happy hour.",
            orcamento: "Preço único da Adega VINHO24H (autoatendimento no condomínio).",
            intencao: "Trazer o clássico Vinho Verde Branco Best Buy para a carta."
        }
    },

    {
        // --- Controle e Vitrine (index.html) ---
        ativo: true,
        categoria: "brancos",
        nome: "Calamares Vinho Verde DOC Sweet (Doce)",
        arquivoPagina: "calamares-vinho-verde-doce.html",
        arquivoImagem: "CALAMARES VINHO VERDE DOCE.png",
        imagemRegiao: "Brancos/Imagens/regiao-vinho-verde-minho.jpg",
        paisRegiao: "Vinho Verde, Portugal",
        bandeira: "🇵🇹",
        seloDestaque: "🍯 Versão Sweet 9%",
        destaqueOuro: false,
        resumoCard: "Vinho Verde branco doce/suave (9% vol.), com aromas de abacaxi, manga e pêssego em calda equilibrados por acidez refrescante.",
        tags: ["Doce / Suave", "9% Álcool", "Vinho Verde"],
        perfilSensorial: {
            corpo: { rotulo: "Leve e Cremoso", nivel: 34 },
            maciez: { rotulo: "Super Suave", nivel: 90 },
            docura: { rotulo: "Doce / Suave", nivel: 82 },
            frescor: { rotulo: "Equilibrado", nivel: 66 }
        },

        // --- 1. Conhecimento do Vinho ---
        conhecimentoVinho: {
            denominacao: "DOC Vinho Verde (Minho), Portugal",
            terroir: "Noroeste de Portugal com clima atlântico que garante acidez natural mesmo em vinhos com alto açúcar residual.",
            uvas: "Loureiro, Arinto e Trajadura",
            produtor: "Enoport Wines",
            safra: "Não Safrado",
            metodo: "Interrupção da fermentação pelo frio para preservar o açúcar natural das uvas, mantendo apenas 9% de álcool.",
            sensoriais: "Amarelo claro brilhante; aromas de abacaxi, manga, pêssego em calda e flores brancas; boca doce, cremosa e refrescante."
        },

        // --- 2. Conhecimento sobre o Rótulo ---
        conhecimentoRotulo: {
            fichaProdutor: "Enoport Wines — grupo vitivinícola português com casas históricas desde o século XIX.",
            analiseTecnica: "Teor alcoólico: 9% vol. | Estilo: Branco Doce / Suave (Sweet) | DOC Vinho Verde | 750ml.",
            avaliacoes: "Muito procurado por quem prefere vinhos suaves portugueses de baixa graduação alcoólica.",
            precoMedioMercado: "R$ 45 a R$ 75 no varejo brasileiro (uso interno para curadoria; na adega segue o preço único da casa).",
            historiaRotulo: "Versão doce da icônica linha Calamares, identificada pela garrafa arredondada verde-turquesa com polvo alaranjado."
        },

        // --- 3. Conhecimento do Indivíduo ---
        conhecimentoIndividuo: {
            paladar: "Ideal para quem ama vinhos suaves/doces e evita vinhos secos ou ácidos.",
            historicoPublico: "Grande aceitação entre iniciantes e apreciadores de vinho suave.",
            rejeicoesQueEvita: "Zero secura, zero amargor e baixíssimo álcool (9%).",
            preferenciasAtendidas: "Doçura frutada tropical, maciez e frescor equilibrado."
        },

        // --- 4. Contexto ---
        contexto: {
            harmonizacaoSalgada: [
                "Culinária oriental agridoce (frango xadrez, lombo agridoce, tailandesa leve)",
                "Queijo brie, camembert ou gorgonzola suave com geleia de abacaxi/damasco",
                "Saladas com manga, castanhas e molho de mel e mostarda"
            ],
            harmonizacaoDoce: [
                "Torta de abacaxi, pêssego ou cheesecake de maracujá",
                "Mousse de maracujá, pavê de pêssego ou sorvete com frutas",
                "Pudim de leite condensado, quindim ou bolo de coco gelado"
            ],
            ocasiao: "Hora da sobremesa, tarde na piscina ou comida chinesa/tailandesa em casa.",
            companhia: "Amigos, família ou quem prefere vinhos suaves e docinhos.",
            temperatura: "6 °C a 8 °C (1h a 1h30 na geladeira antes de servir).",
            horario: "Tarde quente, pós-almoço ou momento sobremesa à noite.",
            orcamento: "Preço único da Adega VINHO24H (autoatendimento no condomínio).",
            intencao: "Atender o público de vinho branco doce/suave com um DOC português leve."
        }
    },

    {
        // --- Controle e Vitrine (index.html) ---
        ativo: false,
        categoria: "brancos",
        nome: "Alfacinha Regional Lisboa Branco 2024",
        arquivoPagina: "alfacinha-branco-2024.html",
        arquivoImagem: "alfacinha_regional_lisboa_branco_2024.png",
        imagemRegiao: "Brancos/Imagens/regiao-lisboa-cidade.jpg",
        paisRegiao: "Lisboa, Portugal",
        bandeira: "🇵🇹",
        seloDestaque: "🚋 Lisboa Clássico",
        destaqueOuro: false,
        resumoCard: "Branco português seco de Lisboa (50% Fernão Pires e 50% Arinto), fresco e aromático, com notas de limão, flores brancas e frutas frescas.",
        tags: ["Branco Seco", "Fernão Pires & Arinto", "Sem Madeira"],
        perfilSensorial: {
            corpo: { rotulo: "Leve", nivel: 34 },
            maciez: { rotulo: "Fluido e Equilibrado", nivel: 78 },
            docura: { rotulo: "Seco Frutado", nivel: 16 },
            frescor: { rotulo: "Vivo e Refrescante", nivel: 80 }
        },

        // --- 1. Conhecimento do Vinho ---
        conhecimentoVinho: {
            denominacao: "Vinho Regional Lisboa (IG Lisboa), Portugal",
            terroir: "Região atlântica ao redor de Lisboa garantindo acidez fresca e aromas cítricos limpos.",
            uvas: "50% Fernão Pires e 50% Arinto",
            produtor: "Parras Wines (Enólogo Carlos Eduardo)",
            safra: "2024",
            metodo: "Fermentado em cubas de aço inoxidável de pequena capacidade, sem passagem por madeira.",
            sensoriais: "Amarelo claro com reflexos esverdeados; aromas de frutas cítricas, flores brancas e frutas frescas; boca leve, equilibrada e final cítrico refrescante."
        },

        // --- 2. Conhecimento sobre o Rótulo ---
        conhecimentoRotulo: {
            fichaProdutor: "Parras Wines — grupo português fundado por Luís Parras em 2010, com atuação destacada em Lisboa.",
            analiseTecnica: "Teor alcoólico: 12,5% vol. | Estilo: Branco Seco | Acidez Total ~5,5 g/L | pH ~3,3 | 750ml.",
            avaliacoes: "Muito bem avaliado no varejo brasileiro como branco português leve e gastronômico.",
            precoMedioMercado: "R$ 40 a R$ 60 no varejo brasileiro (uso interno para curadoria; na adega segue o preço único da casa).",
            historiaRotulo: "Faz dupla com o Alfacinha Tinto homenageando o tradicional elétrico amarelo e os 'alfacinhas' de Lisboa."
        },

        // --- 3. Conhecimento do Indivíduo ---
        conhecimentoIndividuo: {
            paladar: "Para quem gosta de brancos secos leves, cítricos e fáceis de beber.",
            historicoPublico: "Forte sinergia com a linha Alfacinha já querida na adega.",
            rejeicoesQueEvita: "Zero madeira e sem acidez agressiva.",
            preferenciasAtendidas: "Cítrico fresco, flores brancas e leveza."
        },

        // --- 4. Contexto ---
        contexto: {
            harmonizacaoSalgada: [
                "Peixes grelhados, frutos do mar e ceviche leve",
                "Saladas frescas, aves com ervas e risoto de limão",
                "Queijos cremosos, queijo de cabra e bruschettas"
            ],
            harmonizacaoDoce: [
                "Salada de frutas com pera, maçã verde e abacaxi",
                "Torta leve de limão ou bolo de laranja",
                "Queijo brie com mel suave e amêndoas"
            ],
            ocasiao: "Almoço de fim de semana, jantar leve com peixe ou aperitivo na varanda.",
            companhia: "Casal, amigos ou família em dias quentes.",
            temperatura: "8 °C a 10 °C (45 a 60 minutos na geladeira antes de abrir).",
            horario: "Almoço, fim de tarde ou início de noite.",
            orcamento: "Preço único da Adega VINHO24H (autoatendimento no condomínio).",
            intencao: "Completar a dupla Alfacinha com o rótulo branco da safra 2024 (ainda não abastecido)."
        }
    },

    {
        // --- Controle e Vitrine (index.html) ---
        ativo: false,
        categoria: "brancos",
        nome: "Alecrim Branco",
        arquivoPagina: "alecrim-branco.html",
        arquivoImagem: "alecrim_branco.png",
        imagemRegiao: "Brancos/Imagens/regiao-alentejo-portugal.jpg",
        paisRegiao: "Portugal",
        bandeira: "🇵🇹",
        seloDestaque: "🌿 Uvas Nativas",
        destaqueOuro: false,
        resumoCard: "Branco seco português da Ségur Estates, jovem e macio, com notas de frutas cítricas e flores brancas para pratos leves e frutos do mar.",
        tags: ["Branco Seco", "Castas Nativas", "Gastronômico"],
        perfilSensorial: {
            corpo: { rotulo: "Leve", nivel: 34 },
            maciez: { rotulo: "Macio e Equilibrado", nivel: 78 },
            docura: { rotulo: "Seco Frutado", nivel: 15 },
            frescor: { rotulo: "Refrescante", nivel: 76 }
        },

        // --- 1. Conhecimento do Vinho ---
        conhecimentoVinho: {
            denominacao: "Vinho Branco de Portugal (Ségur Estates)",
            terroir: "Vinhedos portugueses com excelente exposição solar e frescor natural para brancos jovens.",
            uvas: "Blend de uvas brancas nativas portuguesas",
            produtor: "Ségur Estates",
            safra: "Não Safrado / Corrente",
            metodo: "Fermentação alcoólica em tanques de aço inox com controle de temperatura, sem passagem por barricas de madeira.",
            sensoriais: "Amarelo-palha límpido; aromas frescos de frutas cítricas e flores brancas; boca leve, jovem, macia e com acidez refrescante."
        },

        // --- 2. Conhecimento sobre o Rótulo ---
        conhecimentoRotulo: {
            fichaProdutor: "Ségur Estates — grupo vitivinícola ligado historicamente a descendentes da família do Marquês de Ségur (Bordeaux) com projetos em Portugal.",
            analiseTecnica: "Teor alcoólico: 12,0% a 12,3% vol. | Estilo: Branco Seco | Guarda: 2 a 3 anos | 750ml.",
            avaliacoes: "Reconhecido no varejo brasileiro como branco seco leve e versátil para o dia a dia.",
            precoMedioMercado: "R$ 40 a R$ 60 no varejo brasileiro (uso interno para curadoria; na adega segue o preço único da casa).",
            historiaRotulo: "Rótulo minimalista ilustrado com um ramo de alecrim amarrado com barbante rústico, celebrando a culinária portuguesa."
        },

        // --- 3. Conhecimento do Indivíduo ---
        conhecimentoIndividuo: {
            paladar: "Para quem busca um branco português seco leve, macio e fácil de harmonizar.",
            historicoPublico: "Muito procurado para frutos do mar e pratos cotidianos.",
            rejeicoesQueEvita: "Zero madeira pesada e sem dulçor enjoativo.",
            preferenciasAtendidas: "Aroma cítrico/floral limpo, maciez e boa acidez."
        },

        // --- 4. Contexto ---
        contexto: {
            harmonizacaoSalgada: [
                "Camarão grelhado, moqueca e bolinho de bacalhau",
                "Risoto caprese, talharim ao molho branco e tomates recheados",
                "Peixes grelhados, saladas e queijos frescos de massa mole"
            ],
            harmonizacaoDoce: [
                "Maçã verde, pera e melão",
                "Torta leve de limão ou sorbet cítrico",
                "Biscoitos amanteigados finos"
            ],
            ocasiao: "Almoço de peixe ou moqueca, petiscos na varanda ou jantar leve.",
            companhia: "Casal, família ou amigos.",
            temperatura: "8 °C a 10 °C (1 hora na geladeira antes de servir).",
            horario: "Almoço de fim de semana, tarde quente ou início de noite.",
            orcamento: "Preço único da Adega VINHO24H (autoatendimento no condomínio).",
            intencao: "Ampliar os brancos secos portugueses da carta (ainda não abastecido)."
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
