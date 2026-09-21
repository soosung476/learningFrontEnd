import { useNavigate } from "react-router-dom";
import { postBoard } from "../apis/boardApi";
import BoardForm from "../components/BoardForm";
import { type BoardUpsert } from "../types/board";

const BoardWrite = () => {
  const navigate = useNavigate();
  const onSubmit = async (board: BoardUpsert) => {
    try {
      const result = await postBoard(board);
      console.log(result);
      navigate("/boards");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      {/* Form */}

      <BoardForm onSubmit={onSubmit} />
    </div>
  );
};

export default BoardWrite;
