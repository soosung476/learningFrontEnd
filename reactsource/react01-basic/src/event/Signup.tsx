import { useState } from "react";

const Signup = () => {
  //   const onSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
  //     // submit 중지
  //     e.preventDefault();

  //     // formData 모두 가져오기
  //     const formData = new FormData(e.currentTarget);
  //     const username = formData.get("username");
  //     const email = formData.get("email");
  //     console.log(username, email);
  //   };
  const [form, setForm] = useState({
    username: "",
    email: "",
  });

  const { username, email } = form;

  const onSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (username && email) {
      console.log(username, email);
    } else {
      alert("모든 값을 입력해주세요");
    }
  };

  return (
    <div>
      <h1>Submit 이벤트</h1>
      <form action="/" method="post" onSubmit={onSubmit}>
        <input
          type="text"
          name="username"
          placeholder="이름"
          className="border rounded"
          value={username}
          onChange={(e) => setForm({ ...form, username: e.target.value })}
        />
        <input
          type="email"
          name="email"
          placeholder="이메일"
          className="border rounded"
          value={email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />

        <button className="mx-1 bg-orange-400 p-3" type="submit">
          확인
        </button>
      </form>
    </div>
  );
};

export default Signup;
