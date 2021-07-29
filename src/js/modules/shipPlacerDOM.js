import DOM from './DOM';
import { Boards, Players } from '../index';
import {
  carrier, battleship, destroyer, submarine, patrolBoat,
} from './ships';

const place = (() => {
  let axis = 'x';
  let num = 0;
  let shadowLength = 5;
  const markShipPos = (player) => {
    const { ships } = Boards[player].boardState;
    const shipsArray = Object.keys(ships);
    shipsArray.forEach((ship) => {
      const shipCoords = Object.keys(ships[ship].coords);
      shipCoords.forEach((coord) => {
        const square = document.querySelector(`.start [data-coord='${coord}']`);
        square.classList.add('square-occupied');
      });
    });
  };
  const placeBoat = (e) => {
    const { coord } = e.path[0].dataset;
    const split = coord.split(',');
    const newCoord = split.map((x) => +x);
    switch (num) {
      case 0:
        if (Boards.player1Board.placeShip(carrier, newCoord, axis) === true) {
          num++;
          shadowLength = 4;
          markShipPos('player1Board');
        }
        break;
      case 1:
        if (Boards.player1Board.placeShip(battleship, newCoord, axis) === true) {
          num++;
          shadowLength = 3;
          markShipPos('player1Board');
        }
        break;
      case 2:
        if (Boards.player1Board.placeShip(destroyer, newCoord, axis) === true) {
          num++;
          markShipPos('player1Board');
        }
        break;
      case 3:
        if (Boards.player1Board.placeShip(submarine, newCoord, axis) === true) {
          num++;
          shadowLength = 2;
          markShipPos('player1Board');
        }
        break;
      case 4:
        if (Boards.player1Board.placeShip(patrolBoat, newCoord, axis) === true) {
          document.querySelector('.start').remove();
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
    const axisButton = document.querySelector('.start button');
    if (axis === 'x') {
      axis = 'y';
      axisButton.textContent = 'y';
    } else if (axis === 'y') {
      axis = 'x';
      axisButton.textContent = 'x';
    }
  };
  const hoverShadow = (e) => {
    const { coord } = e.path[0].dataset;
    for (let i = 0; i < shadowLength; i++) {
      const coordArray = coord.split(',').map((x) => +x);
      let newCoord = '';
      if (axis === 'x') {
        newCoord = `${coordArray[0] + i},${coordArray[1]}`;
      } else if (axis === 'y') {
        newCoord = `${coordArray[0]},${coordArray[1] + i}`;
      }
      const newCoordArray = newCoord.split(',');
      if (
        newCoordArray[0] > 10
                || newCoordArray[0] < 0
                || newCoordArray[1] > 10
                || newCoordArray[1] < 0
      ) {
        return;
      }
      const square = document.querySelector(`.start [data-coord='${newCoord}']`);
      square.classList.add('shadow');
    }
  };
  const removeShadow = (e) => {
    const { coord } = e.path[0].dataset;
    for (let i = 0; i < shadowLength + 1; i++) {
      const coordArray = coord.split(',').map((x) => +x);
      let newCoord = '';
      if (axis === 'x') {
        newCoord = `${coordArray[0] + i},${coordArray[1]}`;
      } else if (axis === 'y') {
        newCoord = `${coordArray[0]},${coordArray[1] + i}`;
      }
      const newCoordArray = newCoord.split(',');
      if (
        newCoordArray[0] > 10
                || newCoordArray[0] < 0
                || newCoordArray[1] > 10
                || newCoordArray[1] < 0
      ) {
        return;
      }
      const square = document.querySelector(`.start [data-coord='${newCoord}']`);
      square.classList.remove('shadow');
    }
  };
  const addDOMStuff = () => {
    const axisButton = document.querySelector('.start button');
    axisButton.addEventListener('click', changeAxis);
    const squares = document.querySelectorAll('.start .square');
    squares.forEach((square) => {
      square.addEventListener('click', placeBoat);
      square.addEventListener('mouseover', hoverShadow);
      square.addEventListener('mouseleave', removeShadow);
    });
  };

  return {
    addDOMStuff,
  };
})();

export default place;
