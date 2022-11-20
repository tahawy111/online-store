import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  categories: null,
  loading: false,
  message: null,
};

export const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {
    getCategoriesRequest: (state) => {
      return {
        ...state,
        categories: null,
        loading: true,
        message: null,
      };
    },
    getCategoriesSuccess: (state, action) => {
      return {
        ...state,
        categories: action.payload,
        loading: true,
      };
    },
    getCategoriesFailure: (state, action) => {
      return {
        ...state,
        loading: false,
        message: action.payload,
      };
    },
    AddCategoryRequest: (state) => {
      return {
        ...state,
        categories: null,
        loading: true,
        message: null,
      };
    },
    AddCategorySuccess: (state, action) => {
      return {
        ...state,
        categories: action.payload,
        loading: true,
      };
    },
    AddCategoryFailure: (state, action) => {
      return {
        ...state,
        loading: false,
        message: action.payload,
      };
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  getCategoriesRequest,
  getCategoriesSuccess,
  getCategoriesFailure,
  AddCategoryRequest,
  AddCategorySuccess,
  AddCategoryFailure,
} = categorySlice.actions;

export default categorySlice.reducer;
