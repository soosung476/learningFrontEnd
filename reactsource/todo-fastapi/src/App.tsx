import { useRef } from "react";
import { deleteTodo, postTodo, putTodo } from "./apis/todoApi";
import "./App.css";
import Loading from "./components/Loading";
import TodoHeader from "./components/TodoHeader";
import TodoInsert from "./components/TodoInsert";
import TodoList from "./components/TodoList";
import TodoTeamplate from "./components/TodoTemplate";
import useFetch from "./hooks/useFetch";
import { type TodoUpsert } from "./types/todo";

function App() {
  const { todos, loading, fetchData, completedFilter, setCompletedFilter } =
    useFetch();

  const nextid = useRef(4);
  const onInsert = async (todo: TodoUpsert) => {
    // todos 변경
    const newTodo = {
      ...todo,
      id: nextid.current,
      createDate: new Date(),
      lastModifiedDate: new Date(),
    };
    console.log(newTodo);
    // 데이터 타입 서버 요청
    const result = await postTodo(newTodo);
    if (result.message == "success") {
      fetchData(completedFilter);
      nextid.current++;
    }

    // rerendering 후에도 값을 유지함.
  };

  const onDelete = async (id: string) => {
    const result = await deleteTodo(id);
    if (result.message === "success") fetchData(completedFilter);
  };

  const onUpdate = async (id: number) => {
    const updateTodo = todos.find((todo) => todo.id === id);
    if (updateTodo) {
      updateTodo.completed = !updateTodo.completed;
      const result = await putTodo(String(id), updateTodo);
      if (result.message === "success") fetchData(completedFilter);
    }
  };

  const getTodosByCompleted = (completed: string) => {
    setCompletedFilter(completed === "" ? null : completed === "true");
  };
  // todos 값 확인
  // 컴포넌트 생명주기에 코드를 실행하고 싶을 때
  // 컴포넌트가 렌더링이 끝나면 자동으로 코드가 실행

  return (
    <>
      <TodoTeamplate>
        <TodoHeader getTodosByCompleted={getTodosByCompleted} />
        <TodoInsert onInsert={onInsert} />
        {loading ? (
          <Loading />
        ) : (
          <TodoList todos={todos} onDelete={onDelete} onUpdate={onUpdate} />
        )}
      </TodoTeamplate>
    </>
  );
}

export default App;
