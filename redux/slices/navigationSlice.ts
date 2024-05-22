import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface NavigationState {
  currentPage: string;
}

const initialState: NavigationState = {
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
