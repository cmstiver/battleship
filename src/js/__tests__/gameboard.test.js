import { describe, expect, it } from '@jest/globals';
import createGameBoard from '../modules/gameboard';
import {
  carrier, battleship, destroyer, submarine, patrolBoat,
} from '../modules/ships';

it('ship places', () => {
  const game = createGameBoard();
  game.placeShip(destroyer, [1, 1], 'x', 1);
  expect(game.shipPositions.player1.destroyer.coords).toEqual({
    '1,1': { isHit: false },
    '2,1': { isHit: false },
    '3,1': { isHit: false },
  });
});
