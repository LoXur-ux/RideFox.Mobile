import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import IUserModel from "../../types/model/IUserModel";
import { api } from "../../service/TempAPI";

interface UserState {
  currentUser: IUserModel | null;
  loading: boolean;
  error: string | null;
}

const initialState: UserState = {
  currentUser: null,
  loading: false,
  error: null,
};

export const loginUser = createAsyncThunk(
  "user/login",
  async ({ username, password }: { username: string; password: string }) => {
    try {
      const user = await api.login(username, password);
      return user;
    } catch (error) {
      throw new Error(error.message);
    }
  }
);

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<IUserModel>) => {
      state.currentUser = action.payload;
      state.loading = false;
      state.error = null;
    },
    logoutUser: (state) => {
      state.currentUser = null;
    },
    loginStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    loginSuccess: (state, action: PayloadAction<IUserModel>) => {
      state.currentUser = action.payload;
      state.loading = false;
      state.error = null;
    },
    loginFailure: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.currentUser = <IUserModel>action.payload;
        state.error = null;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Ошибка входа";
      });
  },
});

export const { setUser, logoutUser, loginStart, loginSuccess, loginFailure } =
  userSlice.actions;
export default userSlice.reducer;
