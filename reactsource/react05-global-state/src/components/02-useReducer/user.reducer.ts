import {
  initUser,
  type UserType,
  type UserAction,
} from "../01-useState/user.types";

export function userReducer(user: UserType, action: UserAction) {
  switch (action.type) {
    case "SET_NAME":
      return { ...user, name: action.name.trim().toLowerCase() };

    case "SET_YEAR": {
      const age = new Date().getFullYear() - action.year;

      return {
        ...user,
        year: action.year,
        warning: action.year !== 0 && age < 18 ? "18세 이상이어야 합니다" : "",
      };
    }

    case "RESET":
      return initUser;

    default:
      return user;
  }
}

//   if (name === "name") {
//       setUser((prev) => ({ ...prev, name: value.trim().toLowerCase() }));
//     } else {
//       const inputYear = value === "" ? 0 : parseInt(value);
//       const age = new Date().getFullYear() - inputYear;
//       setUser((prev) => ({
//         ...prev,
//         year: inputYear,
//         warning: inputYear !== 0 && age < 18 ? "18세 이상이어야 합니다" : "",
//       }));
//     }
//   };
