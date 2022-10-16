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
<<<<<<< HEAD
    loginRequest: (state) => {
      return {
        ...state,
        loading: true,
        userData: null,
        message: null,
        isAuth: false,
=======
    loginReqeust: (state) => {
      return {
        ...state,
        isAuth: false,
        userData: null,
        loading: true,
        message: null,
>>>>>>> frontend
      };
    },
    loginSuccess: (state, action) => {
      return {
        ...state,
<<<<<<< HEAD
        loading: false,
        userData: action.payload,
        isAuth: true,
=======
        isAuth: true,
        userData: action.payload,
        loading: false,
>>>>>>> frontend
      };
    },
    loginFailure: (state, action) => {
      return {
        ...state,
<<<<<<< HEAD
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
=======
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
>>>>>>> frontend
      };
    },
  },
});

// Action creators are generated for each case reducer function
<<<<<<< HEAD
export const { loginRequest, loginSuccess, loginFailure, logout } =
=======
export const { loginReqeust, loginSuccess, loginFailure, logout } =
>>>>>>> frontend
  userSlice.actions;

export default userSlice.reducer;
