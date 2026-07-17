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
        <div id="coquette-title">☁️ My Love ☁️</div>
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
        top: 49px; /* Bem mais alto conforme pedido */
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

jQuery(async () => {

    try {

        console.log("Coquette FX iniciando ✦");

        // evita duplicar
        if (document.getElementById("coquette-frame")) return;

        await new Promise(r => setTimeout(r, 1000));

        // =========================
        // 💗 FRAME (BORDA)
        // =========================
        const frame = document.createElement("div");
        frame.id = "coquette-frame";

        frame.style.position = "fixed";
        frame.style.top = "0";
        frame.style.left = "0";
        frame.style.width = "100vw";
        frame.style.height = "100vh";
        frame.style.pointerEvents = "none";
        frame.style.zIndex = "9995";

        frame.style.boxShadow = `
            inset 0 0 0 4px rgba(255,182,193,0.7),
            inset 0 0 25px rgba(255,182,193,0.3)
        `;

        document.body.appendChild(frame);
        
// 🖼️ BORDA PNG (VERSÃO SUPERIOR)
const overlay = document.createElement("div");

overlay.style.position = "absolute";

// sobe mais pra cima
overlay.style.top = "-19px";
overlay.style.left = "50%";
overlay.style.transform = "translateX(-50%)";

// largura maior que a tela (leve expansão lateral)
overlay.style.width = "110vw";

// altura só metade da tela
overlay.style.height = "50vh";

overlay.style.pointerEvents = "none";
overlay.style.zIndex = "9997";

overlay.style.backgroundImage = "url('https://file.garden/abCiFnQil12ZnGUC/file_0000000085a8720e917b8d77403a0c30.png')";
overlay.style.backgroundRepeat = "no-repeat";
overlay.style.backgroundPosition = "top center";

// evita deformar
overlay.style.backgroundSize = "contain";

// mistura com a borda rosa
overlay.style.opacity = "0.9";
overlay.style.mixBlendMode = "screen";

frame.appendChild(overlay);
        
        // 🎀 CANTOS COQUETTE (VERSÃO BONITA)
const styleCorners = document.createElement("style");

styleCorners.innerHTML = `

.coquette-corner {
    position: fixed;
    width: 40px;
    height: 40px;
    z-index: 9996;
    pointer-events: none;
}

.coquette-corner::before,
.coquette-corner::after {
    content: "";
    position: absolute;
    border: 1.5px solid rgba(255,182,193,0.7);
    border-radius: 20px;
}

/* top left */
.coq-tl { top: 6px; left: 6px; }
.coq-tl::before {
    width: 30px;
    height: 30px;
    border-right: none;
    border-bottom: none;
}
.coq-tl::after {
    width: 15px;
    height: 15px;
    top: 10px;
    left: 10px;
}

/* top right */
.coq-tr { top: 6px; right: 6px; }
.coq-tr::before {
    width: 30px;
    height: 30px;
    border-left: none;
    border-bottom: none;
}
.coq-tr::after {
    width: 15px;
    height: 15px;
    top: 10px;
    right: 10px;
}

/* bottom left */
.coq-bl { bottom: 6px; left: 6px; }
.coq-bl::before {
    width: 30px;
    height: 30px;
    border-right: none;
    border-top: none;
}
.coq-bl::after {
    width: 15px;
    height: 15px;
    bottom: 10px;
    left: 10px;
}

/* bottom right */
.coq-br { bottom: 6px; right: 6px; }
.coq-br::before {
    width: 30px;
    height: 30px;
    border-left: none;
    border-top: none;
}
.coq-br::after {
    width: 15px;
    height: 15px;
    bottom: 10px;
    right: 10px;
}

`;

document.head.appendChild(styleCorners);

// cria os 4 cantos
["tl","tr","bl","br"].forEach(pos => {
    const c = document.createElement("div");
    c.className = "coquette-corner coq-" + pos;
    document.body.appendChild(c);
});

        // =========================
        // 🎞️ ANIMAÇÃO
        // =========================
        const style = document.createElement("style");
        style.innerHTML = `
        
        @keyframes fall {
            0% { transform: translateY(-10px) translateX(0); }
            50% { transform: translateY(50vh) translateX(8px); }
            100% { transform: translateY(110vh) translateX(-8px); }
        }

        `;

        document.head.appendChild(style);

        console.log("Coquette FX carregado 💗");

    } catch (e) {
        console.error("Erro no FX:", e);
    }

});

// ✦ LINHA ESTRELA + LUA
setTimeout(() => {

    const avatar = document.querySelector(".mes_avatar img");

    if (!avatar) {
        console.log("avatar não encontrado");
        return;
    }

    const deco = document.createElement("div");

    deco.innerHTML = `
        ✦
        <div class="line"></div>
        <div class="line small"></div>
        ☾
        <div class="line"></div>
        ✧
    `;

    deco.style.position = "absolute";
    deco.style.left = "50%";
    deco.style.transform = "translateX(-50%)";
    deco.style.top = "100%";

    deco.style.display = "flex";
    deco.style.flexDirection = "column";
    deco.style.alignItems = "center";
    deco.style.gap = "3px";

    deco.style.color = "#ffd6e0";
    deco.style.fontSize = "12px";
    deco.style.textShadow = "0 0 6px rgba(255,182,193,0.8)";

    // estilo das linhas
    const style = document.createElement("style");
    style.innerHTML = `
    .line {
        width: 1px;
        height: 10px;
        background: rgba(255,182,193,0.5);
    }
    .line.small {
        height: 6px;
        opacity: 0.6;
    }
    `;
    document.head.appendChild(style);

    avatar.parentElement.style.position = "relative";
    avatar.parentElement.appendChild(deco);

}, 1500);
