// Função para acessar o elemento pai de um item
function acessarParent() {
    // Seleciona o elemento com id "item2"
    var item2 = document.getElementById("item2");
    // Obtém o elemento pai de "item2"
    var parent = item2.parentNode;
    // Define o conteúdo de texto do elemento com id "resultado" para mostrar a tag do elemento pai
    document.getElementById("resultado").textContent = "o pai de 'item 2' é uma tag:" + parent.tagName;
}






// Função para listar os elementos filhos de uma div
function listarChildren() {
    // Seleciona o elemento com id "divPrincipal"
    var divP = document.getElementById("divPrincipal");
    // Obtém os elementos filhos de "divPrincipal"
    var children = divP.children;
    // Cria uma lista com as tags dos elementos filhos
    var listarfilhos = Array.from(children).map(children => children.tagName).join(", ");
    // Define o conteúdo de texto do elemento com id "resultado" para mostrar as tags dos elementos filhos
    document.getElementById("resultado").textContent = "Os filhos da div principal são as tags:" + listarfilhos;
}






// Função para acessar o próximo irmão de um item
function irProximo() {
    // Seleciona o elemento com id "item2"
    var item2 = document.getElementById("item2");
    // Obtém o próximo irmão de "item2"
    var proximoirmao = item2.nextSibling;
    // Enquanto o próximo irmão existir e não for um elemento (nodeType !== 1), continue procurando
    while (proximoirmao && proximoirmao.nodeType !== 1) {
        proximoirmao = proximoirmao.nextSibling;
    }
    // Define o conteúdo de texto do elemento com id "resultado" para mostrar o próximo irmão ou uma mensagem de que não há próximo irmão
    document.getElementById("resultado").textContent = proximoirmao
        ? "O próximo irmão de 'item 2' é: " + proximoirmao.textContent
        : "Não há próximo irmão.";
}






// Função para acessar o irmão anterior de um item
function irAnterior() {
    // Seleciona o elemento com id "item2"
    var item2 = document.getElementById("item2");
    // Obtém o irmão anterior de "item2"
    var irmaoanterior = item2.previousSibling;
    // Enquanto o irmão anterior existir e não for um elemento (nodeType !== 1), continue procurando
    while (irmaoanterior && irmaoanterior.nodeType !== 1) {
        irmaoanterior = irmaoanterior.previousSibling;
    }
    // Define o conteúdo de texto do elemento com id "resultado" para mostrar o irmão anterior ou uma mensagem de que não há irmão anterior
    document.getElementById("resultado").textContent = irmaoanterior
        ? "O irmão anterior de 'item 2' é: " + irmaoanterior.textContent
        : "Não há irmão anterior.";
}






/*
Explicações sobre algumas propriedades do JavaScript usadas:

getElementById: Seleciona um elemento pelo seu id.
var elemento = document.getElementById("item2"); // Seleciona o elemento com id "item2"

parentNode: Obtém o elemento pai de um elemento.
var parent = elemento.parentNode; // Obtém o elemento pai de "item2"

textContent: Define ou retorna o conteúdo de texto de um nó e seus descendentes.
document.getElementById("resultado").textContent = "Texto"; // Define o conteúdo de texto do elemento

children: Retorna uma coleção HTML dos elementos filhos de um elemento.
var children = elemento.children; // Obtém os elementos filhos de "divPrincipal"

Array.from: Cria uma nova instância de Array a partir de um objeto semelhante a um array.
var array = Array.from(children); // Cria um array a partir dos elementos filhos

map: Cria um novo array com os resultados da chamada de uma função para cada elemento do array.
var tags = array.map(child => child.tagName); // Cria um array com as tags dos elementos filhos

join: Junta todos os elementos de um array em uma string, separados por um delimitador especificado.
var string = tags.join(", "); // Junta as tags em uma string, separadas por vírgula

nextSibling: Retorna o próximo nó no mesmo nível na árvore DOM.
var proximoirmao = elemento.nextSibling; // Obtém o próximo irmão de "item2"

previousSibling: Retorna o nó anterior no mesmo nível na árvore DOM.
var irmaoanterior = elemento.previousSibling; // Obtém o irmão anterior de "item2"

nodeType: Retorna o tipo de nó de um elemento.
if (elemento.nodeType !== 1) { ... } // Verifica se o nó é um elemento (nodeType 1)
*/