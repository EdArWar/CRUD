import { createSlice } from "@reduxjs/toolkit";
import { initialPostState } from "./initialState";

export const postSlice = createSlice({
  name: "post",
  initialState: initialPostState,
  reducers: {
    setAllPost(state, action) {
      state.postsData = action.payload;
    },
    setPostDetails(state, action) {
      state.postDetails = action.payload;
    },
  },
});
