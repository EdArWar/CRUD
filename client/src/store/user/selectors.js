import { createSelector } from "@reduxjs/toolkit";

const userSelector = (state) => state.user;

const userData = createSelector([userSelector], (user) => user.userDate);

const selectors = { userData };

export default selectors;
