import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./slices/userSlice";
import categorySlice from "./slices/categorySlice";

export const store = configureStore({
  reducer: {
    user: userSlice,
    category: categorySlice,
  },
});
