// Obtém a referência aos elementos HTML relevantes.
const board = document.getElementById('board');
const message = document.querySelector('.message');
const restartButton = document.getElementById('restart');

// Inicializa as variáveis do jogo.
let currentPlayer = 'X';
let cells = Array.from(document.querySelectorAll('.cell'));
let gameOver = false;

// Cria as células do tabuleiro e adiciona manipuladores de eventos de clique a cada uma.
cells.forEach(cell => {
  cell.addEventListener('click', handleCellClick);
});

// Adiciona um manipulador de evento de clique ao botão de reiniciar.
restartButton.addEventListener('click', restartGame);

// Função que lida com o clique em uma célula.
function handleCellClick(event) {
  const clickedCell = event.target;
  const clickedCellIndex = cells.indexOf(clickedCell);

  if (gameOver || cells[clickedCellIndex].textContent !== '') return;

  const img = document.createElement('img');
  img.src = 'https://upload.wikimedia.org/wikipedia/pt/thumb/e/ed/Shrek%28personagem%29.jpg/150px-Shrek%28personagem%29.jpg'; // Substitua pelo URL direto da imagem desejada
  img.alt = currentPlayer;

  cells[clickedCellIndex].textContent = '';
  cells[clickedCellIndex].appendChild(img);
  cells[clickedCellIndex].classList.add('selected');

  if (checkWinner(currentPlayer)) {
    gameOver = true;
    message.textContent = `Jogador ${currentPlayer} venceu!`;
    highlightWinningCells(currentPlayer);
  } else if (isBoardFull()) {
    gameOver = true;
    message.textContent = 'Empate!';
  } else {
    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    message.textContent = `Vez do Jogador ${currentPlayer}`;
  }
}

// Função que verifica se há um vencedor.
function checkWinner(player) {
  const winningCombinations = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // linhas
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // colunas
    [0, 4, 8], [2, 4, 6] // diagonais
  ];

  return winningCombinations.some(combination => {
    const [a, b, c] = combination;
    return (
      cells[a].textContent === player &&
      cells[b].textContent === player &&
      cells[c].textContent === player
    );
  });
}

// Função que verifica se todas as células estão preenchidas.
function isBoardFull() {
  return cells.every(cell => cell.textContent !== '');
}

// Função que destaca as células vencedoras.
function highlightWinningCells(player) {
  const winningCombinations = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // linhas
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // colunas
    [0, 4, 8], [2, 4, 6] // diagonais
  ];

  winningCombinations.forEach(combination => {
    const [a, b, c] = combination;
    if (
      cells[a].textContent === player &&
      cells[b].textContent === player &&
      cells[c].textContent === player
    ) {
      cells[a].classList.add('winning-cell');
      cells[b].classList.add('winning-cell');
      cells[c].classList.add('winning-cell');
    }
  });
}

// Função que reinicia o jogo.
function restartGame() {
  currentPlayer = 'X';
  cells.forEach(cell => {
    cell.textContent = '';
    cell.classList.remove('selected');
    cell.classList.remove('winning-cell');
  });
  message.textContent = 'Vez do Jogador X';
  gameOver = false;
}
