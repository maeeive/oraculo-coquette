alert("Floating Coquette Header 🎀");

setTimeout(() => {

    if (document.getElementById("coquette-header")) return;

    // =========================
    // 🎀 FONTES
    // =========================
    const font1 = document.createElement("link");
    font1.href = "https://fonts.googleapis.com/css2?family=Ballet:opsz@16..72&display=swap";
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

    // pega nome do personagem (fallback incluso)
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
        top: 120px; /* abaixo do top bar */
        left: 50%;
        transform: translateX(-50%);
        z-index: 9999;
        pointer-events: none; /* não atrapalha clique no chat */
        text-align: center;
    }

    #coquette-title {
        font-family: 'Ballet', cursive;
        font-size: 34px;
        color: #FFB2C4;
        text-shadow:
            0 0 6px rgba(212, 76, 140, 0.8),
            0 0 6px rgba(212, 76, 140, 0.8);
    }

    #coquette-sub {
        font-family: 'Great Vibes', cursive;
        font-size: 19px;
        color: #FFB2C4;
        opacity: 0.9;
        letter-spacing: 2px;
        text-shadow: 0 0 6px rgba(212, 76, 140, 0.8),
        0 0 6px rgba(212, 76, 140, 0.8);
        margin-top: -5px;
    }
    `;

    document.head.appendChild(style);

}, 500);
