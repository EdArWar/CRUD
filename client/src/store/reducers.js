import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { globalSlice } from "./global/globalSlice";
import { modalSlice } from "./modal/modalSlice";

const rootReducer = combineReducers({
  global: globalSlice.reducer,
  modal: modalSlice.reducer,
});

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
