// 1. Context로 사용할 객체 생성

import { createContext, useContext } from "react";

type ThemeContextType = {
  isDark: boolean;
  toggleTheme: () => void;
};
type CountContextType = {
  count: number;
  increaseCount: () => void;
  decreaseCount: () => void;
};

// Context 널 체크를 custom hook 으로 생성
export function useCount() {
  const context = useContext(CountContext);
  if (!context) {
    throw new Error("Context is null");
  }
  return context;
}

type OnContextType = {
  isOn: boolean;
  toggleOn: () => void;
};

export const ThemeContext = createContext<ThemeContextType | null>(null);

export const CountContext = createContext<CountContextType | null>(null);

export const OnContext = createContext<OnContextType | null>(null);
