import axios from "axios";

const axiosIntance = axios.create({
  baseURL: process.env.REACT_APP_API,
  headers: {
    //     authorization: token ? `Bearer ${token}` : "",
  },
});

export default axiosIntance;
