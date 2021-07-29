import createGameBoard from './gameboard';
import {
  carrier, battleship, destroyer, submarine, patrolBoat,
} from './ships';

const gameLogic = (() => {
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
  return {
    player1Board,
    player2Board,
    populateShipsTemp,
  };
})();

export default gameLogic;
