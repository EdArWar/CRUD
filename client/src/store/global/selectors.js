import { createSelector } from "reselect";

const globalSelector = (state) => state.global;

const isAuth = createSelector([globalSelector], (global) => global.isAuth);

const loader = createSelector([globalSelector], (global) => global.loader);

const token = createSelector([globalSelector], (global) => global.token);

const selectors = { isAuth, loader, token };

export default selectors;
