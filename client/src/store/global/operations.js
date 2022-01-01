import { globalSlice } from "./globalSlice";

const { setAuth, setLoader, setToken, setRegistration } = globalSlice.actions;

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

const operations = {
  handleAuthState,
  handleLoaderState,
  handleTokenState,
  handleRegisteredState,
};

export default operations;
