/**
 * 1. Criamos um gerador de cores muito legal para ajudar as pessoas a
 * encontrar cores diferentes - experimente! Uh oh, parece estar quebrado.
 * Precisamos que você use seu novo conhecimento para consertar o site.
 * Conclua a função colorChange(), que será usada como uma função de manipulador
 * de eventos, para alterar aleatoriamente as cores dos botões quando eventos
 * específicos forem acionados neles.
 * 
 * Primeiro, adicione a seguinte variável à função do manipulador de eventos:
 * let randomColor = 'rgb(' + colorValue() + ',' + colorValue() + ',' + colorValue() + ')';
 * 
 * 2. Adicione uma instrução que altere a cor de fundo do destino do evento e defina-a como randomColor.
 * 
 * 3. Existem dois elementos que devem mudar de cor nesta página da web. Primeiro, crie uma propriedade
 * de manipulador de eventos no elemento de botão que é acionado quando é clicado. Use colorChange como
 * a função de manipulador de eventos. Em seguida, execute seu código e dispare o evento click.
 * 
 * 4. Em seguida, crie uma propriedade de manipulador de eventos no elemento MysteryButton.
 * Essa propriedade precisa de um evento que seja acionado quando você girar a roda do mouse ou
 * deslizar para baixo no mousepad. Use a página MDN Events Reference para encontrar o tipo de
 * evento correto. Atribua a mesma função do manipulador de eventos colorChange à propriedade do
 * manipulador de eventos. Em seguida, execute seu código e dispare o evento.
 */

// This variable stores the "Pick a Color" button
let button = document.getElementById('color-button');

// This variable stores the "Mystery Color" button
let mysteryButton = document.getElementById('next-button');

// This random number function will create color codes for the randomColor variable
function colorValue() {
  return Math.floor(Math.random() * 256);
}

function colorChange(event){

}