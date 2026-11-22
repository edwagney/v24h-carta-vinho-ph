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
 *     - ativo, categoria, nome, arquivoPagina, arquivoImagem
 *     - paisRegiao, bandeira, seloDestaque, destaqueOuro, resumoCard, tags
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
        paisRegiao: "Lisboa, Portugal",
        bandeira: "🇵🇹",
        seloDestaque: "🏅 Double Gold 2026",
        destaqueOuro: true,
        resumoCard: "Tinto jovem, macio e vibrante, com notas frescas de frutas vermelhas. Fácil de beber e perfeito para o dia a dia.",
        tags: ["Macio", "Frutado", "Corpo Médio"],

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
        paisRegiao: "",    // Ex.: "Mendoza, Argentina"
        bandeira: "🍷",    // Ex.: "🇦🇷", "🇨🇱", "🇵🇹", "🇧🇷", "🇮🇹", "🇫🇷", "🇪🇸"
        seloDestaque: "",  // Ex.: "🏅 Premiado" ou "" se não houver
        destaqueOuro: false,
        resumoCard: "",
        tags: [],

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
