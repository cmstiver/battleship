import '../style.css';
import createGameBoard from './modules/gameboard';
import {
  carrier, battleship, destroyer, submarine, patrolBoat,
} from './modules/ships';

const gameboard1 = createGameBoard();
gameboard1.placeShip(carrier, [1, 1], 'y');
gameboard1.placeShip(battleship, [2, 1], 'y');
gameboard1.placeShip(destroyer, [3, 1], 'y');
gameboard1.placeShip(submarine, [4, 1], 'y');
gameboard1.placeShip(patrolBoat, [5, 1], 'y');

const gameboard2 = createGameBoard();
gameboard2.placeShip(carrier, [1, 1], 'y');
gameboard2.placeShip(battleship, [2, 1], 'y');
gameboard2.placeShip(destroyer, [3, 1], 'y');
gameboard2.placeShip(submarine, [4, 1], 'y');
gameboard2.placeShip(patrolBoat, [5, 1], 'y');

console.log(gameboard1.boardState);
console.log(gameboard2.boardState);
