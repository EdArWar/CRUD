import { globalSlice } from "./globalSlice";

const { setAuth, setLoader, setToken } = globalSlice.actions;

const handleAuthState = (state) => (dispatch) => {
  dispatch(setAuth(state));
};

const handleLoaderState = (state) => (dispatch) => {
  dispatch(setLoader(state));
};

const handleTokenState = (state) => (dispatch) => {
  dispatch(setToken(state));
};

const operations = {
  handleAuthState,
  handleLoaderState,
  handleTokenState,
};

export default operations;
