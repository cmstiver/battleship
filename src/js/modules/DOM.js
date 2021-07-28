const DOM = (() => {
  const gameboards = document.querySelectorAll('.gameboard');
  const populateSquares = () => {
    gameboards.forEach((element) => {
      for (let i = 0; i < 100; i++) {
        const x = Math.floor((i + 10) / 10);
        const y = i - Math.floor(i / 10) * 10 + 1;
        const square = document.createElement('div');
        square.classList.add('square');
        square.setAttribute('data-coord', `[${x},${y}]`);
        element.appendChild(square);
      }
    });
  };
  const init = () => {
    populateSquares();
  };
  return {
    init,
  };
})();

export default DOM;
