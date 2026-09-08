import { useState } from "react";

const Switch = () => {
  // 문서 배경색 변경 black <=> white

  const [iswhite, setIswhite] = useState(true);

  const handleToggle = () => {
    const bodyStyle = document.body.classList;
    if (iswhite) {
      bodyStyle.remove("bg-white");
      bodyStyle.add("bg-black");
      setIswhite(false);
    } else {
      bodyStyle.remove("bg-black");
      bodyStyle.add("bg-white");
      setIswhite(true);
    }
  };

  return (
    <div>
      <button className="p-4 bg-amber-200" onClick={handleToggle}>
        Toggle
      </button>
    </div>
  );
};

export default Switch;
