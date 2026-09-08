import { useState } from "react";

const InputMultipleSample = () => {
  // input 여러개를 하나의 state로 관리
  // {name:'홍길동', nickname:'의적'} 객체로 여러가지 한꺼번에
  const [inputs, setInputs] = useState({
    name: "",
    nickname: "",
  });

  const { name, nickname } = inputs;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // const name = e.target.name;
    // const value = e.target.value;
    const { name, value } = e.target;

    // 새 객체를 만들어 다음 상태로 전달한다. inputs 원본을 직접 수정하지 않는다.
    // setInputs 호출은 다음 렌더링을 요청하며, 현재 함수의 inputs 값을 즉시 바꾸진 않는다.
    setInputs({
      // 객체 펼침(spread): 기존 inputs의 모든 속성을 새 객체에 복사한다.
      // useState의 객체 상태는 자동으로 합쳐지지 않으므로 다른 입력값을 보존하려고 쓴다.
      ...inputs,
      // [name]은 "계산된 속성 이름" 문법이다. 배열을 만드는 괄호가 아니다.
      // name이 "nickname"이면 nickname: value, "name"이면 name: value가 된다.
      [name]: value,
    });
  };
  const onReset = () => {
    setInputs({ name: "", nickname: "" });
  };

  return (
    <div>
      <input type="text" name="name" onChange={handleChange} value={name} />
      <input
        type="text"
        name="nickname"
        onChange={handleChange}
        value={nickname}
      />
      <button onClick={onReset}>초기화</button>
      <h2>
        현재값 : {name}({nickname})
      </h2>
    </div>
  );
};

export default InputMultipleSample;
