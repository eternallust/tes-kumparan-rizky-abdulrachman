import {
  GET_USERS_ERROR,
  GET_USERS_PENDING,
  GET_USERS_SUCCESS,
  GET_POST_ERROR,
  GET_POST_PENDING,
  GET_POST_SUCCESS,
  GET_COMMENT_POST_ERROR,
  GET_COMMENT_POST_PENDING,
  GET_COMMENT_POST_SUCCESS,
  GET_USER_ALBUMS_ERROR,
  GET_USER_ALBUMS_PENDING,
  GET_USER_ALBUMS_SUCCESS,
  ADD_POST_ERROR,
  ADD_POST_PENDING,
  ADD_POST_SUCCESS,
  ADD_COMMENT_ERROR,
  ADD_COMMENT_PENDING,
  ADD_COMMENT_SUCCESS,
  UPDATE_POST_ERROR,
  UPDATE_POST_PENDING,
  UPDATE_POST_SUCCESS,
  DELETE_POST_ERROR,
  DELETE_POST_PENDING,
  DELETE_POST_SUCCESS,
  GET_USER_BY_ID_ERROR,
  GET_USER_BY_ID_PENDING,
  GET_USER_BY_ID_SUCCESS,
  GET_POST_BY_USER_ID_ERROR,
  GET_POST_BY_USER_ID_PENDING,
  GET_POST_BY_USER_ID_SUCCESS,
  GET_PHOTOS_ERROR,
  GET_PHOTOS_PENDING,
  GET_PHOTOS_SUCCESS,
} from "../actions";
import { Action, ReducerState } from "../types";

const initialState: ReducerState = {
  users: [],
  posts: [],
  detailPost: null,
  commentPosts: [],
  albums: [],
  photos: [],
  userDetail: null,
  isLoadingUserById: false,
  isLoadingGetUsers: false,
  isLoadingGetPosts: false,
  isLoadingGetDetailPost: false,
  isLoadingGetCommentPosts: false,
  isLoadingGetUserAlbums: false,
  isLoadingGetPhotos: false,
  isLoadingAddPost: false,
  isLoadingUpdatePost: false,
  isLoadingDeletePost: false,
  showDetailPost: false,
  showAlbums: false,
};

export default (state = initialState, { type, payload }: Action) => {
  switch (type) {
    case ADD_COMMENT_PENDING:
      return { ...state, isLoadingGetCommentPosts: true };
    case ADD_COMMENT_SUCCESS:
      return {
        ...state,
        commentPosts: [payload.data, ...state.commentPosts],
        isLoadingGetCommentPosts: false,
      };
    case ADD_COMMENT_ERROR:
      return { ...state, isLoadingGetCommentPosts: false };

    case GET_PHOTOS_PENDING:
      return { ...state, isLoadingGetPhotos: true };
    case GET_PHOTOS_SUCCESS:
      return {
        ...state,
        photos: payload.data,
        isLoadingGetPhotos: false,
      };
    case GET_PHOTOS_ERROR:
      return { ...state, isLoadingGetPhotos: false };

    case GET_POST_BY_USER_ID_PENDING:
      return { ...state, isLoadingGetPosts: true };
    case GET_POST_BY_USER_ID_SUCCESS:
      return {
        ...state,
        posts: payload.data,
        isLoadingGetPosts: false,
        showDetailPost: false,
        showAlbums: false,
      };
    case GET_POST_BY_USER_ID_ERROR:
      return { ...state, isLoadingGetPosts: false };

    case GET_USER_BY_ID_PENDING:
      return { ...state, isLoadingUserById: true };
    case GET_USER_BY_ID_SUCCESS:
      return {
        ...state,
        userDetail: payload.data,
        isLoadingUserById: false,
      };
    case GET_USER_BY_ID_ERROR:
      return { ...state, isLoadingUserById: false };

    case DELETE_POST_PENDING:
      return { ...state, isLoadingDeletePost: true };
    case DELETE_POST_SUCCESS:
      state.posts.splice(payload.data.index, 1);
      return {
        ...state,
        isLoadingDeletePost: false,
        showDetailPost: false,
      };
    case DELETE_POST_ERROR:
      return { ...state, isLoadingDeletePost: false };

    case UPDATE_POST_PENDING:
      return { ...state, isLoadingUpdatePost: true };
    case UPDATE_POST_SUCCESS:
      state.posts[payload.data.index] = payload.data.data;
      return {
        ...state,
        detailPost: payload.data.data,
        isLoadingUpdatePost: false,
      };
    case UPDATE_POST_ERROR:
      return { ...state, isLoadingUpdatePost: false };

    case ADD_POST_PENDING:
      return { ...state, isLoadingAddPost: true };
    case ADD_POST_SUCCESS:
      return {
        ...state,
        isLoadingAddPost: false,
        posts: [payload.data.data, ...state.posts],
      };
    case ADD_POST_ERROR:
      return { ...state, isLoadingAddPost: false };

    case GET_USER_ALBUMS_PENDING:
      return { ...state, isLoadingGetUserAlbums: true };
    case GET_USER_ALBUMS_SUCCESS:
      return {
        ...state,
        isLoadingGetUserAlbums: false,
        albums: payload.data.data,
        showAlbums: true,
        showDetailPost: false,
      };
    case GET_USER_ALBUMS_ERROR:
      return { ...state, isLoadingGetUserAlbums: false };

    case GET_USERS_PENDING:
      return { ...state, isLoadingGetUsers: true };
    case GET_USERS_SUCCESS:
      return { ...state, isLoadingGetUsers: false, users: payload.data };
    case GET_USERS_ERROR:
      return { ...state, isLoadingGetUsers: false };

    case GET_POST_PENDING:
      return { ...state, isLoadingGetPosts: true };
    case GET_POST_SUCCESS:
      return { ...state, isLoadingGetPosts: false, posts: payload.data };
    case GET_POST_ERROR:
      return { ...state, isLoadingGetPosts: false };

    case GET_COMMENT_POST_PENDING:
      return { ...state, isLoadingCommentPosts: true };
    case GET_COMMENT_POST_SUCCESS:
      return {
        ...state,
        isLoadingCommentPosts: false,
        commentPosts: payload.data.data,
        showDetailPost: true,
      };
    case GET_COMMENT_POST_ERROR:
      return { ...state, isLoadingCommentPosts: false };

    default:
      return state;
  }
};
