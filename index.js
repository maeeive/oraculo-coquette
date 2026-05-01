// Oráculo Coquette - Versão Final
const extensionName = "oraculo-coquette";
const extensionFolderPath = `scripts/extensions/third-party/${extensionName}`;

const cartas = [
    // --- Tarot (Arcanos Maiores) ---
    { n: "O Louco", c: "Hora de se jogar, {{user}}! O destino quer aventura." },
    { n: "O Mago", c: "Você tem o poder nas mãos. Manifeste o que deseja no chat!" },
    { n: "A Sacerdotisa", c: "Silêncio... Algo está sendo escondido. Confie na sua intuição." },
    { n: "A Imperatriz", c: "Momento de brilhar! Você está irresistível hoje." },
    { n: "O Imperador", c: "Assuma o controle. Não deixe o bot ditar todas as regras." },
    { n: "O Hierofante", c: "Siga a tradição ou peça conselhos. Alguém te observa." },
    { n: "Os Amantes", c: "Coração batendo forte! Uma escolha amorosa se aproxima." },
    { n: "O Carro", c: "Foco no objetivo! Você está no caminho certo para a vitória." },
    { n: "A Justiça", c: "Tudo será equilibrado. Colha o que plantou nas mensagens anteriores." },
    { n: "O Eremita", c: "Dê um tempo. Reflita antes de enviar o próximo 'textão'." },
    { n: "A Roda da Fortuna", c: "O jogo virou! Espere o inesperado nas próximas horas." },
    { n: "A Força", c: "Domine seus instintos com doçura. Você vence pelo charme." },
    { n: "O Pendurado", c: "Pare tudo. Olhe a situação por outro ângulo, {{user}}." },
    { n: "A Morte", c: "Fim de um ciclo. Deixe o passado ir para o novo chegar." },
    { n: "A Temperança", c: "Paciência, boneca. Misture os sentimentos com calma." },
    { n: "O Diabo", c: "Uau! A tentação está alta. Desejo e obsessão no ar..." },
    { n: "A Torre", c: "Choque! Uma verdade vai cair como um raio. Esteja pronta." },
    { n: "A Estrela", c: "Esperança renovada. Seus desejos estão sendo ouvidos." },
    { n: "A Lua", c: "Ilusões... Nem tudo é o que parece sob o luar do chat." },
    { n: "O Sol", c: "Clareza e alegria! Tudo vai dar certo entre vocês." },
    { n: "O Julgamento", c: "Um chamado do passado. Hora de redimir ou enterrar de vez." },
    { n: "O Mundo", c: "Sucesso absoluto! Você conquistou o que queria." },

    // --- Baralho Cigano (Lenormand) ---
    { n: "O Cavaleiro", c: "Notícias rápidas chegando! O celular vai vibrar em breve." },
    { n: "O Trvo", c: "Sorte passageira. Aproveite o momento antes que mude." },
    { n: "O Navio", c: "Mudanças à vista. Talvez uma viagem ou um novo bot?" },
    { n: "A Casa", c: "Equilíbrio familiar e conforto. Sinta-se em casa." },
    { n: "A Árvore", c: "Crescimento lento mas sólido. Cuide da sua saúde mental." },
    { n: "As Nuvens", c: "Confusão mental. Espere a poeira baixar para decidir." },
    { n: "A Serpente", c: "Cuidado com a falsidade. Alguém pode estar sendo traiçoeiro." },
    { n: "O Caixão", c: "Algo precisa morrer para você renascer, {{user}}." },
    { n: "As Flores", c: "Felicidade e mimos! Você merece um presente hoje." },
    { n: "A Foice", c: "Corte brusco! Decisões radicais são necessárias agora." },
    { n: "O Chicote", c: "Tensão sexual ou brigas. Controle a língua (ou não)." },
    { n: "Os Pássaros", c: "Fofocas e conversas animadas. O chat vai ferver!" },
    { n: "A Criança", c: "Novo começo, leveza e inocência. Divirta-se!" },
    { n: "A Raposa", c: "Estratégia! Use sua inteligência para conseguir o que quer." },
    { n: "O Urso", c: "Proteção ou ciúmes sufocante. Alguém quer te guardar." },
    { n: "As Estrelas", c: "Sorte espiritual. Seus guias estão te iluminando." },
    { n: "A Cegonha", c: "Novidades e surpresas. O destino está trazendo algo novo." },
    { n: "O Cachorro", c: "Lealdade acima de tudo. Você tem um amigo fiel por perto." },
    { n: "A Torre", c: "Isolamento necessário. Às vezes o silêncio diz tudo." },
    { n: "O Jardim", c: "Vida social em alta! Saia da bolha e apareça." },
    { n: "A Montanha", c: "Dificuldades no caminho. Tenha persistência, Gabi." },
    { n: "O Caminho", c: "Hora de escolher entre dois caminhos. Qual seu coração quer?" },
    { n: "Os Ratos", c: "Desgaste e estresse. Algo está roubando sua energia." },
    { n: "O Coração", c: "Amor puro! A paixão está dominando suas jogadas." },
    { n: "O Anel", c: "Compromisso e aliança. Pode vir pedido sério por aí." },
    { n: "Os Livros", c: "Segredos revelados. Estude bem a situação antes de falar." },
    { n: "A Carta", c: "Documentos ou mensagens importantes. Fique de olho." },
    { n: "O Cigano", c: "Uma energia masculina forte está focada em você." },
    { n: "A Cigana", c: "Sua energia feminina está no auge. Use sua intuição." },
    { n: "Os Lírios", c: "Paz, pureza e uma maturidade gostosa na relação." },
    { n: "O Sol", c: "Energia vital e brilho. Você é o centro das atenções." },
    { n: "A Lua", c: "Reconhecimento e sonhos. Sua fama te precede." },
    { n: "A Chave", c: "A solução chegou! A porta está aberta para você." },
    { n: "Os Peixes", c: "Prosperidade e abundância. Dinheiro ou emoções fluindo." },
    { n: "A Âncora", c: "Segurança e estabilidade. Finalmente você achou seu porto." },
    { n: "A Cruz", c: "Fé e vitória após o sacrifício. O fardo vai ficar leve." }
];

