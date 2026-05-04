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

        // =========================
        // ✦ FAIRY DUST
        // =========================
        const dust = document.createElement("div");
        dust.id = "coquette-dust";

        dust.style.position = "fixed";
        dust.style.top = "0";
        dust.style.left = "0";
        dust.style.width = "100vw";
        dust.style.height = "100vh";
        dust.style.pointerEvents = "none";
        dust.style.zIndex = "9994"; // abaixo da borda

        document.body.appendChild(dust);

        const COUNT = 25;

        for (let i = 0; i < COUNT; i++) {

            const spark = document.createElement("div");

            spark.innerText = "✦";

            const size = Math.random() * 5 + 6;
            const duration = Math.random() * 10 + 10;

            spark.style.position = "absolute";
            spark.style.top = "-10px";
            spark.style.left = Math.random() * 100 + "%";

            spark.style.fontSize = size + "px";
            spark.style.opacity = Math.random() * 0.4 + 0.3;

            spark.style.color = "#ffffff";
            spark.style.textShadow = "0 0 6px rgba(255,255,255,0.8)";

            spark.style.animation = `fall ${duration}s linear infinite`;
            spark.style.animationDelay = (Math.random() * 10) + "s";

            dust.appendChild(spark);
        }

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

    console.log("Hybrid Animation 💗");

    try {

        if (document.getElementById("coquette-hybrid")) return;

        await new Promise(r => setTimeout(r, 800));

        const style = document.createElement("style");
        style.id = "coquette-hybrid";

        style.innerHTML = `

        @keyframes coquetteHybrid {
            0% {
                opacity: 0;
                transform: translateY(20px) scale(0.98);
                filter: blur(4px);
                clip-path: inset(0 100% 0 0);
            }

            60% {
                opacity: 1;
                transform: translateY(0) scale(1);
                filter: blur(1px);
                clip-path: inset(0 20% 0 0);
            }

            100% {
                opacity: 1;
                transform: translateY(0) scale(1);
                filter: blur(0);
                clip-path: inset(0 0 0 0);
            }
        }

        /* 💬 aplica só no texto */
        .mes_text {
            animation: coquetteHybrid 0.9s ease-out;
        }

        `;

        document.head.appendChild(style);

        console.log("Hybrid ativo ✨");

    } catch (e) {
        console.error(e);
    }

});
