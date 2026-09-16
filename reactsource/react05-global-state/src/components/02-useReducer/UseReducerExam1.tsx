import { useReducer } from "react";
import { initUser } from "../01-useState/user.types";
import { userReducer } from "./user.reducer";

const UseReducerExam1 = () => {
  // const [state, dispatch] = useReducer(reducer, state초기값);
  // state: 상태 저장을 위한 변수
  // dispatch: 상태를 변경할 때 사용되는 함수 호출(actuib 보내기)
  // reducer : 상태를 변경하기 위해 정의한 함수 !반드시 순수 함수여야 한다.

  const [user, userDispatch] = useReducer(userReducer, initUser);
  const { name, year, warning } = user;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.currentTarget;

    if (name === "name") {
      // 소문자 변경
      userDispatch({ type: "SET_NAME", name: value });
    } else {
      userDispatch({
        type: "SET_YEAR",
        year: parseInt(value),
      });
    }
  };

  return (
    <div>
      <div className="m-3 items-center">
        <h2 className="text-2xl">useReducer 확인하기</h2>
        <div>
          <label htmlFor="name">이름</label>
          <input
            type="text"
            name="name"
            className="border border-black"
            placeholder="이름 입력"
            value={name}
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div>
          <label htmlFor="year">년도</label>
          <input
            type="number"
            name="year"
            className="border border-black"
            placeholder="년도 입력"
            value={year}
            onChange={(e) => handleChange(e)}
          />
        </div>
        <button
          type="button"
          className="rounded bg-orange-500 px-4 py-2"
          onClick={() => userDispatch({ type: "RESET" })}
        >
          Reset
        </button>
        <div>
          <ul>
            <li>Name: {name}</li>
            <li>Year: {year}</li>
            <li>{warning}</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default UseReducerExam1;
