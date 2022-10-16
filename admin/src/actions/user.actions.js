import axiosIntance from "./../utils/axios";
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
      toast.error(error.response.data.message);
    }
  };
};
