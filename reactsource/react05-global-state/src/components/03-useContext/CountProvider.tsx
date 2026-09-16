import { useState, type ReactNode } from "react";
import { CountContext } from "./CommonContext";

const CountProvider = ({ children }: { children: ReactNode }) => {
  const [count, setCount] = useState(0);
  const increaseCount = () => setCount((prev) => prev + 1);
  const decreaseCount = () => setCount((prev) => prev - 1);

  return (
    <div>
      <CountContext.Provider value={{ count, increaseCount, decreaseCount }}>
        {children}
      </CountContext.Provider>
    </div>
  );
};

export default CountProvider;
