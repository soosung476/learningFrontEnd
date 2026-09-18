import { useDispatch } from "react-redux";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { logout } from "../authSlice";
import { useAppSelector } from "../hooks";

const Navigation = () => {
  const auth = useAppSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const getLinkClass = ({ isActive }: { isActive: boolean }) =>
    `transition ${
      isActive
        ? "font-semibold text-blue-600"
        : "text-gray-600 hover:text-blue-600"
    }`;

  return (
    <header className="border-b border-gray-200 bg-white">
      <nav className="mx-auto flex h-16 max-w-5xl items-center justify-between px-6">
        {/* Logo */}
        <Link to="/" className="text-xl font-bold tracking-tight text-gray-900">
          My Page
        </Link>

        {/* Navigation */}
        <div className="flex items-center gap-6 text-sm">
          <NavLink to="/" className={getLinkClass}>
            홈
          </NavLink>

          {auth.id && (
            <NavLink to="/mypage" className={getLinkClass}>
              마이페이지
            </NavLink>
          )}

          {auth.id && (
            <button
              className="rounded-lg bg-gray-900 px-4 py-2 font-medium text-white transition hover:bg-gray-700"
              onClick={() => {
                dispatch(logout());
                navigate("/");
              }}
            >
              로그아웃
            </button>
          )}

          {!auth.id && (
            <Link
              to="/login"
              className="rounded-lg bg-blue-600 px-4 py-2 font-medium text-white transition hover:bg-blue-700"
            >
              로그인
            </Link>
          )}
          {!auth.id && (
            <Link
              to="/Signup"
              className="rounded-lg bg-amber-600 px-4 py-2 font-medium text-white transition hover:bg-orange-700"
            >
              회원가입
            </Link>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navigation;
