// As variáveis de teclas e notas armazenam as teclas do piano
const keys = ['c-key', 'd-key', 'e-key', 'f-key', 'g-key', 'a-key', 'b-key', 'high-c-key', 'c-sharp-key', 'd-sharp-key', 'f-sharp-key', 'g-sharp-key', 'a-sharp-key'];
const notes = [];
keys.forEach(function(key){
  notes.push(document.getElementById(key));
})

// Escreve funções nomeadas que mudam a cor das teclas abaixo
function keyPlay(event){
  if(event.type === 'mousedown'){
    event.target.style.backgroundColor = 'purple'
  } else if(event.type === 'keydown') {
    let keyPressed = '';
    if(event.shiftKey){
      const lowerCase = event.key.toLowerCase();
      keyPressed = document.getElementById(`${lowerCase}-sharp-key`);
    } else if (event.altKey) {
      const lowerCase = event.key.toLowerCase();
      keyPressed = document.getElementById(`high-${lowerCase}-key`);
    } 
    else {
      const lowerCase = event.key.toLowerCase();
      keyPressed = document.getElementById(`${lowerCase}-key`);
    }
    if (keyPressed !== null) {
      keyPressed.style.backgroundColor = 'purple'
    }
  }
}
function keyReturn(event){
  console.log(event)
  if(event.type === 'mouseup') {
    event.target.style.backgroundColor = ''
  } else if (event.type === 'keyup') {
    if(event.shiftKey){
      const lowerCase = event.key.toLowerCase();
      keyPressed = document.getElementById(`${lowerCase}-sharp-key`);
    } else if (event.altKey) {
      const lowerCase = event.key.toLowerCase();
      keyPressed = document.getElementById(`high-${lowerCase}-key`);
    } else {
      const lowerCase = event.key.toLowerCase();
      keyPressed = document.getElementById(`${lowerCase}-key`);
    }
    if(keyPressed !== null) {
      keyPressed.style.backgroundColor = ''
    }
  }
}

// Escreve uma função nomeada com propriedades do manipulador de eventos
function assignEvent(nota){
  nota.onmousedown = keyPlay
  nota.onmouseup = keyReturn
  document.addEventListener('keydown', keyPlay)
  document.addEventListener('keyup', keyReturn)
}

// Escreva um loop que executa os elementos do array através da função
notes.forEach(nota => {
  assignEvent(nota)
})

// Essas variáveis armazenam os botões que avançam o usuário através das letras
let nextOne = document.getElementById('first-next-line');
let nextTwo = document.getElementById('second-next-line');
let nextThree = document.getElementById('third-next-line');
let startOver = document.getElementById('fourth-next-line');

// Esta variável armazena o elemento lírico '-END'
let lastLyric = document.getElementById('column-optional');

// Essas instruções estão "escondendo" todos os botões de progresso, mas o primeiro
nextTwo.hidden = true;
nextThree.hidden = true;
startOver.hidden= true;

// Grava propriedade e função do manipulador de evento anônimo para o primeiro botão de progresso
nextOne.onclick = function() {
  nextOne.hidden = true;
  nextTwo.hidden = false;
  document.getElementById('letter-note-five').innerHTML = 'D';
  document.getElementById('letter-note-six').innerHTML = 'C';
}

// Grava propriedade e função do manipulador de evento anônimo para o segundo botão de progresso
nextTwo.onclick = function() {
  nextTwo.hidden = true;
  nextThree.hidden = false;
  document.getElementById('word-five').innerHTML = 'DEAR'
  document.getElementById('word-six').innerHTML = 'FRI-'
  lastLyric.style.display = 'inline-block' ;
  document.getElementById('letter-note-three').innerHTML = 'G';
  document.getElementById('letter-note-four').innerHTML = 'E';
  document.getElementById('letter-note-five').innerHTML = 'C';
  document.getElementById('letter-note-six').innerHTML = 'B';
}

// Grava propriedade e função do manipulador de eventos anônimos para o terceiro botão de progresso
nextThree.onclick = function() {
  nextThree.hidden = true;
  startOver.hidden = false;
  document.getElementById('word-one').innerHTML = 'HAP-'
  document.getElementById('word-two').innerHTML = 'PY'
  document.getElementById('word-three').innerHTML = 'BIRTH'
  document.getElementById('word-four').innerHTML = 'DAY'
  document.getElementById('word-five').innerHTML = 'TO'
  document.getElementById('word-six').innerHTML = 'YOU!'
  document.getElementById('letter-note-one').innerHTML = 'F'
  document.getElementById('letter-note-two').innerHTML = 'F'
  document.getElementById('letter-note-three').innerHTML = 'E'
  document.getElementById('letter-note-four').innerHTML = 'C'
  document.getElementById('letter-note-five').innerHTML = 'D'
  document.getElementById('letter-note-six').innerHTML = 'C'
  lastLyric.style.display = 'none';
}

// Esta é a propriedade e função do manipulador de eventos para o botão startOver
startOver.onclick = function() {
  nextOne.hidden = false;
  startOver.hidden = true;
   document.getElementById('word-one').innerHTML = 'HAP-';
  document.getElementById('letter-note-one').innerHTML = 'G';
  document.getElementById('word-two').innerHTML = 'PY';
  document.getElementById('letter-note-two').innerHTML = 'G';
  document.getElementById('word-three').innerHTML = 'BIRTH';
  document.getElementById('letter-note-three').innerHTML = 'A';
  document.getElementById('word-four').innerHTML = 'DAY';
  document.getElementById('letter-note-four').innerHTML = 'G';
  document.getElementById('word-five').innerHTML = 'TO';
  document.getElementById('letter-note-five').innerHTML = 'C';
  document.getElementById('word-six').innerHTML = 'YOU!';
  document.getElementById('letter-note-six').innerHTML = 'B';
}