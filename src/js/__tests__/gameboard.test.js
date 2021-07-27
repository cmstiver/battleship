import { describe, expect, it } from '@jest/globals';
import createGameBoard from '../modules/gameboard';
import {
  carrier, battleship, destroyer, submarine, patrolBoat,
} from '../modules/ships';

it('ship places', () => {
  const game = createGameBoard();
  game.placeShip(destroyer, [1, 1], 'x');
  expect(game.shipPositions.Destroyer.coords).toEqual([
    [1, 1],
    [2, 1],
    [3, 1],
  ]);
});
