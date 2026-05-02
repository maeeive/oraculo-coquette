setTimeout(() => {

    if (document.getElementById("coquette-header")) return;

    // =========================
    // 🎀 FONTES
    // =========================
    const font1 = document.createElement("link");
    font1.href = "https://fonts.googleapis.com/css2?family=Pixelify+Sans:wght@400..700&display=swap";
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

    header.innerHTML = `
        <div id="coquette-title">🎀 My Love 🎀</div>
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
        top: 70px; /* Bem mais alto conforme pedido */
        left: 50%;
        transform: translateX(-50%);
        z-index: 9999;
        pointer-events: none;
        text-align: center;
        
        /* 🎀 FUNDO PEROLADO ULTRA COMPACTO */
        background: linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 245, 247, 0.18) 50%, rgba(255, 255, 255, 0.1) 100%);
        backdrop-filter: blur(2px);
        -webkit-backdrop-filter: blur(2px);
        padding: 6px 18px; /* Reduzido ainda mais */
        border-radius: 30px; 
        border: 1px solid rgba(255, 255, 255, 0.2);
    }

    #coquette-title {
        font-family: 'Pixelify Sans', sans-serif;
        font-size: 20px; /* Reduzido de 26px para 20px */
        color: #FFB2C4;
        text-shadow: 0 0 4px rgba(212, 76, 140, 0.8);
    }

    #coquette-sub {
        font-family: 'Great Vibes', cursive;
        font-size: 12px; /* Reduzido de 15px para 12px */
        color: #FFB2C4;
        opacity: 0.8;
        letter-spacing: 1px;
        text-shadow: 0 0 3px rgba(212, 76, 140, 0.6);
        margin-top: -3px;
    }
    `;

    document.head.appendChild(style);

}, 500);

/* 1. CONTAINER PRINCIPAL (Garanta que ele tenha position: relative) */
body {
    position: relative !important;
    overflow-x: hidden !important; /* Evita rolagem horizontal indesejada */
}

/* 2. A Borda Grossa com Frufrus (Usando o ::before do body) */
body::before {
    content: "";
    position: fixed; /* Fixa na tela para não subir com o chat */
    top: 10px; /* Margem do topo */
    left: 10px; /* Margem da esquerda */
    right: 10px; /* Margem da direita */
    bottom: 10px; /* Margem do fundo */
    z-index: 9998; /* Fica abaixo do cabeçalho JS, mas acima de todo o resto */
    pointer-events: none; /* Garante que você consiga clicar no chat através dela */
    
    /* 🎀 Borda Rosa Bebê Grossa com Textura 'Frufru' (Usando SVG/Gradiente para o efeito) */
    border: 15px solid transparent; /* Espessura da borda */
    border-image-source: linear-gradient(to right, #ffb6c1 0%, rgba(255,182,193,0.3) 10%, #ffb6c1 20%, rgba(255,182,193,0.3) 30%, #ffb6c1 40%, rgba(255,182,193,0.3) 50%, #ffb6c1 60%, rgba(255,182,193,0.3) 70%, #ffb6c1 80%, rgba(255,182,193,0.3) 90%, #ffb6c1 100%);
    border-image-slice: 15; /* Corta o gradiente para criar o efeito ondulado */
    border-image-repeat: repeat; /* Repete o efeito */
    border-radius: 40px !important; /* Bordas arredondadas suaves */

    /* 💄 Sombreamento Rosa Intenso */
    box-shadow: 0 0 25px rgba(212, 76, 140, 0.7), inset 0 0 15px rgba(212, 76, 140, 0.5) !important;
}

/* 3. Os Lacinhos de Decoração (Usando o ::after do body) */
body::after {
    content: "🎀"; /* Lacinho da esquerda inferior */
    position: fixed;
    bottom: 30px; /* Alinhado com a borda de frufru */
    left: 20px; /* Alinhado com a borda de frufru */
    font-size: 35px; /* Tamanho do lacinho */
    z-index: 10000; /* Fica por cima de tudo */
    pointer-events: none;
    text-shadow: 0 0 10px rgba(212, 76, 140, 0.9) !important;
}

/* Adicionando o lacinho da direita inferior */
body::after:has(+ * + body::after) {
    display: none; /* Evita duplicar se houver recarregamento */
}

/* Duplicando o lacinho para a direita inferior */
#chat {
    position: relative;
}

#chat::before {
    content: "🎀";
    position: fixed;
    bottom: 30px;
    right: 20px;
    font-size: 35px;
    z-index: 10000;
    pointer-events: none;
    text-shadow: 0 0 10px rgba(212, 76, 140, 0.9) !important;
        }
