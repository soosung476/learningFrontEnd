import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export type LoginFormState = {
  id: string;
  password: string;
};

export type SignupFormState = {
  id: string;
  password: string;
  fullname: string;
};
const initialState: LoginFormState = { id: "", password: "" };

// createSlice() :  하나의 상태 state를 관리하기 위한 리덕스 모듈을 한 번에 만들어주는 함수
// 댓글 등록 삭제 전체삭제
const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    login: (state, action: PayloadAction<LoginFormState>) => {
      state.id = action.payload.id;
      state.password = action.payload.password;
    },
    logout: (state) => {
      state.id = "";
      state.password = "";
    },
  },
});
// 액션 함수 내보내기
export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
