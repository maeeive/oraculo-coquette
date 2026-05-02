setTimeout(() => {

    if (document.getElementById("coquette-header")) return;

    // =========================
    // 🎀 FONTES
    // =========================
    const font1 = document.createElement("link");
    font1.href = "https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@700&display=swap";
    font1.rel = "stylesheet";

    const font2 = document.createElement("link");
    font2.href = "https://fonts.googleapis.com/css2?family=Pixelify+Sans:wght@400..700&display=swap";
    font2.rel = "stylesheet";

    document.head.appendChild(font1);
    document.head.appendChild(font2);

    // =========================
    // 🎀 CONTAINER
    // =========================
    const header = document.createElement("div");
    header.id = "coquette-header";

    const charName =
        document.querySelector("#char_name")?.innerText ||
        document.querySelector(".character_name")?.innerText ||
        "my love";

    header.innerHTML = `
        <div id="coquette-title">🎀 ${charName} 🎀</div>
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
        top: 120px; 
        left: 50%;
        transform: translateX(-50%);
        z-index: 9999;
        pointer-events: none; 
        text-align: center;
        width: 100%;
    }

    #coquette-title {
        font-family: 'Josefin Sans', sans-serif;
        font-size: 42px; /* Fonte maior */
        color: #FFB2C4;
        text-transform: uppercase;
        letter-spacing: 2px;
        text-shadow:
            2px 2px 0px rgba(212, 76, 140, 1), /* Sombra sólida mais escura */
            0 0 15px rgba(212, 76, 140, 0.8),
            0 0 25px rgba(212, 76, 140, 0.6);
    }

    #coquette-sub {
        font-family: 'Pixelify Sans', cursive;
        font-size: 22px; /* Fonte maior */
        color: #FFB2C4;
        opacity: 0.9;
        letter-spacing: 3px;
        text-shadow: 
            1px 1px 0px rgba(212, 76, 140, 1),
            0 0 10px rgba(212, 76, 140, 0.8);
        margin-top: 5px;
    }
    `;

    document.head.appendChild(style);

}, 500);
