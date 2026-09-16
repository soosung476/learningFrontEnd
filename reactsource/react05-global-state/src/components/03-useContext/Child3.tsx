// isOn => 상태변수 공유
// Child3 의 자식 Child4
// 3번에서 isOn값을 출력
// Child4 버튼으로 isOn값 변경

import { useContext } from "react";
import { OnContext } from "./CommonContext";

const Child4 = () => {
  const context = useContext(OnContext);
  if (!context) {
    throw new Error("컨텍스트가 없습니다.");
  }
  const { toggleOn } = context;
  return (
    <div>
      <button className="border rounded p-2" onClick={toggleOn}>
        Toggle
      </button>
    </div>
  );
};

const Child3 = () => {
  const context = useContext(OnContext);
  if (!context) {
    throw new Error("Context가 없습니다.");
  }
  const { isOn } = context;
  return (
    <div>
      <Child4 />
      <p className={isOn ? "text-blue-500" : "text-red-500"}>
        {isOn ? "On" : "Off"}
      </p>
    </div>
  );
};

export default Child3;
