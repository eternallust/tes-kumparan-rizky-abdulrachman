import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import "./styles.scss";
import {
  ListUser,
  UserAlbum,
  UserDetails,
  UserPost,
  ModalCreatePost,
} from "../../components";
import { documentTitle } from "../../utils";
import {
  getUsers,
  getUserById,
  getPostByUserId,
  addPost,
} from "../../redux/actions";
import { Reducers } from "../../redux/types";

const Component = () => {
  documentTitle("Home");
  const dispatch = useDispatch();
  const appState = useSelector((state: Reducers) => state.reducer);
  const [selectedUserId, setSelectedUserId]: any = useState();

  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  const [postTitle, setPostTitle] = useState("");
  const [postValue, setPostValue] = useState("");

  const _handleSelectUser = (userId: number) => {
    dispatch(getUserById(userId));
    dispatch(getPostByUserId(userId));
    setSelectedUserId(userId);
  };

  const _handleAddPost = (userId: number) => {
    const body = {
      title: postTitle,
      body: postValue,
      userId,
    };
    dispatch(addPost(body));
    setModalOpen(false);
  };

  return (
    <div className="page-home">
      <div className="container">
        <div className="sidebar">
          <div className="sidebar-content">
            <div className="profile">
              <div>
                <img
                  src="https://www.ommel.fi/content/uploads/2019/03/dummy-profile-image-male.jpg"
                  className="profile-photo"
                />
                <div className="profile-name">Admin</div>
              </div>
            </div>
          </div>
        </div>
        <div className="content-container">
          <div className="content">
            <ListUser
              data={appState.users}
              selectedUserId={selectedUserId}
              modalAddPost={() => setModalOpen(true)}
              handleSelectUser={(userId) => _handleSelectUser(userId)}
            />
            {selectedUserId && appState.userDetail && (
              <div className="user-info">
                <UserDetails data={appState.userDetail} />
                {appState.showAlbums ? (
                  <UserAlbum name={appState.userDetail.name} />
                ) : (
                  <UserPost
                    data={appState.posts}
                    name={appState.userDetail.name}
                    loading={
                      appState.isLoadingGetPosts || appState.isLoadingDeletePost
                    }
                  />
                )}
              </div>
            )}
          </div>
        </div>
      </div>
      <ModalCreatePost
        title={postTitle}
        value={postValue}
        onChangeTitle={(e: any) => setPostTitle(e.target.value)}
        onChangeValue={(e: any) => setPostValue(e.target.value)}
        onSubmit={() => _handleAddPost(appState.users[0].id)}
        modalOpen={modalOpen}
        onCancel={() => setModalOpen(false)}
      />
    </div>
  );
};

export default Component;
