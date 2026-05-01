alert("Dreamy Aesthetic carregado ✨");

setTimeout(() => {

    // evita duplicar
    if (document.getElementById("dreamy-curtain")) return;

    // =========================
    // 🎀 CORTINA ROSA (INTRO)
    // =========================
    const curtain = document.createElement("div");
    curtain.id = "dreamy-curtain";

    curtain.style.position = "fixed";
    curtain.style.top = "0";
    curtain.style.left = "0";
    curtain.style.width = "100%";
    curtain.style.height = "100%";
    curtain.style.background = "linear-gradient(180deg, #ffb6c1, #ffd6e0)";
    curtain.style.zIndex = "99999999";
    curtain.style.transition = "transform 1.2s ease";
    curtain.style.transform = "translateY(0%)";

    document.body.appendChild(curtain);

    // animação de abrir
    setTimeout(() => {
        curtain.style.transform = "translateY(-100%)";
    }, 300);

    setTimeout(() => {
        curtain.remove();
    }, 1500);

    // =========================
    // 💗 BORDA ROSA GLOW
    // =========================
    const border = document.createElement("div");
    border.id = "dreamy-border";

    border.style.position = "fixed";
    border.style.top = "0";
    border.style.left = "0";
    border.style.width = "100%";
    border.style.height = "100%";
    border.style.pointerEvents = "none";
    border.style.zIndex = "999999";

    border.style.boxShadow = `
        inset 0 0 60px rgba(255,182,193,0.4),
        inset 0 0 120px rgba(255,182,193,0.2)
    `;

    document.body.appendChild(border);

    // =========================
    // ✨ GLOW NAS MENSAGENS
    // =========================
    const style = document.createElement("style");

    style.innerHTML = `
        .mes, .message {
            transition: all 0.3s ease;
        }

        .mes:hover, .message:hover {
            box-shadow: 0 0 15px rgba(255,182,193,0.5);
            border-radius: 10px;
        }

        .mes p, .message p {
            text-shadow: 0 0 6px rgba(255,192,203,0.5);
        }
    `;

    document.head.appendChild(style);

    // =========================
    // 🩰 PARTICULAS LEVES (sparkle)
    // =========================
    function createSparkle() {
        const sparkle = document.createElement("div");

        sparkle.style.position = "fixed";
        sparkle.style.width = "6px";
        sparkle.style.height = "6px";
        sparkle.style.background = "pink";
        sparkle.style.borderRadius = "50%";
        sparkle.style.left = Math.random() * window.innerWidth + "px";
        sparkle.style.top = window.innerHeight + "px";
        sparkle.style.opacity = "0.6";
        sparkle.style.zIndex = "999998";
        sparkle.style.pointerEvents = "none";

        document.body.appendChild(sparkle);

        let y = window.innerHeight;

        const interval = setInterval(() => {
            y -= 2;
            sparkle.style.top = y + "px";
            sparkle.style.opacity -= 0.01;

            if (y < -10 || sparkle.style.opacity <= 0) {
                clearInterval(interval);
                sparkle.remove();
            }
        }, 16);
    }

    // cria partículas de tempos em tempos
    setInterval(createSparkle, 800);

}, 500);
