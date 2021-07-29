import { hasSomeoneWon } from '../index';

const createGameBoard = () => {
  const boardState = {
    ships: {},
    dodgedShots: [],
  };
  const isGameOver = () => {
    const { ships } = boardState;
    const shipsArray = Object.keys(ships);
    const sunkArray = [];
    shipsArray.forEach((ship) => {
      sunkArray.push(ships[ship].isSunk());
    });
    if (sunkArray.every((value) => value === true)) {
      return true;
    }
    return false;
  };
  const checkIfValidPlacement = (array) => {
    const comparison = [];
    array.forEach((coord) => {
      if (coord[0] > 10 || coord[0] < 0 || coord[1] > 10 || coord[1] < 0) {
        comparison.push(false);
      }
    });
    if (comparison.includes(false)) {
      return false;
    }
    return true;
  };
  const placeShip = (ship, coords, axis) => {
    let shipObj = boardState.ships[ship.name];
    shipObj = { ...shipObj, ...ship, ...{ coords: {} } };
    if (axis === 'x') {
      for (let i = 0; i < ship.length; i++) {
        const newCoords = [coords[0] + i, coords[1]];
        shipObj.coords[newCoords] = { isHit: false };
      }
    } else if (axis === 'y') {
      for (let i = 0; i < ship.length; i++) {
        const newCoords = [coords[0], coords[1] + i];
        shipObj.coords[newCoords] = { isHit: false };
      }
    }
    const coordArray = [];
    Object.keys(shipObj.coords).forEach((coord) => coordArray.push(coord.split(',')));
    if (checkIfValidPlacement(coordArray)) {
      boardState.ships[ship.name] = shipObj;
      return true;
    }
    return false;
  };
  const receiveAttack = (coords) => {
    const coordsStr = coords.toString();
    const { ships } = boardState;
    const shipsArray = Object.keys(ships);
    let hit = false;
    shipsArray.forEach((ship) => {
      if (Object.keys(ships[ship].coords).includes(coordsStr) === true) {
        ships[ship].hit(coords);
        hit = true;
      }
    });
    if (hit === false) {
      boardState.dodgedShots.push(coords);
    }
    hasSomeoneWon();
  };
  return {
    placeShip,
    receiveAttack,
    isGameOver,
    boardState,
  };
};

export default createGameBoard;
