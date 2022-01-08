import { globalSlice } from "./globalSlice";

const { setAuth, setLoader, setToken, setRegistration, setUpdatePost } =
  globalSlice.actions;

const handleAuthState = (state) => (dispatch) => {
  dispatch(setAuth(state));
};

const handleLoaderState = (state) => (dispatch) => {
  dispatch(setLoader(state));
};

const handleTokenState = (state) => (dispatch) => {
  dispatch(setToken(state));
};

const handleRegisteredState = (state) => (dispatch) => {
  dispatch(setRegistration(state));
};

const handleSetUpdatePost = (state) => (dispatch) => {
  dispatch(setUpdatePost(state));
};

const operations = {
  handleAuthState,
  handleLoaderState,
  handleTokenState,
  handleRegisteredState,
  handleSetUpdatePost,
};

export default operations;
