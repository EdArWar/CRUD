import axios from "axios";
import { globalOp } from "../store/global";
import { postOp } from "../store/post";
import { API } from "./API";

class PostApi {
  createPost(name, clan, organization, profession, position, avatar) {
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
        dispatch(globalOp.handleLoaderState(true));
        const response = await axios.get(`${API}/api/post/`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });
        if (response.status === 200) {
          dispatch(postOp.handlePostData(response.data));
        }
      } catch (error) {
        console.log(error);
      } finally {
        dispatch(globalOp.handleLoaderState(false));
      }
    };
  }
}

export default new PostApi();
