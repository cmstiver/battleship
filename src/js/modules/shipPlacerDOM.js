import DOM from './DOM';
import { Boards, Players } from '../index';
import {
  carrier, battleship, destroyer, submarine, patrolBoat,
} from './ships';

const place = (() => {
  let axis = 'x';
  let num = 0;
  let shadowLength = 5;
  let player = 'player1Board';
  const markShipPos = (plr) => {
    const { ships } = Boards[plr].boardState;
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
        if (Boards[player].placeShip(carrier, newCoord, axis) === true) {
          num++;
          shadowLength = 4;
          markShipPos(player);
        }
        break;
      case 1:
        if (Boards[player].placeShip(battleship, newCoord, axis) === true) {
          num++;
          shadowLength = 3;
          markShipPos(player);
        }
        break;
      case 2:
        if (Boards[player].placeShip(destroyer, newCoord, axis) === true) {
          num++;
          markShipPos(player);
        }
        break;
      case 3:
        if (Boards[player].placeShip(submarine, newCoord, axis) === true) {
          num++;
          shadowLength = 2;
          markShipPos(player);
        }
        break;
      case 4:
        if (Boards[player].placeShip(patrolBoat, newCoord, axis) === true) {
          document.querySelector('.start').remove();
          num = 0;
          shadowLength = 5;
          axis = 'x';
          if (player === 'player1Board') {
            if (Players.player2.type === 'comp') {
              DOM.addEventListeners();
              DOM.setTurn('player1Board');
              DOM.markShipPos(player);
            } else {
              makeSecondWindow();
            }
          }
          if (player === 'player2Board') {
            DOM.addEventListeners();
            DOM.setTurn('player1Board');
          }
          player = 'player2Board';
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
  const makeSecondWindow = () => {
    document.querySelector('#start-container').innerHTML = `
        <div class="start">
          <div id="shipPlacer" class="gameboard"></div>
          <button>X</button>
        </div>
    `;
    const start = document.querySelector('.start #shipPlacer');
    for (let i = 0; i < 100; i++) {
      const y = Math.floor((i + 10) / 10);
      const x = i - Math.floor(i / 10) * 10 + 1;
      const square = document.createElement('div');
      square.classList.add('square');
      square.setAttribute('data-coord', `${x},${y}`);
      start.appendChild(square);
    }
    addDOMStuff();
  };

  return {
    addDOMStuff,
  };
})();

export default place;
