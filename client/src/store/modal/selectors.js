import { createSelector } from "reselect";

const modalSelector = (state) => state.modal;

const signInModal = createSelector(
  [modalSelector],
  (modal) => modal.signInModal
);

const selectors = { signInModal };

export default selectors;
