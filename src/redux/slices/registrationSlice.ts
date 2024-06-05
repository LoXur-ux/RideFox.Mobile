import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import IRegistrationModel from "../../types/model/IRegistrationModel";

const initialState: IRegistrationModel = {
  login: "",
  email: "",
  phone: "",
  password: "",
  confirmPassword: "",
  firstName: "",
  secondName: "",
  lastName: "",
  birthday: "",
  verificationCode: "",
  step: 1,
  error: null,
};

const registrationSlice = createSlice({
  name: "registration",
  initialState,
  reducers: {
    setLoginDetails: (
      state,
      action: PayloadAction<{
        login: string;
        email: string;
        phone: string;
        password: string;
        confirmPassword: string;
      }>
    ) => {
      state.login = action.payload.login;
      state.email = action.payload.email;
      state.phone = action.payload.phone;
      state.password = action.payload.password;
      state.confirmPassword = action.payload.confirmPassword;
    },
    setPersonalDetails: (
      state,
      action: PayloadAction<{
        firstName: string;
        secondName: string;
        lastName: string;
        birthday: string;
      }>
    ) => {
      state.firstName = action.payload.firstName;
      state.secondName = action.payload.secondName;
      state.lastName = action.payload.lastName;
      state.birthday = action.payload.birthday;
    },
    setVerificationCode: (state, action: PayloadAction<string>) => {
      state.verificationCode = action.payload;
    },
    nextStep: (state) => {
      state.step += 1;
    },
    previousStep: (state) => {
      state.step -= 1;
    },
    setError(state, action: PayloadAction<string | null>) {
      state.error = action.payload;
    },
    resetRegistration(state) {
      return initialState;
    },
  },
});

export const {
  setLoginDetails,
  setPersonalDetails,
  setVerificationCode,
  nextStep,
  previousStep,
  setError,
  resetRegistration,
} = registrationSlice.actions;

export default registrationSlice.reducer;
