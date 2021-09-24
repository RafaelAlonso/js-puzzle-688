// quando user clicar no botao 'show-hint', pegar a div 'hint' e adicionar a class active

// 1. pegar o elemento que eu quero usar (que vai sofrer a interacao)
const botao = document.getElementById('show-hint');

// 2. falar qual e a acao que eu quero
const acao = 'click';

// 3. criar funcao que so funciona quando a acao acontecer com o elemento
const funcao = () => {
  const hint = document.querySelector('.hint');
  hint.classList.add('active');
}

// 4. juntar tudo => 1.addEventListener(2, 3)
botao.addEventListener(acao, funcao);

// ====================================================================================================

// ao clicar em um quadrado precisa
const cards = document.querySelectorAll("td");
const move = (event) => {
  // nota do prof: variavel event na funcao do nosso eventListener
  // guarda as infos do evento que acabou de acontecer. Principalmente
  // o currentTarget, que foi o elemento que sofreu a acao
  const cardClicado = event.currentTarget;
  const clicadoCol = cardClicado.cellIndex;
  const clicadoRow = cardClicado.parentElement.rowIndex;

  const cardVazio = document.querySelector('.empty');
  const vazioCol = cardVazio.cellIndex;
  const vazioRow = cardVazio.parentElement.rowIndex;

  // checar se eh adjacente horizontal/verticalmente ao vazio
  // horizontal: esta a 1 coluna de distancia e 0 linha de distancia
  const horizontal = (clicadoCol === vazioCol + 1 || clicadoCol === vazioCol - 1) && clicadoRow === vazioRow;
  // vertical: esta a 1 linha de distancia e 0 coluna de distancia
  const vertical = (clicadoRow === vazioRow + 1 || clicadoRow === vazioRow - 1) && clicadoCol === vazioCol;

  if(horizontal || vertical) {
    // = move o quadrado clicado para o quadrado vazio 
    // (mover o valor do innerText para o quadrado vazio e tirar a classe empty)
    cardVazio.classList.remove('empty');
    cardVazio.innerText = cardClicado.innerText;  
  
    // = move o quadrado vazio para a posicao do quadrado clicado 
    // (classe empty ir para o elemento clicado)
    cardClicado.classList.add("empty");
    cardClicado.innerText = '';
  
    // = verificar se a ordem dos numeros esta correta 
    // (juntar os innerText dos quadrados e verificar se eh igual a "1,2,3,4,5,....,13,14,15,")
    const cardsAtuais = document.querySelectorAll("td");
    let ordem = '';
    cardsAtuais.forEach((cardAtual) => {
      ordem += cardAtual.innerText + ',';
    })
    if(ordem === '1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,,'){
      // = = se estiver... alerta que venceu!
      alert('você venceu!');
    }
  }
}
cards.forEach((card) => {card.addEventListener(acao, move);});