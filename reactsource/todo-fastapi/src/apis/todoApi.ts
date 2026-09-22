import axios from "axios";
import type { TodoCreate, TodoUpsert } from "../types/todo";

const url = `http://127.0.0.1:8000/todos`;
// export const getTodos = async () => {
//   const response = await axios.get(`${url}`);
//   return response.data;
// };

export const getTodos = async (filter: boolean | null) => {
  const params = filter === null ? {} : { completed: filter };

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

export const putTodo = async (id: string, todo: TodoUpsert) => {
  const response = await axios.put(`${url}/${id}`, todo);
  return response.data;
};

export const deleteTodo = async (id: string) => {
  const response = await axios.delete(`${url}/${id}`);
  return response.data;
};
