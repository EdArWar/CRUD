import { postSlice } from "./postSlice";

const { setAllPost, setPost } = postSlice.actions;

const handleSetAllPost = (state) => (dispatch) => {
  dispatch(setAllPost(state));
};

const handlePostData = (state) => (dispatch) => {
  dispatch(setPost(state));
};

const operations = { handleSetAllPost, handlePostData };

export default operations;
