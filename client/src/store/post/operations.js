import { postSlice } from "./postSlice";

const { setPostData } = postSlice.actions;

const handlePostData = (state) => (dispatch) => {
  dispatch(setPostData(state));
};

const operations = { handlePostData };

export default operations;