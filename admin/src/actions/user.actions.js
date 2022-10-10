import axiosIntance from "./../utils/axios";

export const login = ({ email, password }) => {
  return async (dispatch) => {
    const res = await axiosIntance.post("/auth/login", {
      email,
      password,
    });
    console.log(res);
  };
};
