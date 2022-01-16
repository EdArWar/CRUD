import { userSlice } from "./userSlice";

const { setUserData, setUserInfoPanel } = userSlice.actions;

const handleSetUserData = (data) => (dispatch) => {
  dispatch(setUserData(data));
};

const handleSetUserInfoPanel = (data) => (dispatch) => {
  dispatch(setUserInfoPanel(data));
};

const operations = { handleSetUserData, handleSetUserInfoPanel };

export default operations;
