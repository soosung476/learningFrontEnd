import { useState } from "react";

const Nickname = () => {
  // 닉네임에 text를 입력하면 입력된 닉네임에 그대로 나옴.

  const [text, setText] = useState("");
  const [isVisible, setIsVisible] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };
  return (
    <div>
      <div>
        <label htmlFor="">닉네임</label>
        <input type="text" name="nickname" onChange={handleChange} />
      </div>
      <div>
        <label htmlFor="">입력된 닉네임</label>
        <input type="text" name="" value={text} />
      </div>
      <button onClick={() => setIsVisible(!isVisible)}>
        {isVisible ? "숨기기" : "보이기"}
      </button>
      {/* && : 조건부 렌더링 */}
      {/* isVisible 이 true 일 때만 p 태그 보여주기 */}
      {isVisible && <p>안녕하세요!!</p>}
    </div>
  );
};

export default Nickname;
