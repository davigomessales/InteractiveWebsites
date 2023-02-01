/**
 * 1 - No momento, a função open() torna os elementos senac e close visíveis alterando suas propriedades .display para 'block'. A função hide() oculta os mesmos elementos atribuindo um valor 'none' às propriedades .display.

Crie uma função chamada textChange() que altera o texto no elemento view para 'Hello, World!'.

2 - Em seguida, você deve criar uma função chamada textReturn() que altere o texto da variável do elemento view de volta para 'View'.

3 - Atribua textChange como uma função de manipulador de eventos a um evento click disparado na variável view e execute seu código.

4 - Atribua textReturn como uma função de manipulador de eventos para um evento de clique acionado na variável de fechamento. Em seguida, execute seu código e dispare os eventos!
 */
let view = document.getElementById('view-button');
let close = document.getElementById('close-button');
let senac = document.getElementById('senac');

let open = function() {
  senac.style.display = 'block';
  close.style.display = 'block';
};

let hide = function() {
  senac.style.display = 'none';
  close.style.display = 'none';
};

view.addEventListener('click', open);
close.addEventListener('click', hide);

// Write your code here