import DOM from './DOM';
import { Boards, Players } from '../index';
import {
  carrier, battleship, destroyer, submarine, patrolBoat,
} from './ships';

const place = (() => {
  let axis = 'x';
  let num = 0;
  const placeBoat = (coord) => {
    const split = coord.split(',');
    const newCoord = split.map((x) => +x);
    switch (num) {
      case 0:
        if (Boards.player1Board.placeShip(carrier, newCoord, axis) === true) {
          num++;
        }
        break;
      case 1:
        if (Boards.player1Board.placeShip(battleship, newCoord, axis) === true) {
          num++;
        }
        break;
      case 2:
        if (Boards.player1Board.placeShip(destroyer, newCoord, axis) === true) {
          num++;
        }
        break;
      case 3:
        if (Boards.player1Board.placeShip(submarine, newCoord, axis) === true) {
          num++;
        }
        break;
      case 4:
        if (Boards.player1Board.placeShip(patrolBoat, newCoord, axis) === true) {
          document.querySelector('#start').remove();
          DOM.addEventListeners();
          DOM.setTurn('player1Board');
          if (Players.player2.type === 'comp') {
            DOM.markShipPos('player1Board');
          }
        }
        break;
      default:
    }
  };
  const changeAxis = () => {
    const axisButton = document.querySelector('#start button');
    if (axis === 'x') {
      axis = 'y';
      axisButton.textContent = 'y';
    } else if (axis === 'y') {
      axis = 'x';
      axisButton.textContent = 'x';
    }
  };
  const addStartEventListeners = () => {
    const axisButton = document.querySelector('#start button');
    axisButton.addEventListener('click', changeAxis);
    const squares = document.querySelectorAll('#start .square');
    squares.forEach((square) => {
      square.addEventListener('click', getCoord);
    });
  };
  function getCoord(e) {
    const { coord } = e.path[0].dataset;
    placeBoat(coord);
  }

  return {
    addStartEventListeners,
  };
})();

export default place;
