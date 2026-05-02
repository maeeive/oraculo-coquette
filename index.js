setTimeout(() => {

    if (document.getElementById("coquette-header")) return;

    // =========================
    // 🎀 FONTES
    // =========================
    const font1 = document.createElement("link");
    font1.href = "https://fonts.googleapis.com/css2?family=Pixelify+Sans:wght@400..700&display=swap";
    font1.rel = "stylesheet";

    const font2 = document.createElement("link");
    font2.href = "https://fonts.googleapis.com/css2?family=Great+Vibes&display=swap";
    font2.rel = "stylesheet";

    document.head.appendChild(font1);
    document.head.appendChild(font2);

    // =========================
    // 🎀 CONTAINER
    // =========================
    const header = document.createElement("div");
    header.id = "coquette-header";

    header.innerHTML = `
        <div id="coquette-title">🎀 My Love 🎀</div>
        <div id="coquette-sub">♡ dreamy coquette v2 ♡</div>
    `;

    document.body.appendChild(header);

    // =========================
    // 💄 STYLE
    // =========================
    const style = document.createElement("style");
    style.id = "coquette-header-style";

    style.innerHTML = `

    #coquette-header {
        position: fixed;
        top: 135px; 
        left: 50%;
        transform: translateX(-50%);
        z-index: 9999;
        pointer-events: none;
        text-align: center;
        
        /* 🎀 FUNDO PEROLADO COMPACTO */
        background: linear-gradient(135deg, rgba(255, 255, 255, 0.12) 0%, rgba(255, 245, 247, 0.20) 50%, rgba(255, 255, 255, 0.12) 100%);
        backdrop-filter: blur(3px);
        -webkit-backdrop-filter: blur(3px);
        padding: 10px 25px; /* Diminuído o preenchimento */
        border-radius: 40px; 
        border: 1px solid rgba(255, 255, 255, 0.25);
        box-shadow: 0 4px 10px rgba(212, 76, 140, 0.08);
    }

    #coquette-title {
        font-family: 'Pixelify Sans', sans-serif;
        font-size: 26px; /* Tamanho reduzido */
        color: #FFB2C4;
        text-shadow:
            0 0 5px rgba(212, 76, 140, 0.8),
            0 0 5px rgba(212, 76, 140, 0.8);
    }

    #coquette-sub {
        font-family: 'Great Vibes', cursive;
        font-size: 15px; /* Tamanho reduzido */
        color: #FFB2C4;
        opacity: 0.9;
        letter-spacing: 1.5px;
        text-shadow: 0 0 5px rgba(212, 76, 140, 0.8);
        margin-top: -2px;
    }
    `;

    document.head.appendChild(style);

}, 500);
