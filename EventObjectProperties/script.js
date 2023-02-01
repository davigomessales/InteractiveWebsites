/**
 * 1 - Como pode haver várias funções do manipulador de eventos associadas
 * a um determinado evento, .removeEventListener() precisa do nome exato do
 * tipo de evento e do nome do manipulador de eventos que você deseja remover.
 * Se .addEventListener() recebeu uma função anônima, esse ouvinte de evento
 * não pode ser removido.
 * 
 * 2 - Em seguida, adicione uma instrução à função sharePhoto que modificará o
 * elemento de texto para indicar o número de milissegundos desde o
 * carregamento do DOM até o disparo do evento.
 * 
 * 3 - Agora, para criar funcionalidade para o objeto de evento, atribua a
 * função sharePhoto a um evento de clique no elemento de compartilhamento.

Execute seu código!
 */
let social = document.getElementById('social-media');
let share = document.getElementById('share-button');
let text = document.getElementById('text');

// Write your code below
let sharePhoto = function(event) {

}