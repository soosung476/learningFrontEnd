import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface Todo {
  idx: number;
  contents: string;
  done: boolean;
}

interface TodoState {
  todos: Todo[];
}

const initialState: TodoState = { todos: [] };

const todoSlice = createSlice({
  name: "myTodos",
  initialState: initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<string>) => {
      state.todos.push({
        idx: Date.now(),
        contents: action.payload,
        done: false,
      });
    },
    deleteTodo: (state, action: PayloadAction<number>) => {
      state.todos = state.todos.filter((todo) => todo.idx !== action.payload);
    },
    updateTodo: (state, action: PayloadAction<number>) => {
      // find() : id일치한 todo 찾아서
      // todo.done = !todo.done
      const todo = state.todos.find((todo) => todo.idx === action.payload);
      if (todo) {
        todo.done = !todo.done;
      }
    },
    clearTodo: (state) => {
      state.todos = [];
    },
  },
});
export const { addTodo, deleteTodo, updateTodo, clearTodo } = todoSlice.actions;
export default todoSlice.reducer;
