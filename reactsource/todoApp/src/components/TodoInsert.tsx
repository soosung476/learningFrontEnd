import React, { useState } from "react";
import { MdAdd } from "react-icons/md";
import type { TodoUpsert } from "../types/todo";

const TodoInsert = ({ onInsert }: { onInsert: (todo: TodoUpsert) => void }) => {
  const [form, setForm] = useState({
    title: "",
    important: false,
  });

  // form 분해
  const { important, title } = form;

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    // form 안에 title 변경
    // 폼안의 요소가 checkbox가 존재하는 경우 type, checked도 가져오기
    setForm({
      ...form,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  // + 클릭시 form submit 이벤트 발생 처리
  const handleSubmit = (e: React.SubmitEvent) => {
    e.preventDefault();
    onInsert({
      title: title,
      completed: false,
      important: important,
    });
    setForm({
      title: "",
      important: false,
    });
  };

  return (
    <form className="flex items-center gap-2 rounded-2xl border border-line bg-subtle p-2 transition-shadow focus-within:ring-2 focus-within:ring-primary" onSubmit={handleSubmit}>
      <input
        aria-label="중요 일정"
        name="important"
        type="checkbox"
        className="ml-2 size-4 shrink-0 cursor-pointer accent-primary"
        onChange={handleFormChange}
        checked={important}
      />
      <input
        aria-label="할 일"
        name="title"
        type="text"
        placeholder="할 일을 입력하세요"
        className="min-w-0 grow bg-transparent py-2 text-ink placeholder:text-muted focus:outline-none"
        onChange={handleFormChange}
        value={title}
      />
      <button
        type="submit"
        aria-label="할 일 추가"
        className="flex size-10 shrink-0 cursor-pointer items-center justify-center rounded-full bg-primary text-xl text-white transition-colors hover:bg-primary-hover focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
      >
        <MdAdd />
      </button>
    </form>
  );
};

export default TodoInsert;
