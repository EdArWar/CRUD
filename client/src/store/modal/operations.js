import { modalSlice } from "./modalSlice";

const { setModalState } = modalSlice.actions;

const handleSetModalState = (state) => (dispatch) => {
  dispatch(setModalState(state));
};

const operations = {
  handleSetModalState,
};

export default operations;
