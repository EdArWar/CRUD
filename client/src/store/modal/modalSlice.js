import { createSlice } from "@reduxjs/toolkit";
import { initialModalState } from "./initialState";

export const modalSlice = createSlice({
  name: "modal",
  initialState: initialModalState,
  reducers: {
    setSignInModalState(state, action) {
      state.signInModal = action.payload;
    },
    setPostUpdateModalState(state, action) {
      state.postUpdateModalState = action.payload;
    },
  },
});
