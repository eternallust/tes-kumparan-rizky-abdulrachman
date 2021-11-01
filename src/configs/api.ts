import axios from "axios";

const host = axios.create({
  baseURL: process.env.REACT_APP_HOST,
});

// type body

const api = {
  getSeasons: () => host.get("seasons"),
  getUsers: () => host.get("users"),
  getPost: (userId: number) => host.get(`posts/${userId}`),
  getCommentPost: (postId: number) => host.get(`posts/${postId}/comments`),
  getUserAlbums: (userId: number) => host.get(`users/${userId}/albums`),
  getPhotoAlbums: (albumId: number) => host.get(`albums/${albumId}/photos`),
  addPost: (body: any) => host.post("posts", body),
  addComment: (body: any) => host.post("comments", body),
  updatePost: (postId: number, body: any) => host.put(`posts/${postId}`, body),
  deletePost: (postId: number) => host.delete(`posts/${postId}`),
  getUserById: (userId: number) => host.get(`users/${userId}`),
  getPostByUserId: (userId: number) => host.get(`users/${userId}/posts`),
  getPhotos: (albumId: number) => host.get(`albums/${albumId}/photos`),
};

export default api;
