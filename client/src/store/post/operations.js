import { postSlice } from "./postSlice";

const { setPostsData, setPost } = postSlice.actions;

const handlePostsData = (state) => (dispatch) => {
  dispatch(setPostsData(state));
};

const handlePostData = (state) => (dispatch) => {
  dispatch(setPost(state));
};

const operations = { handlePostsData, handlePostData };

export default operations;
