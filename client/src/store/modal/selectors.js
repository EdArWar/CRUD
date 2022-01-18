import { createSelector } from "reselect";

const modalSelector = (state) => state.modal;

const modalState = createSelector([modalSelector], (modal) => modal.modalState);

const selectors = {
  modalState,
};

export default selectors;
