import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface INavigationState {
  currentPage: string;
}

const initialState: INavigationState = {
  currentPage: "qr",
};

const navigationSlice = createSlice({
  name: "navigation",
  initialState,
  reducers: {
    setPage(state, action: PayloadAction<string>) {
      state.currentPage = action.payload;
    },
  },
});

export const { setPage } = navigationSlice.actions;
export default navigationSlice.reducer;
