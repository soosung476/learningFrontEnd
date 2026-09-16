import { useReducer, useState } from "react";
import { bankReducer, initState, type bankActionType } from "./bank.reducer";

const UseReducerExam3 = () => {
  const [amount, setAmount] = useState(0);
  const [state, dispatch] = useReducer(bankReducer, initState);

  const handleClick = (type: bankActionType) => {
    dispatch({
      type: type,
      payload: { amount },
    });
  };
  return (
    <div>
      <p> 잔고 : ₩{state.balance.toLocaleString()} </p>
      <input
        type="number"
        value={amount}
        step={1000}
        onChange={(e) => setAmount(Number(e.target.value))}
        className="border rounded"
      />
      <button
        className="bg-gray-400 p-2 mx-1"
        onClick={() => handleClick("DEPOSIT")}
      >
        입금
      </button>
      <button
        className="bg-gray-400 p-2 mx-1"
        onClick={() => handleClick("WITHDRAW")}
      >
        출금
      </button>
    </div>
  );
};
export default UseReducerExam3;
