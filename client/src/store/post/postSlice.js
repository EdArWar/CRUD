import { createSlice } from "@reduxjs/toolkit";
import { initialPostState } from "./initialState";

export const postSlice = createSlice({
  name: "post",
  initialState: initialPostState,
  reducers: {
    setPostData(state, action) {
      state.postData = action.payload;
    },
  },
});
