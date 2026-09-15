import { useRef, useState } from "react";

const UseRefExam1 = () => {
  const [stateNum, setStateNum] = useState(0);
  const refNum = useRef(0);
  let myNum = 0;

  const plusState = () => {
    setStateNum((prev) => prev + 1);
    console.log("stateNum", stateNum);
    // 랜더링시 1로 변하기 때문에 0부터 시작.
  };
  const plusRef = () => {
    refNum.current++;
    console.log("refNum", refNum.current);
  };
  const plusMyNum = () => {
    console.log("일반 변수 증가", ++myNum);
  };

  return (
    <div>
      <h2 className="text-2xl">useRef 사용하기</h2>
      <div className="flex flex-col gap-2 m-3">
        <p>State : {stateNum}</p>
        <p>Ref : {refNum.current}</p>
        <p>myNum : {myNum}</p>
      </div>
      <div className="flex gap-2 m-3">
        <button
          className="border border-orange-500 p-2 m-2"
          onClick={plusState}
        >
          State 증가
        </button>
        <button className="border border-orange-500 p-2 m-2" onClick={plusRef}>
          Ref 증가
        </button>
        <button
          className="border border-orange-500 p-2 m-2 "
          onClick={plusMyNum}
        >
          myNum 증가
        </button>
      </div>
    </div>
  );
};

export default UseRefExam1;
