import { useEffect, useState } from "react";

const Counter = () => {
  // 함수
  // set* 함수 : 변수값을 변경, 화면을 리페인팅 해줘

  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log(count);
  }, [count]);

  // const increase = () => setCount((prev) => prev + 1);
  const decrease = () => setCount((prev) => prev - 1);

  return (
    <div className="grid grid-cols-2 gap-4 w-sm m-3">
      <h1 className="text-3xl col-span-2 text-center">{count}</h1>
      <button
        type="button"
        className="increase p-4 bg-orange-500"
        onClick={() => setCount((prev) => prev + 1)}
      >
        +
      </button>
      <button
        type="button"
        className="decrease p-4 bg-red-500"
        onClick={decrease}
      >
        -
      </button>
    </div>
  );
};

export default Counter;
