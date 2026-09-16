import { useEffect, useReducer, useRef, useState } from "react";
import "../../App.css";
import { initialTodos, type TodoUpsert } from "./todo";
import { todoReducer } from "./todo.reducer";
import TodoHeader from "./TodoHeader";
import TodoInsert from "./TodoInsert";
import TodoList from "./TodoList";
import TodoTeamplate from "./TodoTemplate";

function TodoMain() {
  // const [todos, setTodos] = useState<Todo[]>(initialTodos);
  const [todos, dispatch] = useReducer(todoReducer, initialTodos);
  const [filter, setFilter] = useState("");

  const nextid = useRef(4);
  const onInsert = (todo: TodoUpsert) => {
    const newTodo = {
      ...todo,
      id: nextid.current,
      createDate: new Date(),
      lastModifiedDate: new Date(),
    };
    dispatch({
      type: "INS",
      payload: newTodo,
    });
    nextid.current++;
  };

  const onDelete = (id: number) => {
    dispatch({
      type: "DEL",
      payload: id,
    });
  };

  const onUpdate = (id: number) => {
    dispatch({
      type: "UPD",
      payload: id,
    });
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

export default TodoMain;
