// Quando o botão com o id "alterarEstilo" for clicado, execute a função
document.getElementById("alterarEstilo").addEventListener("click", function () {
    // Pegue o elemento com o id "paragrafo"
    var paragrafo = document.getElementById("paragrafo");
    // Mude a cor do texto do parágrafo para vermelho
    paragrafo.style.color = "red";
    // Mude o tamanho da fonte do parágrafo para 2rem
    paragrafo.style.fontSize = "2rem";
    // Mude a família da fonte do parágrafo para Arial
    paragrafo.style.fontFamily = "Arial";
    // Adicione uma sombra ao texto do parágrafo
    paragrafo.style.textShadow = "2px 2px 2px black";
});





// Quando o botão com o id "adicionarClasse" for clicado, execute a função
document.getElementById("adicionarClasse").addEventListener("click", function () {
    // Pegue o elemento com o id "paragrafo"
    var adicionar = document.getElementById("paragrafo");
    // Adicione a classe "destaque" ao parágrafo
    adicionar.classList.add("destaque");
});






// Quando o botão com o id "removerClasse" for clicado, execute a função
document.getElementById("removerClasse").addEventListener("click", function () {
    // Pegue o elemento com o id "paragrafo"
    var remover = document.getElementById("paragrafo");
    // Remova a classe "destaque" do parágrafo
    remover.classList.remove("destaque");
});





// Quando o botão com o id "alterarClasse" for clicado, execute a função
document.getElementById("alterarClasse").addEventListener("click", function () {
    // Pegue o elemento com o id "paragrafo"
    var alterar = document.getElementById("paragrafo");
    // Adicione ou remova a classe "fundo-azul" do parágrafo
    alterar.classList.toggle("fundo-azul");
});






/*
Explicações sobre algumas propriedades do JavaScript usadas:

style.color: Define a cor do texto de um elemento.
var elemento = document.getElementById("paragrafo");
elemento.style.color = "red"; // Muda a cor do texto para vermelho

style.fontSize: Define o tamanho da fonte de um elemento.
elemento.style.fontSize = "2rem"; // Muda o tamanho da fonte para 2rem

style.fontFamily: Define a família da fonte de um elemento.
elemento.style.fontFamily = "Arial"; // Muda a família da fonte para Arial

style.textShadow: Adiciona uma sombra ao texto de um elemento.
elemento.style.textShadow = "2px 2px 2px black"; // Adiciona uma sombra preta ao texto

classList.add: Adiciona uma classe a um elemento.
elemento.classList.add("destaque"); // Adiciona a classe "destaque" ao elemento

classList.remove: Remove uma classe de um elemento.
elemento.classList.remove("destaque"); // Remove a classe "destaque" do elemento

classList.toggle: Adiciona ou remove uma classe de um elemento, dependendo se ele já possui a classe ou não.
elemento.classList.toggle("fundo-azul"); // Adiciona ou remove a classe "fundo-azul" do elemento
*/