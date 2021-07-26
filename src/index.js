import './style.css';

function createShip(shipLength) {
  function createHitArray(length) {
    const a = new Array(length);
    for (let i = 0; i < length; ++i) a[i] = false;
    return a;
  }
  return {
    isSunk() {
      return this.hitArray.every((value) => value === true);
    },
    hit(num) {
      this.hitArray[num] = true;
    },
    hitArray: createHitArray(shipLength),
    shipLength,
  };
}
