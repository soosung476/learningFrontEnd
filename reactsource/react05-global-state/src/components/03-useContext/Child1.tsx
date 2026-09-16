import { useContext } from "react";
import { CountContext } from "./CommonContext";

const Child2 = () => {
  const context = useContext(CountContext);
  if (!context) {
    throw new Error("Context가 없습니다");
  }
  const { count, increaseCount, decreaseCount } = context;
  return (
    <div>
      <h2 className="text-3xl">Child2</h2>
      <p>count : {count}</p>
      <button className="border rounded p-2" onClick={increaseCount}>
        증가
      </button>
      <button className="border rounded p-2" onClick={decreaseCount}>
        감소
      </button>
    </div>
  );
};

const Child1 = () => {
  return (
    <div>
      <h2 className="text-3xl">Child1</h2>
      <Child2 />
    </div>
  );
};

export default Child1;
