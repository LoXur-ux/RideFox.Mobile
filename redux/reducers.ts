import { combineReducers } from "@reduxjs/toolkit";
import navigationReducer from "./slices/navigationSlice";

const rootReducer = combineReducers({
  navigation: navigationReducer,
});

export default rootReducer;
