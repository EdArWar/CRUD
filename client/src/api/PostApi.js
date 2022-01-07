import axios from "axios";
import { globalOp } from "../store/global";
import { postOp } from "../store/post";
import { API } from "./API";

class PostApi {
  createPost(name, clan, organization, profession, position, avatar) {
    return async (dispatch) => {
      try {
        const body = {
          name,
          clan,
          organization,
          profession,
          position,
          avatar,
        };

        await axios.post(`${API}/api/posts/create`, body, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });
      } catch (error) {
        console.log(error);
      }
    };
  }

  getAllPosts() {
    return async (dispatch) => {
      try {
        dispatch(globalOp.handleLoaderState(true));
        const response = await axios.get(`${API}/api/posts/`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });
        if (response.status === 200) {
          dispatch(postOp.handlePostsData(response.data));
        }
      } catch (error) {
        console.log(error);
      } finally {
        dispatch(globalOp.handleLoaderState(false));
      }
    };
  }

  getPostById(id, setSkeletonState) {
    return async (dispatch) => {
      try {
        // const response = await fetch(`${API}/api/posts/${id}`, {
        //   method: "GET",
        //   headers: {
        //     Authorization: `Bearer ${localStorage.getItem("token")}`,
        //   },
        // });

        // const data = await response.json();

        const response = await axios.get(`${API}/api/posts/${id}`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });
        dispatch(postOp.handlePostData(response.data));
      } catch (error) {
        console.log(error);
      } finally {
        setSkeletonState(false);
      }
    };
  }

  updatePost(id, name, clan, organization, profession, position, avatar) {
    return async (dispatch) => {
      try {
        const body = {
          id,
          name,
          clan,
          organization,
          profession,
          position,
          avatar,
        };

        const response = await axios.patch(`${API}/api/posts/update`, body, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });

        console.log("response", response);

        const data = response.data;
      } catch (error) {
        console.log(error);
      }
    };
  }
}

export default new PostApi();
