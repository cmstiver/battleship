function createShip() {
  return {
    createShipPos(...args) {
      args.forEach((arg) => {
        this.shipPos[arg] = {
          hit: false,
        };
      });
    },
    isSunk() {
      return Object.values(this.shipPos).every((value) => value.hit === true);
    },
    hit(num) {
      this.shipPos[num].hit = true;
    },
    shipPos: {},
  };
}

export default createShip;
