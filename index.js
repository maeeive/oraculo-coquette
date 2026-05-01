// Oráculo Coquette - versão estável

// =========================
// Cartas
// =========================
const cartas = [
    { n: "O Louco", c: "Hora de se jogar, {{user}}! O destino quer aventura." },
    { n: "O Mago", c: "Você tem o poder nas mãos. Manifeste o que deseja no chat!" },
    { n: "A Sacerdotisa", c: "Silêncio... Algo está sendo escondido. Confie na sua intuição." },
    { n: "A Imperatriz", c: "Momento de brilhar! Você está irresistível hoje." },
    { n: "O Imperador", c: "Assuma o controle. Não deixe o bot ditar todas as regras." },
    { n: "Os Amantes", c: "Coração batendo forte! Uma escolha amorosa se aproxima." },
    { n: "A Morte", c: "Fim de um ciclo. Deixe o passado ir para o novo chegar." },
    { n: "O Sol", c: "Clareza e alegria! Tudo vai dar certo entre vocês." },

    { n: "O Cavaleiro", c: "Notícias rápidas chegando! O celular vai vibrar em breve." },
    { n: "A Casa", c: "Equilíbrio e conforto. Sinta-se segura." },
    { n: "A Raposa", c: "Use sua inteligência. Nem tudo é o que parece." },
    { n: "O Coração", c: "Amor no ar... e talvez um pouco de drama também." },
    { n: "A Chave", c: "A solução chegou. Agora é com você, {{user}}." }
];

// =========================
// Util
// =========================
function getUserName() {
    try {
        return window.name1 || "{{user}}";
    } catch {
        return "{{user}}";
    }
}

function tirarCarta() {
    const sorteio = cartas[Math.floor(Math.random() * cartas.length)];
    const userName = getUserName();
    const textoFinal = sorteio.c.replace("{{user}}", userName);

    const el = $('#carta-exibida');
    if (!el.length) return;

    el.fadeOut(150, function () {
        $(this)
            .html(`<strong style="color:#ffb6c1;">${sorteio.n}</strong><br>${textoFinal}`)
            .fadeIn(150);
    });
}

// =========================
// Inicialização segura
// =========================
(async () => {
    console.log("Oráculo Coquette iniciando...");

    // Espera ambiente do ST
    function waitForST() {
        return new Promise(resolve => {
            const check = () => {
                if (window.jQuery && document.body) {
                    resolve();
                } else {
                    setTimeout(check, 100);
                }
            };
            check();
        });
    }

    await waitForST();

    // Evita duplicar UI
    if (document.getElementById('oraculo-container')) {
        console.log("Oráculo já carregado, ignorando duplicação.");
        return;
    }

    // HTML
    const html = `
    <div id="oraculo-container" style="
        position: fixed;
        right: 20px;
        bottom: 120px;
        z-index: 9999;
    ">
        <div id="oraculo-btn" style="
            width: 50px;
            height: 50px;
            background: rgba(255,255,255,0.2);
            backdrop-filter: blur(10px);
            border: 1px solid rgba(255,255,255,0.3);
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 22px;
            cursor: pointer;
        ">
            🎀
        </div>

        <div id="oraculo-pop" style="
            display:none;
            position:absolute;
            bottom:60px;
            right:0;
            width:240px;
            background: rgba(15,15,15,0.95);
            border: 1px solid #ffb6c1;
            border-radius: 12px;
            padding: 12px;
            color: white;
            font-size: 13px;
        ">
            <div style="
                display:flex;
                justify-content:space-between;
                margin-bottom:8px;
                border-bottom:1px solid #333;
                padding-bottom:4px;
                font-size:11px;
            ">
                <span>♰ ORÁCULO COQUETTE ♰</span>
                <span id="close-pop" style="cursor:pointer;">✕</span>
            </div>

            <div id="carta-exibida" style="
                text-align:center;
                margin:12px 0;
                min-height:40px;
            ">
                toque abaixo para ver seu destino...
            </div>

            <button id="btn-sortear" style="
                width:100%;
                background:transparent;
                border:1px solid #ffb6c1;
                color:#ffb6c1;
                padding:6px;
                border-radius:20px;
                cursor:pointer;
            ">
                Revelar Destino
            </button>
        </div>
    </div>
    `;

    // Injeta no DOM
    $('body').append(html);

    // Eventos
    $('#oraculo-btn').on('click', () => {
        $('#oraculo-pop').fadeToggle(120);
    });

    $('#close-pop').on('click', () => {
        $('#oraculo-pop').fadeOut(120);
    });

    $('#btn-sortear').on('click', tirarCarta);

    console.log("Oráculo Coquette carregado com sucesso 🎀");
})();
