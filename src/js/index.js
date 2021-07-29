import '../style.css';
import DOM from './modules/DOM';
import place from './modules/shipPlacerDOM';
import createGameBoard from './modules/gameboard';
import AI from './modules/ai';

const Players = (() => {
  let player1;
  let player2;
  return {
    player1,
    player2,
  };
})();

const Boards = (() => {
  const player1Board = createGameBoard();
  const player2Board = createGameBoard();
  return {
    player1Board,
    player2Board,
  };
})();

const hasSomeoneWon = () => {
  if (Boards.player1Board.isGameOver()) {
    DOM.displayWin('player2');
  }
  if (Boards.player2Board.isGameOver()) {
    DOM.displayWin('player1');
  }
};

DOM.populateSquares();
place.addDOMStuff();
if (Players.player2.type === 'comp') {
  AI.generateShips();
}

export { Players, Boards, hasSomeoneWon };
