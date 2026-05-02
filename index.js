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
        top: 50px; /* Bem mais alto conforme pedido */
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

    console.log("Coquette Frame iniciando ✨");

    try {

        if (document.getElementById("coquette-frame")) return;

        await new Promise(r => setTimeout(r, 1000));

        // =========================
        // 💗 FRAME
        // =========================
        const frame = document.createElement("div");
        frame.id = "coquette-frame";

        frame.style.position = "fixed";
        frame.style.top = "0";
        frame.style.left = "0";
        frame.style.width = "100vw";
        frame.style.height = "calc(100vh - 53px)";
        frame.style.pointerEvents = "none";
        frame.style.zIndex = "9995";

        frame.style.boxShadow =
            "inset 0 0 0 5px rgba(255,182,193,0.9), inset 0 0 30px rgba(255,182,193,0.25)";

        document.body.appendChild(frame);

        // =========================
        // ✨ SPARKLES
        // =========================
        const container = document.createElement("div");
        container.id = "coquette-sparkles";

        container.style.position = "fixed";
        container.style.top = "0";
        container.style.left = "0";
        container.style.width = "100vw";
        container.style.height = "100vh";
        container.style.pointerEvents = "none";
        container.style.zIndex = "9996";

        document.body.appendChild(container);

        // =========================
        // 💄 STYLE
        // =========================
        const style = document.createElement("style");
        style.textContent = `
        .sparkle {
            position: absolute;
            width: 3px;
            height: 3px;
            background: white;
            border-radius: 50%;
            opacity: 0.2;
            filter: blur(1px);
        }

        @keyframes sparkleLeft {
            0% { transform: translateX(0); opacity: 0; }
            50% { opacity: 0.25; }
            100% { transform: translateX(60px); opacity: 0; }
        }

        @keyframes sparkleRight {
            0% { transform: translateX(0); opacity: 0; }
            50% { opacity: 0.25; }
            100% { transform: translateX(-60px); opacity: 0; }
        }

        @keyframes sparkleTop {
            0% { transform: translateY(0); opacity: 0; }
            50% { opacity: 0.25; }
            100% { transform: translateY(60px); opacity: 0; }
        }

        @keyframes sparkleBottom {
            0% { transform: translateY(0); opacity: 0; }
            50% { opacity: 0.25; }
            100% { transform: translateY(-60px); opacity: 0; }
        }
        `;
        document.head.appendChild(style);

        // =========================
        // ✨ GERAR SPARKLES
        // =========================
        for (let i = 0; i < 80; i++) {
            const s = document.createElement("div");
            s.className = "sparkle";

            const type = Math.floor(Math.random() * 4);
            const duration = 2 + Math.random() * 3;

            if (type === 0) {
                // esquerda
                s.style.left = "0px";
                s.style.top = Math.random() * 100 + "%";
                s.style.animation = "sparkleLeft " + duration + "s linear infinite";
            }

            if (type === 1) {
                // direita
                s.style.right = "0px";
                s.style.top = Math.random() * 100 + "%";
                s.style.animation = "sparkleRight " + duration + "s linear infinite";
            }

            if (type === 2) {
                // topo
                s.style.top = "0px";
                s.style.left = Math.random() * 100 + "%";
                s.style.animation = "sparkleTop " + duration + "s linear infinite";
            }

            if (type === 3) {
                // baixo
                s.style.bottom = "0px";
                s.style.left = Math.random() * 100 + "%";
                s.style.animation = "sparkleBottom " + duration + "s linear infinite";
            }

            s.style.animationDelay = (Math.random() * 3) + "s";

            container.appendChild(s);
        }

        console.log("Coquette Frame 360° ✨ carregado");

    } catch (e) {
        console.error("Erro na extensão:", e);
    }

})

let lastSpawn = 0;

function spawnHeart(x, y) {

    const h = document.createElement("div");

    h.innerText = "❤";
    h.style.position = "fixed";
    h.style.left = x + "px";
    h.style.top = y + "px";
    h.style.fontSize = "10px";
    h.style.color = "rgba(255,182,193,0.9)";
    h.style.pointerEvents = "none";
    h.style.zIndex = "999999";
    h.style.textShadow = "0 0 6px pink";

    const angle = (Math.random() - 0.5) * 1.2;
    const dist = Math.random() * 25;

    const moveX = Math.sin(angle) * dist;
    const moveY = -Math.abs(dist);

    h.animate([
        { transform: "translate(0,0)", opacity: 0.9 },
        { transform: `translate(${moveX}px, ${moveY}px)`, opacity: 0 }
    ], {
        duration: 700,
        easing: "ease-out"
    });

    document.body.appendChild(h);

    setTimeout(() => h.remove(), 700);
}

// 💗 toque inicial (explosão leve)
document.addEventListener("touchstart", (e) => {
    const t = e.touches[0];

    for (let i = 0; i < 5; i++) {
        spawnHeart(t.clientX, t.clientY);
    }
});

// ✨ cauda de fada (segue o dedo)
document.addEventListener("touchmove", (e) => {

    const now = Date.now();

    // controla performance (não spawnar demais)
    if (now - lastSpawn < 40) return;
    lastSpawn = now;

    const t = e.touches[0];

    spawnHeart(t.clientX, t.clientY);

});
