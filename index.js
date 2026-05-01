alert("Coquette v3 💗");

setTimeout(() => {

    if (document.getElementById("coquette-style")) return;

    const style = document.createElement("style");
    style.id = "coquette-style";

    style.innerHTML = `

    /* 💗 glow geral nas mensagens */
    .mes_block {
        transition: all 0.3s ease;
    }

    .mes_block:hover {
        filter: brightness(1.05);
    }

    /* 🎀 camada aesthetic por cima */
    .mes_block::after {
        opacity: 0.7 !important;
        filter: drop-shadow(0 0 10px rgba(255,182,193,0.6));
    }

    /* ✨ texto com brilho suave */
    .mes_text {
        text-shadow: 0 0 6px rgba(255,192,203,0.4) !important;
    }

    /* 💗 borda glow nas mensagens */
    .mes_block::before {
        box-shadow: inset 0 0 30px rgba(255,182,193,0.25);
        border-radius: 15px;
    }

    /* 🩰 avatar mais dreamy */
    .mes .avatar img {
        filter: grayscale(0.3) brightness(1.1);
        box-shadow: 0 0 15px rgba(255,182,193,0.6);
    }

    /* ✨ input aesthetic */
    #send_textarea {
        box-shadow: 0 0 10px rgba(255,182,193,0.3);
    }

    /* 🎀 leve glow geral */
    body {
        animation: dreamyGlow 4s ease-in-out infinite alternate;
    }

    @keyframes dreamyGlow {
        from { filter: brightness(1); }
        to { filter: brightness(1.05); }
    }

    `;

    document.head.appendChild(style);

    // =========================
    // 🩰 partículas (mantidas)
    // =========================
    function sparkle() {
        const s = document.createElement("div");

        s.style.position = "fixed";
        s.style.width = "4px";
        s.style.height = "4px";
        s.style.background = "#ffc0cb";
        s.style.borderRadius = "50%";
        s.style.left = Math.random() * window.innerWidth + "px";
        s.style.top = window.innerHeight + "px";
        s.style.opacity = "0.7";
        s.style.pointerEvents = "none";
        s.style.zIndex = "999999";

        document.body.appendChild(s);

        let y = window.innerHeight;

        const i = setInterval(() => {
            y -= 1.5;
            s.style.top = y + "px";
            s.style.opacity -= 0.01;

            if (y < -10 || s.style.opacity <= 0) {
                clearInterval(i);
                s.remove();
            }
        }, 16);
    }

    setInterval(sparkle, 900);

}, 500);
