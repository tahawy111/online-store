import axiosIntance from "./../utils/axios";
<<<<<<< HEAD
import { toast } from "react-toastify";
import {
  loginFailure,
  loginRequest,
  loginSuccess,
  logout as logoutReducer,
} from "../slices/userSlice";

export const login = ({ email, password }) => {
  return async (dispatch) => {
    dispatch(loginRequest());
    try {
      const res = await axiosIntance.post("/auth/login", {
        email,
        password,
      });
      dispatch(loginSuccess(res.data));
      localStorage.setItem("userData", JSON.stringify(res.data));
    } catch (error) {
      dispatch(loginFailure({ message: error.response.data.message }));
=======
import { loginReqeust, loginSuccess, loginFailure } from "../slices/userSlice";
import { toast } from "react-toastify";

export const loginAction = (userData) => {
  return async (dispatch) => {
    dispatch(loginReqeust());
    try {
      const res = await axiosIntance.post("/auth/login", userData);
      localStorage.setItem("userData", JSON.stringify(res.data));
      dispatch(loginSuccess(res.data));
    } catch (error) {
      dispatch(loginFailure(error.response.data.message));
>>>>>>> frontend
      toast.error(error.response.data.message);
    }
  };
};
<<<<<<< HEAD

export const logout = () => {
  return async (dispatch) => {
    dispatch(logoutReducer());
    localStorage.removeItem("userData");
  };
};
=======
>>>>>>> frontend
