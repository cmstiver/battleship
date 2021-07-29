const createPlayer = (name, type) => {
  let turn = false;
  const passTurn = () => {
    turn = false;
  };
  return {
    passTurn,
    turn,
    name,
    type,
  };
};

export default createPlayer;
