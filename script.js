
function atualizarConteudo() {
    var screenWidth = window.innerWidth;
    var imageElement = document.getElementById("productImage");

    if (screenWidth <= 375) { 
        imageElement.src = "img/image-product-mobile.jpg";
        document.querySelector('.text21').textContent = '';
        document.querySelector('.text22').textContent = 'Gabrielle Essence';
        document.querySelector('.text2Baixo').textContent = 'Eau De Parfum';

        document.querySelector('.text31').textContent = 'A floral, solar and voluptous';
        document.querySelector('.text32').textContent = 'interpretation composed by Oliver';
        document.querySelector('.text33').textContent = 'Polger, Perfumer-Creator for the House of';
        document.querySelector('.text34').textContent = 'CHANEL.';

        
        document.getElementById("meuBotao").addEventListener("mouseover", function() {
            this.style.backgroundColor = 'hsl(158, 36%, 27%)';
        });

        
        document.getElementById("meuBotao").addEventListener("mouseout", function() {
            this.style.backgroundColor = '';
        });
    } else { 
        imageElement.src = "img/image-product-desktop.jpg";
        document.querySelector('.text21').textContent = 'Gabrielle';
        document.querySelector('.text22').textContent = 'Essence Eau';
        document.querySelector('.text2Baixo').textContent = 'De Parfum';       

        document.querySelector('.text31').textContent = 'A floral, solar and voluptous';
        document.querySelector('.text32').textContent = 'interpretation composed by';
        document.querySelector('.text33').textContent = 'Oliver Polger, Perfumer-Creator';
        document.querySelector('.text34').textContent = 'for the House of CHANEL.';

        
        document.querySelector('.botao').addEventListener("mouseover", function() {
            this.style.backgroundColor = 'hsl(158, 36%, 27%)';
        });

        
        document.querySelector('.botao').addEventListener("mouseout", function() {
            this.style.backgroundColor = 'hsl(158, 36%, 37%)'; 
        });

        
    }
}


window.addEventListener('load', atualizarConteudo);
window.addEventListener('resize', atualizarConteudo);
