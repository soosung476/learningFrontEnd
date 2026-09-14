import { useState } from "react";

const AddTask = ({
  handleAddTask,
}: {
  handleAddTask: (text: string) => void;
}) => {
  const [text, setText] = useState<string>("");
  return (
    <div className="flex gap-2">
      <input
        type="text"
        name="text"
        className="flex-1 rounded border px-3 py-2 focus:ring-2 focus:ring-orange-400 focus:outline-0"
        onChange={(e) => setText(e.target.value)}
        value={text}
        placeholder="여행 계획 입력"
      />
      <button
        type="button"
        className="rounded bg-orange-300 px-4 py-2 text-white transition hover:bg-orange-600 "
        onClick={() => handleAddTask(text)}
      >
        Add
      </button>
    </div>
  );
};

export default AddTask;
