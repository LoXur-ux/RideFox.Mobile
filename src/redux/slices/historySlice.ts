import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: IHistoryModel[] = [];

const histsSlice = createSlice({
  name: "histories",
  initialState,
  reducers: {
    updateHists(state, action: PayloadAction<IHistoryModel[]>) {
      state = action.payload;
    },
  },
});

export const { updateHists } = histsSlice.actions;
export default histsSlice.reducer;
