function calculateTurns(squares) {
  return squares.filter((square) => !square).length;
}

export default calculateTurns;
