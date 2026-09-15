function TodoHeader({
  getTodosByCompleted,
}: {
  getTodosByCompleted: (completed: string) => void;
}) {
  console.log("TodoHeader rendered");
  return (
    <div className="flex flex-wrap items-center justify-between gap-3 px-1 pb-4">
      <span className="text-left text-sm text-primary">중요 일정은 체크</span>
      <div className="flex shrink-0 items-center gap-2 text-sm text-muted">
        <label htmlFor="completed">완료</label>
        <select
          id="completed"
          name="completed"
          className="rounded-full border border-line bg-subtle px-3 py-2 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
          onChange={(e) => getTodosByCompleted(e.target.value)}
        >
          {[
            { label: "전체", value: "" },
            { label: "완료", value: "true" },
            { label: "미완료", value: "false" },
          ].map((opt, idx) => (
            <option key={idx} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default TodoHeader;
