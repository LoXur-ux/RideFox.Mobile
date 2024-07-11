import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IWallet {
  amount: number;
}

const initialState: IWallet = { amount: 433 };

const walletSlice = createSlice({
  name: "wallet",
  initialState,
  reducers: {
    subtractionWallet(state, action: PayloadAction<number>) {
      state.amount = state.amount - action.payload;
    },
    increaseWallet(state, action: PayloadAction<number>) {
      state.amount = state.amount + action.payload;
    },
  },
});

export const { subtractionWallet, increaseWallet } = walletSlice.actions;
export default walletSlice.reducer;
