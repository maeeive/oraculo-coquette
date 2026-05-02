setTimeout(() => {

    if (document.getElementById("coquette-header")) return;

    // =========================
    // 🎀 FONTES
    // =========================
    const font1 = document.createElement("link");
    font1.href = "https://fonts.googleapis.com/css2?family=Ballet:opsz@16..72&display=swap";
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
        <div id="coquette-sub">♡ dreamy coquette ♡</div>
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
        top: 135px; /* Ajustado conforme seu pedido */
        left: 50%;
        transform: translateX(-50%);
        z-index: 9999;
        pointer-events: none;
        text-align: center;
        
        /* 🎀 FUNDO PEROLADO */
        background: linear-gradient(135deg, rgba(255, 255, 255, 0.15) 0%, rgba(255, 245, 247, 0.25) 50%, rgba(255, 255, 255, 0.15) 100%);
        backdrop-filter: blur(4px);
        -webkit-backdrop-filter: blur(4px);
        padding: 15px 40px;
        border-radius: 50px;
        border: 1px solid rgba(255, 255, 255, 0.3);
        box-shadow: 0 4px 15px rgba(212, 76, 140, 0.1);
    }

    #coquette-title {
        font-family: 'Ballet', cursive;
        font-size: 34px;
        color: #FFB2C4;
        text-shadow:
            0 0 6px rgba(212, 76, 140, 0.8),
            0 0 6px rgba(212, 76, 140, 0.8);
    }

    #coquette-sub {
        font-family: 'Great Vibes', cursive;
        font-size: 19px;
        color: #FFB2C4;
        opacity: 0.9;
        letter-spacing: 2px;
        text-shadow: 0 0 6px rgba(212, 76, 140, 0.8),
        0 0 6px rgba(212, 76, 140, 0.8);
        margin-top: -5px;
    }
    `;

    document.head.appendChild(style);

}, 500);
