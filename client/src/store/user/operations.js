import { userSlice } from "./userSlice";

const { setUserData } = userSlice.actions;

const handleSetUserData = (data) => (dispatch) => {
  dispatch(setUserData(data));
};

const operations = { handleSetUserData };

export default operations;
