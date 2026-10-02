import axios from "axios";
import type { CommentCreate, CommentUpdate } from "../types/board";

const url = `http://127.0.0.1:8000/comments`;

export const postComment = async (comment: CommentCreate) => {
  const response = await axios.post(`${url}`, comment);
  return response.data;
};

export const putComment = async (id: string, comment: CommentUpdate) => {
  const response = await axios.put(`${url}/${id}`, comment);
  return response.data;
};

export const deleteComment = async (id: string) => {
  const response = await axios.delete(`${url}/${id}`);
  return response.data;
};
