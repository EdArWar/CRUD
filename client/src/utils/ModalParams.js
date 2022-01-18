export function getModalParams(modalName) {
  switch (modalName) {
    case MODAL_NAME.SIGN_IN:
      return { signIn: true, title: "Sign In" };
    case MODAL_NAME.POST_UPDATE:
      return { updatePost: true, title: "Post Update" };
    case MODAL_NAME.POST_REMOVE:
      return { removePost: true, title: "Post Remove" };
    case MODAL_NAME.USER_INFO_PANEL_UPDATE:
      return { userInfoPanel: true };
    default:
      break;
  }
}

export const MODAL_NAME = {
  SIGN_IN: "Sign In",
  POST_UPDATE: "Update Post",
  POST_REMOVE: "Remove Post",
  USER_INFO_PANEL_UPDATE: "Update User Info",
};
