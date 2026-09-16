export type bankActionType = "DEPOSIT" | "WITHDRAW";
export type CountAction = {
  type: bankActionType;
  payload: { amount: number };
};

export const initState = {
  balance: 0,
};

export function bankReducer(state: typeof initState, action: CountAction) {
  const { amount } = action.payload;

  switch (action.type) {
    case "DEPOSIT":
      return { ...state, balance: state.balance + amount };
    case "WITHDRAW":
      return { ...state, balance: state.balance - amount };

    default:
      throw new Error("금액을 확인해 보세요");
  }
}
