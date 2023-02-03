// As variáveis de teclas e notas armazenam as teclas do piano
const keys = ['c-key', 'd-key', 'e-key', 'f-key', 'g-key', 'a-key', 'b-key', 'high-c-key', 'c-sharp-key', 'd-sharp-key', 'f-sharp-key', 'g-sharp-key', 'a-sharp-key'];
const notes = [];
keys.forEach(function(key){
  notes.push(document.getElementById(key));
})

// Escreve funções nomeadas que mudam a cor das teclas abaixo


// Escreve uma função nomeada com propriedades do manipulador de eventos


// Escreva um loop que executa os elementos do array através da função


// Essas variáveis armazenam os botões que avançam o usuário através das letras
let nextOne = document.getElementById('first-next-line');
let nextTwo = document.getElementById('second-next-line');
let nextThree = document.getElementById('third-next-line');
let startOver = document.getElementById('fourth-next-line');

// Esta variável armazena o elemento lírico '-END'
let lastLyric = document.getElementById('column-optional');

// Essas instruções estão "escondendo" todos os botões de progresso, mas o primeironextTwo.hidden = true;
nextThree.hidden = true;
startOver.hidden= true;

// Grava propriedade e função do manipulador de evento anônimo para o primeiro botão de progresso


// Grava propriedade e função do manipulador de evento anônimo para o segundo botão de progresso


// Grava propriedade e função do manipulador de eventos anônimos para o terceiro botão de progresso


// Esta é a propriedade e função do manipulador de eventos para o botão startOver
startOver.onclick = function() {
  nextOne.hidden = false;
  startOver.hidden = true;
   document.getElementById('word-one').innerHTML = 'HAP-';
  document.getElementById('letter-note-one').innerHTML = 'G';
  document.getElementById('word-two').innerHTML = 'PY';
  document.getElementById('letter-note-two').innerHTML = 'G';
  document.getElementById('word-three').innerHTML = 'BIRTH-';
  document.getElementById('letter-note-three').innerHTML = 'A';
  document.getElementById('word-four').innerHTML = 'DAY';
  document.getElementById('letter-note-four').innerHTML = 'G';
  document.getElementById('word-five').innerHTML = 'TO';
  document.getElementById('letter-note-five').innerHTML = 'C';
  document.getElementById('word-six').innerHTML = 'YOU!';
  document.getElementById('letter-note-six').innerHTML = 'B';
}