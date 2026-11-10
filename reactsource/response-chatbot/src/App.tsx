import {
  ArrowDown,
  Code2,
  Lightbulb,
  PenLine,
  Sparkles,
  type LucideIcon,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";
import ChatHeader from "./components/ChatHeader";
import ChatInput from "./components/ChatInput";
import Sidebar from "./components/Sidebar";
import type { ChatMessageType } from "./types/chat";
import { sendMessage } from "./lib/response";
import ChatMessage from "./components/ChatMessage";

const suggestions: {
  icon: LucideIcon;
  title: string;
  desc: string;
  prompt: string;
}[] = [
  {
    icon: Lightbulb,
    title: "개념 설명",
    desc: "어려운 기술 개념을 쉽게 설명해 줘.",
    prompt: "Response API가 무엇인지 쉽게 설명해 줘.",
  },
  {
    icon: Code2,
    title: "코드 작성",
    desc: "프로그래밍 코드를 작성하고 분석해줘.",
    prompt: "React와 TypeScript를 사용한 간단한 예제를 보여 줘..",
  },
  {
    icon: PenLine,
    title: "글쓰기",
    desc: "문서나 자연스럽고 명확하게 다듬어 줘.",
    prompt: "AI 기술에 관한 짧은 소개글 작성해 줘.",
  },
];

function App() {
  // 메세지 전송 openai
  // 화면에 표시할 대화 목록
  const [message, setMessage] = useState<ChatMessageType[]>([]);
  // API 응답 생성 여부
  const [loading, setLoading] = useState(false);

  const [previousResponseId, setPreviousResponseId] = useState<string | null>(
    null,
  );

  // 새 대화 시작 시 진행중인 이전 요청의 결과를 무시하기 위한 식별자
  const requestIdRef = useRef(0);

  // const handleSend = async (content: string) => {
  //   console.log("user 입력값", content);

  //   if (!content.trim() || loading) return;
  //   const requestId = ++requestIdRef.current;
  //   // {role:"user", content:content}

  //   const userMessage: ChatMessageType = {
  //     id: crypto.randomUUID(),
  //     role: "user",
  //     content: content,
  //     createdAt: new Date(),
  //   };

  //   setMessage((prev) => [...prev, userMessage]);
  //   setLoading(true);

  //   try {
  //     const result = await sendMessage({
  //       message: content,
  //       previous_response_id: previousResponseId,
  //     });
  //     console.log("ai 답변", result);

  //     // 요청 중 새 대화가 시작됐다면, 이전 결과는 반영하지 않음.
  //     if (requestId !== requestIdRef.current) return;

  //     setPreviousResponseId(result.id);

  //     const assistantMessage: ChatMessageType = {
  //       id: crypto.randomUUID(),
  //       role: "assistant",
  //       content: result.text || "응답 내용이 없습니다.",
  //       createdAt: new Date(),
  //     };
  //     setMessage((prev) => [...prev, assistantMessage]);
  //   } catch (error) {
  //     console.log("OPENAI 호출 오류", error);
  //     const errorMessage: ChatMessageType = {
  //       id: crypto.randomUUID(),
  //       role: "assistant",
  //       content:
  //         "알 수 없는 오류가 발생했습니다. API키, 모델설정, 결제정보를 확인해주세요.",
  //       createdAt: new Date(),
  //     };
  //     setMessage((prev) => [...prev, errorMessage]);
  //   } finally {
  //     if (requestId === requestIdRef.current) {
  //       setLoading(false);
  //     }
  //   }
  // };

  const handleSend = async (content: string) => {
    console.log("user 입력값", content);

    if (!content.trim() || loading) return;
    const requestId = ++requestIdRef.current;
    // {role:"user", content:content}

    const userMessage: ChatMessageType = {
      id: crypto.randomUUID(),
      role: "user",
      content: content,
      createdAt: new Date(),
    };

    const assistantId = crypto.randomUUID();
    const assistantMessage: ChatMessageType = {
      id: assistantId,
      role: "assistant",
      content: "",
      createdAt: new Date(),
    };
    setMessage((prev) => [...prev, userMessage, assistantMessage]);

    setLoading(true);

    try {
      const result = await sendMessage({
        message: content,
        previous_response_id: previousResponseId,
        onDelta: (text) => {
          setMessage((prev) =>
            prev.map((m) =>
              m.id === assistantId ? { ...m, content: m.content + text } : m,
            ),
          );
        },
      });

      if (requestId !== requestIdRef.current) return;

      console.log("ai 답변", result);

      // 요청 중 새 대화가 시작됐다면, 이전 결과는 반영하지 않음.
      if (requestId !== requestIdRef.current) return;

      setPreviousResponseId(result.id);
    } catch (error) {
      console.log("OPENAI 호출 오류", error);

      setMessage((prev) =>
        prev.map((m) =>
          m.id === assistantId
            ? {
                ...m,
                content:
                  m.content +
                  "알 수 없는 오류가 발생했습니다. API키, 모델설정, 결제정보를 확인해주세요",
              }
            : m,
        ),
      );
    } finally {
      if (requestId === requestIdRef.current) {
        setLoading(false);
      }
    }
  };

  // 첫 텍스트(delta)가 도착하기 전까지만 로딩 표시
  const lastMessage = message[message.length - 1];
  const waitingFirstToken =
    loading && lastMessage?.role === "assistant" && lastMessage.content === "";

  // 화면 스크롤
  const messageEndRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    messageEndRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [message, loading]);

  // 새 대화 시작
  const handleNewChat = () => {
    // 이전 요청 무효화.
    requestIdRef.current++;

    // 이전 메세지 초기화
    setMessage([]);
    // 이전 리스폰스 아이디 초기화
    setPreviousResponseId(null);
    // loading값 초기화
    setLoading(false);
  };

  return (
    <div className="flex h-screen overflow-hidden bg-white text-slate-800">
      <Sidebar onNewChat={handleNewChat} />

      <main className="flex min-w-0 flex-1 flex-col">
        <ChatHeader />

        {/* Chat Body */}
        <section className="relative flex min-h-0 flex-1 flex-col overflow-y-auto">
          {message.length === 0 ? (
            // 메세지가 없는 경우 : Welcome Screen
            <div className="flex flex-1 flex-col items-center justify-center px-5 py-12">
              {/* Welcome Screen */}
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-indigo-600 text-white shadow-lg shadow-indigo-200">
                <Sparkles size={30} />
              </div>

              <h2 className="text-center text-2xl font-bold tracking-tight text-slate-800 md:text-3xl">
                무엇을 도와드릴까요?
              </h2>

              <p className="mt-3 text-center text-sm text-slate-400">
                궁금한 내용을 입력하고 AI와 대화를 시작해 보세요.
              </p>

              {/* Suggestion Cards */}
              <div className="mt-10 grid w-full max-w-3xl grid-cols-1 gap-3 sm:grid-cols-3">
                {suggestions.map(({ icon: Icon, title, desc, prompt }) => (
                  <button
                    key={title}
                    onClick={() => handleSend(prompt)}
                    className="group rounded-2xl border border-slate-200 bg-white p-5 text-left transition hover:-translate-y-1 hover:border-indigo-200 hover:bg-indigo-50/40 hover:shadow-md"
                  >
                    <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600 transition group-hover:bg-indigo-100">
                      <Icon size={20} />
                    </div>

                    <h3 className="text-sm font-semibold text-slate-800">
                      {title}
                    </h3>

                    <p className="mt-2 text-xs leading-5 text-slate-400">
                      {desc}
                    </p>

                    <div className="mt-4 flex items-center justify-end text-slate-300 transition group-hover:text-indigo-600">
                      <ArrowDown size={16} />
                    </div>
                  </button>
                ))}
              </div>
            </div>
          ) : (
            // 메세지가 있는 경우 : Message List
            <div className="mx-auto flex w-full max-w-3xl flex-1 flex-col px-4 py-8 md:px-6">
              <div className="flex-1 space-y-8">
                {/* Message List */}
                {message.map((m) => (
                  <ChatMessage key={m.id} message={m} />
                ))}
                {/* Loading Indicator */}

                {waitingFirstToken && (
                  <div className="flex items-start gap-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-indigo-600 text-white">
                      <Sparkles size={18} />
                    </div>

                    <div className="rounded-2xl rounded-tl-sm border border-slate-100 bg-slate-50 px-5 py-4">
                      <div className="flex gap-1.5">
                        <span className="h-2 w-2 animate-bounce rounded-full bg-indigo-400" />
                        <span className="h-2 w-2 animate-bounce rounded-full bg-indigo-400 [animation-delay:150ms]" />
                        <span className="h-2 w-2 animate-bounce rounded-full bg-indigo-400 [animation-delay:300ms]" />
                      </div>
                    </div>
                  </div>
                )}
                {/* scroll Ref */}
                <div ref={messageEndRef}></div>
                <div />
              </div>
            </div>
          )}
        </section>

        {/* Input */}
        <ChatInput onSend={handleSend} disabled={loading} />
      </main>
    </div>
  );
}

export default App;
