// actions
interface Payload {
  data?: any;
}

interface Params {
  type: string;
  payload?: Payload;
}

export type Dispatch = (params: Params | Function) => void;
export type GetState = () => Reducers;

export interface Action {
  type: string;
  payload: Payload;
}

// combine reducers
export interface Reducers {
  home: HomeState;
  detail: DetailState;
  user: UserState;
  reducer: ReducerState;
}

// reducers
export interface HomeState {
  count: number;
}

export interface UserState {
  data: any;
  isLoadingGetUser: boolean;
}

export interface DetailState {
  data: [];
  isLoading: boolean;
}

// getUsers: () => host.get("users"),
// getPost: (userId: number) => host.get(`posts/${userId}`),
// getCommentPost: (postId: number) => host.get(`posts/${postId}`),
// getUserAlbums: (userId: number) => host.get(`users/${userId}/albums`),
// getPhotoAlbums: (albumId: number) => host.get(`albums/${albumId}/photos`),
// addPost: (body: any) => host.post("posts", body),
// updatePost: (postId: number, body: any) => host.post(`posts/${postId}`, body),
// deletePost: (postId: number) => host.delete(`posts/${postId}`),

export interface ReducerState {
  users: any[];
  posts: any[];
  detailPost: any;
  commentPosts: [];
  albums: [];
  photos: [];
  userDetail: any;
  isLoadingGetUsers: boolean;
  isLoadingGetPosts: boolean;
  isLoadingGetDetailPost: boolean;
  isLoadingGetCommentPosts: boolean;
  isLoadingGetUserAlbums: boolean;
  isLoadingGetPhotos: boolean;
  isLoadingAddPost: boolean;
  isLoadingUpdatePost: boolean;
  isLoadingDeletePost: boolean;
  isLoadingUserById: boolean;
  showDetailPost: boolean;
  showAlbums: boolean;
}
