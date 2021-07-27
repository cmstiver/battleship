import createShip from './createShip';

const carrier = createShip('Carrier', 5);
const battleship = createShip('Battleship', 4);
const destroyer = createShip('Destroyer', 3);
const submarine = createShip('Submarine', 3);
const patrolBoat = createShip('Patrol Boat', 2);

export {
  carrier, battleship, destroyer, submarine, patrolBoat,
};
