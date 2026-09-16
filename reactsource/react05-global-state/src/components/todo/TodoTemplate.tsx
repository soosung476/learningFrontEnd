import { type ReactNode } from "react";

const TodoTeamplate = ({ children }: { children: ReactNode }) => {
  // console.log("TodoTeamplate rendered");

  return (
    <div className="mx-auto mt-6 w-full max-w-2xl overflow-hidden rounded-3xl bg-surface shadow-xl shadow-ink/10 sm:mt-10">
      <div className="bg-primary px-6 py-5 text-center text-3xl font-semibold text-white">
        일정 관리
      </div>
      <div className="p-4 sm:p-6">{children}</div>
    </div>
  );
};

export default TodoTeamplate;
