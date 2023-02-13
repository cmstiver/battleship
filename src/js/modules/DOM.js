import AI from './ai';
import { Players, Boards } from '../index';

const DOM = (() => {
  const gameboards = document.querySelectorAll('.gameboard');
  const populateSquares = () => {
    gameboards.forEach((element) => {
      for (let i = 0; i < 100; i++) {
        const y = Math.floor((i + 10) / 10);
        const x = i - Math.floor(i / 10) * 10 + 1;
        const square = document.createElement('div');
        square.classList.add('square');
        square.setAttribute('data-coord', `${x},${y}`);
        element.appendChild(square);
      }
    });
  };
  const markShipPos = (player) => {
    const { ships } = Boards[player].boardState;
    const shipsArray = Object.keys(ships);
    shipsArray.forEach((ship) => {
      const shipCoords = Object.keys(ships[ship].coords);
      shipCoords.forEach((coord) => {
        const square = document.querySelector(`#${player} [data-coord='${coord}']`);
        square.classList.add('square-occupied');
      });
    });
  };
  const unMarkShipPos = () => {
    const squares = document.querySelectorAll('.square');
    squares.forEach((square) => {
      square.classList.remove('square-occupied');
    });
  };
  const markMiss = (playerBoard) => {
    Boards[playerBoard].boardState.dodgedShots.forEach((coord) => {
      const square = document.querySelector(`#${playerBoard} [data-coord='${coord}']`);
      if (!square.classList.contains('miss')) {
        square.classList.add('miss');
      }
    });
  };
  const markHit = (playerBoard) => {
    const { ships } = Boards[playerBoard].boardState;
    const shipsArray = Object.keys(ships);
    shipsArray.forEach((ship) => {
      const coordArray = Object.keys(ships[ship].coords);
      coordArray.forEach((coord) => {
        if (ships[ship].coords[coord].isHit === true) {
          const square = document.querySelector(`#${playerBoard} [data-coord='${coord}']`);
          if (!square.classList.contains('hit')) {
            square.classList.add('hit');
          }
        }
      });
    });
  };
  const markSunkShips = (playerBoard) => {
    const { ships } = Boards[playerBoard].boardState;
    const shipsArray = Object.keys(ships);
    shipsArray.forEach((ship) => {
      if (ships[ship].isSunk()) {
        Object.keys(ships[ship].coords).forEach((coord) => {
          const square = document.querySelector(`#${playerBoard} [data-coord='${coord}']`);
          square.classList.add('skull');
        });
      }
    });
  };
  const passTurnScreen = (name) => {
    const container = document.querySelector('#start-container');
    container.innerHTML = `
    <div id="pass">
      <button onclick="this.parentNode.remove()">${name}'s Turn</button>
    </div>
    `;
  };
  const setTurn = (player) => {
    if (player === 'player1Board') {
      const playerBoard = document.querySelector('#player1Board');
      playerBoard.replaceWith(playerBoard.cloneNode(true));
      unMarkShipPos();
      markShipPos('player1Board');
      if (Players.player2.type === 'human') {
        passTurnScreen(Players.player1.name);
      }
    } else if (player === 'player2Board') {
      const playerBoard = document.querySelector('#player2Board');
      playerBoard.replaceWith(playerBoard.cloneNode(true));
      unMarkShipPos();
      if (Players.player2.type === 'human') {
        markShipPos('player2Board');
        passTurnScreen(Players.player2.name);
      }
      if (Players.player2.type === 'comp') {
        AI.selectCoord();
      }
    }
  };
  const displayWin = (player) => {
    alert(`${player} wins`);
  };
  const changePlayerHeader = () => {
    const player1 = document.querySelector('#player1header');
    const player2 = document.querySelector('#player2header');
    player1.textContent = `${Players.player1.name}:`;
    player2.textContent = `${Players.player2.name}:`;
  };
  const addEventListeners = () => {
    const squares = document.querySelectorAll('#gameboards-container .square');
    squares.forEach((square) => {
      square.addEventListener('click', getCoord);
    });
  };
  function getCoord(e) {
    const playerBoard = e.target.parentElement.id;
    const { coord } = e.composedPath()[0].dataset;
    launchAttack(playerBoard, coord);
  }
  function launchAttack(playerBoard, coord) {
    const alreadyShot = Boards[playerBoard].boardState.dodgedShots;
    const alreadyShot2 = [];
    const { ships } = Boards[playerBoard].boardState;
    const shipsArray = Object.keys(ships);
    shipsArray.forEach((ship) => {
      const coordArray = Object.keys(ships[ship].coords);
      coordArray.forEach((coord2) => {
        if (ships[ship].coords[coord2].isHit === true) {
          alreadyShot2.push(coord2);
        }
      });
    });
    if (alreadyShot.includes(coord) || alreadyShot2.includes(coord)) {
      return false;
    }
    Boards[`${playerBoard}`].receiveAttack(coord);
    markMiss(playerBoard);
    markHit(playerBoard);
    markSunkShips(playerBoard);
    addEventListeners();
    setTurn(playerBoard);
    return true;
  }
  return {
    changePlayerHeader,
    populateSquares,
    launchAttack,
    setTurn,
    addEventListeners,
    markShipPos,
    displayWin,
  };
})();

export default DOM;
