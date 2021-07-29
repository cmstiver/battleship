import gameLogic from './gameLogic';

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
  const init = () => {
    populateSquares();
  };
  const markShipPos = () => {
    const playerArray = ['player1Board', 'player2Board'];
    playerArray.forEach((player) => {
      const { ships } = gameLogic[player].boardState;
      const shipsArray = Object.keys(ships);
      shipsArray.forEach((ship) => {
        const shipCoords = Object.keys(ships[ship].coords);
        shipCoords.forEach((coord) => {
          const square = document.querySelector(`#${player} [data-coord='${coord}']`);
          square.classList.add('square-occupied');
        });
      });
    });
  };
  return {
    init,
    markShipPos,
  };
})();

export default DOM;
