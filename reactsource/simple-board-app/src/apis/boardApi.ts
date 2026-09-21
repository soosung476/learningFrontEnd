import axios from "axios";
import type { BoardUpsert } from "../types/board";

const url = `https://jsonplaceholder.typicode.com/posts`;
export const getBoards = async (limit: number = 10) => {
  const response = await axios.get(`${url}?_limit=${limit}`);
  return response.data;
};

export const getBoard = async (id: string) => {
  const response = await axios.get(`${url}/${id}`);
  return response.data;
};

export const postBoard = async (board: BoardUpsert) => {
  const response = await axios.post(`${url}`, board);
  return response.data;
};

export const putBoard = async (id: string, board: BoardUpsert) => {
  const response = await axios.put(`${url}/${id}`, board);
  return response.data;
};

export const deleteBoard = async (id: string) => {
  const response = await axios.delete(`${url}/${id}`);
  return response.data;
};

export const getComments = async (id: string) => {
  const response = await axios.get(`${url}/${id}/comments`);
  return response.data;
};
