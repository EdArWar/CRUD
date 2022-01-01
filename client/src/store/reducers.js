import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { globalSlice } from "./global/globalSlice";
import { modalSlice } from "./modal/modalSlice";
import { userSlice } from "./user/userSlice";

const rootReducer = combineReducers({
  global: globalSlice.reducer,
  user: userSlice.reducer,
  modal: modalSlice.reducer,
});

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
