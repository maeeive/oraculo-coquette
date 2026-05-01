alert("Coquette Mobile 💗");

setTimeout(() => {

    const style = document.createElement("style");

    style.innerHTML = `
    
    body {
        background: radial-gradient(circle at center, #1a1a1a, #000);
    }

    /* mensagens */
    .mes {
        border-radius: 16px !important;
        box-shadow: 0 0 15px rgba(255,182,193,0.25);
        margin-bottom: 10px;
    }

    /* texto */
    .mes_text {
        text-shadow: 0 0 6px rgba(255,192,203,0.5);
        font-family: "Playfair Display", serif;
    }

    /* glow leve */
    .mes:hover {
        box-shadow: 0 0 20px rgba(255,182,193,0.4);
    }

    /* input */
    #send_textarea {
        border-radius: 20px !important;
        box-shadow: 0 0 10px rgba(255,182,193,0.3);
    }

    `;

    document.head.appendChild(style);

    // sparkle leve (mobile-safe)
    setInterval(() => {
        const s = document.createElement("div");

        s.style.position = "fixed";
        s.style.width = "3px";
        s.style.height = "3px";
        s.style.background = "#ffc0cb";
        s.style.borderRadius = "50%";
        s.style.left = Math.random() * window.innerWidth + "px";
        s.style.top = window.innerHeight + "px";
        s.style.opacity = "0.6";
        s.style.pointerEvents = "none";
        s.style.zIndex = "9999";

        document.body.appendChild(s);

        let y = window.innerHeight;

        const i = setInterval(() => {
            y -= 1;
            s.style.top = y + "px";
            s.style.opacity -= 0.02;

            if (y < 0) {
                clearInterval(i);
                s.remove();
            }
        }, 16);
    }, 1200);

}, 500);
