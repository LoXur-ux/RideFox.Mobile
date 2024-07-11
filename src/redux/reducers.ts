import { combineReducers } from "@reduxjs/toolkit";
import navigationReducer from "./slices/navigationSlice";
import scooterReducer from "./slices/scooterSlice";
import userReducer from "./slices/userSlice";
import registrationReducer from "./slices/registrationSlice";
import tripsReducer from "./slices/tripsSlice";
import currentTripReducer from "./slices/currentTripSlice";
import walletSlice from "./slices/walletSlice";
import subscribeSlice from "./slices/subscribeSlice";

const rootReducer = combineReducers({
  registration: registrationReducer,
  scooter: scooterReducer,
  user: userReducer,
  navigation: navigationReducer,
  trips: tripsReducer,
  currentTrip: currentTripReducer,
  wallet: walletSlice,
  subscribe: subscribeSlice,
});

export default rootReducer;
