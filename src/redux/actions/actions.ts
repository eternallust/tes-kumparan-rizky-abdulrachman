import { API } from "../../configs";
import { Dispatch } from "../types";

export const GET_USERS_PENDING = "GET_USERS_PENDING";
export const GET_USERS_SUCCESS = "GET_USERS_SUCCESS";
export const GET_USERS_ERROR = "GET_USERS_ERROR";

export const GET_POST_PENDING = "GET_POST_PENDING";
export const GET_POST_SUCCESS = "GET_POST_SUCCESS";
export const GET_POST_ERROR = "GET_POST_ERROR";

export const GET_COMMENT_POST_PENDING = "GET_COMMENT_POST_PENDING";
export const GET_COMMENT_POST_SUCCESS = "GET_COMMENT_POST_SUCCESS";
export const GET_COMMENT_POST_ERROR = "GET_COMMENT_POST_ERROR";

export const GET_USER_ALBUMS_PENDING = "GET_USER_ALBUMS_PENDING";
export const GET_USER_ALBUMS_SUCCESS = "GET_USER_ALBUMS_SUCCESS";
export const GET_USER_ALBUMS_ERROR = "GET_USER_ALBUMS_ERROR";

export const GET_PHOTO_ALBUMS_PENDING = "GET_PHOTO_ALBUMS_PENDING";
export const GET_PHOTO_ALBUMS_SUCCESS = "GET_PHOTO_ALBUMS_SUCCESS";
export const GET_PHOTO_ALBUMS_ERROR = "GET_PHOTO_ALBUMS_ERROR";

export const ADD_POST_PENDING = "ADD_POST_PENDING";
export const ADD_POST_SUCCESS = "ADD_POST_SUCCESS";
export const ADD_POST_ERROR = "ADD_POST_ERROR";

export const UPDATE_POST_PENDING = "UPDATE_POST_PENDING";
export const UPDATE_POST_SUCCESS = "UPDATE_POST_SUCCESS";
export const UPDATE_POST_ERROR = "UPDATE_POST_ERROR";

export const DELETE_POST_PENDING = "DELETE_POST_PENDING";
export const DELETE_POST_SUCCESS = "DELETE_POST_SUCCESS";
export const DELETE_POST_ERROR = "DELETE_POST_ERROR";

export const GET_USER_BY_ID_PENDING = "GET_USER_BY_ID_PENDING";
export const GET_USER_BY_ID_SUCCESS = "GET_USER_BY_ID_SUCCESS";
export const GET_USER_BY_ID_ERROR = "GET_USER_BY_ID_ERROR";

export const GET_POST_BY_USER_ID_PENDING = "GET_POST_BY_USER_ID_PENDING";
export const GET_POST_BY_USER_ID_SUCCESS = "GET_POST_BY_USER_ID_SUCCESS";
export const GET_POST_BY_USER_ID_ERROR = "GET_POST_BY_USER_ID_ERROR";

export const GET_PHOTOS_PENDING = "GET_PHOTOS_PENDING";
export const GET_PHOTOS_SUCCESS = "GET_PHOTOS_SUCCESS";
export const GET_PHOTOS_ERROR = "GET_PHOTOS_ERROR";

export const ADD_COMMENT_PENDING = "ADD_COMMENT_PENDING";
export const ADD_COMMENT_SUCCESS = "ADD_COMMENT_SUCCESS";
export const ADD_COMMENT_ERROR = "ADD_COMMENT_ERROR";

export const addComment = (body: any) => async (dispatch: Dispatch) => {
  try {
    dispatch({ type: ADD_COMMENT_PENDING });
    const res = await API.addComment(body);
    dispatch({
      type: ADD_COMMENT_SUCCESS,
      payload: { data: res.data },
    });
  } catch (err) {
    if (err.response) {
      dispatch({
        type: ADD_COMMENT_ERROR,
        payload: { data: err.response },
      });
    } else {
      dispatch({ type: ADD_COMMENT_ERROR });
    }
  }
};

export const getPhotos = (albumId: number) => async (dispatch: Dispatch) => {
  try {
    dispatch({ type: GET_PHOTOS_PENDING });
    const res = await API.getPhotos(albumId);
    dispatch({
      type: GET_PHOTOS_SUCCESS,
      payload: { data: res.data },
    });
  } catch (err) {
    if (err.response) {
      dispatch({
        type: GET_PHOTOS_ERROR,
        payload: { data: err.response },
      });
    } else {
      dispatch({ type: GET_PHOTOS_ERROR });
    }
  }
};

export const getPostByUserId = (userId: number) => async (
  dispatch: Dispatch
) => {
  try {
    dispatch({ type: GET_POST_BY_USER_ID_PENDING });
    const res = await API.getPostByUserId(userId);
    dispatch({
      type: GET_POST_BY_USER_ID_SUCCESS,
      payload: { data: res.data },
    });
  } catch (err) {
    if (err.response) {
      dispatch({
        type: GET_POST_BY_USER_ID_ERROR,
        payload: { data: err.response },
      });
    } else {
      dispatch({ type: GET_POST_BY_USER_ID_ERROR });
    }
  }
};

