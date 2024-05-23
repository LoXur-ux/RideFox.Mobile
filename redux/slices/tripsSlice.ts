import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Trip {
  distance: number; // in kilometers
  speed: number; // in km/h
  duration: number; // in minutes
}

interface TripsState {
  trips: Trip[];
}

const initialState: TripsState = {
  trips: [],
};

const tripsSlice = createSlice({
  name: "trips",
  initialState,
  reducers: {
    addTrip: (state, action: PayloadAction<Trip>) => {
      state.trips.push(action.payload);
    },
  },
});

export const { addTrip } = tripsSlice.actions;

export default tripsSlice.reducer;
