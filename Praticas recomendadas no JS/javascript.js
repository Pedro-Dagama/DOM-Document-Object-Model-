// Quando o botão com o id "adicionarItem" for clicado, execute a função
document.getElementById("adicionarItem").addEventListener("click", function () {
    // Pegue o elemento com o id "listaItens"
    var lista = document.getElementById("listaItens");
    // Pegue o elemento com o id "novoItem"
    var input = document.getElementById("novoItem");

    // Se o valor do input não estiver vazio
    if (input.value.trim() !== "") {
        // Crie um novo elemento de lista
        var novoli = document.createElement("LI");
        // Adicione o texto do input ao novo elemento de lista
        novoli.textContent = input.value.trim();
        // Adicione o novo elemento de lista à lista
        lista.appendChild(novoli);
        // Limpe o valor do input
        input.value = "";
    }
});

// Quando um item da lista com o id "listaItens" for clicado, execute a função
document.getElementById("listaItens").addEventListener("click", function (event) {
    // Se o elemento clicado for um item de lista (LI)
    if (event.target.tagName === 'LI') {
        // Mostre um alerta com o texto do item clicado
        alert("voce clicou em: " + event.target.textContent);
    }
});

/*
Explicações sobre algumas propriedades do JavaScript usadas:

getElementById: Seleciona um elemento pelo seu id.
var elemento = document.getElementById("listaItens"); // Seleciona o elemento com id "listaItens"

addEventListener: Adiciona um evento a um elemento.
elemento.addEventListener("click", function() { ... }); // Adiciona um evento de clique ao elemento

createElement: Cria um novo elemento HTML especificado.
var novoli = document.createElement("LI"); // Cria um novo elemento <li>

textContent: Define ou retorna o conteúdo de texto de um nó e seus descendentes.
novoli.textContent = "Texto"; // Define o conteúdo de texto do novo elemento <li>

appendChild: Adiciona um nó como o último filho de um nó pai especificado.
lista.appendChild(novoli); // Adiciona o novo elemento <li> à lista

// Explicação sobre o que é um nó:
// Um nó é qualquer objeto na árvore do DOM. Pode ser um elemento, um texto, um comentário, etc.
// No contexto do DOM, um nó pode ser um elemento HTML, como <div>, <p>, <li>, ou um nó de texto, que é o conteúdo de texto dentro de um elemento.
var elemento = document.createElement("LI"); // Cria um novo nó de elemento <li>
var texto = document.createTextNode("Texto"); // Cria um novo nó de texto
elemento.appendChild(texto); // Adiciona o nó de texto como filho do nó de elemento <li>

trim: Remove espaços em branco do início e do fim de uma string.
var texto = input.value.trim(); // Remove espaços em branco do valor do input

event.target: Retorna o elemento que disparou o evento.
if (event.target.tagName === 'LI') { ... } // Verifica se o elemento clicado é um <li>

tagName: Retorna o nome da tag de um elemento.
if (event.target.tagName === 'LI') { ... } // Verifica se o nome da tag do elemento clicado é 'LI'
*/