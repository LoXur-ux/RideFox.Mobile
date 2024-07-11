import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import subscriptions from "../../types/data/Subsciprions";

const initialState: ISubscribe = subscriptions[1];

const subscribeSlice = createSlice({
  name: "subscribe",
  initialState,
  reducers: {
    changeSubscribe: (state, action: PayloadAction<ISubscribe>) => {
      state = action.payload;
    },
  },
});

export const { changeSubscribe } = subscribeSlice.actions;

export default subscribeSlice.reducer;
