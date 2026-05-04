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

    console.log("Snow effect iniciando ❄️");

    // evita duplicar
    if (document.getElementById("coquette-snow")) return;

    await new Promise(r => setTimeout(r, 800));

    const container = document.createElement("div");
    container.id = "coquette-snow";

    container.style.position = "fixed";
    container.style.top = "0";
    container.style.left = "0";
    container.style.width = "100vw";
    container.style.height = "100vh";
    container.style.pointerEvents = "none";
    container.style.zIndex = "9994"; // abaixo do header

    document.body.appendChild(container);

    // quantidade de neve (ajusta aqui)
    const SNOW_COUNT = 25;

    for (let i = 0; i < SNOW_COUNT; i++) {
        const snow = document.createElement("div");

        snow.innerText = "✦";

        const size = Math.random() * 6 + 8; // pequeno e delicado
        const duration = Math.random() * 10 + 10;

        snow.style.position = "absolute";
        snow.style.top = "-10px";
        snow.style.left = Math.random() * 100 + "%";

        snow.style.fontSize = size + "px";
        snow.style.opacity = Math.random() * 0.5 + 0.2;

        snow.style.animation = `snowFall ${duration}s linear infinite`;
        snow.style.animationDelay = (Math.random() * 10) + "s";

        snow.style.filter = "drop-shadow(0 0 4px rgba(255,255,255,0.6))";

        container.appendChild(snow);
    }

    // animação
    const style = document.createElement("style");
    style.innerHTML = `
    
    @keyframes snowFall {
        0% {
            transform: translateY(-10px) translateX(0);
        }
        50% {
            transform: translateY(50vh) translateX(10px);
        }
        100% {
            transform: translateY(110vh) translateX(-10px);
        }
    }

    `;

    document.head.appendChild(style);

    console.log("Snow effect carregado ❄️");

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
