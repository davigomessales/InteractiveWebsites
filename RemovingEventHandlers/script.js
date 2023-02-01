/**
 * Confira este site que mostra sua sorte diária. Mas o site está quebrado! Você só deve conseguir ver sua fortuna diária uma vez, mas verá que pode continuar pressionando o botão para obter uma nova fortuna. Você precisa usar o método .removeEventListener() depois que uma fortuna é exibida.

Dentro da função showFortune(), adicione um .removeEventListener() para evitar que uma nova fortuna seja exibida quando um usuário tentar clicar no elemento de botão.
 */

let fortunes = ["A beautiful, smart, and loving person will be coming into your life.",
  "A fresh start will put you on your way.",
  "A golden egg of opportunity falls into your lap this month.",
  "A smile is your personal welcome mat.",
  "All your hard work will soon pay off."
]

let button = document.getElementById('fortuneButton');
let fortune = document.getElementById('fortune');

function fortuneSelector(){
  let randomFortune = Math.floor(Math.random() * fortunes.length);
  return fortunes[randomFortune];
}

function showFortune(){
  fortune.innerHTML = fortuneSelector();
  button.innerHTML = "Come back tomorrow!";
  button.style.cursor = "default";

  //add your code here

}

button.addEventListener('click', showFortune);