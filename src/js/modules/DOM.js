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
  const setTurn = (player) => {
    if (player === 'player1Board') {
      const playerBoard = document.querySelector('#player1Board');
      playerBoard.replaceWith(playerBoard.cloneNode(true));
    } else if (player === 'player2Board') {
      const playerBoard = document.querySelector('#player2Board');
      playerBoard.replaceWith(playerBoard.cloneNode(true));
      if (Players.player2.type === 'comp') {
        AI.selectCoord();
      }
    }
  };
  const displayWin = (player) => {
    alert(`${player} wins`);
  };
  const addEventListeners = () => {
    const squares = document.querySelectorAll('#gameboards-container .square');
    squares.forEach((square) => {
      square.addEventListener('click', getCoord);
    });
  };
  function getCoord(e) {
    const playerBoard = e.target.parentElement.id;
    const { coord } = e.path[0].dataset;
    launchAttack(playerBoard, coord);
  }
  function launchAttack(playerBoard, coord) {
    Boards[`${playerBoard}`].receiveAttack(coord);
    markMiss(playerBoard);
    markHit(playerBoard);
    markSunkShips(playerBoard);
    addEventListeners();
    setTurn(playerBoard);
  }
  return {
    populateSquares,
    launchAttack,
    setTurn,
    addEventListeners,
    markShipPos,
    displayWin,
  };
})();

export default DOM;
