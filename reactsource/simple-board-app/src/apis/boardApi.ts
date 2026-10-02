import axios from "axios";
import type { BoardCreate, BoardUpdate } from "../types/board";

const url = `http://127.0.0.1:8000/boards`;
export const getBoards = async (page: number, size: number) => {
  const response = await axios.get(`${url}`, { params: { page, size } });
  return response.data;
};

export const getRecents = async () => {
  const response = await axios.get(`${url}/recents`);
  return response.data;
};

export const getBoard = async (id: string) => {
  const response = await axios.get(`${url}/${id}`);
  return response.data;
};

export const postBoard = async (board: BoardCreate) => {
  const response = await axios.post(`${url}`, board);
  return response.data;
};

export const putBoard = async (id: string, board: BoardUpdate) => {
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
