import { SquareItemEnum } from "../types/types";
import calculateStatus from "../utils/calculate-status";
import calculateTurns from "../utils/calculate-turns";
import calculateWinner from "../utils/calculate-winner";
import Square from "./square";

type BoardProps = {
  xIsNext: boolean;
  squares: (SquareItemEnum | null)[];
  onPlay: (nextSquares: (SquareItemEnum | null)[]) => void;
};

export default function Board({ xIsNext, squares, onPlay }: BoardProps) {
  const winner = calculateWinner(squares);
  const turns = calculateTurns(squares);
  const player = xIsNext ? SquareItemEnum.x : SquareItemEnum.o;
  console.log("turns>>", turns);
  const status = calculateStatus(winner, turns, player);

  function handleClick(i: number) {
    if (squares[i] || winner) return;
    const nextSquares = squares.slice();
    nextSquares[i] = player;
    onPlay(nextSquares);
  }

  return (
    <>
      <div style={{ marginBottom: "0.5rem" }}>{status}</div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gridTemplateRows: "repeat(3, 1fr)",
          width: "calc(3 * 2.5rem)",
          height: "calc(3 * 2.5rem)",
          border: "1px solid #999",
        }}
      >
        {squares.map((_, i: number) => (
          <Square
            key={`square-${i}`}
            value={squares[i]}
            onSquareClick={() => handleClick(i)}
          />
        ))}
      </div>
    </>
  );
}
