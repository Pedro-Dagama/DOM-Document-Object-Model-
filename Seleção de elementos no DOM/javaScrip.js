// Adiciona um evento de clique ao elemento com id "btnTitulo"
document.getElementById("btnTitulo").addEventListener("click", function () {
    // Seleciona o elemento com id "titulo"
    var titulo = document.getElementById("titulo");
    // Define o valor do input com id "inputTitulo" como o texto do elemento "titulo"
    document.getElementById("inputTitulo").value = titulo.textContent;
});

<<<<<<< HEAD





=======
>>>>>>> 4b3a92f260affd12a6abe0b7ca1bbeb96f5bcf6e
// Adiciona um evento de clique ao elemento com id "btnItensTag"
document.getElementById("btnItensTag").addEventListener("click", function () {
    // Seleciona todos os elementos <li>
    var itensLista = document.getElementsByTagName("li");
    // Cria um array para armazenar os textos dos itens
    var texto = [];
    // Itera sobre os elementos <li> e adiciona seus textos ao array
    for (var i = 0; i < itensLista.length; i++) {
        texto.push(itensLista[i].textContent);
    }
    // Define o valor do input com id "inputItensTag" como os textos dos itens, separados por vírgula
    document.getElementById("inputItensTag").value = texto.join(", ");
});

<<<<<<< HEAD





=======
>>>>>>> 4b3a92f260affd12a6abe0b7ca1bbeb96f5bcf6e
// Adiciona um evento de clique ao elemento com id "btnMensagensClass"
document.getElementById("btnMensagensClass").addEventListener("click", function () {
    // Seleciona todos os elementos com a classe "mensagem"
    var mensagens = document.getElementsByClassName("mensagem");
    // Cria um array para armazenar os textos das mensagens
    var texto = [];
    // Itera sobre os elementos com a classe "mensagem" e adiciona seus textos ao array
    for (var i = 0; i < mensagens.length; i++) {
        texto.push(mensagens[i].textContent);
    }
    // Define o valor do input com id "inputMensagens" como os textos das mensagens, separados por vírgula
    document.getElementById("inputMensagens").value = texto.join(', ');
});

<<<<<<< HEAD





=======
>>>>>>> 4b3a92f260affd12a6abe0b7ca1bbeb96f5bcf6e
// Adiciona um evento de clique ao elemento com id "btnPrimeiroItem"
document.getElementById("btnPrimeiroItem").addEventListener("click", function () {
    // Seleciona o primeiro elemento <li>
    var primeiroItem = document.querySelector('li');
    // Define o valor do input com id "inputPrimeiroItem" como o texto do primeiro item
    document.getElementById("inputPrimeiroItem").value = primeiroItem.textContent;
});

<<<<<<< HEAD





=======
>>>>>>> 4b3a92f260affd12a6abe0b7ca1bbeb96f5bcf6e
// Adiciona um evento de clique ao elemento com id "btnTodosItens"
document.getElementById("btnTodosItens").addEventListener("click", function () {
    // Seleciona todos os elementos <li>
    var todoItens = document.querySelectorAll("li");
    // Cria um array para armazenar os textos dos itens
    var texto = [];
    // Itera sobre os elementos <li> e adiciona seus textos ao array
    todoItens.forEach(function (item) {
        texto.push(item.textContent);
    });
    // Define o valor do input com id "inputTodosItens" como os textos dos itens, separados por vírgula
    document.getElementById("inputTodosItens").value = texto.join(", ");
});

<<<<<<< HEAD





=======
>>>>>>> 4b3a92f260affd12a6abe0b7ca1bbeb96f5bcf6e
/*
Explicações sobre algumas funções do JavaScript:

join: Junta todos os elementos de um array em uma string, separados por um delimitador especificado.
var array = ["um", "dois", "três"];
var string = array.join(", "); // "um, dois, três"

push: Adiciona um ou mais elementos ao final de um array e retorna o novo comprimento do array.
var array = ["um", "dois"];
array.push("três"); // ["um", "dois", "três"]

querySelector: Retorna o primeiro elemento que corresponde a um seletor CSS especificado.
var primeiroItem = document.querySelector('li'); // Retorna o primeiro <li> encontrado

querySelectorAll: Retorna todos os elementos que correspondem a um seletor CSS especificado, como uma NodeList.
var todosItens = document.querySelectorAll('li'); // Retorna todos os <li> encontrados

forEach: Executa uma função fornecida uma vez para cada elemento de um array ou NodeList.
var array = ["um", "dois", "três"];
array.forEach(function (item) {
    console.log(item); // Imprime cada item do array
<<<<<<< HEAD
=======
});
>>>>>>> 4b3a92f260affd12a6abe0b7ca1bbeb96f5bcf6e
*/