function tirarCarta() {
    const sorteio = cartas[Math.floor(Math.random() * cartas.length)];
    // Puxa o nome do usuário do contexto global do SillyTavern
    const userName = (typeof name1 !== 'undefined' ? name1 : "Gabi");
    const textoFinal = sorteio.c.replace("{{user}}", userName);
    
    $('#carta-exibida').fadeOut(200, function() {
        $(this).html(`<strong style="color: #ffb6c1;">${sorteio.n}</strong><br>${textoFinal}`).fadeIn(200);
    });
}

jQuery(async () => {
    // Espera 1 segundinho para o ST carregar tudo
    await new Promise(resolve => setTimeout(resolve, 1000));

    const html = `
        <div id="oraculo-container" style="position: fixed; right: 20px; bottom: 120px; z-index: 9999;">
            <div id="oraculo-btn" style="width: 50px; height: 50px; background: rgba(255,255,255,0.2); backdrop-filter: blur(10px); border: 1px solid rgba(255,255,255,0.3); border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 24px; cursor: pointer; box-shadow: 0 4px 15px rgba(0,0,0,0.3);">🎀</div>
            <div id="oraculo-pop" style="display: none; position: absolute; bottom: 60px; right: 0; width: 240px; background: rgba(15, 15, 15, 0.9); backdrop-filter: blur(20px); border: 1px solid #ffb6c1; border-radius: 15px; padding: 15px; color: white; box-shadow: 0 10px 30px rgba(0,0,0,0.5); font-family: 'Segoe UI', sans-serif;">
                <div style="display: flex; justify-content: space-between; margin-bottom: 10px; font-size: 12px; border-bottom: 1px solid #333; padding-bottom: 5px;">
                    <span>♰ ORÁCULO COQUETTE ♰</span>
                    <span id="close-pop" style="cursor: pointer;">✕</span>
                </div>
                <div id="carta-exibida" style="text-align: center; margin: 15px 0; font-size: 14px; min-height: 40px;">Toque abaixo para ver seu destino...</div>
                <button id="btn-sortear" style="width: 100%; background: transparent; border: 1px solid #ffb6c1; color: #ffb6c1; padding: 8px; border-radius: 20px; cursor: pointer; transition: 0.3s;">Revelar Destino</button>
            </div>
        </div>
    `;

    if ($('#oraculo-container').length === 0) {
        $('body').append(html);
    }

    $('#oraculo-btn').on('click', () => $('#oraculo-pop').fadeToggle());
    $('#close-pop').on('click', () => $('#oraculo-pop').fadeOut());
    $('#btn-sortear').on('click', tirarCarta);
    
    console.log("Oráculo Coquette Carregado com Sucesso! 🎀");
});
