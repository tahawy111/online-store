import {
  AddCategoryFailure,
  AddCategoryRequest,
  AddCategorySuccess,
  getCategoriesRequest,
  getCategoriesSuccess,
} from "../slices/categorySlice";
import axiosIntance from "./../utils/axios";
import { toast } from "react-toastify";

export const getCategory = () => {
  return async (dispatch) => {
    try {
      dispatch(getCategoriesRequest());
      const res = await axiosIntance.get("/category/get");
      dispatch(getCategoriesSuccess(res.data.categoryList));
    } catch (error) {
      dispatch(getCategoriesSuccess(error.response.data.message));
    }
  };
};
export const addCategory = (data) => {
  return async (dispatch) => {
    try {
      dispatch(AddCategoryRequest());
      const res = await axiosIntance.post("/category/create", data);
      dispatch(AddCategorySuccess(res.data.allCategories));
      toast.success(res.data.message);
    } catch (error) {
      dispatch(AddCategoryFailure(error.response.data.message));
    }
  };
};
