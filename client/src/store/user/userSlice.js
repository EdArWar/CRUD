import { createSlice } from "@reduxjs/toolkit";
import { initialUserState } from "./initialState";

export const userSlice = createSlice({
  name: "user",
  initialState: initialUserState,
  reducers: {
    setUserData(state, action) {
      state.userData = action.payload;
    },
    setUserInfoPanel(state, action) {
      state.userInfoPanel = action.payload;
    },
  },
});
