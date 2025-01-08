function calculateStatus(winner, turns, player) {
  if (!winner && !turns) return "Draw";
  if (winner) return `Winner ${winner}`;
  return `Next player: ${player}`;
}

export default calculateStatus;
