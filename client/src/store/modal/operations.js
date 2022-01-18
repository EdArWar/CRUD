import { modalSlice } from "./modalSlice";

const {
  setSignInModalState,
  setPostUpdateModalState,
  setRemovePostModalState,
  setUserInfoModalState,
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

const handleUserInfoModalState = (state) => (dispatch) => {
  dispatch(setUserInfoModalState(state));
};

const operations = {
  handleSignInState,
  handlePostUpdateState,
  handleRemovePostModalState,
  handleUserInfoModalState,
};

export default operations;
