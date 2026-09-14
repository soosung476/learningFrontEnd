import { useState } from "react";
import AddTask from "./AddTask";
import ListTask from "./ListTask";

export type TaskProps = {
  id: number;
  text: string;
  done: boolean;
};

const initialTask: TaskProps[] = [
  { id: 0, text: "Visit kafka Museum", done: true },
  { id: 1, text: "Watch a puppet show", done: false },
  { id: 2, text: "Lennon wall pic", done: false },
];
let nextId = 3;
const MainTask = () => {
  // 여행계획
  const [tasks, setTasks] = useState<TaskProps[]>(initialTask);

  // 여행계획 추가하는 함수

  const handleAddTask = (text: string) => {
    setTasks([
      ...tasks,
      {
        id: nextId++,
        text: text,
        done: false,
      },
    ]);
  };

  const handleUpdateTask = (task: TaskProps) => {
    setTasks((prev) =>
      prev.map((t) => (t.id === task.id ? { ...t, ...task } : t)),
    );
  };
  const handleRemoveTask = (taskID: number) => {
    setTasks(tasks.filter((task) => task.id !== taskID));
  };

  return (
    <div className="mt-10 flex justify-center">
      <div className="w-full max-w-xl space-y-6 rounded-lg bg-white shadow-md">
        <h2 className="text-center text-2xl font-semibold">체코 프라하 여행</h2>
        <AddTask handleAddTask={handleAddTask} />
        <ListTask
          tasks={tasks}
          handleUpdateTask={handleUpdateTask}
          onRemoveTask={handleRemoveTask}
        />
      </div>
    </div>
  );
};

export default MainTask;
