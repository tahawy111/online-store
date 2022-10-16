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
    loginReqeust: (state) => {
      return {
        ...state,
        isAuth: false,
        userData: null,
        loading: true,
        message: null,
      };
    },
    loginSuccess: (state, action) => {
      return {
        ...state,
        isAuth: true,
        userData: action.payload,
        loading: false,
      };
    },
    loginFailure: (state, action) => {
      return {
        ...state,
        isAuth: false,
        message: action.payload,
        loading: false,
      };
    },
    logout: (state) => {
      localStorage.removeItem("userData");
      return {
        ...state,
        isAuth: false,
        userData: null,
        loading: false,
        message: null,
      };
    },
  },
});

// Action creators are generated for each case reducer function
export const { loginReqeust, loginSuccess, loginFailure, logout } =
  userSlice.actions;

export default userSlice.reducer;
