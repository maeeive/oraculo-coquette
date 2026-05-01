alert("ORACULO: index.js carregou");

console.log("ORACULO: iniciando script");

setTimeout(() => {
    console.log("ORACULO: tentando inserir botão");

    // evita duplicação
    if (document.getElementById("oraculo-container")) return;

    const container = document.createElement("div");
    container.id = "oraculo-container";

    container.style.position = "fixed";
    container.style.top = "50%";
    container.style.left = "50%";
    container.style.transform = "translate(-50%, -50%)";
    container.style.zIndex = "9999999";
    container.style.background = "red";
    container.style.padding = "20px";

    container.innerHTML = `
        <div id="oraculo-btn" style="
            width:80px;
            height:80px;
            background:yellow;
            border-radius:50%;
            display:flex;
            align-items:center;
            justify-content:center;
            cursor:pointer;
            font-size:30px;
        ">
            🎀
        </div>

        <div id="oraculo-pop" style="
            display:none;
            margin-top:10px;
            background:#111;
            color:white;
            padding:10px;
            border-radius:10px;
        ">
            <div id="carta-exibida">clique abaixo...</div>
            <button id="btn-sortear">Revelar</button>
        </div>
    `;

    document.body.appendChild(container);

    // eventos
    document.getElementById("oraculo-btn").onclick = () => {
        const pop = document.getElementById("oraculo-pop");
        pop.style.display = pop.style.display === "none" ? "block" : "none";
    };

    document.getElementById("btn-sortear").onclick = () => {
        document.getElementById("carta-exibida").innerHTML =
            "✨ destino revelado ✨";
    };

    console.log("ORACULO: botão inserido");
}, 3000);
