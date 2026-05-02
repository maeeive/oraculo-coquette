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

    console.log("Coquette Frame V2 🎀");

    if (document.getElementById("coquette-frame")) return;

    await new Promise(r => setTimeout(r, 1000));

    // =========================
    // 💗 FRAME BASE
    // =========================
    const frame = document.createElement("div");
    frame.id = "coquette-frame";

    frame.style.position = "fixed";
    frame.style.top = "0";
    frame.style.left = "0";
    frame.style.width = "100vw";
    frame.style.height = "calc(100vh - 10px)";
    frame.style.pointerEvents = "none";
    frame.style.zIndex = "9995";

    // 💗 borda + glow
    frame.style.boxShadow = `
        inset 0 0 0 5px rgba(255,182,193,0.9),
        inset 0 0 30px rgba(255,182,193,0.25)
    `;

    document.body.appendChild(frame);

    // =========================
    // 🧵 ESTAMPA NA BORDA
    // =========================
    const pattern = document.createElement("div");

    pattern.style.position = "fixed";
    pattern.style.top = "0";
    pattern.style.left = "0";
    pattern.style.width = "100vw";
    pattern.style.height = "calc(100vh - 10px)";
    pattern.style.pointerEvents = "none";
    pattern.style.zIndex = "9994";

    pattern.style.backgroundImage = "radial-gradient(rgba(255,182,193,0.15) 1px, transparent 1px)";
    pattern.style.backgroundSize = "12px 12px";

    document.body.appendChild(pattern);

    // =========================
    // 💗 SPARKLE HEARTS
    // =========================
    function createHeart() {

        const heart = document.createElement("div");

        heart.innerText = "💗";
        heart.style.position = "fixed";
        heart.style.left = "0px";
        heart.style.top = Math.random() * window.innerHeight + "px";

        heart.style.fontSize = (10 + Math.random() * 10) + "px";
        heart.style.opacity = "0.8";
        heart.style.pointerEvents = "none";
        heart.style.zIndex = "9996";

        document.body.appendChild(heart);

        let pos = 0;

        const interval = setInterval(() => {
            pos += 2;
            heart.style.left = pos + "px";
            heart.style.opacity -= 0.01;

            if (pos > window.innerWidth) {
                clearInterval(interval);
                heart.remove();
            }
        }, 16);
    }

    // spawn contínuo
    setInterval(createHeart, 800);

});
