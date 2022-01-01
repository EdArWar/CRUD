import { globalOp } from "../store/global";

class AuthApi {
  constructor() {
    this.endPoint = "http://localhost:3001";
  }
  registration(email, name, password) {
    return async (dispatch) => {
      try {
        const response = await fetch(`${this.endPoint}/api/auth/registration`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name,
            email,
            password,
          }),
        });
        const data = await response.json();
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
        console.log("login");
      } catch (error) {
        console.log(error);
      }
    };
  }
}

export default new AuthApi();
