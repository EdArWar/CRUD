import { createSelector } from "reselect";

const messageSelector = (state) => state.message;

const message = createSelector([messageSelector], (message) => message.message);

const responseType = createSelector(
  [messageSelector],
  (message) => message.responseType
);

const selectors = { message, responseType };

export default selectors;
