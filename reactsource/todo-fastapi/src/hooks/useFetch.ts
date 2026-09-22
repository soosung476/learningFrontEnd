import { useCallback, useEffect, useState } from "react";
import { getTodos } from "../apis/todoApi";
import type { Todo } from "../types/todo";

export const useFetch = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [completedFilter, setCompletedFilter] = useState<boolean | null>(null);

  // useCallback(함수, [의존성함수]) : 렌더링해도 새로운 함수로 만들지 마
  const fetchData = useCallback(async (completedFilter: boolean | null) => {
    setLoading(true);
    try {
      const serverData = await getTodos(completedFilter);
      setTodos(serverData.todos);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchData(completedFilter);
  }, [fetchData, completedFilter]);

  return { todos, loading, fetchData, completedFilter, setCompletedFilter };
};

export default useFetch;
