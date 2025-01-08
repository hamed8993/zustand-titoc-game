export type SquareProps = {
  value: SquareItemEnum | null;
  //   value: "X" | "O" | null;
  onSquareClick: () => void;
};

export enum SquareItemEnum {
  x = "X",
  o = "O",
}
