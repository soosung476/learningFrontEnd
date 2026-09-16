import { useContext } from "react";
import { ThemeContext } from "./CommonContext";

const ThemeBox = () => {
  const context = useContext(ThemeContext);
  // box 스타일 생성
  if (!context) {
    throw new Error("ThemeContext is null");
  }
  const { isDark } = context;

  const boxStyle: React.CSSProperties = {
    padding: "20px",
    margin: "10px",
    backgroundColor: isDark ? "#333" : "#eee",
    color: isDark ? "#fff" : "#000",
    textAlign: "center",
  };

  return (
    <div style={boxStyle}>현재 테마 : {isDark ? "다크모드" : "라이트모드"}</div>
  );
};

export default ThemeBox;
