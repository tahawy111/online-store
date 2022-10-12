import axiosIntance from "./../utils/axios";
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
      toast.error(error.response.data.message);
    }
  };
};

export const logout = () => {
  return async (dispatch) => {
    dispatch(logoutReducer());
    localStorage.removeItem("userData");
  };
};
