import Child1 from "./Child1";
import Child3 from "./Child3";
import CountProvider from "./CountProvider";
import OnProvider from "./OnProvider";

const UseContextExam2 = () => {
  return (
    <div>
      <CountProvider>
        <h2 className="text-3xl">CountContext</h2>
        <Child1 />
      </CountProvider>
      <OnProvider>
        <h2 className="text-3xl">isOn값 변경 예제</h2>
        <Child3 />
      </OnProvider>
    </div>
  );
};

export default UseContextExam2;
