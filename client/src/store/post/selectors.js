import { createSelector } from "reselect";

const postSelector = (state) => state.post;

const postData = createSelector([postSelector], (post) => post.postData);

const post = createSelector([postSelector], (post) => post.post);

const selectors = { postData, post };

export default selectors;
