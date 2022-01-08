import { createSlice } from "@reduxjs/toolkit";
import { initialGlobalState } from "./initialState";

export const globalSlice = createSlice({
  name: "global",
  initialState: initialGlobalState,
  reducers: {
    setAuth(state, action) {
      state.isAuth = action.payload;
    },
    setLoader(state, action) {
      state.loader = action.payload;
    },
    setToken(state, action) {
      state.token = action.payload;
    },
    setRegistration(state, action) {
      state.isRegistered = action.payload;
    },
    setUpdatePost(state, action) {
      state.updatePost = action.payload;
    },
  },
});
