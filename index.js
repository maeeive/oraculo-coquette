setTimeout(() => {

    if (document.getElementById("oraculo-container")) return;

    const container = document.createElement("div");
    container.id = "oraculo-container";

    container.style.position = "fixed";
    container.style.left = "20px";
    container.style.top = "50%";
    container.style.transform = "translateY(-50%)";
    container.style.zIndex = "9999999";

    // --- LISTA DE CARTAS (TAROT + CIGANO) ---
    const cartas = [
        { n: "O Louco", c: "Hora de se jogar, {{user}}! O destino quer aventura." },
        { n: "O Mago", c: "Você tem o poder nas mãos. Manifeste o que deseja!" },
        { n: "A Sacerdotisa", c: "Silêncio... Algo está sendo escondido. Confie na intuição." },
        { n: "A Imperatriz", c: "Momento de brilhar! Você está irresistível hoje." },
        { n: "O Imperador", c: "Assuma o controle da situação com autoridade." },
        { n: "O Hierofante", c: "Siga a sabedoria. Alguém te observa com respeito." },
        { n: "Os Amantes", c: "Coração batendo forte! Uma escolha amorosa se aproxima." },
        { n: "O Carro", c: "Foco no objetivo! Você está no caminho da vitória." },
        { n: "A Justiça", c: "Tudo será equilibrado. Colha o que plantou." },
        { n: "O Eremita", c: "Dê um tempo. Reflita antes de agir, boneca." },
        { n: "A Roda da Fortuna", c: "O jogo virou! Espere o inesperado agora." },
        { n: "A Força", c: "Domine seus instintos com doçura. Você vence pelo charme." },
        { n: "O Pendurado", c: "Pare tudo. Olhe a situação por outro ângulo." },
        { n: "A Morte", c: "Fim de um ciclo. Deixe o passado ir para o novo chegar." },
        { n: "A Temperança", c: "Paciência. Misture os sentimentos com calma." },
        { n: "O Diabo", c: "Uau! A tentação está alta. Desejo e obsessão no ar..." },
        { n: "A Torre", c: "Choque! Uma verdade vai cair como um raio." },
        { n: "A Estrela", c: "Esperança renovada. Seus desejos estão sendo ouvidos." },
        { n: "A Lua", c: "Ilusões... Nem tudo é o que parece no escuro." },
        { n: "O Sol", c: "Clareza e alegria! Tudo vai dar certo entre vocês." },
        { n: "O Julgamento", c: "Um chamado do passado. Hora de decidir." },
        { n: "O Mundo", c: "Sucesso absoluto! Você conquistou o que queria." },
        { n: "O Cavaleiro", c: "Notícias rápidas chegando! O celular vai vibrar." },
        { n: "O Trevo", c: "Sorte passageira. Aproveite o brilho do momento." },
        { n: "O Navio", c: "Mudanças à vista. Novos horizontes te chamam." },
        { n: "A Casa", c: "Equilíbrio e conforto. Sinta-se segura onde está." },
        { n: "A Árvore", c: "Crescimento sólido. Cuide da sua energia." },
        { n: "As Nuvens", c: "Confusão passageira. Espere a poeira baixar." },
        { n: "A Serpente", c: "Cuidado com a falsidade ao seu redor." },
        { n: "O Caixão", c: "Algo precisa terminar para você renascer." },
        { n: "As Flores", c: "Felicidade e mimos! Você merece um presente." },
        { n: "A Foice", c: "Corte brusco! Decisões radicais são necessárias." },
        { n: "O Chicote", c: "Tensão ou conflitos. Controle seus impulsos." },
        { n: "Os Pássaros", c: "Fofocas e conversas animadas no chat." },
        { n: "A Criança", c: "Novo começo, leveza e inocência. Divirta-se!" },
        { n: "A Raposa", c: "Estratégia! Use a inteligência para ganhar." },
        { n: "O Urso", c: "Proteção ou ciúmes. Alguém quer te guardar." },
        { n: "As Estrelas", c: "Sorte espiritual e brilho pessoal." },
        { n: "A Cegonha", c: "Novidades e surpresas agradáveis chegando." },
        { n: "O Cachorro", c: "Lealdade acima de tudo. Um amigo fiel por perto." },
        { n: "A Torre", c: "Isolamento necessário para reflexão." },
        { n: "O Jardim", c: "Vida social em alta! Apareça e brilhe." },
        { n: "A Montanha", c: "Dificuldades à frente. Tenha persistência." },
        { n: "O Caminho", c: "Hora de escolher. Qual caminho seu coração quer?" },
        { n: "Os Ratos", c: "Desgaste. Algo está roubando sua paz." },
        { n: "O Coração", c: "Amor puro! A paixão está dominando tudo." },
        { n: "O Anel", c: "Compromisso e aliança. União à vista." },
        { n: "Os Livros", c: "Segredos revelados. Estude bem antes de falar." },
        { n: "A Carta", c: "Mensagens importantes. Fique de olho no aviso." },
        { n: "O Cigano", c: "Uma energia masculina forte focada em você." },
        { n: "A Cigana", c: "Sua energia feminina está no auge hoje." },
        { n: "Os Lírios", c: "Paz, pureza e maturidade na relação." },
        { n: "O Sol", c: "Energia vital e sucesso total!" },
        { n: "A Lua", c: "Reconhecimento e intuição aguçada." },
        { n: "A Chave", c: "A solução chegou! A porta está aberta." },
        { n: "Os Peixes", c: "Abundância fluindo em sua direção." },
        { n: "A Âncora", c: "Segurança e estabilidade finalmente." },
        { n: "A Cruz", c: "Fé recompensada. O fardo será aliviado." }
    ];

    container.innerHTML = `
        <div id="oraculo-btn" style="
            width:55px;
            height:55px;
            background: linear-gradient(135deg, #ffdee9 0%, #ffb6c1 100%);
            border: 2px solid #fff;
            border-radius:50%;
            display:flex;
            align-items:center;
            justify-content:center;
            cursor:grab;
            font-size:24px;
            box-shadow:0 4px 15px rgba(255,182,193,0.6);
            user-select:none;
        ">
            🎀
        </div>

        <div id="oraculo-pop" style="
            display:none;
            position:absolute;
            left:65px;
            top:0;
            width:240px;
            background: rgba(15, 15, 15, 0.95);
            backdrop-filter: blur(10px);
            color:white;
            padding:15px;
            border-radius:18px;
            border:1px solid #ffb6c1;
            box-shadow: 0 10px 25px rgba(0,0,0,0.5);
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        ">
            <div style="display:flex;justify-content:space-between;margin-bottom:12px; font-size: 11px; letter-spacing: 1px; color: #ffb6c1;">
                <span>♰ ORÁCULO COQUETTE ♰</span>
                <span id="close-pop" style="cursor:pointer; font-size: 14px;">✕</span>
            </div>

            <div id="carta-exibida" style="margin-bottom:15px; text-align: center; min-height: 50px; font-size: 14px; line-height: 1.4;">
                <span style="opacity: 0.6;">Toque abaixo para ouvir o destino...</span>
            </div>

            <button id="btn-sortear" style="
                width: 100%;
                background: transparent;
                border: 1px solid #ffb6c1;
                color: #ffb6c1;
                padding: 10px;
                border-radius: 25px;
                cursor: pointer;
                font-weight: bold;
                text-transform: uppercase;
                font-size: 10px;
                transition: 0.3s;
            ">Revelar Destino</button>
        </div>
    `;

    document.body.appendChild(container);

    const btn = document.getElementById("oraculo-btn");
    const pop = document.getElementById("oraculo-pop");
    const display = document.getElementById("carta-exibida");

    btn.addEventListener("click", () => {
        if (btn.dragging) return;
        pop.style.display = pop.style.display === "none" ? "block" : "none";
    });

    document.getElementById("close-pop").onclick = () => {
        pop.style.display = "none";
    };

    document.getElementById("btn-sortear").onclick = () => {
        const sorteio = cartas[Math.floor(Math.random() * cartas.length)];
        const userName = (window.name1 || "Gabi");
        const textoFinal = sorteio.c.replace("{{user}}", userName);
        
        display.style.opacity = 0;
        setTimeout(() => {
            display.innerHTML = `<strong style="color: #ffb6c1; display: block; margin-bottom: 5px;">${sorteio.n}</strong>${textoFinal}`;
            display.style.opacity = 1;
            display.style.transition = "opacity 0.5s";
        }, 200);
    };

    let isDragging = false;
    let offsetX = 0;
    let offsetY = 0;

    function startDrag(x, y) {
        isDragging = true;
        btn.dragging = false;
        offsetX = x - container.offsetLeft;
        offsetY = y - container.offsetTop;
    }

    function moveDrag(x, y) {
        if (!isDragging) return;
        btn.dragging = true;
        container.style.left = (x - offsetX) + "px";
        container.style.top = (y - offsetY) + "px";
        container.style.transform = "none";
    }

    function endDrag() {
        isDragging = false;
        setTimeout(() => btn.dragging = false, 50);
    }

    btn.addEventListener("mousedown", (e) => startDrag(e.clientX, e.clientY));
    document.addEventListener("mousemove", (e) => moveDrag(e.clientX, e.clientY));
    document.addEventListener("mouseup", endDrag);

    btn.addEventListener("touchstart", (e) => {
        const t = e.touches[0];
        startDrag(t.clientX, t.clientY);
    });
    document.addEventListener("touchmove", (e) => {
        const t = e.touches[0];
        moveDrag(t.clientX, t.clientY);
    });
    document.addEventListener("touchend", endDrag);

}, 1000);
