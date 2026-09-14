import { useState } from "react";
import type { TaskProps } from "./MainTask";
import { RiCheckboxBlankFill, RiCheckboxFill } from "react-icons/ri";

type TaskListProps = {
  tasks: TaskProps[];
  handleUpdateTask: (task: TaskProps) => void;
  onRemoveTask: (id: number) => void;
};
// Omit <타입명 , "제거할 속성"> & { 추가할 속성 }
type TaskItemProps = Omit<TaskListProps, "tasks"> & {
  task: TaskProps;
};
const ItemTask = ({ task, handleUpdateTask, onRemoveTask }: TaskItemProps) => {
  const [isEditing, setIsEditing] = useState(false);
  const [isDone, setIsDone] = useState(task.done);
  const [text, setText] = useState(task.text);

  // save 버튼 클릭시
  // 현재 task의 text를 변경한다 => Main에서 내려온 함수 노출 => isEditing false
  const taskTextChange = () => {
    handleUpdateTask({
      ...task,
      text: text,
    });
    setIsEditing(false);
  };

  // 클릭 시 checkbox 변경
  const CheckBoxIcon = isDone ? RiCheckboxFill : RiCheckboxBlankFill;

  const taskDoneChange = () => {
    // isDone 변경
    setIsDone(!isDone);
    handleUpdateTask({
      ...task,
      done: !isDone,
    });
  };

  return (
    <div className="flex items-center justify-between px-3 py-2">
      <div className="flex items-center gap-3 w-full mr-2">
        <CheckBoxIcon onClick={taskDoneChange} />

        {isEditing ? (
          <input
            type="text"
            className="border p-2 w-full"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        ) : (
          <span className="text-gray-800">{text}</span>
        )}
      </div>
      <div className="flex items-center gap-2">
        {isEditing ? (
          <button
            type="button"
            className="rounded border px-3 py-2 text-sm text-green-600 hover:text-green-800"
            onClick={taskTextChange}
          >
            Save
          </button>
        ) : (
          <button
            type="button"
            className="rounded border px-3 py-2 text-sm text-green-600 hover:text-green-800"
            onClick={() => setIsEditing(true)}
          >
            Edit
          </button>
        )}
        <button
          type="button"
          className="rounded border px-3 py-2 text-sm text-red-600 hover:text-red-800"
          onClick={() => onRemoveTask(task.id)}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

const ListTask = ({ tasks, handleUpdateTask, onRemoveTask }: TaskListProps) => {
  return (
    <div className="space-y-3">
      {tasks.map((task) => (
        <ItemTask
          key={task.id}
          task={task}
          handleUpdateTask={handleUpdateTask}
          onRemoveTask={onRemoveTask}
        />
      ))}
    </div>
  );
};

export default ListTask;
