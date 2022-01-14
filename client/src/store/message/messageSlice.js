import { createSlice } from "@reduxjs/toolkit";
import { initialMessageState } from "./initialState";

export const messageSlice = createSlice({
  name: "message",
  initialState: initialMessageState(),
  reducers: {
    setMessage(state, action) {
      state.message = action.payload;
    },
    setResponseType(state, action) {
      state.responseType = action.payload;
    },
  },
});
