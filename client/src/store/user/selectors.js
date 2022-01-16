import { createSelector } from "@reduxjs/toolkit";

const userSelector = (state) => state.user;

const userData = createSelector([userSelector], (user) => user.userData);

const userInfoPanel = createSelector(
  [userSelector],
  (user) => user.userInfoPanel
);

const selectors = { userData, userInfoPanel };

export default selectors;
