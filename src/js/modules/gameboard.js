function createGameBoard() {
  return {
    placeShip(ship, coords, axis, player) {
      let selectedPlayer;
      if (player === 1) {
        selectedPlayer = 'player1';
      } else if (player === 2) {
        selectedPlayer = 'player2';
      }
      let shipObj = this.gameState[selectedPlayer].ships[ship.name];
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
      this.gameState[selectedPlayer][ship.name] = shipObj;
    },
    receiveAttack(coords, defendingPlayer) {
      const player = this.gameState[defendingPlayer].ships;
      const playerArray = Object.keys(player);
      let hit = false;
      playerArray.forEach((ship) => {
        if (Object.keys(player[ship].coords).includes(coords) === true) {
          player[ship].hit(coords);
          hit = true;
        }
      });
      if (hit === false) {
        this.gameState[defendingPlayer].dodgedShots.push(coords);
      }
    },
    isGameOver() {},
    gameState: {
      player1: {
        ships: {},
        dodgedShots: [],
      },
      player2: {
        ships: {},
        dodgedShots: [],
      },
    },
  };
}

export default createGameBoard;
