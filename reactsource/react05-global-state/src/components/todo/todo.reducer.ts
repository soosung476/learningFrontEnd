import { type Todo } from "./todo";

export type TodoAction =
  | { type: "INS"; payload: Todo }
  | { type: "DEL"; payload: number }
  | { type: "UPD"; payload: number };

export function todoReducer(todos: Todo[], action: TodoAction) {
  switch (action.type) {
    case "INS":
      return [...todos, action.payload];
    case "DEL":
      return todos.filter((todo) => todo.id !== action.payload);

    case "UPD":
      return todos.map((todo) => {
        if (todo.id === action.payload) {
          return {
            ...todo,
            completed: !todo.completed,
            lastModifiedDate: new Date(),
          };
        } else {
          return todo;
        }
      });
    default:
      return todos;
  }
}
