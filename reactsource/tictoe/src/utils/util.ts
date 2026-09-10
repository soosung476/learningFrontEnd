import type { Squares } from "../types/type";

// 승자 계산하는 함수
export function winner(squares: Squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [idx1, idx2, idx3] = lines[i];
    if (
      squares[idx1] &&
      squares[idx1] === squares[idx2] &&
      squares[idx2] === squares[idx3]
    ) {
      return squares[idx1];
    }
  }
  return null;
}
