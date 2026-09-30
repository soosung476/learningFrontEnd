import { useSearchParams } from "react-router-dom";
import { deleteTodo, postTodo, putTodo } from "./apis/todoApi";
import "./App.css";
import Loading from "./components/Loading";
import Pagination from "./components/Pagination";
import TodoHeader from "./components/TodoHeader";
import TodoInsert from "./components/TodoInsert";
import TodoList from "./components/TodoList";
import TodoTeamplate from "./components/TodoTemplate";
import useFetch from "./hooks/useFetch";
import { type TodoUpsert } from "./types/todo";

function App() {
  const { todos, loading, fetchData } = useFetch();

  const [searchParams, setSearchParams] = useSearchParams();
  const page = Number(searchParams.get("page")) || 1;
  const size = Number(searchParams.get("size")) || 10;
  const completedParam = searchParams.get("completed");
  const completed = completedParam === null ? null : completedParam === "true";

  // total page 가져오기
  const { total_pages } = todos;

  const onInsert = async (todo: TodoUpsert) => {
    // 데이터 타입 서버 요청
    const result = await postTodo(todo);

    if (page === 1 && completed === null) {
      await fetchData(null, 1, size);
      return;
    }
    if (result.message) {
      setSearchParams({ page: "1", size: String(size) });
    }

    // rerendering 후에도 값을 유지함.
  };

  const onDelete = async (id: string) => {
    const result = await deleteTodo(id);
    if (result.message) {
      console.log(result.message);
      await fetchData(completed, page, size);
    }
  };

  const onUpdate = async (id: number) => {
    const updateTodo = todos.items.find((todo) => todo.id === id);

    if (updateTodo) {
      const change_completed = !updateTodo.completed;
      const result = await putTodo(String(id), { completed: change_completed });
      if (result.message) {
        await fetchData(completed, page, size);
      }
    }
  };

  const getTodosByCompleted = (newCompleted: string) => {
    const params: {
      page: string;
      size: string;
      completed?: string;
    } = { page: String(page), size: String(size) };
    if (newCompleted !== "") {
      params.completed = newCompleted;
      params.page = "1";
    }

    setSearchParams(params);
  };
  // todos 값 확인
  // 컴포넌트 생명주기에 코드를 실행하고 싶을 때
  // 컴포넌트가 렌더링이 끝나면 자동으로 코드가 실행

  const onPageChange = (newPage: number) => {
    const params: {
      page: string;
      size: string;
      completed?: string;
    } = { page: String(newPage), size: String(size) };
    if (completed !== null) {
      params.completed = String(completed);
    }

    setSearchParams(params);
  };
  return (
    <>
      <TodoTeamplate>
        <TodoHeader
          getTodosByCompleted={getTodosByCompleted}
          completed={completed}
        />
        <TodoInsert onInsert={onInsert} />
        {loading ? (
          <Loading />
        ) : (
          <TodoList
            todos={todos.items}
            onDelete={onDelete}
            onUpdate={onUpdate}
          />
        )}
      </TodoTeamplate>
      <Pagination
        page={page}
        totalPages={total_pages}
        onPageChange={onPageChange}
      />
    </>
  );
}

export default App;
