import axios from "axios";
import { globalOp } from "../store/global";
import { messageOp } from "../store/message";
import { modalOp } from "../store/modal";
import { userOp } from "../store/user";
import { API } from "./API";

class AuthApi {
  registration(email, name, password) {
    return async (dispatch) => {
      try {
        // const response = await fetch(`${this.endPoint}auth/registration`, {
        //   method: "POST",
        //   headers: {
        //     "Content-Type": "application/json",
        //   },
        //   body: JSON.stringify({
        //     name,
        //     email,
        //     password,
        //   }),
        // });

        const body = {
          name,
          email,
          password,
        };

        const response = await axios.post(`${API}auth/registration`, body);
        const data = response.data;
        if (!data.errorStatus) {
          dispatch(globalOp.handleRegisteredState(false));
        }
        dispatch(messageOp.handleSetMessageState(data.message));
        dispatch(messageOp.handleResponseTypeState(data.responseType));
      } catch (error) {
        console.log(error);
      }
    };
  }

  login(email, password) {
    return async (dispatch) => {
      try {
        const response = await axios.post(`${API}auth/login`, {
          email,
          password,
        });

        const data = response.data;
        const userData = data.user;

        if (!data.errorStatus) {
          const token = data.token;
          dispatch(globalOp.handleTokenState(token));
          dispatch(globalOp.handleAuthState(true));
          dispatch(userOp.handleSetUserData(userData));
          localStorage.setItem("token", token);
          dispatch(modalOp.handleSetModalState(null));
        }

        dispatch(messageOp.handleSetMessageState(data.message));
        dispatch(messageOp.handleResponseTypeState(data.responseType));
      } catch (error) {
        console.log(error);
      }
    };
  }

  auth() {
    return async (dispatch) => {
      try {
        const response = await axios.get(`${API}auth/auth`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });

        const userData = response.data.user;

        dispatch(userOp.handleSetUserData(userData));
        dispatch(globalOp.handleAuthState(true));
      } catch (error) {
        console.log(error);
      }
    };
  }

  updateUserInfo_api(name, lang, theme, avatar) {
    return async (dispatch) => {
      try {
        const body = {
          name,
          lang,
          theme,
          avatar,
        };

        const response = await axios.patch(`${API}auth/update`, body, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });

        const data = response.data;

        if (response.status === 200) {
          dispatch(modalOp.handleSetModalState(null));
          dispatch(userOp.handleSetUserData(data.updateUser));
          dispatch(messageOp.handleSetMessageState(data.message));
          dispatch(messageOp.handleResponseTypeState(data.responseType));
        }
      } catch (error) {
        console.log(error);
      }
    };
  }
}

export default new AuthApi();
