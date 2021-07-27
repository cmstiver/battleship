function createGameBoard() {
  return {
    placeShip(ship, coords, axis) {
      this.shipPositions[ship.name] = {
        coords: [],
      };
      if (axis === 'x') {
        for (let i = 0; i < ship.length; i++) {
          const newCoords = [coords[0] + i, coords[1]];
          this.shipPositions[ship.name].coords.push(newCoords);
        }
      } else if (axis === 'y') {
        for (let i = 0; i < ship.length; i++) {
          const newCoords = [coords[0], coords[1] + i];
          this.shipPositions[ship.name].coords.push(newCoords);
        }
      }
    },
    receiveAttack() {},
    isGameOver() {},
    shipPositions: {},
  };
}

export default createGameBoard;
