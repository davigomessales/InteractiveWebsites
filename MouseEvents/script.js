/**
 * 1. Neste exercício, você modificará os elementos da lista usando eventos de mouse.
 * Você pode usar o elemento reset que já está programado para definir o outro elemento
 * da lista de volta para seus estilos padrão.
Primeiro, crie uma função chamada gainWidth() que altera o .width do itemOne para qualquer
tamanho maior que '400px'.
2. Agora, crie um manipulador de eventos para itemOne que acionará a função gainWidth()
quando o mouse passar sobre ele.

3. Em seguida, crie uma função chamada change Background() que altera a cor .background do item Dois.

4. Vamos usar a função changeBackground() que acabamos de criar como um manipulador de eventos para
itemTwo que será acionado quando o mouse for liberado sobre o elemento!

5. Agora, crie uma função chamada changeText() que altera o texto do itemThree
para 'O mouse deixou o elemento'.

6. Crie um manipulador de eventos para itemThree que acionará a função changeText() quando o mouse
sair do elemento.

7. Finalmente, vamos criar uma função chamada showItem() que faz o elemento itemFive aparecer
alterando a propriedade de estilo .display para 'block'.

8. Agora, crie um manipulador de eventos para itemFour que acione a função showItem() quando o
mouse for pressionado sobre o elemento.
 */
// These variables store the boxes on the side
let itemOne = document.getElementById('list-item-one');
let itemTwo = document.getElementById('list-item-two');
let itemThree = document.getElementById('list-item-three');
let itemFour = document.getElementById('list-item-four');
let itemFive = document.getElementById('list-item-five');
let resetButton = document.getElementById('reset-button');

// This function programs the "Reset" button to return the boxes to their default styles
let reset = function() {
  itemOne.style.width = ''
  itemTwo .style.backgroundColor = ''
  itemThree.innerHTML = 'The mouse must leave the box to change the text'
  itemFive.style.display = "none"
};
resetButton.onclick = reset;

// Write your code here
