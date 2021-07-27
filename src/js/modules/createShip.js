function createShip(name, length) {
  return {
    hit(coords) {
      this.coords[coords].isHit = true;
    },
    isSunk() {},
    name,
    length,
  };
}

export default createShip;
