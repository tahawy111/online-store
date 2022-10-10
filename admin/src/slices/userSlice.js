import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAuth: false,
  userData: null,
  loading: false,
  message: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loginRequest: (state) => {
      return { ...state, loading: true, userData: null, message: null };
    },
    loginSuccess: (state, action) => {
      return { ...state, loading: false, userData: action.payload.user };
    },
    loginFailure: (state, action) => {
      return { ...state, loading: false, message: action.payload.message };
    },
  },
});

// Action creators are generated for each case reducer function
export const { loginRequest, loginSuccess, loginFailure } = userSlice.actions;

export default userSlice.reducer;
