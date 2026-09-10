import { useState } from "react";
import "./App.css";
import Board from "./components/Board";
import type { Squares } from "./types/type";

function App() {
  // X, O 관리
  const [isNext, setIsNext] = useState(true);
  // history 관리
  const [history, setHistory] = useState<Squares[]>([Array(9).fill(null)]);
  // 이전 history 변수

  const [currentMove, setCurrentMove] = useState(0);

  const currentSquares = history[currentMove];
  const handlePlay = (nextSquare: Squares) => {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquare];
    setHistory(nextHistory);
    setIsNext(!isNext);
    setCurrentMove(nextHistory.length - 1);
  };
  const handleRestart = () => {
    setHistory([Array(9).fill(null)]);
    setIsNext(true);
    setCurrentMove(0);
  };

  // history 보여주기

  const jumpTo = (nextMove: number) => {
    setCurrentMove(nextMove);
    setIsNext(nextMove % 2 == 0);
  };
  const moves = history.map((_sqaures, move) => {
    let description;
    if (move > 0) {
      description = "Go to move #" + move;
    } else {
      description = "Go to game start";
    }
    return (
      <li key={move} className="mt-0.5">
        <button
          className="bg-gray-300 rounded p-0.5"
          onClick={() => jumpTo(move)}
        >
          {description}
        </button>
      </li>
    );
  });
  return (
    <>
      <div className="grid auto-cols-max grid-flow-col gap-4">
        <Board
          isNext={isNext}
          squares={currentSquares}
          handlePlay={handlePlay}
          onRestart={handleRestart}
        />
        <ul>
          <li>Game history</li>
          <ol>{moves}</ol>
        </ul>
      </div>
    </>
  );
}
export default App;
