import { useState } from "react";
import TopComp from "./TopComp";

const MyComp = () => {
  const [myData, setMyData] = useState({
    frontData: ["HTML5", "CSS3", "JavaScript", "React"],
    backData: ["JAVA", "PYTHON", "ORACLE", "Node.js"],
  });

  const frontClick = () => {
    myData.frontData.push("Typescript");
    setMyData(myData);
  };
  const backClick = () => {
    const newBack = [...myData.backData, "SpringBoot"];
    const newMyData = { ...myData, backData: newBack };
    setMyData(newMyData);
  };
  return (
    <div>
      {/* 개별 컴포넌트 삽입 */}
      <h2>React - 얕은비교</h2>
      <TopComp frontData={myData.frontData} backData={myData.backData} />
      <button className="p-4 border-2 border-orange-300" onClick={frontClick}>
        Add Front
      </button>
      <button className="p-4 border-2 border-orange-300" onClick={backClick}>
        Add Back
      </button>
    </div>
  );
};

export default MyComp;
