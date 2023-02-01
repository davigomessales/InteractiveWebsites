/**
 * 1 - Olhe para o navegador e observe que há dois elementos, um contendo texto informativo sobre
 * JavaScript e um botão. Quando o botão é clicado, deve haver mais texto que aparece.
 * Atualmente, clicar no botão não parece fazer nada. Você vai criar um manipulador de eventos
 * para corrigir isso!

Primeiro, crie uma função chamada showInfo() que usaremos como a função do manipulador de eventos
para fazer o elemento oculto contendo o texto informativo adicional (moreInfo) aparecer quando o
evento 'click' for acionado.

Dentro da função, crie uma instrução que altere a propriedade de estilo .display do elemento
moreInfo para 'block'.

2 - Agora, crie um manipulador de eventos para um evento de clique usando .addEventListener().
Use readMore como o destino do evento e showInfo como a função do manipulador de eventos.

Execute seu código e dispare seu evento assim que terminar.
 */

let readMore = document.getElementById('read-more');
let moreInfo = document.getElementById('more-info');

// Write your code here:
