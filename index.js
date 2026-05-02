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
        top: 70px; /* Bem mais alto conforme pedido */
        left: 50%;
        transform: translateX(-50%);
        z-index: 9999;
        pointer-events: none;
        text-align: center;
        
        /* 🎀 FUNDO PEROLADO ULTRA COMPACTO */
        background: linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 245, 247, 0.18) 50%, rgba(255, 255, 255, 0.1) 100%);
        backdrop-filter: blur(2px);
        -webkit-backdrop-filter: blur(2px);
        padding: 6px 18px; /* Reduzido ainda mais */
        border-radius: 30px; 
        border: 1px solid rgba(255, 255, 255, 0.2);
    }

    #coquette-title {
        font-family: 'Pixelify Sans', sans-serif;
        font-size: 20px; /* Reduzido de 26px para 20px */
        color: #FFB2C4;
        text-shadow: 0 0 4px rgba(212, 76, 140, 0.8);
    }

    #coquette-sub {
        font-family: 'Great Vibes', cursive;
        font-size: 12px; /* Reduzido de 15px para 12px */
        color: #FFB2C4;
        opacity: 0.8;
        letter-spacing: 1px;
        text-shadow: 0 0 3px rgba(212, 76, 140, 0.6);
        margin-top: -3px;
    }
    `;

    document.head.appendChild(style);

}, 500);


    if (document.getElementById("coquette-frame")) return;

    // =========================
    // 🎀 CONTAINER DA MOLDURA
    // =========================
    const frame = document.createElement("div");
    frame.id = "coquette-frame";
    document.body.appendChild(frame);

    // =========================
    // 💄 STYLE
    // =========================
    const style = document.createElement("style");
    style.id = "coquette-frame-style";

    style.innerHTML = `

    /* 🎀 BASE DA MOLDURA */
    #coquette-frame {
        position: fixed;
        inset: 0;
        pointer-events: none;
        z-index: 9998;
    }

    /* 💗 BORDA PRINCIPAL */
    #coquette-frame::before {
        content: "";
        position: absolute;
        inset: 0;
        border: 14px solid rgba(255, 182, 193, 0.9); /* rosa bebê */
        border-radius: 25px;
        box-shadow:
            0 0 40px rgba(255,182,193,0.6),
            inset 0 0 30px rgba(255,182,193,0.4);
    }

    /* 🎀 LACINHOS (cantos) */
    #coquette-frame::after {
        content: "🎀 🎀 🎀 🎀";
        position: absolute;
        width: 100%;
        top: 10px;
        left: 0;
        text-align: center;
        font-size: 22px;
        opacity: 0.9;
        text-shadow: 0 0 10px rgba(255,182,193,0.8);
    }

    /* 🎀 LACINHOS LATERAIS */
    body::before {
        content: "🎀";
        position: fixed;
        left: 5px;
        top: 50%;
        transform: translateY(-50%);
        font-size: 22px;
        z-index: 9999;
        pointer-events: none;
        text-shadow: 0 0 10px pink;
    }

    body::after {
        content: "🎀";
        position: fixed;
        right: 5px;
        top: 50%;
        transform: translateY(-50%);
        font-size: 22px;
        z-index: 9999;
        pointer-events: none;
        text-shadow: 0 0 10px pink;
    }

    /* 💗 SOMBRA INTERNA (efeito vignette soft) */
    #coquette-frame {
        box-shadow: inset 0 0 80px rgba(255,182,193,0.25);
    }
