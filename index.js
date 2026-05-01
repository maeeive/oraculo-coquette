console.log("ORACULO: script carregado");

// Espera DOM real
function waitForDOM() {
    return new Promise(resolve => {
        if (document.readyState === "complete") return resolve();
        window.addEventListener("load", resolve);
    });
}

function getUserName() {
    return window.name1 || "Gabi";
}

function tirarCarta() {
    const cartas = [
        { n: "O Louco", c: "Hora de se jogar, {{user}}!" },
        { n: "O Sol", c: "Tudo vai dar certo ☀️" }
    ];

    const sorteio = cartas[Math.floor(Math.random() * cartas.length)];
    const texto = sorteio.c.replace("{{user}}", getUserName());

    const el = document.getElementById("carta-exibida");
    if (!el) return;

    el.innerHTML = `<b>${sorteio.n}</b><br>${texto}`;
}

(async () => {
    await waitForDOM();

    console.log("ORACULO: DOM pronto");

    if (document.getElementById("oraculo-container")) return;

    const container = document.createElement("div");
    container.id = "oraculo-container";
    container.style.position = "fixed";
    container.style.right = "20px";
    container.style.bottom = "120px";
    container.style.zIndex = "9999";

    container.innerHTML = `
        <div id="oraculo-btn" style="
            width:50px;height:50px;background:#ffb6c1;
            border-radius:50%;display:flex;align-items:center;
            justify-content:center;cursor:pointer;
        ">🎀</div>

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
            <div id="carta-exibida">clique abaixo...</div>
            <button id="btn-sortear">Sortear</button>
        </div>
    `;

    document.body.appendChild(container);

    // Eventos sem jQuery
    document.getElementById("oraculo-btn").onclick = () => {
        const pop = document.getElementById("oraculo-pop");
        pop.style.display = pop.style.display === "none" ? "block" : "none";
    };

    document.getElementById("btn-sortear").onclick = tirarCarta;

    console.log("ORACULO: UI inserida");
})();
