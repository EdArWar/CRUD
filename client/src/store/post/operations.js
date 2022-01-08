import { postSlice } from "./postSlice";

const { setAllPost } = postSlice.actions;

const handleSetAllPost = (state) => (dispatch) => {
  dispatch(setAllPost(state));
};

// const handlePostData = (state) => (dispatch) => {
//   dispatch(setPost(state));
// };

const operations = { handleSetAllPost };

export default operations;
