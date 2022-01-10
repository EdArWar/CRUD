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

const removePostModalState = createSelector(
  [modalSelector],
  (modal) => modal.removePostModalState
);

const selectors = {
  signInModalState,
  postUpdateModalState,
  removePostModalState,
};

export default selectors;
