import { SquareItemEnum } from "./../types/types";

function calculateTurns(squares: (SquareItemEnum | null)[]): number {
  return squares.filter((square) => !square).length;
}

export default calculateTurns;
