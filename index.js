alert("Dreamy Coquette v2 carregado 🎀");

setTimeout(() => {

    if (document.getElementById("dreamy-ui")) return;

    // =========================
    // 💾 salvar config
    // =========================
    let intensity = localStorage.getItem("dreamy-intensity") || 40;
    let enabled = localStorage.getItem("dreamy-enabled") !== "false";

    // =========================
    // 🎀 CORTINA
    // =========================
    const curtain = document.createElement("div");
    curtain.style.position = "fixed";
    curtain.style.top = "0";
    curtain.style.left = "0";
    curtain.style.width = "100%";
    curtain.style.height = "100%";
    curtain.style.background = "linear-gradient(180deg, #ffb6c1, #ffd6e0)";
    curtain.style.zIndex = "99999999";
    curtain.style.transition = "transform 1.2s ease";

    document.body.appendChild(curtain);

    setTimeout(() => curtain.style.transform = "translateY(-100%)", 200);
    setTimeout(() => curtain.remove(), 1500);

    // =========================
    // 💗 BORDA
    // =========================
    const border = document.createElement("div");
    border.style.position = "fixed";
    border.style.inset = "0";
    border.style.pointerEvents = "none";
    border.style.zIndex = "999998";

    document.body.appendChild(border);

    // =========================
    // ✨ STYLE GLOBAL
    // =========================
    const style = document.createElement("style");
    document.head.appendChild(style);

    function applyEffects() {

        if (!enabled) {
            style.innerHTML = "";
            border.style.boxShadow = "none";
            return;
        }

        const glow = intensity / 2;

        // borda glow
        border.style.boxShadow = `
            inset 0 0 ${40 + glow}px rgba(255,182,193,0.4),
            inset 0 0 ${80 + glow}px rgba(255,182,193,0.2)
        `;

        // estilo coquette
        style.innerHTML = `
            /* mensagens */
            .mes, .message {
                border-radius: 14px !important;
                transition: all 0.3s ease;
                backdrop-filter: blur(${intensity/40}px);
            }

            .mes:hover, .message:hover {
                box-shadow: 0 0 ${glow}px rgba(255,182,193,0.6);
                transform: scale(1.01);
            }

            /* texto */
            .mes p, .message p {
                text-shadow: 0 0 ${glow/2}px rgba(255,192,203,0.6);
            }

            /* input */
            textarea {
                border-radius: 12px !important;
                box-shadow: 0 0 ${glow/3}px rgba(255,182,193,0.4);
            }

            /* botões */
            button {
                border-radius: 10px !important;
                transition: all 0.2s ease;
            }

            button:hover {
                box-shadow: 0 0 ${glow/2}px rgba(255,182,193,0.6);
            }
        `;
    }

    // =========================
    // 🩰 PARTÍCULAS
    // =========================
    function sparkle() {
        if (!enabled) return;

        const s = document.createElement("div");

        s.style.position = "fixed";
        s.style.width = "5px";
        s.style.height = "5px";
        s.style.background = "#ffc0cb";
        s.style.borderRadius = "50%";
        s.style.left = Math.random() * window.innerWidth + "px";
        s.style.top = window.innerHeight + "px";
        s.style.opacity = "0.7";
        s.style.pointerEvents = "none";
        s.style.zIndex = "999997";

        document.body.appendChild(s);

        let y = window.innerHeight;

        const i = setInterval(() => {
            y -= 2;
            s.style.top = y + "px";
            s.style.opacity -= 0.01;

            if (y < -10 || s.style.opacity <= 0) {
                clearInterval(i);
                s.remove();
            }
        }, 16);
    }

    setInterval(sparkle, 700);

    // =========================
    // 🎛️ UI
    // =========================
    const ui = document.createElement("div");
    ui.id = "dreamy-ui";

    ui.style.position = "fixed";
    ui.style.left = "20px";
    ui.style.bottom = "180px";
    ui.style.zIndex = "9999999";
    ui.style.background = "rgba(20,20,20,0.9)";
    ui.style.padding = "12px";
    ui.style.borderRadius = "14px";
    ui.style.color = "white";
    ui.style.width = "200px";
    ui.style.fontSize = "12px";

    ui.innerHTML = `
        <div style="margin-bottom:8px;">🎀 Coquette Mode</div>

        <label style="font-size:10px;">intensidade</label>
        <input id="dreamy-slider" type="range" min="0" max="100" value="${intensity}" style="width:100%;">

        <label style="font-size:10px;">ativar</label>
        <input id="dreamy-toggle" type="checkbox" ${enabled ? "checked" : ""}>
    `;

    document.body.appendChild(ui);

    // eventos
    document.getElementById("dreamy-slider").addEventListener("input", (e) => {
        intensity = e.target.value;
        localStorage.setItem("dreamy-intensity", intensity);
        applyEffects();
    });

    document.getElementById("dreamy-toggle").addEventListener("change", (e) => {
        enabled = e.target.checked;
        localStorage.setItem("dreamy-enabled", enabled);
        applyEffects();
    });

    applyEffects();

}, 500);
