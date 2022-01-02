import axios from "axios";
import { globalOp } from "../store/global";
import { modalOp } from "../store/modal";
import { userOp } from "../store/user";

class AuthApi {
  constructor() {
    this.endPoint = "http://localhost:3001";
  }
  registration(email, name, password) {
    return async (dispatch) => {
      try {
        // const response = await fetch(`${this.endPoint}/api/auth/registration`, {
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

        const response = await axios.post(
          `${this.endPoint}/api/auth/registration`,
          body
        );
        const data = response.data;
        if (!data.errorStatus) {
          dispatch(globalOp.handleRegisteredState(false));
        }
      } catch (error) {
        console.log(error);
      }
    };
  }

  login(email, password) {
    return async (dispatch) => {
      try {
        const response = await axios.post(`${this.endPoint}/api/auth/login`, {
          email,
          password,
        });

        if (response.status === 200) {
          const token = response.data.token;
          const userData = response.data.user;
          dispatch(globalOp.handleTokenState(token));
          dispatch(globalOp.handleAuthState(true));
          dispatch(userOp.handleSetUserData(userData));
          localStorage.setItem("token", token);
          dispatch(modalOp.handleSignInState(false));
        }
      } catch (error) {
        console.log(error);
      }
    };
  }

  auth() {
    return async (dispatch) => {
      try {
        const response = await axios.get(`${this.endPoint}/api/auth/auth`, {
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
}

export default new AuthApi();
