import { modalSlice } from "./modalSlice";

const { setSignInModalState, setPostUpdateModalState } = modalSlice.actions;

const handleSignInState = (state) => (dispatch) => {
  dispatch(setSignInModalState(state));
};

const handlePostUpdateState = (state) => (dispatch) => {
  dispatch(setPostUpdateModalState(state));
};

const operations = {
  handleSignInState,
  handlePostUpdateState,
};

export default operations;
