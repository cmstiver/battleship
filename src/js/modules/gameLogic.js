import DOM from './DOM';
import createGameBoard from './gameboard';
import createPlayer from './players';
import {
  carrier, battleship, destroyer, submarine, patrolBoat,
} from './ships';

const gameLogic = (() => {
  const player1 = createPlayer('name1', 'human');
  const player2 = createPlayer('name2', 'comp');

  const player1Board = createGameBoard();
  const player2Board = createGameBoard();

  const populateShipsTemp = () => {
    player1Board.placeShip(carrier, [1, 1], 'y');
    player1Board.placeShip(battleship, [2, 1], 'y');
    player1Board.placeShip(destroyer, [3, 1], 'y');
    player1Board.placeShip(submarine, [4, 1], 'y');
    player1Board.placeShip(patrolBoat, [5, 1], 'y');

    player2Board.placeShip(carrier, [2, 1], 'y');
    player2Board.placeShip(battleship, [3, 1], 'y');
    player2Board.placeShip(destroyer, [4, 1], 'y');
    player2Board.placeShip(submarine, [5, 1], 'y');
    player2Board.placeShip(patrolBoat, [6, 1], 'y');
  };

  const hasSomeoneWon = () => {
    if (player1Board.isGameOver()) {
      DOM.displayWin('player2');
    }
    if (player2Board.isGameOver()) {
      DOM.displayWin('player1');
    }
  };

  return {
    player1,
    player2,
    player1Board,
    player2Board,
    populateShipsTemp,
    hasSomeoneWon,
  };
})();

export default gameLogic;
