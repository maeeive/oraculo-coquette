alert("ORACULO: index.js carregou");

console.log("ORACULO: iniciando script");

setTimeout(() => {
    console.log("ORACULO: inserindo UI");

    // evita duplicar
    if (document.getElementById("oraculo-container")) return;

    const container = document.createElement("div");
    container.id = "oraculo-container";

    container.style.position = "fixed";
    container.style.right = "20px";
    container.style.bottom = "120px";
    container.style.zIndex = "999999";
    container.style.background = "transparent";

    container.innerHTML = `
        <div id="oraculo-btn" style="
            width:50px;
            height:50px;
            background:rgba(255,182,193,0.9);
            backdrop-filter:blur(10px);
            border-radius:50%;
            display:flex;
            align-items:center;
            justify-content:center;
            cursor:pointer;
            font-size:20px;
            box-shadow:0 4px 15px rgba(0,0,0,0.3);
        ">
            🎀
        </div>

        <div id="oraculo-pop" style="
            display:none;
            position:absolute;
            bottom:60px;
            right:0;
            width:220px;
            background:rgba(15,15,15,0.95);
            border:1px solid #ffb6c1;
            border-radius:12px;
            padding:12px;
            color:white;
            font-size:13px;
            box-shadow:0 10px 30px rgba(0,0,0,0.5);
        ">
            <div style="
                display:flex;
                justify-content:space-between;
                margin-bottom:8px;
                border-bottom:1px solid #333;
                padding-bottom:4px;
                font-size:11px;
            ">
                <span>♰ ORÁCULO COQUETTE ♰</span>
                <span id="close-pop" style="cursor:pointer;">✕</span>
            </div>

            <div id="carta-exibida" style="
                text-align:center;
                margin:12px 0;
                min-height:40px;
            ">
                toque abaixo para ver seu destino...
            </div>

            <button id="btn-sortear" style="
                width:100%;
                background:transparent;
                border:1px solid #ffb6c1;
                color:#ffb6c1;
                padding:6px;
                border-radius:20px;
                cursor:pointer;
            ">
                Revelar Destino
            </button>
        </div>
    `;

    document.body.appendChild(container);

    // abrir/fechar popup
    document.getElementById("oraculo-btn").onclick = () => {
        const pop = document.getElementById("oraculo-pop");
        pop.style.display = pop.style.display === "none" ? "block" : "none";
    };

    document.getElementById("close-pop").onclick = () => {
        document.getElementById("oraculo-pop").style.display = "none";
    };

    // cartas simples (pode expandir depois)
    const cartas = [
        "Hora de se jogar ✨",
        "Algo inesperado vem aí 👀",
        "Confie na sua intuição 💭",
        "Tem romance no ar 💋",
        "Mudanças estão chegando 🔮"
    ];

    document.getElementById("btn-sortear").onclick = () => {
        const sorteio = cartas[Math.floor(Math.random() * cartas.length)];
        document.getElementById("carta-exibida").innerText = sorteio;
    };

    console.log("ORACULO: funcionando 🎀");

}, 3000);
