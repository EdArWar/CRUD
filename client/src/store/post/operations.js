import { postSlice } from "./postSlice";

const { setAllPost, setPostDetails } = postSlice.actions;

const handleSetAllPost = (state) => (dispatch) => {
  dispatch(setAllPost(state));
};

const handlePostDetailsData = (state) => (dispatch) => {
  dispatch(setPostDetails(state));
};

const operations = { handleSetAllPost, handlePostDetailsData };

export default operations;
