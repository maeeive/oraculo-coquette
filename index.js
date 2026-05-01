import { substituteParams } from '../../../../scripts/variables.js';

jQuery(async () => {
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
                    <div id="carta-exibida" style="margin: 10px 0; min-height: 50px; border: 1px dashed #b3b3b3; padding: 5px;"></div>
                    <button id="tirar-carta" style="font-family: 'Ballet'; width: 100%; background: rgba(255,255,255,0.1); border: 1px solid #b3b3b3; color: white; cursor: pointer;">Tirar Carta</button>
                </div>
            </div>
        </div>
    `;

    $('body').append(oraculoHtml);

    $('#oraculo-floating-btn').on('click', () => {
        $('#oraculo-popup').toggleClass('hidden');
    });

    $('#close-oraculo').on('click', () => {
        $('#oraculo-popup').addClass('hidden');
    });

    $('#tirar-carta').on('click', () => {
        // As mensagens agora usam a tag {{user}}
        const mensagens = [
            "O destino sorri para você, {{user}}.", 
            "Cuidado com o que não foi dito, {{user}}...", 
            "Uma surpresa romântica se aproxima de {{user}}.", 
            "O silêncio esconde uma verdade para {{user}}."
        ];
        
        const sorteio = mensagens[Math.floor(Math.random() * mensagens.length)];
        
        // Aqui a mágica acontece: o ST troca {{user}} pelo seu nome real (Lexi, Gabi, etc)
        const mensagemFinal = substituteParams(sorteio);
        
        $('#carta-exibida').text(mensagemFinal);
    });

    console.log("Oráculo Coquette carregado! 🎀");
});

