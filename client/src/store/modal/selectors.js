import { createSelector } from "reselect";

const modalSelector = (state) => state.modal;

const signInModal = createSelector(
  [modalSelector],
  (modal) => modal.signInModal
);

const postUpdateModalState = createSelector(
  [modalSelector],
  (modal) => modal.postUpdateModalState
);

const selectors = { signInModal, postUpdateModalState };

export default selectors;