export const getUserById = (userId: number) => async (dispatch: Dispatch) => {
  try {
    dispatch({ type: GET_USER_BY_ID_PENDING });
    const res = await API.getUserById(userId);
    dispatch({
      type: GET_USER_BY_ID_SUCCESS,
      payload: { data: res.data },
    });
  } catch (err) {
    if (err.response) {
      dispatch({
        type: GET_USER_BY_ID_ERROR,
        payload: { data: err.response },
      });
    } else {
      dispatch({ type: GET_USER_BY_ID_ERROR });
    }
  }
};

export const deletePost = (postId: number) => async (dispatch: Dispatch) => {
  try {
    dispatch({ type: DELETE_POST_PENDING });
    const res = await API.deletePost(postId);
    dispatch({
      type: DELETE_POST_SUCCESS,
      payload: { data: res },
    });
  } catch (err) {
    if (err.response) {
      dispatch({
        type: DELETE_POST_ERROR,
        payload: { data: err.response },
      });
    } else {
      dispatch({ type: DELETE_POST_ERROR });
    }
  }
};

export const updatePost = (postId: number, body: any) => async (
  dispatch: Dispatch
) => {
  console.log("inilah", postId);
  try {
    dispatch({ type: UPDATE_POST_PENDING });
    const res = await API.updatePost(postId, body);
    dispatch({
      type: UPDATE_POST_SUCCESS,
      payload: { data: res },
    });
  } catch (err) {
    if (err.response) {
      dispatch({
        type: UPDATE_POST_ERROR,
        payload: { data: err.response },
      });
    } else {
      dispatch({ type: UPDATE_POST_ERROR });
    }
  }
};

export const addPost = (body: any) => async (dispatch: Dispatch) => {
  try {
    dispatch({ type: ADD_POST_PENDING });
    const res = await API.addPost(body);
    dispatch({
      type: ADD_POST_SUCCESS,
      payload: { data: res },
    });
  } catch (err) {
    if (err.response) {
      dispatch({
        type: ADD_POST_ERROR,
        payload: { data: err.response },
      });
    } else {
      dispatch({ type: ADD_POST_ERROR });
    }
  }
};

export const getPhotoAlbums = (albumId: number) => async (
  dispatch: Dispatch
) => {
  try {
    dispatch({ type: GET_PHOTO_ALBUMS_PENDING });
    const res = await API.getPhotoAlbums(albumId);
    dispatch({
      type: GET_PHOTO_ALBUMS_SUCCESS,
      payload: { data: res },
    });
  } catch (err) {
    if (err.response) {
      dispatch({
        type: GET_PHOTO_ALBUMS_ERROR,
        payload: { data: err.response },
      });
    } else {
      dispatch({ type: GET_PHOTO_ALBUMS_ERROR });
    }
  }
};

export const getUserAlbums = (userId: number) => async (dispatch: Dispatch) => {
  try {
    dispatch({ type: GET_USER_ALBUMS_PENDING });
    const res = await API.getUserAlbums(userId);
    dispatch({
      type: GET_USER_ALBUMS_SUCCESS,
      payload: { data: res },
    });
  } catch (err) {
    if (err.response) {
      dispatch({
        type: GET_USER_ALBUMS_ERROR,
        payload: { data: err.response },
      });
    } else {
      dispatch({ type: GET_USER_ALBUMS_ERROR });
    }
  }
};

export const getCommentPost = (postId: number) => async (
  dispatch: Dispatch
) => {
  try {
    dispatch({ type: GET_COMMENT_POST_PENDING });
    const res = await API.getCommentPost(postId);
    dispatch({
      type: GET_COMMENT_POST_SUCCESS,
      payload: { data: res },
    });
  } catch (err) {
    if (err.response) {
      dispatch({
        type: GET_COMMENT_POST_ERROR,
        payload: { data: err.response },
      });
    } else {
      dispatch({ type: GET_COMMENT_POST_ERROR });
    }
  }
};

export const getPost = (userId: number) => async (dispatch: Dispatch) => {
  try {
    dispatch({ type: GET_POST_PENDING });
    const res = await API.getPost(userId);
    dispatch({
      type: GET_POST_SUCCESS,
      payload: { data: res },
    });
  } catch (err) {
    if (err.response) {
      dispatch({ type: GET_POST_ERROR, payload: { data: err.response } });
    } else {
      dispatch({ type: GET_POST_ERROR });
    }
  }
};

export const getUsers = () => async (dispatch: Dispatch) => {
  try {
    dispatch({ type: GET_USERS_PENDING });
    const res = await API.getUsers();
    dispatch({
      type: GET_USERS_SUCCESS,
      payload: { data: res.data },
    });
  } catch (err) {
    if (err.response) {
      dispatch({ type: GET_USERS_ERROR, payload: { data: err.response } });
    } else {
      dispatch({ type: GET_USERS_ERROR });
    }
  }
};
