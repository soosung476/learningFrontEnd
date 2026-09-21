import { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { deleteBoard } from "../apis/boardApi";
import useBoard from "../hooks/useBoard";

const BoardDetail = () => {
  const { id } = useParams();
  useState();
  const navigate = useNavigate();
  const { loading, board, comments } = useBoard(id);

  if (loading) {
    return <p>Loading....</p>;
  }
  const deleteClick = async (id: string | undefined) => {
    if (!id) {
      return;
    }
    try {
      const deletedata = await deleteBoard(id);
      console.log("삭제되었습니다", deletedata);
      navigate("/boards");
    } catch (error) {
      console.log(error);
    }
  };
  if (!board) return;
  return (
    <div>
      <div className="mb-8 text-sm text-slate-400">
        Home <span className="mx-2">/</span>
        게시판 <span className="mx-2">/</span>
        <span className="text-slate-600">게시글</span>
      </div>

      <article className="rounded-xl border border-slate-200 bg-white">
        {/* Header */}
        <div className="border-b border-slate-200 px-8 py-7">
          <h1 className="text-2xl font-bold">{board.title}</h1>

          <div className="mt-4 flex items-center gap-4 text-sm text-slate-400">
            <span className="font-medium text-slate-600">{board.userId}</span>
            <span>2026.09.17 14:32</span>
            <span>조회 42</span>
          </div>
        </div>

        {/* Content */}
        <div className="min-h-100 px-8 py-10 leading-8 text-slate-700">
          <p>{board.body}</p>
        </div>

        {/* Buttons */}
        <div className="flex justify-between border-t border-slate-200 px-8 py-5">
          <Link
            to="/boards"
            className="rounded-lg border border-slate-200 px-4 py-2 text-sm font-medium hover:bg-slate-50"
          >
            목록
          </Link>

          <div className="flex gap-2">
            <button
              className="rounded-lg border border-slate-200 px-4 py-2 text-sm font-medium hover:bg-slate-50"
              onClick={() => navigate(`/boards/${id}/edit`)}
            >
              수정
            </button>

            <button
              className="rounded-lg bg-slate-900 px-4 py-2 text-sm font-medium text-white hover:bg-slate-800"
              onClick={() => {
                if (confirm("정말로 삭제하시겠습니까?")) {
                  deleteClick(id);
                }
              }}
            >
              삭제
            </button>
          </div>
        </div>
      </article>
      {/* 댓글 보여주기 posts/${id}/cmments */}

      <section className="rounded-xl border border-slate-200 bg-white">
        <ul>
          {comments.map((comment) => (
            <div className="border-b border-slate-200 px-8 py-7">
              <li key={comment.id}>
                <p>name - {comment.name}</p>
                <p>email - {comment.email} </p>
                <br />
                <p>{comment.body}</p>
              </li>
            </div>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default BoardDetail;
