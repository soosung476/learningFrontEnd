import { useState, type ReactNode } from "react";
import { OnContext } from "./CommonContext";

const OnProvider = ({ children }: { children: ReactNode }) => {
  const [isOn, setIsOn] = useState(false);
  const toggleOn = () => {
    setIsOn((prev) => !prev);
  };
  return (
    <OnContext.Provider value={{ isOn, toggleOn }}>
      {children}
    </OnContext.Provider>
  );
};

export default OnProvider;
