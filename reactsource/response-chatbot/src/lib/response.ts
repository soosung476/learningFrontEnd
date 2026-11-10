import { openai } from "./openai";

// openai 서버 요청

// interface sendMessageParams {
//   message: string;
//   previous_response_id?: string | null;
// }
//
// export const sendMessage = async ({
//   message,
//   previous_response_id,
// }: sendMessageParams) => {
//   const response = await openai.responses.create({
//     model: import.meta.env.VITE_OPENAI_MODEL || "gpt-6-luna",
//     reasoning: { effort: "high" },
//     instructions: `당신은 친절하고 정확한 AI 어시스턴트입니다.
//     사용자의 질문에 한국어로 답변하세요.
//     필요한 경우 예시를 들어 이해하기 쉽게 설명하세요.`,
//     input: message,
//     // previous_response_id 가 존재하는 경우만 추가 (이전 대화 맥락 이어가기)
//     ...(previous_response_id && { previous_response_id }),
//   });
//   // id 는 다음 요청의 previous_response_id 로 사용
//   return { id: response.id, text: response.output_text };
// };

interface sendMessageParams {
  message: string;
  previous_response_id?: string | null;
  onDelta: (text: string) => void;
}
export const sendMessage = async ({
  message,
  previous_response_id,
  onDelta,
}: sendMessageParams) => {
  const stream = await openai.responses.create({
    model: import.meta.env.VITE_OPENAI_MODEL || "gpt-6-luna",
    reasoning: { effort: "high" },
    instructions: `당신은 친절하고 정확한 AI 어시스턴트입니다.
    사용자의 질문에 한국어로 답변하세요.
    필요한 경우 예시를 들어 이해하기 쉽게 설명하세요.`,
    input: message,
    // previous_response_id 가 존재하는 경우만 추가 (이전 대화 맥락 이어가기)
    ...(previous_response_id && { previous_response_id }),
    stream: true,
  });
  let responseId: string | null = null;

  for await (const event of stream) {
    if (event.type === "response.output_text.delta") {
      onDelta(event.delta);
    }

    // 응답 생성이 완료된 경우
    if (event.type === "response.completed") {
      responseId = event.response.id;
    }

    // 스트리밍 도중 오류 이벤트가 발생한 경우
    if (event.type === "error") {
      throw new Error(event.message);
    }
  }

  if (!responseId) {
    throw new Error("응답이 정상적으로 완료되지 않았습니다.");
  }
  // id 는 다음 요청의 previous_response_id 로 사용
  return { id: responseId };
};
