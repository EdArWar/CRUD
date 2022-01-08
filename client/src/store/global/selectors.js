import { createSelector } from "reselect";

const globalSelector = (state) => state.global;

const isAuth = createSelector([globalSelector], (global) => global.isAuth);

const loader = createSelector([globalSelector], (global) => global.loader);

const token = createSelector([globalSelector], (global) => global.token);

const isRegistered = createSelector(
  [globalSelector],
  (global) => global.isRegistered
);

const updatePost = createSelector(
  [globalSelector],
  (global) => global.updatePost
);

const selectors = { isAuth, loader, token, isRegistered, updatePost };

export default selectors;
