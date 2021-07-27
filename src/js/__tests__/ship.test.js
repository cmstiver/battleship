import { describe, expect, it } from '@jest/globals';
import createShip from '../modules/ship';

it('creates ship with correct position', () => {
  const destroyer = createShip();
  destroyer.createShipPos(10, 12, 23);
  expect(destroyer.shipPos).toEqual({
    10: { hit: false },
    12: { hit: false },
    23: { hit: false },
  });
});

it('isSunk provides "true" when ship is sunk', () => {
  const destroyer = createShip();
  destroyer.createShipPos(10, 12, 23);
  destroyer.hit(10);
  destroyer.hit(12);
  destroyer.hit(23);
  expect(destroyer.isSunk()).toBe(true);
});

it('isSunk provides "false" when ship is partially hit', () => {
  const destroyer = createShip();
  destroyer.createShipPos(10, 12, 23);
  destroyer.hit(10);
  destroyer.hit(12);
  expect(destroyer.isSunk()).toBe(false);
});
