import Square from "./Square";
import type { Squares } from "../types/type";
import { winner } from "../utils/util";

type BoardProps = {
  isNext: boolean;
  squares: Squares;
  handlePlay: (nextSquares: Squares) => void;
  onRestart: () => void;
};

const Board = ({ isNext, squares, handlePlay, onRestart }: BoardProps) => {
  // 9개의 Square 의 state 관리
  // const initialSquare: Squares = Array(9).fill(null);
  // const [squares, setSquares] = useState(initialSquare);

  const winningPlayer = winner(squares);

  const handleClick = (idx: number) => {
    // 이미 선택된 박스이거나 승자가 정해졌으면 선택이 불가
    if (squares[idx] || winningPlayer) return;
    // ... === slice()
    // 기존 배열 복사
    // const copySquares = [...squares]
    const copySquares = squares.slice();
    // 사용자가 선택한 sqaure의 값을 변경
    if (isNext) {
      copySquares[idx] = "X";
    } else {
      copySquares[idx] = "O";
    }
    // setIsNext(!isNext);
    // setSquares(copySquares);
    handlePlay(copySquares);
  };
  return (
    <div>
      <h3>
        {winningPlayer
          ? `Winner: ${winningPlayer}`
          : `Next player: ${isNext ? "X" : "O"}`}
      </h3>
      <div className="board-row">
        <Square value={squares[0]} handleClick={() => handleClick(0)}></Square>
        <Square value={squares[1]} handleClick={() => handleClick(1)}></Square>
        <Square value={squares[2]} handleClick={() => handleClick(2)}></Square>
      </div>
      <div className="board-row">
        <Square value={squares[3]} handleClick={() => handleClick(3)}></Square>
        <Square value={squares[4]} handleClick={() => handleClick(4)}></Square>
        <Square value={squares[5]} handleClick={() => handleClick(5)}></Square>
      </div>
      <div className="board-row">
        <Square value={squares[6]} handleClick={() => handleClick(6)}></Square>
        <Square value={squares[7]} handleClick={() => handleClick(7)}></Square>
        <Square value={squares[8]} handleClick={() => handleClick(8)}></Square>
      </div>
      <button
        className="bg-blue-300 mx-0.5 px-1 rounded my-2"
        onClick={onRestart}
      >
        Restart
      </button>
    </div>
  );
};

export default Board;
