import { NavLink } from "react-router-dom";

const TopNavi = () => {
  return (
    <div>
      <nav>
        <NavLink
          className={({ isActive }) =>
            isActive ? "px-4 py-2 text-blue-600 font-semibold" : ""
          }
          to={"/"}
        >
          생명주기
        </NavLink>
        <NavLink
          to={"/local"}
          className={({ isActive }) =>
            isActive ? "px-4 py-2 text-blue-600 font-semibold" : ""
          }
        >
          내부통신
        </NavLink>
        <NavLink
          to={"/external"}
          className={({ isActive }) =>
            isActive ? "px-4 py-2 text-blue-600 font-semibold" : ""
          }
        >
          외부통신
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? "px-4 py-2 text-blue-600 font-semibold" : ""
          }
          to={"/book"}
        >
          도서정보
        </NavLink>
      </nav>
    </div>
  );
};

export default TopNavi;
