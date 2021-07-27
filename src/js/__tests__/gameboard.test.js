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

it('hits position', () => {
  const game = createGameBoard();
  game.placeShip(destroyer, [1, 1], 'x', 1);
  game.shipPositions.player1.destroyer.hit('1,1');
  expect(game.shipPositions.player1.destroyer.coords['1,1'].isHit).toBe(true);
});

it('isSunk() shows true when all ship positions have been hit', () => {
  const game = createGameBoard();
  game.placeShip(destroyer, [1, 1], 'x', 1);
  game.shipPositions.player1.destroyer.hit('1,1');
  game.shipPositions.player1.destroyer.hit('2,1');
  game.shipPositions.player1.destroyer.hit('3,1');
  expect(game.shipPositions.player1.destroyer.isSunk()).toBe(true);
});

it('isSunk() shows false when ship positions have been partially hit', () => {
  const game = createGameBoard();
  game.placeShip(destroyer, [1, 1], 'x', 1);
  game.shipPositions.player1.destroyer.hit('1,1');
  game.shipPositions.player1.destroyer.hit('2,1');
  expect(game.shipPositions.player1.destroyer.isSunk()).toBe(false);
});
