function createGameBoard() {
  return {
    placeShip(ship, coords, axis, player) {
      let selectedPlayer;
      if (player === 1) {
        selectedPlayer = 'player1';
      } else if (player === 2) {
        selectedPlayer = 'player2';
      }
      let shipObj = this.shipPositions[selectedPlayer][ship.name];
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
      this.shipPositions[selectedPlayer][ship.name] = shipObj;
    },
    receiveAttack() {},
    isGameOver() {},
    shipPositions: {
      player1: {},
      player2: {},
    },
  };
}

export default createGameBoard;
