import { useCallback, useEffect, useState } from "react";
import { getTodos } from "../apis/todoApi";
import type { TodoPageResponse } from "../types/todo";
import { useSearchParams } from "react-router-dom";

const initData = {
  items: [],
  total: 0,
  page: 1,
  size: 10,
  completed: null,
  total_pages: 0,
};

export const useFetch = () => {
  const [todos, setTodos] = useState<TodoPageResponse>(initData);
  const [loading, setLoading] = useState<boolean>(false);

  // URL의 파라메터 값 가져오기 ( ? 뒤의 값 가져오기 ) => useSearchParams()

  const [searchParams, setSearchParams] = useSearchParams();
  const page = Number(searchParams.get("page")) || 1;
  const size = Number(searchParams.get("size")) || 10;
  const completedParam = searchParams.get("completed");
  const completed = completedParam === null ? null : completedParam === "true";

  const fetchData = useCallback(
    async (completedFilter: boolean | null, page: number, size: number) => {
      setLoading(true);
      try {
        const serverData = await getTodos(completedFilter, page, size);
        setTodos(serverData);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    },
    [],
  );

  useEffect(() => {
    fetchData(completed, page, size);
  }, [fetchData, completed, page, size]);

  return { todos, loading, fetchData };
};

export default useFetch;
