import { modalSlice } from "./modalSlice";

const {
  setSignInModalState,
  setPostUpdateModalState,
  setRemovePostModalState,
} = modalSlice.actions;

const handleSignInState = (state) => (dispatch) => {
  dispatch(setSignInModalState(state));
};

const handlePostUpdateState = (state) => (dispatch) => {
  dispatch(setPostUpdateModalState(state));
};

const handleRemovePostModalState = (state) => (dispatch) => {
  dispatch(setRemovePostModalState(state));
};

const operations = {
  handleSignInState,
  handlePostUpdateState,
  handleRemovePostModalState,
};

export default operations;
