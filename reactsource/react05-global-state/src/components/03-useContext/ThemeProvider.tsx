import { useState, type ReactNode } from "react";
import { ThemeContext } from "./CommonContext";
// 2. 생성된 Context 객체를 통해 Provider 생성
const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [isDark, setIsDark] = useState(false);
  // setIsDark 공유 시 => 관리여부에 따라서 작성
  // 모든 자식들이 동일한 방법으로 state 변경하기
  const toggleTheme = () => {
    setIsDark((prev) => !prev);
  };

  // 혹은
  // setIsDark를 내려서 자식 컴포넌트에서 알아서 사용하게끔 가능.
  return (
    <div>
      <ThemeContext.Provider value={{ isDark, toggleTheme }}>
        {children}
        
      </ThemeContext.Provider>
    </div>
  );
};

export default ThemeProvider;
