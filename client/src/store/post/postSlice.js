import { createSlice } from "@reduxjs/toolkit";
import { initialPostState } from "./initialState";

export const postSlice = createSlice({
  name: "post",
  initialState: initialPostState,
  reducers: {
    setAllPost(state, action) {
      state.postsData = action.payload;
    },
    updatePost(state, action) {
      state.postsData = state.postsData.map((item) =>
        item._id === action.payload._id ? action.payload : item
      );
    },
    setPostDetails(state, action) {
      state.postDetails = action.payload;
    },
  },
});
