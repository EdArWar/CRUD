import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { globalSlice } from "./global/globalSlice";
import { messageSlice } from "./message/messageSlice";
import { modalSlice } from "./modal/modalSlice";
import { postSlice } from "./post/postSlice";
import { userSlice } from "./user/userSlice";

const rootReducer = combineReducers({
  global: globalSlice.reducer,
  user: userSlice.reducer,
  post: postSlice.reducer,
  modal: modalSlice.reducer,
  message: messageSlice.reducer,
});

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
