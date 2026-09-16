import {
  MdCheckBox,
  MdCheckBoxOutlineBlank,
  MdNotificationImportant,
  MdRemoveCircleOutline,
} from "react-icons/md";
import type { TodoProps } from "./todo";

const TodoListItem = ({ todo, onDelete, onUpdate }: TodoProps) => {
  // todo 분해

  const { id, title, completed, important } = todo;

  // console.log("TodoListItem rendered");

  // todo의 completed 값 변경

  const CheckboxIcon = completed ? MdCheckBox : MdCheckBoxOutlineBlank;

  // 빼기 클릭 시 부모의 onDelete()호출

  return (
    <div
      className={`flex items-center gap-3 rounded-2xl border px-4 py-3 transition-colors ${
        completed
          ? "border-success-line bg-success-soft text-success"
          : "border-line bg-subtle text-ink hover:bg-primary-soft"
      }`}
    >
      <div className="flex min-w-0 grow items-center">
        <CheckboxIcon
          className={`size-4 shrink-0 cursor-pointer ${completed ? "text-success" : "text-muted"}`}
          onClick={() => {
            onUpdate(id);
          }}
        />

        <div className={`ml-2 flex min-w-0 items-center text-left `}>
          {important && (
            <MdNotificationImportant className="mr-1 shrink-0 text-primary" />
          )}
          <span className={`wrap-anywhere ${completed ? "line-through" : ""}`}>
            {title}
          </span>
        </div>
      </div>
      <div className="flex size-9 shrink-0 cursor-pointer items-center justify-center rounded-full text-2xl text-danger transition-colors hover:bg-danger-soft hover:text-danger-hover">
        <MdRemoveCircleOutline onClick={() => onDelete(id)} />
      </div>
    </div>
  );
};

export default TodoListItem;
