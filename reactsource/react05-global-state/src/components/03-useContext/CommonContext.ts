// 1. Context로 사용할 객체 생성

import { createContext } from "react";

type ThemeContextType = {
  isDark: boolean;
  toggleTheme: () => void;
};
type CountContextType = {
  count: number;
  increaseCount: () => void;
  decreaseCount: () => void;
};

type OnContextType = {
  isOn: boolean;
  toggleOn: () => void;
};

export const ThemeContext = createContext<ThemeContextType | null>(null);

export const CountContext = createContext<CountContextType | null>(null);

export const OnContext = createContext<OnContextType | null>(null);
