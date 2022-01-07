import { createSelector } from "reselect";

const modalSelector = (state) => state.modal;

const signInModalState = createSelector(
  [modalSelector],
  (modal) => modal.signInModalState
);

const postUpdateModalState = createSelector(
  [modalSelector],
  (modal) => modal.postUpdateModalState
);

const selectors = { signInModalState, postUpdateModalState };

export default selectors;
