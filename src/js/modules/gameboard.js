function createGameBoard() {
  return {
    placeShip(ship, coords, axis, player) {
      let selectedPlayer;
      if (player === 1) {
        selectedPlayer = 'player1';
      } else if (player === 2) {
        selectedPlayer = 'player2';
      }
      this.shipPositions[selectedPlayer][ship.name] = {
        coords: [],
      };
      if (axis === 'x') {
        for (let i = 0; i < ship.length; i++) {
          const newCoords = [coords[0] + i, coords[1]];
          this.shipPositions[selectedPlayer][ship.name].coords.push(newCoords);
        }
      } else if (axis === 'y') {
        for (let i = 0; i < ship.length; i++) {
          const newCoords = [coords[0], coords[1] + i];
          this.shipPositions[selectedPlayer][ship.name].coords.push(newCoords);
        }
      }
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
