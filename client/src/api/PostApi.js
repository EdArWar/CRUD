import axios from "axios";
import { globalOp } from "../store/global";
import { messageOp } from "../store/message";
import { modalOp } from "../store/modal";
import { postOp } from "../store/post";
import { API } from "./API";

class PostApi {
  createPost_api(name, clan, organization, profession, position, avatar) {
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

        const response = await axios.post(`${API}/api/posts/create`, body, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });

        const data = response.data;

        if (response.status === 200) {
          dispatch(messageOp.handleSetMessageState(data.message));
          dispatch(messageOp.handleResponseTypeState(data.responseType));
        }
      } catch (error) {
        console.log(error);
      }
    };
  }

  getAllPosts_api() {
    return async (dispatch) => {
      try {
        dispatch(globalOp.handleLoaderState(true));
        const response = await axios.get(`${API}/api/posts/`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });
        if (response.status === 200) {
          dispatch(postOp.handleSetAllPost(response.data));
        }
      } catch (error) {
        console.log(error);
      } finally {
        dispatch(globalOp.handleLoaderState(false));
      }
    };
  }

  getPostById_api(id, setSkeletonState) {
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
        dispatch(postOp.handlePostDetailsData(response.data));
      } catch (error) {
        console.log(error);
      } finally {
        setSkeletonState(false);
      }
    };
  }

  updatePost_api(
    id,
    name,
    clan,
    organization,
    profession,
    position,
    avatar,
    setUpdateButtonState
  ) {
    return async (dispatch) => {
      setUpdateButtonState(true);
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
        const data = response.data;

        if (response.status === 200) {
          dispatch(messageOp.handleSetMessageState(data.message));
          dispatch(messageOp.handleResponseTypeState(data.responseType));
          dispatch(modalOp.handleSetModalState(null));
          dispatch(postOp.handleUpdatePost(data.updatePost));
        }
      } catch (error) {
        console.log(error);
      } finally {
        setUpdateButtonState(false);
      }
    };
  }

  removePost_api(id, redirectHomePage) {
    return async (dispatch) => {
      try {
        const response = await axios.delete(`${API}/api/posts/${id}`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });
        const data = response.data;
        if (response.status === 200) {
          const promise = new Promise((resolve) => {
            dispatch(modalOp.handleSetModalState(null));
            dispatch(messageOp.handleSetMessageState(data.message));
            dispatch(messageOp.handleResponseTypeState(data.responseType));
            resolve();
          });
          await promise;
          redirectHomePage();
        }
      } catch (error) {
        console.log(error);
      }
    };
  }

  likePost_api(id) {
    return async (dispatch) => {
      try {
        const response = await axios.patch(
          `${API}/api/posts/${id}/likePost`,
          {},
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );

        const postData = response.data;

        dispatch(postOp.handleUpdatePost(postData));
      } catch (error) {
        console.log(error);
      }
    };
  }
}

export default new PostApi();
