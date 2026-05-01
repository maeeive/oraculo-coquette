alert("Dreamy Injector carregou ✨");

setTimeout(() => {

    if (document.getElementById("dreamy-ui")) return;

    // =========================
    // CRIA OVERLAY
    // =========================
    const overlay = document.createElement("div");
    overlay.id = "dreamy-overlay";

    overlay.style.position = "fixed";
    overlay.style.top = "0";
    overlay.style.left = "0";
    overlay.style.width = "100%";
    overlay.style.height = "100%";
    overlay.style.pointerEvents = "none";
    overlay.style.zIndex = "9998";
    overlay.style.background = "radial-gradient(circle, rgba(255,182,193,0) 60%, rgba(255,182,193,0.25) 100%)";

    document.body.appendChild(overlay);

    // =========================
    // UI (slider)
    // =========================
    const ui = document.createElement("div");
    ui.id = "dreamy-ui";

    ui.style.position = "fixed";
    ui.style.left = "20px";
    ui.style.bottom = "140px";
    ui.style.zIndex = "9999999";
    ui.style.background = "rgba(20,20,20,0.9)";
    ui.style.padding = "12px";
    ui.style.borderRadius = "12px";
    ui.style.color = "white";
    ui.style.width = "200px";
    ui.style.fontSize = "12px";

    ui.innerHTML = `
        <div style="margin-bottom:8px;">🩰 Dreamy Mode</div>

        <input id="dreamy-slider" type="range" min="0" max="100" value="30" style="width:100%;">

        <div style="margin-top:6px;font-size:10px;">
            intensidade de fofura ✨
        </div>
    `;

    document.body.appendChild(ui);

    // =========================
    // GLOW NAS MENSAGENS
    // =========================
    const styleTag = document.createElement("style");
    styleTag.id = "dreamy-style";

    document.head.appendChild(styleTag);

    function applyEffects(intensity) {

        // overlay intensidade
        overlay.style.background = `
            radial-gradient(circle, 
            rgba(255,182,193,0) 60%, 
            rgba(255,182,193,${intensity / 300}) 100%)
        `;

        // glow nas mensagens
        styleTag.innerHTML = `
            .mes, .message {
                text-shadow: 0 0 ${intensity / 5}px rgba(255,192,203,0.7);
            }
        `;
    }

    // slider
    const slider = document.getElementById("dreamy-slider");

    slider.addEventListener("input", () => {
        applyEffects(slider.value);
    });

    // inicial
    applyEffects(30);

}, 1000);
