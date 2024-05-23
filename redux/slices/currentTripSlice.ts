import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import ITrip from "../../types/model/ITripModel";

interface CurrentTripState {
  currentTrip: ITrip | null;
}

const initialState: CurrentTripState = {
  currentTrip: null,
};

const currentTripSlice = createSlice({
  name: "currentTrip",
  initialState,
  reducers: {
    startTrip: (state, action: PayloadAction<ITrip>) => {
      state.currentTrip = action.payload;
    },
    endTrip: (state) => {
      state.currentTrip = null;
    },
    updateTrip: (state, action: PayloadAction<Partial<ITrip>>) => {
      if (state.currentTrip) {
        state.currentTrip = { ...state.currentTrip, ...action.payload };
      }
    },
  },
});

export const { startTrip, endTrip, updateTrip } = currentTripSlice.actions;

export default currentTripSlice.reducer;
