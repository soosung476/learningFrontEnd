import { useState } from "react";
const Change2 = () => {
  const [user, setUser] = useState({
    message: "",
    username: "",
  });
  const { username, message } = user;

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const reset = () => {
    setUser({
      message: "",
      username: "",
    });
  };
  return (
    <div>
      <h1>Change 이벤트</h1>
      <input
        type="text"
        name="message"
        placeholder="메세지"
        className="border rounded"
        value={message}
        onChange={onChange}
      />

      <input
        type="text"
        name="username"
        placeholder="이름"
        className="border rounded"
        value={username}
        onChange={onChange}
      />

      <button className="mx-1 bg-red-400 p-3" onClick={reset}>
        초기화
      </button>
      <button
        className="mx-1 bg-orange-400 p-3"
        onClick={() => alert(`${username} : ${message}`)}
      >
        확인
      </button>
    </div>
  );
};

export default Change2;
