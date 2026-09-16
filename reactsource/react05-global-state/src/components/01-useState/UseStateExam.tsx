import { useState } from "react";
import { initUser, type UserType } from "./user.types";

const UseStateExam = () => {
  // const [name, setName] = useState("");
  // const [year, setYear] = useState(0);
  const [user, setUser] = useState<UserType>(initUser);
  const { name, year, warning } = user;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.currentTarget;
    if (name === "name") {
      setUser((prev) => ({ ...prev, name: value.trim().toLowerCase() }));
    } else {
      const inputYear = value === "" ? 0 : parseInt(value);
      const age = new Date().getFullYear() - inputYear;
      setUser((prev) => ({
        ...prev,
        year: inputYear,
        warning: inputYear !== 0 && age < 18 ? "18세 이상이어야 합니다" : "",
      }));
    }
  };
  return (
    <div>
      <div className="m-3 items-center">
        <h2 className="text-2xl">useState 확인하기</h2>
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
          onClick={() => {
            setUser(initUser);
          }}
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

export default UseStateExam;
