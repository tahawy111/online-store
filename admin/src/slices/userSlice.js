import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAuth: localStorage.userData ? true : false,
  userData: localStorage.userData ? JSON.parse(localStorage.userData) : null,
  loading: false,
  message: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loginRequest: (state) => {
      return {
        ...state,
        loading: true,
        userData: null,
        message: null,
        isAuth: false,
      };
    },
    loginSuccess: (state, action) => {
      return {
        ...state,
        loading: false,
        userData: action.payload,
        isAuth: true,
      };
    },
    loginFailure: (state, action) => {
      return {
        ...state,
        loading: false,
        message: action.payload.message,
        isAuth: false,
      };
    },
    logout: (state) => {
      return {
        ...state,
        loading: false,
        message: null,
        userData: null,
        isAuth: false,
      };
    },
  },
});

// Action creators are generated for each case reducer function
export const { loginRequest, loginSuccess, loginFailure, logout } =
  userSlice.actions;

export default userSlice.reducer;
