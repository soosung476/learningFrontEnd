import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { addTodo, clearTodo, deleteTodo, updateTodo } from "./todoSlice";

const TodoApp = () => {
  const todos = useAppSelector((state) => state.myTodos.todos);
  // useReducer() 했던 방식 dispatch()
  const dispatch = useAppDispatch();

  const [contents, setContents] = useState("");

  return (
    <div className="flex flex-col mx-6">
      <h2 className="text-3xl mt-3 text-center">Todo App</h2>
      <ul className="border-b-2 my-2 p-2">
        {todos.map((todo) => (
          <li className="my-1" key={todo.idx}>
            <input
              type="checkbox"
              name="done"
              className="mx-2"
              onChange={() => {
                dispatch(updateTodo(todo.idx));
                console.log(todo.done);
              }}
            />
            <span className={`mr-3 ${todo.done ? "line-through" : ""}`}>
              {todo.contents}
            </span>
            <button
              className="bg-red-400 p-2 mx-1 text-white rounded"
              onClick={() => dispatch(deleteTodo(todo.idx))}
            >
              삭제
            </button>
          </li>
        ))}
      </ul>
      <textarea
        name="contents"
        rows={3}
        className="border p-4"
        value={contents}
        onChange={(e) => setContents(e.target.value)}
      >
        {contents}
      </textarea>
      <button
        className="bg-orange-400 p-2 mx-1 rounded"
        onClick={() => {
          dispatch(addTodo(contents));
          setContents("");
        }}
      >
        Todo추가
      </button>

      <button
        className="bg-gray-400 p-2 mx-1"
        onClick={() => dispatch(clearTodo())}
      >
        전체삭제
      </button>
    </div>
  );
};

export default TodoApp;
