import { createContext, useContext } from "react";

// id , password, isLogin, login(), logout()
type AuthContextType = {
  id: string;
  password?: string;
  isLoggedIn: boolean;
  login: (id: string, password: string) => void;
  logout: () => void;
};

export type LoginFormState = {
  id: string;
  password: string;
};

export type SignupFormState = {
  id: string;
  password: string;
  fullname: string;
};

export const AuthContext = createContext<AuthContextType | null>(null);

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("Context is null");
  }
  return context;
}
