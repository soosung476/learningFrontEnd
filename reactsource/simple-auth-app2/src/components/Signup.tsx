import React, { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { useAppSelector } from "../hooks";
import type { SignupFormState } from "../authSlice";

const Signup = () => {
  const navigate = useNavigate();
  const auth = useAppSelector((state) => state.auth);

  const [form, setForm] = useState<SignupFormState>({
    id: "",
    password: "",
    fullname: "",
  });
  const { id, password, fullname } = form;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.currentTarget;

    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSignup = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    // id, password 값이 없다면 alert("아이디, 비밀번호를 확인해주세요")
    if (!id.trim() || !password.trim() || !fullname.trim()) {
      alert("폼을 전부 작성해주세요");
      return;
    }
    navigate("/login");
  };

  if (auth.id) {
    return <Navigate to={"/mypage"} replace />;
  }
  return (
    <div>
      <main className="flex min-h-[calc(100vh-65px)] items-center justify-center bg-gray-50 px-4">
        <section className="w-full max-w-md">
          {/* Login Card */}
          <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
            {/* Header */}
            <div className="mb-8 text-center">
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-blue-600 text-xl font-bold text-white">
                Sign
              </div>

              <h2 className="text-2xl font-bold text-gray-900">회원가입</h2>
            </div>

            {/* Form */}
            <form className="space-y-5">
              <div>
                <label
                  htmlFor="id"
                  className="mb-2 block text-sm font-medium text-gray-700"
                >
                  아이디
                </label>

                <input
                  name="id"
                  id="id"
                  type="text"
                  placeholder="아이디를 입력해주세요"
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm outline-none transition placeholder:text-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                  value={id}
                  onChange={(e) => handleChange(e)}
                />
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="mb-2 block text-sm font-medium text-gray-700"
                >
                  비밀번호
                </label>

                <input
                  name="password"
                  id="password"
                  type="password"
                  placeholder="비밀번호를 입력해주세요"
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm outline-none transition placeholder:text-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                  value={password}
                  onChange={(e) => handleChange(e)}
                />
              </div>
              <div>
                <label
                  htmlFor="fullname"
                  className="mb-2 block text-sm font-medium text-gray-700"
                >
                  FullName
                </label>

                <input
                  name="fullname"
                  id="fullname"
                  type="text"
                  placeholder="FullName"
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm outline-none transition placeholder:text-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                  value={fullname}
                  onChange={(e) => handleChange(e)}
                />
              </div>
              <button
                type="submit"
                className="w-full rounded-lg bg-blue-600 px-4 py-3 font-medium text-white transition hover:bg-blue-700 active:bg-blue-800"
                onClick={(e) => {
                  handleSignup(e);
                }}
              >
                회원가입
              </button>
            </form>

            {/* Back to Home */}
            <div className="mt-6 text-center">
              <Link
                to="/login"
                className="text-sm text-gray-500 transition hover:text-blue-600"
              >
                ← 로그인으로 돌아가기
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Signup;
