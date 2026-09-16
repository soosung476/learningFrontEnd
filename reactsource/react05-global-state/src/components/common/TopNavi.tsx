import { NavLink } from "react-router-dom";

const TopNavi = () => {
  return (
    <div>
      <nav className="flex bg-gray-300 p-2 gap-5 h-20 items-center justify-center">
        <NavLink to={"/use-state"}>use-state</NavLink>
        <NavLink to={"/use-reducer1"}>use-reducer1</NavLink>
        <NavLink to={"/use-reducer2"}>use-reducer2</NavLink>
        <NavLink to={"/use-reducer3"}>use-reducer3</NavLink>
        <NavLink to={"/todo-reducer"}>todo-reducer</NavLink>
        <NavLink to={"/use-context1"}>context1</NavLink>
        <NavLink to={"/use-context2"}>context2</NavLink>
      </nav>
    </div>
  );
};

export default TopNavi;
