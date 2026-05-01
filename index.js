// O SillyTavern precisa que a extensão seja exportada assim para o carregador oficial ler
export { init };

function init() {
    console.log("Oráculo Coquette: Iniciando...");
    
    const oraculoHtml = `
        <div id="oraculo-container">
            <div id="oraculo-floating-btn" title="Abrir Oráculo">🎀</div>
            <div id="oraculo-popup" class="hidden">
                <div class="oraculo-header">
                    <span>♰ Oráculo Coquette ♰</span>
                    <button id="close-oraculo">✕</button>
                </div>
                <div id="oraculo-content">
                    <p style="font-family: 'Playfair Display'; font-size: 13px;">Toque na carta para ouvir o destino...</p>
                    <div id="carta-exibida" style="margin: 10px 0; min-height: 50px; border: 1px dashed #b3b3b3; padding: 5px; color: #ffb6c1;"></div>
                    <button id="tirar-carta" style="width: 100%; background: rgba(255,255,255,0.1); border: 1px solid #b3b3b3; color: white; cursor: pointer; padding: 5px;">Tirar Carta</button>
                </div>
            </div>
        </div>
    `;

    if ($('#oraculo-container').length === 0) {
        $('body').append(oraculoHtml);
    }

    $('#oraculo-floating-btn').on('click', () => $('#oraculo-popup').toggleClass('hidden'));
    $('#close-oraculo').on('click', () => $('#oraculo-popup').addClass('hidden'));

    $('#tirar-carta').on('click', function() {
        const mensagens = [
            "O destino sorri para você, {{user}}.", 
            "Cuidado com o que não foi dito...", 
            "Uma surpresa romântica se aproxima.", 
            "O silêncio esconde uma verdade."
        ];
        const sorteio = mensagens[Math.floor(Math.random() * mensagens.length)];
        
        // O SillyTavern tem uma função global chamada substituteParams
        // mas em extensões novas usamos o power do próprio parser do ST
        const finalMsg = sorteio.replace('{{user}}', window.SillyTavern.getContext().name1 || "Gabi");
        $('#carta-exibida').text(finalMsg);
    });
}
