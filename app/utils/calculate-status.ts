import { SquareItemEnum } from "../types/types";

function calculateStatus(
  winner: SquareItemEnum | null,
  turns: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9,
  player: SquareItemEnum
): 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | string {
  if (!winner && !turns) return "Draw";
  if (winner) return `Winner ${winner}`;
  return `Next player: ${player}`;
}

export default calculateStatus;
