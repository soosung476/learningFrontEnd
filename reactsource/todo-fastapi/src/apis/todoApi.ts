import axios from "axios";
import type { TodoCreate } from "../types/todo";

const url = `http://127.0.0.1:8000/todos`;
// export const getTodos = async () => {
//   const response = await axios.get(`${url}`);
//   return response.data;
// };

export const getTodos = async (
  filter: boolean | null,
  page: number,
  size: number,
) => {
  const params: { page: number; size: number; completed?: null | boolean } = {
    page,
    size,
  };
  if (filter !== null) {
    params.completed = filter;
  }

  const response = await axios.get(`${url}/`, { params });
  return response.data;
};

export const getTodo = async (id: string) => {
  const response = await axios.get(`${url}/${id}`);
  return response.data;
};

export const postTodo = async (todo: TodoCreate) => {
  const response = await axios.post(`${url}`, todo);
  return response.data;
};

export const putTodo = async (id: string, todo: { completed: boolean }) => {
  const response = await axios.put(`${url}/${id}`, todo);
  return response.data;
};

export const deleteTodo = async (id: string) => {
  const response = await axios.delete(`${url}/${id}`);
  return response.data;
};
