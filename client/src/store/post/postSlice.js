import { createSlice } from "@reduxjs/toolkit";
import { initialPostState } from "./initialState";

export const postSlice = createSlice({
  name: "post",
  initialState: initialPostState,
  reducers: {
    setPostsData(state, action) {
      state.postData = action.payload;
    },
    setPost(state, action) {
      state.post = action.payload;
    },
  },
});
