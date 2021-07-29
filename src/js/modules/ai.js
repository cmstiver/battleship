import DOM from './DOM';

const AI = (() => {
  function randomizeCoord() {
    const x = Math.floor(Math.random() * 10) + 1;
    const y = Math.floor(Math.random() * 10) + 1;
    return `${x},${y}`;
  }
  function selectCoord() {
    const coord = randomizeCoord();
    DOM.launchAttack('player1Board', coord);
  }
  return {
    selectCoord,
  };
})();

export default AI;
