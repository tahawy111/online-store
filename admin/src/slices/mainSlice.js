import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  menuOpenState: false,
};

export const mainSlice = createSlice({
  name: "main",
  initialState,
  reducers: {
    menuOpenState: (state) => {
      return { ...state, menuOpenState: state.menuOpenState ? false : true };
    },
  },
});

// Action creators are generated for each case reducer function
export const { menuOpenState } = mainSlice.actions;

export default mainSlice.reducer;
