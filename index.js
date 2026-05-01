alert("ORACULO: index.js carregou");

setTimeout(() => {

    if (document.getElementById("oraculo-container")) return;

    const container = document.createElement("div");
    container.id = "oraculo-container";

    container.style.position = "fixed";
    container.style.right = "10px";
    container.style.top = "60%"; // <-- MUDANÇA IMPORTANTE
    container.style.transform = "translateY(-50%)";
    container.style.zIndex = "9999999"; // <-- mais alto
    container.style.pointerEvents = "auto";

    container.innerHTML = `
        <div id="oraculo-btn" style="
            width:55px;
            height:55px;
            background:#ffb6c1;
            border-radius:50%;
            display:flex;
            align-items:center;
            justify-content:center;
            cursor:pointer;
            font-size:22px;
            box-shadow:0 0 15px rgba(0,0,0,0.5);
        ">
            🎀
        </div>

        <div id="oraculo-pop" style="
            display:none;
            position:absolute;
            right:60px;
            top:50%;
            transform:translateY(-50%);
            width:220px;
            background:#111;
            color:white;
            padding:12px;
            border-radius:12px;
            border:1px solid #ffb6c1;
        ">
            <div style="display:flex;justify-content:space-between;margin-bottom:8px;">
                <span>Oráculo</span>
                <span id="close-pop" style="cursor:pointer;">✕</span>
            </div>

            <div id="carta-exibida" style="margin-bottom:10px;">
                clique abaixo...
            </div>

            <button id="btn-sortear">Revelar</button>
        </div>
    `;

    document.body.appendChild(container);

    // eventos
    document.getElementById("oraculo-btn").onclick = () => {
        const pop = document.getElementById("oraculo-pop");
        pop.style.display = pop.style.display === "none" ? "block" : "none";
    };

    document.getElementById("close-pop").onclick = () => {
        document.getElementById("oraculo-pop").style.display = "none";
    };

    document.getElementById("btn-sortear").onclick = () => {
        document.getElementById("carta-exibida").innerText =
            "✨ destino revelado ✨";
    };

}, 2000);
