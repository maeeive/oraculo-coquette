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

    console.log("Coquette lateral ✨");

    try {

        if (document.getElementById("coquette-frame")) return;

        await new Promise(r => setTimeout(r, 1000));

        // =========================
        // 💗 CONTAINER
        // =========================
        const container = document.createElement("div");
        container.id = "coquette-frame";

        container.style.position = "fixed";
        container.style.top = "0";
        container.style.left = "0";
        container.style.width = "100vw";
        container.style.height = "100vh";
        container.style.pointerEvents = "none";
        container.style.zIndex = "9995";

        container.style.boxShadow = `
            inset 0 0 0 4px rgba(255,182,193,0.7),
            inset 0 0 25px rgba(255,182,193,0.3)
        `;

        document.body.appendChild(container);

        // =========================
        // ✨ STYLE
        // =========================
        const style = document.createElement("style");

        style.innerHTML = `
        @keyframes sparkleLeft {
            0% { transform: translateX(0); opacity: 0.8; }
            100% { transform: translateX(140px); opacity: 0; }
        }

        @keyframes sparkleRight {
            0% { transform: translateX(0); opacity: 0.8; }
            100% { transform: translateX(-140px); opacity: 0; }
        }
        `;

        document.head.appendChild(style);

        // =========================
        // 💫 SPAWN
        // =========================
        function spawn() {

            const s = document.createElement("div");

            s.innerText = "✦";
            s.style.position = "absolute";
            s.style.fontSize = "9px";
            s.style.color = "rgba(255,255,255,0.9)";
            s.style.opacity = "0.85";
            s.style.textShadow = "0 0 10px rgba(255,255,255,1)";
            s.style.pointerEvents = "none";

            const type = Math.floor(Math.random() * 2); // só 0 e 1
            const duration = (Math.random() * 2 + 2.5).toFixed(2);

            if (type === 0) {
                // esquerda → direita
                s.style.left = "0px";
                s.style.top = Math.random() * 100 + "%";
                s.style.animation = "sparkleLeft " + duration + "s ease-out infinite";
            }

            if (type === 1) {
                // direita → esquerda
                s.style.right = "0px";
                s.style.top = Math.random() * 100 + "%";
                s.style.animation = "sparkleRight " + duration + "s ease-out infinite";
            }

            s.style.animationDelay = (Math.random() * 2) + "s";

            container.appendChild(s);

            setTimeout(() => s.remove(), duration * 1000);
        }

        setInterval(spawn, 140);

        console.log("✨ lateral flow ativo");

    } catch (e) {
        console.error("Erro:", e);
    }

})

document.addEventListener("touchstart", function(e) {

    const t = e.touches[0];
    const x = t.clientX;
    const y = t.clientY;

    for (let i = 0; i < 6; i++) {

        const s = document.createElement("div");

        s.style.position = "fixed";
        s.style.left = x + "px";
        s.style.top = y + "px";
        s.style.width = "2px";
        s.style.height = "2px";
        s.style.background = "rgba(255,255,255,0.7)";
        s.style.borderRadius = "50%";
        s.style.pointerEvents = "none";
        s.style.zIndex = "999999";
        s.style.filter = "blur(0.5px)";

        const angle = Math.random() * Math.PI * 2;
        const dist = Math.random() * 30;

        const moveX = Math.cos(angle) * dist;
        const moveY = Math.sin(angle) * dist;

        s.animate([
            { transform: "translate(0,0)", opacity: 0.7 },
            { transform: `translate(${moveX}px, ${moveY}px)`, opacity: 0 }
        ], {
            duration: 500,
            easing: "ease-out"
        });

        document.body.appendChild(s);

        setTimeout(() => s.remove(), 500);
    }

})

jQuery(async () => {

    console.log("Coquette Glow 💗");

    try {

        if (document.getElementById("coquette-glow")) return;

        await new Promise(r => setTimeout(r, 800));

        // =========================
        // 💗 CONTAINER
        // =========================
        const glow = document.createElement("div");
        glow.id = "coquette-glow";

        glow.style.position = "fixed";
        glow.style.top = "0";
        glow.style.left = "0";
        glow.style.width = "100vw";
        glow.style.height = "100vh";
        glow.style.pointerEvents = "none";
        glow.style.zIndex = "9992";

        document.body.appendChild(glow);

        // =========================
        // ✨ STYLE
        // =========================
        const style = document.createElement("style");

        style.innerHTML = `
        @keyframes coquetteBreath {
            0% {
                box-shadow:
                inset 0 0 40px rgba(255,182,193,0.15),
                inset 0 0 80px rgba(255,182,193,0.1);
            }

            50% {
                box-shadow:
                inset 0 0 80px rgba(255,182,193,0.25),
                inset 0 0 120px rgba(255,182,193,0.15);
            }

            100% {
                box-shadow:
                inset 0 0 40px rgba(255,182,193,0.15),
                inset 0 0 80px rgba(255,182,193,0.1);
            }
        }

        #coquette-glow {
            animation: coquetteBreath 6s ease-in-out infinite;
        }
        `;

        document.head.appendChild(style);

        console.log("Glow ativo 💗");

    } catch (e) {
        console.error(e);
    }

})

jQuery(async () => {

    console.log("Glass UI 💗");

    try {

        if (document.getElementById("coquette-glass")) return;

        await new Promise(r => setTimeout(r, 800));

        const style = document.createElement("style");

        style.id = "coquette-glass";

        style.innerHTML = `

        /* 💗 mensagens */
        .mes_block {
            background: rgba(255,255,255,0.06) !important;
            backdrop-filter: blur(10px);
            -webkit-backdrop-filter: blur(10px);

            border: 1px solid rgba(255,255,255,0.15) !important;
            border-radius: 16px !important;

            box-shadow:
                0 4px 20px rgba(0,0,0,0.25),
                inset 0 0 10px rgba(255,255,255,0.05);
        }

        /* 💗 user vs bot nuance */
        .mes[is_user="true"] .mes_block {
            background: rgba(255,182,193,0.08) !important;
        }

        .mes[is_user="false"] .mes_block {
            background: rgba(255,255,255,0.05) !important;
        }

        /* ✨ hover glow leve */
        .mes_block:hover {
            box-shadow:
                0 6px 25px rgba(255,182,193,0.2),
                inset 0 0 15px rgba(255,255,255,0.08);
        }

        `;

        document.head.appendChild(style);

        console.log("Glass UI aplicado ✨");

    } catch (e) {
        console.error(e);
    }

})

