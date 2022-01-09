import { postSlice } from "./postSlice";

const { setAllPost, updatePost, setPostDetails } = postSlice.actions;

const handleSetAllPost = (state) => (dispatch) => {
  dispatch(setAllPost(state));
};

const handleUpdatePost = (state) => (dispatch) => {
  dispatch(updatePost(state));
};

const handlePostDetailsData = (state) => (dispatch) => {
  dispatch(setPostDetails(state));
};

const operations = {
  handleSetAllPost,
  handleUpdatePost,
  handlePostDetailsData,
};

export default operations;
