import { useEffect, useRef, useState } from "react";
import "./App.css";
import TodoHeader from "./components/TodoHeader";
import TodoInsert from "./components/TodoInsert";
import TodoTeamplate from "./components/TodoTemplate";
import { initialTodos, type Todo, type TodoUpsert } from "./types/todo";
import TodoList from "./components/TodoList";

function App() {
  const [todos, setTodos] = useState<Todo[]>(initialTodos);
  const [filter, setFilter] = useState("");

  const nextid = useRef(4);
  const onInsert = (todo: TodoUpsert) => {
    // todos 변경
    const newTodo = {
      ...todo,
      id: nextid.current,
      createDate: new Date(),
      lastModifiedDate: new Date(),
    };
    console.log(newTodo);
    setTodos([...todos, newTodo]);
    // rerendering 후에도 값을 유지함.
    nextid.current++;
  };

  const onDelete = (id: number) => {
    // todos 에서 삭제된 id와 동일한 todo가 아닌 것들만 남김
    // filter() => 새로운 배열
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const onUpdate = (id: number) => {
    // todos 에서 id와 동일한 todo를 찾아서 completed의 값을 반대로 변경
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed,
            lastModifiedDate: new Date(),
          };
        } else {
          return todo;
        }
      }),
    );
  };

  const filteredTodos = todos.filter((todo) => {
    if (filter === "") {
      return true;
    } else if (filter === "true") {
      return todo.completed === true;
    } else {
      return todo.completed === false;
    }
  });

  const getTodosByCompleted = (completed: string) => {
    setFilter(completed);
  };
  // todos 값 확인
  // 컴포넌트 생명주기에 코드를 실행하고 싶을 때
  useEffect(() => {
    console.log(todos);
  }, [todos]);

  return (
    <>
      <TodoTeamplate>
        <TodoHeader getTodosByCompleted={getTodosByCompleted} />
        <TodoInsert onInsert={onInsert} />
        <TodoList
          todos={filteredTodos}
          onDelete={onDelete}
          onUpdate={onUpdate}
        />
      </TodoTeamplate>
    </>
  );
}

export default App;
