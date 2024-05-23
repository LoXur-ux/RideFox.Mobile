import { combineReducers } from "@reduxjs/toolkit";
import navigationReducer from "./slices/navigationSlice";
import scooterReducer from "./slices/scooterSlice";

const rootReducer = combineReducers({
  navigation: navigationReducer,
  scooter: scooterReducer,
});

export default rootReducer;
