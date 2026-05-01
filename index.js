alert("Coquette Heavy Mode 🎀");

setTimeout(() => {

    if (document.getElementById("coquette-heavy")) return;

    // =========================
    // 💗 IMPORT FONT
    // =========================
    const font = document.createElement("link");
    font.href = "https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;600&display=swap";
    font.rel = "stylesheet";
    document.head.appendChild(font);

    // =========================
    // 🎀 STYLE
    // =========================
    const style = document.createElement("style");
    style.id = "coquette-heavy";

    style.innerHTML = `
    
    body {
        font-family: 'DM Sans', sans-serif !important;
        background: radial-gradient(circle at center, #0a0a0a, #000);
        overflow-x: hidden;
    }

    /* 💗 VINHETA ROSA */
    body::after {
        content: "";
        position: fixed;
        inset: 0;
        pointer-events: none;
        z-index: 9999;
        box-shadow: inset 0 0 120px rgba(255,182,193,0.25);
    }

    /* 🎀 MENSAGENS */
    .mes {
        border-radius: 18px !important;
        backdrop-filter: blur(6px);
        box-shadow:
            0 0 15px rgba(255,182,193,0.2),
            inset 0 0 10px rgba(255,182,193,0.15);
        transition: 0.3s;
    }

    .mes:hover {
        box-shadow:
            0 0 25px rgba(255,182,193,0.4),
            inset 0 0 15px rgba(255,182,193,0.25);
    }

    /* ✨ TEXTO */
    .mes_text {
        text-shadow:
            0 0 6px rgba(255,192,203,0.6),
            0 0 12px rgba(255,182,193,0.4);
        letter-spacing: 0.2px;
    }

    /* 💄 AVATAR */
    .mes .avatar img {
        border-radius: 50%;
        box-shadow:
            0 0 12px rgba(255,182,193,0.6),
            0 0 25px rgba(255,182,193,0.3);
        filter: brightness(1.1) saturate(1.1);
    }

    /* 🩰 INPUT */
    #send_textarea {
        border-radius: 25px !important;
        background: rgba(255,255,255,0.03);
        box-shadow:
            0 0 12px rgba(255,182,193,0.3),
            inset 0 0 10px rgba(255,182,193,0.15);
    }

    /* 🎀 BOTÃO SEND */
    #send_but {
        filter: drop-shadow(0 0 6px rgba(255,182,193,0.6));
    }

    /* ✨ HEADER LEVE */
    #top-bar, header {
        backdrop-filter: blur(10px);
        box-shadow: 0 0 15px rgba(255,182,193,0.2);
    }

    `;

    document.head.appendChild(style);

    // =========================
    // ✨ SPARKLES HEAVY
    // =========================
    function sparkle() {

        const s = document.createElement("div");

        s.style.position = "fixed";
        s.style.width = Math.random() * 4 + 2 + "px";
        s.style.height = s.style.width;
        s.style.background = "radial-gradient(circle, #ffc0cb, transparent)";
        s.style.borderRadius = "50%";
        s.style.left = Math.random() * window.innerWidth + "px";
        s.style.top = window.innerHeight + "px";
        s.style.opacity = "0.8";
        s.style.pointerEvents = "none";
        s.style.zIndex = "9998";

        document.body.appendChild(s);

        let y = window.innerHeight;

        const speed = Math.random() * 1.5 + 0.5;

        const i = setInterval(() => {
            y -= speed;
            s.style.top = y + "px";
            s.style.opacity -= 0.01;

            if (y < -10 || s.style.opacity <= 0) {
                clearInterval(i);
                s.remove();
            }
        }, 16);
    }

    setInterval(sparkle, 400);

}, 500);
