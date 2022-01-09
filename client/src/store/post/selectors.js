import { createSelector } from "reselect";

const postSelector = (state) => state.post;

const postsData = createSelector([postSelector], (post) => post.postsData);

const postDetails = createSelector([postSelector], (post) => post.postDetails);

const selectors = { postsData, postDetails };

export default selectors;
