console.log("EXTENSÃO INICIADA");

window.addEventListener("load", () => {
    console.log("PÁGINA CARREGADA");

    const btn = document.createElement("div");
    btn.innerText = "🎀";
    
    btn.style.position = "fixed";
    btn.style.right = "20px";
    btn.style.bottom = "120px";
    btn.style.width = "50px";
    btn.style.height = "50px";
    btn.style.background = "pink";
    btn.style.borderRadius = "50%";
    btn.style.display = "flex";
    btn.style.alignItems = "center";
    btn.style.justifyContent = "center";
    btn.style.cursor = "pointer";
    btn.style.zIndex = "999999";

    btn.onclick = () => alert("FUNCIONOU");

    document.body.appendChild(btn);

    console.log("BOTÃO INSERIDO");
});
