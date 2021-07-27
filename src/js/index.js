import '../style.css';
import createGameBoard from './modules/gameboard';
import {
  carrier, battleship, destroyer, submarine, patrolBoat,
} from './modules/ships';

const game = createGameBoard();
game.placeShip(destroyer, [1, 1], 'x', 1);

console.log(game);
