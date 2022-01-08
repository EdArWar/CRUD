import { createSelector } from "reselect";

const postSelector = (state) => state.post;

const postsData = createSelector([postSelector], (post) => post.postsData);

const post = createSelector([postSelector], (post) => post.post);

const selectors = { postsData, post };

export default selectors;
