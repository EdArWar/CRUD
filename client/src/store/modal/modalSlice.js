import { createSlice } from "@reduxjs/toolkit";
import { initialModalState } from "./initialState";

export const modalSlice = createSlice({
  name: "modal",
  initialState: initialModalState,
  reducers: {
    setSignInState(state, action) {
      state.signInModal = action.payload;
    },
  },
});
