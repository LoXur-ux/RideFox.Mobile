import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import IScooterModel from "../../types/model/IScooterModel";

interface ScooterState {
  selectedScooter: IScooterModel | null;
}

const initialState: ScooterState = {
  selectedScooter: null,
};

const scooterSlice = createSlice({
  name: "scooter",
  initialState,
  reducers: {
    selectScooter: (state, action: PayloadAction<IScooterModel>) => {
      state.selectedScooter = action.payload;
    },
    clearSelection: (state) => {
      state.selectedScooter = null;
    },
    bookScooter: (state, action: PayloadAction<IScooterModel>) => {
      // Код для бронирования самоката
      // Например, отправка запроса на сервер
    },
    rentScooter: (state, action: PayloadAction<IScooterModel>) => {
      // Код для аренды самоката
      // Например, отправка запроса на сервер
    },
  },
});

export const { selectScooter, clearSelection, bookScooter, rentScooter } =
  scooterSlice.actions;
export default scooterSlice.reducer;
