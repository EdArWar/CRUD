import { createSlice } from "@reduxjs/toolkit";
import { initialModalState } from "./initialState";

export const modalSlice = createSlice({
  name: "modal",
  initialState: initialModalState,
  reducers: {
    setModalState(state, action) {
      state.modalState = action.payload;
    },
  },
});
