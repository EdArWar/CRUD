import { createSelector } from "reselect";

const postSelector = (state) => state.post;

const postData = createSelector([postSelector], (post) => post.postData);

const selectors = { postData };

export default selectors;
