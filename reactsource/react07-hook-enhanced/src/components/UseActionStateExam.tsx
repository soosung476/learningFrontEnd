import { useActionState } from "react";

async function authLogin(_prevState: null | string, formData: FormData) {
  const userid = formData.get("userid");
  const password = formData.get("password");

  await new Promise((resolve) => setTimeout(resolve, 1000));

  if (userid === "hong" && password === "1234") {
    return "로그인 성공";
  } else {
    return "로그인 실패";
  }
}

const UseActionStateExam = () => {
  // message : authLogin이 반환한 값
  const [message, formAction, ispending] = useActionState(authLogin, null);
  return (
    <div>
      <h2 className="tex-3xl">useActionState</h2>
      <form action={formAction}>
        <div>
          <label htmlFor="">아이디</label>
          <input
            type="text"
            name="userid"
            placeholder="아이디"
            className="border rounded p-2"
          />
        </div>
        <div>
          <label htmlFor="">비밀번호</label>
          <input
            type="password"
            name="password"
            placeholder="비밀번호"
            className="border rounded p-2"
          />
        </div>
        <button type="submit" className="border p-2 bg-amber-300 rounded">
          로그인
        </button>
        {ispending ? "전송중" : message}
      </form>
    </div>
  );
};

export default UseActionStateExam;
