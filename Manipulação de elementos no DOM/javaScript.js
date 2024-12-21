// Quando o botão com o id "mudarTexto" for clicado, execute a função
document.getElementById("mudarTexto").addEventListener("click", function () {
    // Pegue o elemento com o id "titulo"
    var titulo = document.getElementById("titulo");
    // Mude o texto desse elemento para "🗿 Titulo alterado 🗿"
    titulo.textContent = "🗿 Titulo alterado 🗿";
});






// Quando o botão com o id "modificarHtml" for clicado, execute a função
document.getElementById("modificarHtml").addEventListener("click", function () {
    // Pegue o elemento com o id "conteudo"
    var mod = document.getElementById("conteudo");
    // Mude o HTML desse elemento para um novo parágrafo com texto em negrito
    mod.innerHTML = "<p> Novo conteudo <strong>HTML</strong>! </p>";
});






// Quando o botão com o id "adicionarElemento" for clicado, execute a função
document.getElementById("adicionarElemento").addEventListener("click", function () {
    // Crie um novo elemento de parágrafo
    var add = document.createElement("p");
    // Adicione o texto "um novo paragrafo adicionado meu bom" ao novo parágrafo
    add.textContent = "um novo paragrafo adicionado meu bom";
    // Adicione o novo parágrafo ao final do corpo do documento
    document.body.appendChild(add);
});






// Quando o botão com o id "removerElemento" for clicado, execute a função
document.getElementById("removerElemento").addEventListener("click", function () {
    // Pegue o elemento com o id "conteudo"
    var conteudo = document.getElementById("conteudo");
    // Se o elemento "conteudo" tiver um filho
    if (conteudo.firstChild) {
        // Remova o primeiro filho do elemento "conteudo"
        conteudo.removeChild(conteudo.firstChild);
    }
});






// Quando clicamos no botão com o id "substituirElemento", fazemos algo
document.getElementById("substituirElemento").addEventListener("click", function () {
    // Criamos um novo parágrafo
    var novoElemento = document.createElement("p");
    // Colocamos um texto dentro do novo parágrafo
    novoElemento.textContent = "este é um elemento substituido";
    // Pegamos o elemento com o id "conteudo"
    var conteudo = document.getElementById("conteudo");
    // Se o elemento "conteudo" tiver um filho
    if (conteudo.firstChild) {
        // Substituímos o primeiro filho pelo novo parágrafo
        conteudo.replaceChild(novoElemento, conteudo.firstChild);
    }
});

/*
Explicações sobre algumas funções do JavaScript:





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
array.forEach(function(item) {
    console.log(item); // Imprime cada item do array

innerHTML: Define ou retorna o conteúdo HTML de um elemento.
var elemento = document.getElementById("conteudo");
elemento.innerHTML = "<p>Novo conteúdo HTML!</p>"; // Define o conteúdo HTML do elemento

textContent: Define ou retorna o conteúdo de texto de um nó e seus descendentes.
var elemento = document.getElementById("titulo");
elemento.textContent = "Novo texto"; // Define o conteúdo de texto do elemento

createElement: Cria um novo elemento HTML especificado.
var novoParagrafo = document.createElement("p"); // Cria um novo elemento <p>

appendChild: Adiciona um nó como o último filho de um nó pai especificado.
document.body.appendChild(novoParagrafo); // Adiciona o novo parágrafo ao final do corpo do documento
*/

