function createShip(name, length) {
  return {
    hit(coords) {
      this.coords[coords].isHit = true;
    },
    isSunk() {
      return Object.values(this.coords).every((value) => value.isHit === true);
    },
    name,
    length,
  };
}

export default createShip;
