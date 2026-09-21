import { useEffect, useState } from "react";
import { getBoard, getComments } from "../apis/boardApi";
import type { Board, Comment } from "../types/board";

const useBoard = (id: string | undefined) => {
  const [board, setBoard] = useState<Board | null>(null);
  const [loading, setLoading] = useState(true);
  const [comments, setComments] = useState<Comment[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      if (!id) return;

      try {
        const serverData = await getBoard(id);
        const serverCommentData = await getComments(id);
        setBoard(serverData);
        setComments(serverCommentData);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [id]);

  return { board, comments, loading };
};

export default useBoard;
