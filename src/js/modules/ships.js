import createShip from './createShip';

const carrier = createShip('carrier', 5);
const battleship = createShip('battleship', 4);
const destroyer = createShip('destroyer', 3);
const submarine = createShip('submarine', 3);
const patrolBoat = createShip('patrolBoat', 2);

export {
  carrier, battleship, destroyer, submarine, patrolBoat,
};
