import { Boards } from '..';
import DOM from './DOM';
import {
  carrier, battleship, destroyer, submarine, patrolBoat,
} from './ships';

const AI = (() => {
  function randomizeCoord() {
    const x = Math.floor(Math.random() * 10) + 1;
    const y = Math.floor(Math.random() * 10) + 1;
    return `${x},${y}`;
  }
  function randomizeAxis() {
    const number = Math.floor(Math.random() * 2);
    let axis = 0;
    if (number === 1) {
      axis = 'x';
    } else if (number === 0) {
      axis = 'y';
    }
    return axis;
  }

  function generateShips() {
    let num = 0;
    function setShips(coord, axis) {
      const split = coord.split(',');
      const newCoord = split.map((x) => +x);
      switch (num) {
        case 0:
          if (Boards.player2Board.placeShip(carrier, newCoord, axis) === true) {
            num++;
          }
          break;
        case 1:
          if (Boards.player2Board.placeShip(battleship, newCoord, axis) === true) {
            num++;
          }
          break;
        case 2:
          if (Boards.player2Board.placeShip(destroyer, newCoord, axis) === true) {
            num++;
          }
          break;
        case 3:
          if (Boards.player2Board.placeShip(submarine, newCoord, axis) === true) {
            num++;
          }
          break;
        case 4:
          if (Boards.player2Board.placeShip(patrolBoat, newCoord, axis) === true) {
            num++;
          }
          break;
        default:
          break;
      }
      return true;
    }

    while (num < 5) {
      setShips(randomizeCoord(), randomizeAxis());
    }
  }
  function selectCoord() {
    const alreadyShot = Boards.player1Board.boardState.dodgedShots;
    const alreadyShot2 = [];
    const { ships } = Boards.player1Board.boardState;
    const shipsArray = Object.keys(ships);
    shipsArray.forEach((ship) => {
      const coordArray = Object.keys(ships[ship].coords);
      coordArray.forEach((coord) => {
        if (ships[ship].coords[coord].isHit === true) {
          alreadyShot2.push(coord);
        }
      });
    });
    const coord = randomizeCoord();
    if (alreadyShot.includes(coord) || alreadyShot2.includes(coord)) {
      selectCoord();
    } else {
      DOM.launchAttack('player1Board', coord);
    }
  }
  return {
    selectCoord,
    generateShips,
  };
})();

export default AI;
