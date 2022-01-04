import axios from "axios";
import { postOp } from "../store/post";
import { API } from "./API";

class PostApi {
  createPost(
    name,
    clan,
    organization = "not specified",
    profession,
    position,
    avatar
  ) {
    return async (dispatch) => {
      try {
        console.log("createPost");
        const body = {
          name,
          clan,
          organization,
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

  getAllPosts() {
    return async (dispatch) => {
      try {
        const response = await axios.get(`${API}/api/post/`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });

        console.log("response", response);

        if (response.status === 200) {
          dispatch(postOp.handlePostData(response.data));
        }
      } catch (error) {
        console.log(error);
      }
    };
  }
}

export default new PostApi();
