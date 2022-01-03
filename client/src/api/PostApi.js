import axios from "axios";
import { API } from "./API";

class PostApi {
  createPost(name, age, profession, position, avatar) {
    return async (dispatch) => {
      try {
        console.log("createPost");
        const body = {
          name,
          age,
          profession,
          position,
          avatar,
        };

        const response = await axios.post(`${API}/api/post/create`, body, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });

        console.log("response", response);
      } catch (error) {
        console.log(error);
      }
    };
  }
}

export default new PostApi();
