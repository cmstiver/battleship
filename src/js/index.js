import '../style.css';
import createGameBoard from './modules/gameboard';
import {
  carrier, battleship, destroyer, submarine, patrolBoat,
} from './modules/ships';

const game = createGameBoard();
game.placeShip(destroyer, [1, 1], 'x', 1);

game.shipPositions.player1.destroyer.hit('1,1');

console.log(game.shipPositions);
