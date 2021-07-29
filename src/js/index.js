import '../style.css';
import DOM from './modules/DOM';
import place from './modules/shipPlacerDOM';
import createGameBoard from './modules/gameboard';
import createPlayer from './modules/createPlayers';
import { carrier } from './modules/ships';

const Players = (() => {
  const player1 = createPlayer('name1', 'human');
  const player2 = createPlayer('name2', 'comp');
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

Boards.player2Board.placeShip(carrier, [1, 1], 'x');

const hasSomeoneWon = () => {
  if (Boards.player1Board.isGameOver()) {
    DOM.displayWin('player2');
  }
  if (Boards.player2Board.isGameOver()) {
    DOM.displayWin('player1');
  }
};

DOM.populateSquares();
place.addStartEventListeners();

export { Players, Boards, hasSomeoneWon };
