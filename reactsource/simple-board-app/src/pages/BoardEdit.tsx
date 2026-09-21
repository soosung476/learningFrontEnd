import { useNavigate, useParams } from "react-router-dom";
import { putBoard } from "../apis/boardApi";
import BoardForm from "../components/BoardForm";
import useBoard from "../hooks/useBoard";
import type { BoardUpsert } from "../types/board";

const BoardEdit = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { board, loading } = useBoard(id);

  if (loading) {
    return <p>Loading....</p>;
  }
  if (!board) {
    return;
  }

  const onSubmit = async (board: BoardUpsert) => {
    if (!id) return;
    try {
      const result = await putBoard(id, board);
      console.log(result);
      navigate(`/boards/${id}`);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <BoardForm onSubmit={onSubmit} board={board} />
    </div>
  );
};

export default BoardEdit;
