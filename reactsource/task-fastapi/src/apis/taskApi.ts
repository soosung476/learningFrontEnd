import axios from "axios";
import type { TaskPageResponse, TaskProps } from "../types/type";

const url = `http://127.0.0.1:8000/tasks`;

export const getTasks = async (
  page: number,
  size: number,
): Promise<TaskPageResponse> => {
  const response = await axios.get(url, { params: { page, size } });
  return response.data;
};

export const postTask = async (text: string) => {
  const response = await axios.post(url, { text, done: false });
  return response.data;
};

export const putTask = async (task: TaskProps) => {
  const { id, text, done } = task;
  const response = await axios.put(`${url}/${id}`, { text, done });
  return response.data;
};

// DELETE /tasks/{id}
export const deleteTask = async (id: number) => {
  const response = await axios.delete(`${url}/${id}`);
  return response.data;
};
