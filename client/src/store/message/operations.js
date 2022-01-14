import { messageSlice } from "./messageSlice";

const { setMessage, setResponseType } = messageSlice.actions;

const handleSetMessageState = (state) => (dispatch) => {
  dispatch(setMessage(state));
};

const handleResponseTypeState = (state) => (dispatch) => {
  dispatch(setResponseType(state));
};

const operations = {
  handleSetMessageState,
  handleResponseTypeState,
};

export default operations;
