import { createSelector } from "@reduxjs/toolkit";

const userSelector = (state) => state.user;

const userData = createSelector([userSelector], (user) => user.userDate);

const userInfoPanel = createSelector(
  [userSelector],
  (user) => user.userInfoPanel
);

const selectors = { userData, userInfoPanel };

export default selectors;
