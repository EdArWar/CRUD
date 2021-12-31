import { modalSlice } from "./modalSlice";

const { setSignInState } = modalSlice.actions;

const handleSignInState = (state) => (dispatch) => {
  dispatch(setSignInState(state));
};

const operations = {
  handleSignInState,
};

export default operations;
