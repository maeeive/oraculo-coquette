alert("ORACULO: index.js carregou");

console.log("ORACULO: iniciando script");

// força execução depois que tudo carregou
setTimeout(() => {
    console.log("ORACULO: tentando inserir botão");

    // evita duplicação
    if (document.getElementById("oraculo-container")) return;

    const container = document.createElement("div");
    container.id = "oraculo-container";

    container.style.position = "fixed";
    container.style.right = "20px";
    container.style.bottom = "120px";
    container.style.zIndex = "999999";

    container.innerHTML = `
        <div id="oraculo-btn" style="
            width:50px;
            height:50px;
            background:pink;
            border-radius:50%;
            display:flex;
            align-items:center;
            justify-content:center;
            cursor:pointer;
            font-size:20px;
        ">
            🎀
        </div>

        <div id="oraculo-pop" style="
            display:none;
            position:absolute;
            bottom:60px;
            right:0;
            background:#111;
            color:white;
            padding:10px;
            border-radius:10px;
            width:200px;
        ">
            <div id="carta-exibida">
                clique abaixo...
            </div>

            <button id="btn-sortear">
                Revelar
            </button>
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

    console.log("ORACULO: botão inserido com sucesso");
}, 3000);
