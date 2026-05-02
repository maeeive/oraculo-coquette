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

});

jQuery(async () => {

    console.log("Coquette Ultimate iniciando 💗");

    try {

        if (document.getElementById("coquette-ultimate")) return;

        await new Promise(r => setTimeout(r, 1200));

        const root = document.createElement("div");
        root.id = "coquette-ultimate";
        root.style.pointerEvents = "none";
        document.body.appendChild(root);

        // =========================
        // 💄 STYLE
        // =========================
        const style = document.createElement("style");
        style.textContent = `
        .cq-sparkle {
            position: fixed;
            width: 3px;
            height: 3px;
            background: white;
            border-radius: 50%;
            opacity: 0.2;
            filter: blur(1px);
            pointer-events: none;
            z-index: 9999;
        }

        @keyframes cq-fade {
            0% { opacity: 0; transform: scale(0.5); }
            50% { opacity: 0.4; }
            100% { opacity: 0; transform: scale(1.2); }
        }

        @keyframes cq-rise {
            from { transform: translateY(0); opacity: 0.5; }
            to { transform: translateY(-60px); opacity: 0; }
        }

        .cq-glow {
            animation: cqGlow 2s ease-out;
        }

        @keyframes cqGlow {
            0% { box-shadow: 0 0 20px rgba(255,182,193,0.8); }
            100% { box-shadow: none; }
        }

        #cq-curtain {
            position: fixed;
            inset: 0;
            background: rgba(255,182,193,0.25);
            z-index: 9998;
            pointer-events: none;
            animation: cqCurtain 1.2s ease forwards;
        }

        @keyframes cqCurtain {
            0% { clip-path: inset(0 0 0 0); }
            100% { clip-path: inset(0 50% 0 50%); opacity: 0; }
        }

        #cq-panel {
            position: fixed;
            right: 15px;
            bottom: 180px;
            z-index: 9999;
            pointer-events: auto;
            font-size: 12px;
        }

        #cq-panel button {
            background: rgba(255,182,193,0.2);
            border: 1px solid pink;
            color: white;
            padding: 6px 10px;
            border-radius: 20px;
        }
        `;
        document.head.appendChild(style);

        // =========================
        // 🎀 CORTINA
        // =========================
        const curtain = document.createElement("div");
        curtain.id = "cq-curtain";
        document.body.appendChild(curtain);

        setTimeout(() => curtain.remove(), 1500);

        // =========================
        // ✨ PARTICULAS AMBIENTE
        // =========================
        function spawnAmbient() {
            const s = document.createElement("div");
            s.className = "cq-sparkle";

            const side = Math.floor(Math.random() * 4);

            if (side === 0) { s.style.left = "0"; s.style.top = Math.random()*100+"%"; }
            if (side === 1) { s.style.right = "0"; s.style.top = Math.random()*100+"%"; }
            if (side === 2) { s.style.top = "0"; s.style.left = Math.random()*100+"%"; }
            if (side === 3) { s.style.bottom = "0"; s.style.left = Math.random()*100+"%"; }

            s.style.animation = "cq-fade 3s linear";

            document.body.appendChild(s);

            setTimeout(() => s.remove(), 3000);
        }

        setInterval(spawnAmbient, 200);

        // =========================
        // ✨ TOQUE (GLITTER EXPLOSION)
        // =========================
        document.addEventListener("touchstart", (e) => {
            const x = e.touches[0].clientX;
            const y = e.touches[0].clientY;

            for (let i = 0; i < 12; i++) {
                const s = document.createElement("div");
                s.className = "cq-sparkle";

                s.style.left = x + "px";
                s.style.top = y + "px";

                const angle = Math.random() * Math.PI * 2;
                const dist = Math.random() * 40;

                s.style.transform = `translate(${Math.cos(angle)*dist}px, ${Math.sin(angle)*dist}px)`;
                s.style.animation = "cq-fade 1s ease-out";

                document.body.appendChild(s);
                setTimeout(() => s.remove(), 1000);
            }
        });

        // =========================
        // 💗 GLOW EM NOVAS MENSAGENS
        // =========================
        const observer = new MutationObserver((mutations) => {
            mutations.forEach(m => {
                m.addedNodes.forEach(node => {
                    if (node.classList && node.classList.contains("mes")) {
                        node.classList.add("cq-glow");

                        // corações subindo
                        for (let i = 0; i < 3; i++) {
                            const heart = document.createElement("div");
                            heart.innerText = "♡";
                            heart.style.position = "absolute";
                            heart.style.left = "50%";
                            heart.style.bottom = "0";
                            heart.style.fontSize = "12px";
                            heart.style.color = "pink";
                            heart.style.animation = "cq-rise 1.5s ease-out";
                            node.appendChild(heart);

                            setTimeout(() => heart.remove(), 1500);
                        }
                    }
                });
            });
        });

        const chat = document.getElementById("chat");
        if (chat) observer.observe(chat, { childList: true, subtree: true });

        // =========================
        // 🎛️ MINI PAINEL
        // =========================
        const panel = document.createElement("div");
        panel.id = "cq-panel";

        const btn = document.createElement("button");
        btn.innerText = "🎀 FX";

        let enabled = true;

        btn.onclick = () => {
            enabled = !enabled;
            document.body.style.filter = enabled ? "" : "none";
        };

        panel.appendChild(btn);
        document.body.appendChild(panel);

        console.log("Coquette Ultimate carregado ✨💗");

    } catch (e) {
        console.error("Erro:", e);
    }

});
