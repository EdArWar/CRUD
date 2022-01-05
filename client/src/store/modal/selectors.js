import { createSelector } from "reselect";

const modalSelector = (state) => state.modal;

const signInModal = createSelector(
  [modalSelector],
  (modal) => modal.signInModal
);

const postUpdateModal = createSelector(
  [modalSelector],
  (modal) => modal.postUpdateModal
);

const selectors = { signInModal, postUpdateModal };

export default selectors;
