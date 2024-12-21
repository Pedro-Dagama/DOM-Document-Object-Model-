// Adiciona um evento de clique ao botão com id "botaoClique"
var botao = document.getElementById("botaoClique").addEventListener("click", function(event) {
    // Mostra um alerta quando o botão é clicado
    alert("botão foi clicado");
    // Previne o comportamento padrão do evento
    event.preventDefault();
});






// Seleciona a área com id "areaHover"
var areahover = document.getElementById("areaHover");

// Adiciona um evento de mouseover à área
areahover.addEventListener("mouseover", function() {
    // Muda a cor de fundo da área para azul quando o mouse está sobre ela
    areahover.style.backgroundColor = "blue";
});






// Adiciona um evento de mouseout à área
areahover.addEventListener("mouseout", function() {
    // Muda a cor de fundo da área para cinza claro quando o mouse sai dela
    areahover.style.backgroundColor = "lightgray";
});






// Adiciona um evento que é disparado quando o documento é completamente carregado
document.addEventListener("DOMContentLoaded", function() {
    // Mostra um alerta quando o documento é carregado
    alert("o documento foi carregado");
});






// Adiciona um evento de clique ao corpo do documento
document.body.addEventListener("click", function() {
    // Mostra um alerta quando o corpo do documento é clicado
    alert("clicou no body!");
}, false);






// Função que mostra um alerta quando o documento é clicado
function alertabotao() {
    alert("clicou no documento!");
}






// Adiciona um evento de clique ao documento que chama a função alertabotao
document.addEventListener("click", alertabotao);






// Remove o evento de clique do documento após 5 segundos
setTimeout(function() {
    document.removeEventListener("click", alertabotao);
}, 5000);






/*
Explicações sobre algumas funções do JavaScript:

addEventListener: Adiciona um evento a um elemento.
var botao = document.getElementById("botaoClique");
botao.addEventListener("click", function(event) {
    alert("botão foi clicado");
    event.preventDefault();
});

preventDefault: Previne o comportamento padrão do evento.
event.preventDefault(); // Previne o comportamento padrão do evento

style.backgroundColor: Define a cor de fundo de um elemento.
var elemento = document.getElementById("areaHover");
elemento.style.backgroundColor = "blue"; // Muda a cor de fundo para azul

DOMContentLoaded: Evento que é disparado quando o documento é completamente carregado.
document.addEventListener("DOMContentLoaded", function() {
    alert("o documento foi carregado");
});

setTimeout: Executa uma função após um determinado tempo.
setTimeout(function() {
    alert("5 segundos se passaram");
}, 5000); // Executa a função após 5 segundos
*/