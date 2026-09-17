import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface Comment {
  id: number;
  contents: string;
}

interface CommentState {
  comments: Comment[];
}
const initialState: CommentState = { comments: [] };

// createSlice() :  하나의 상태 state를 관리하기 위한 리덕스 모듈을 한 번에 만들어주는 함수
// 댓글 등록 삭제 전체삭제
const commentSlice = createSlice({
  name: "myComment",
  initialState: initialState,
  reducers: {
    addComment: (state, action: PayloadAction<string>) => {
      state.comments.push({ id: Date.now(), contents: action.payload });
    },
    deleteComment: (state, action: PayloadAction<number>) => {
      state.comments = state.comments.filter(
        (comment) => comment.id !== action.payload,
      );
    },
    clearComment: (state) => {
      state.comments = [];
    },
  },
});
// 액션 함수 내보내기
export const { addComment, deleteComment, clearComment } = commentSlice.actions;
export default commentSlice.reducer;
