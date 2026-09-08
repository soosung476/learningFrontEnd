import { useState } from "react";

const Say = () => {
  const [message, setMessage] = useState("");

  const [color, setColor] = useState("black");

  // 입장
  const onClickEnter = () => setMessage("안녕하세요");
  // 퇴장
  const onClickLeave = () => setMessage("안녕히가세요");

  const changeColor = (color: string) => setColor(color);
  // message 색상 변경

  return (
    // 입장버튼을 누르면 "안녕하세요" 라는 글자가 보이기 <h2>안에
    // 퇴장버튼을 누르면 "안녕히가세요" 라는 글자가 보이기 <h2>안에

    <div>
      <div>
        <button onClick={onClickEnter}>입장</button>
        <button onClick={onClickLeave}>퇴장</button>
      </div>
      <h2 style={{ color }}>{message}</h2>
      <button onClick={() => changeColor("red")}>빨강</button>
      <button onClick={() => changeColor("green")}>초록</button>
      <button onClick={() => changeColor("blue")}>파랑</button>
    </div>
  );
};

export default Say;
