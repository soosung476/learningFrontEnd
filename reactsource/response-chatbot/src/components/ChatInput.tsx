import { ArrowUp, Paperclip } from "lucide-react";
import { useState } from "react";

type ChatInputProps = {
  onSend: (message: string) => void;
  disabled?: boolean;
};
function ChatInput({ onSend, disabled = false }: ChatInputProps) {
  // textarea 변경 값 관리
  const [input, setInput] = useState("");

  // textarea 에서 enter를 치면 submit() 누른 효과
  // shift+enter 줄바꿈
  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey && !e.nativeEvent.isComposing) {
      e.preventDefault();
      // disabled 상태면 Enter 전송 막기
      if (disabled) return;
      e.currentTarget.form?.requestSubmit();
    }
  };
  const handleSubmit = (e: React.SubmitEvent) => {
    e.preventDefault();
    // disabled 상태면 어떤 경로로 들어온 submit이든 막기
    if (disabled) return;
    const message = input.trim();
    if (!message) return;
    onSend(message);
    setInput("");
  };

  return (
    <div className="shrink-0 bg-white px-4 pb-5 pt-3 md:px-8">
      <form className="mx-auto max-w-3xl" onSubmit={handleSubmit}>
        <div className="rounded-2xl border border-slate-200 bg-white p-3 shadow-sm transition focus-within:border-indigo-300 focus-within:ring-4 focus-within:ring-indigo-50">
          <textarea
            value={input}
            onKeyDown={handleKeyDown}
            onChange={(e) => setInput(e.target.value)}
            placeholder="메시지를 입력하세요..."
            rows={2}
            className="max-h-40 min-h-14 w-full resize-none bg-transparent px-2 py-2 text-sm leading-6 text-slate-800 outline-none placeholder:text-slate-400 disabled:opacity-50"
          />

          <div className="flex items-center justify-between">
            <button
              type="button"
              className="rounded-lg p-2 text-slate-400 transition hover:bg-slate-100 hover:text-slate-700"
              title="파일 첨부 (준비 중)"
            >
              <Paperclip size={18} />
            </button>

            <button
              type="submit"
              disabled={disabled || !input.trim()}
              className="flex h-9 w-9 items-center justify-center rounded-xl bg-indigo-600 text-white transition hover:bg-indigo-700 disabled:cursor-not-allowed disabled:bg-slate-200 disabled:text-slate-400"
              aria-label="메시지 전송"
            >
              <ArrowUp size={19} />
            </button>
          </div>
        </div>

        <p className="mt-3 text-center text-[11px] text-slate-400">
          AI의 답변은 부정확할 수 있습니다. 중요한 정보는 확인해 주세요.
        </p>
      </form>
    </div>
  );
}

export default ChatInput;
