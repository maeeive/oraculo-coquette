alert("Coquette FIX carregado 🎀");

setTimeout(() => {

    function injectStyle() {

        let old = document.getElementById("coquette-style");
        if (old) old.remove();

        const style = document.createElement("style");
        style.id = "coquette-style";

        style.innerHTML = `
            .mes_block {
                box-shadow: inset 0 0 40px rgba(255,182,193,0.25) !important;
                border-radius: 15px !important;
                transition: all 0.3s ease;
            }

            .mes_block:hover {
                filter: brightness(1.05);
            }

            .mes_text {
                text-shadow: 0 0 8px rgba(255,192,203,0.6) !important;
            }

            .mes .avatar img {
                box-shadow: 0 0 20px rgba(255,182,193,0.7) !important;
                filter: brightness(1.1);
            }

            #send_textarea {
                box-shadow: 0 0 12px rgba(255,182,193,0.4) !important;
            }
        `;

        document.head.appendChild(style);
    }

    // roda uma vez
    injectStyle();

    // =========================
    // OBSERVA O CHAT (ESSENCIAL)
    // =========================
    const observer = new MutationObserver(() => {
        injectStyle();
    });

    observer.observe(document.body, {
        childList: true,
        subtree: true
    });

    // =========================
    // sparkle (mantido)
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
