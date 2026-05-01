alert("ORACULO: carregou");

setTimeout(() => {

    if (document.getElementById("oraculo-container")) return;

    const container = document.createElement("div");
    container.id = "oraculo-container";

    container.style.position = "fixed";
    container.style.left = "20px";
    container.style.top = "50%";
    container.style.transform = "translateY(-50%)";
    container.style.zIndex = "9999999";

    container.innerHTML = `
        <div id="oraculo-btn" style="
            width:55px;
            height:55px;
            background:#ffb6c1;
            border-radius:50%;
            display:flex;
            align-items:center;
            justify-content:center;
            cursor:grab;
            font-size:22px;
            box-shadow:0 0 15px rgba(0,0,0,0.5);
            user-select:none;
        ">
            🎀
        </div>

        <!-- POPUP AGORA ABRE PRA ESQUERDA -->
        <div id="oraculo-pop" style="
            display:none;
            position:absolute;
            right:65px;
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

    const btn = document.getElementById("oraculo-btn");
    const pop = document.getElementById("oraculo-pop");

    // clique abre popup
    btn.addEventListener("click", () => {
        if (btn.dragging) return;
        pop.style.display = pop.style.display === "none" ? "block" : "none";
    });

    document.getElementById("close-pop").onclick = () => {
        pop.style.display = "none";
    };

    document.getElementById("btn-sortear").onclick = () => {
        document.getElementById("carta-exibida").innerText =
            "✨ destino revelado ✨";
    };

    // =========================
    // DRAG (MOBILE + PC)
    // =========================
    let isDragging = false;
    let offsetX = 0;
    let offsetY = 0;

    function startDrag(x, y) {
        isDragging = true;
        btn.dragging = false;

        offsetX = x - container.offsetLeft;
        offsetY = y - container.offsetTop;
    }

    function moveDrag(x, y) {
        if (!isDragging) return;

        btn.dragging = true;

        container.style.left = (x - offsetX) + "px";
        container.style.top = (y - offsetY) + "px";
        container.style.transform = "none";
    }

    function endDrag() {
        isDragging = false;
        setTimeout(() => btn.dragging = false, 50);
    }

    // mouse
    btn.addEventListener("mousedown", (e) => {
        startDrag(e.clientX, e.clientY);
    });

    document.addEventListener("mousemove", (e) => {
        moveDrag(e.clientX, e.clientY);
    });

    document.addEventListener("mouseup", endDrag);

    // touch
    btn.addEventListener("touchstart", (e) => {
        const t = e.touches[0];
        startDrag(t.clientX, t.clientY);
    });

    document.addEventListener("touchmove", (e) => {
        const t = e.touches[0];
        moveDrag(t.clientX, t.clientY);
    });

    document.addEventListener("touchend", endDrag);

}, 1000);
