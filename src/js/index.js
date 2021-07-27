import '../style.css';
import createGameBoard from './modules/gameboard';
import {
  carrier, battleship, destroyer, submarine, patrolBoat,
} from './modules/ships';

const game = createGameBoard();
game.placeShip(destroyer, [1, 1], 'x', 1);
game.placeShip(carrier, [4, 1], 'x', 1);
console.log(game.gameState);
game.receiveAttack('2,1', 'player1');
