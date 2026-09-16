import type { TodosProps } from "./todo";
import TodoListItem from "./TodoListItem";

const TodoList = ({ todos, onDelete, onUpdate }: TodosProps) => {
  return (
    <div className="mt-4 flex flex-col gap-2">
      {todos.map((todo) => (
        <TodoListItem
          key={todo.id}
          todo={todo}
          onDelete={onDelete}
          onUpdate={onUpdate}
        />
      ))}
    </div>
  );
};

export default TodoList;
