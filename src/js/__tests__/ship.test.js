import { describe, expect, it } from '@jest/globals';
import createShip from '../modules/createShip';
import createGameBoard from '../modules/gameboard';
import {
  carrier, battleship, destroyer, submarine, patrolBoat,
} from '../modules/ships';

it('hits position', () => {
  const game = createGameBoard();
  game.placeShip(destroyer, [1, 1], 'x', 1);
  game.shipPositions.player1.destroyer.hit('1,1');
  expect(game.shipPositions.player1.destroyer.coords['1,1'].isHit).toBe(true);
});
