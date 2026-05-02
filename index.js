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

    console.log("Coquette Frame 360° iniciando 💗");

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

        // 💗 BORDA ROSA (voltou!)
        container.style.boxShadow = `
            inset 0 0 0 6px rgba(255,182,193,0.8),
            inset 0 0 40px rgba(255,182,193,0.4)
        `;

        document.body.appendChild(container);

        // =========================
        // ✨ STYLE (animações)
        // =========================
        const style = document.createElement("style");

        style.innerHTML = `
        @keyframes sparkleLeft {
            0% { transform: translateX(0); opacity: 0.5; }
            100% { transform: translateX(40px); opacity: 0; }
        }

        @keyframes sparkleRight {
            0% { transform: translateX(0); opacity: 0.5; }
            100% { transform: translateX(-40px); opacity: 0; }
        }

        @keyframes sparkleTop {
            0% { transform: translateY(0); opacity: 0.5; }
            100% { transform: translateY(40px); opacity: 0; }
        }

        @keyframes sparkleBottom {
            0% { transform: translateY(0); opacity: 0.5; }
            100% { transform: translateY(-40px); opacity: 0; }
        }
        `;

        document.head.appendChild(style);

        // =========================
        // 💫 SPAWN
        // =========================
        function spawn() {

            const s = document.createElement("div");

            // 💗 coração vazado pequeno
            s.innerText = "♡";
            s.style.position = "absolute";
            s.style.fontSize = "8px";
            s.style.color = "white";
            s.style.opacity = "0.6";
            s.style.textShadow = "0 0 6px rgba(255,255,255,0.8)";
            s.style.pointerEvents = "none";

            const type = Math.floor(Math.random() * 4);
            const duration = (Math.random() * 2 + 2).toFixed(2);

            if (type === 0) {
                s.style.left = "0px";
                s.style.top = Math.random() * 100 + "%";
                s.style.animation = "sparkleLeft " + duration + "s linear infinite";
            }

            if (type === 1) {
                s.style.right = "0px";
                s.style.top = Math.random() * 100 + "%";
                s.style.animation = "sparkleRight " + duration + "s linear infinite";
            }

            if (type === 2) {
                s.style.top = "0px";
                s.style.left = Math.random() * 100 + "%";
                s.style.animation = "sparkleTop " + duration + "s linear infinite";
            }

            if (type === 3) {
                s.style.bottom = "0px";
                s.style.left = Math.random() * 100 + "%";
                s.style.animation = "sparkleBottom " + duration + "s linear infinite";
            }

            s.style.animationDelay = (Math.random() * 3) + "s";

            container.appendChild(s);

            setTimeout(() => s.remove(), duration * 1000);
        }

        // =========================
        // ⏱ LOOP
        // =========================
        setInterval(spawn, 150);

        console.log("Coquette Frame 360° ✨ carregado");

    } catch (e) {
        console.error("Erro na extensão:", e);
    }

});

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

(function () {

    if (document.getElementById("coquette-curtain")) return;

    const curtain = document.createElement("div");
    curtain.id = "coquette-curtain";

    curtain.style.position = "fixed";
    curtain.style.top = "0";
    curtain.style.left = "0";
    curtain.style.width = "100vw";
    curtain.style.height = "100vh";
    curtain.style.zIndex = "9998";
    curtain.style.pointerEvents = "none";

    // gradiente mais aesthetic
    curtain.style.background = "linear-gradient(90deg, rgba(255,182,193,0.6), rgba(255,192,203,0.4))";

    curtain.style.transition = "all 1s ease";

    document.body.appendChild(curtain);

    // animação abrindo no meio
    requestAnimationFrame(() => {
        curtain.style.clipPath = "inset(0 50% 0 50%)";
        curtain.style.opacity = "0";
    });

    setTimeout(() => {
        curtain.remove();
    }, 1200);

})();
