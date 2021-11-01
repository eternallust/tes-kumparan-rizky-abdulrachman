import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Modal from "react-modal";

import { Reducers } from "../../redux/types";
// eslint-disable-next-line import/order
import { getPhotos } from "../../redux/actions";

interface Props {
  name: string;
}

import "./styles.scss";
import { Loading } from "..";

const Component = ({ name }: Props) => {
  const dispatch = useDispatch();
  const appState = useSelector((state: Reducers) => state.reducer);
  const [showPhotos, setShowPhotos] = useState(false);
  const [choosenImg, setChoosenImg] = useState("");
  const [modalOpen, setModalOpen] = useState(false);
  const _handlePhotoAlbum = (photoId: number) => {
    dispatch(getPhotos(photoId));
    setShowPhotos(true);
  };

  const _handlePreviewImg = (url: string) => {
    setChoosenImg(url);
    setModalOpen(true);
  };

  return (
    <div className="userpost-profile-details">
      <div style={{ width: "100%" }}>
        <div className="header-post">
          <div className="content-header-post">
            <div style={{ fontWeight: "bold", fontSize: 26 }}>
              {`${name} Album`}
            </div>
          </div>
          {!showPhotos && (
            <div className="container-list-album">
              {appState.albums.map((item: any, index: number) => {
                return (
                  <div key={index} className="container-post">
                    <div className="content-post">
                      <div className="post-title-txt">{item.title}</div>
                      <div
                        onClick={() => _handlePhotoAlbum(item.id)}
                        className="comment-txt"
                      >
                        View
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
          {showPhotos && (
            <div className="container-list-photo">
              <div className="list-photo">
                {appState.isLoadingGetPhotos && <Loading />}
                {!appState.isLoadingGetPhotos &&
                  appState.photos.map((item: any, index: number) => {
                    return (
                      <div
                        key={index}
                        style={{ cursor: "pointer" }}
                        onClick={() => _handlePreviewImg(item.url)}
                      >
                        <img src={item.thumbnailUrl} />
                      </div>
                    );
                  })}
              </div>
            </div>
          )}
        </div>
      </div>
      <Modal
        ariaHideApp={false}
        style={{
          overlay: {
            backgroundColor: "#00000050",
          },
          content: {
            backgroundColor: "transparent",
            borderWidth: 0,
            justifyContent: "center",
            alignItems: "center",
            display: "flex",
          },
        }}
        isOpen={modalOpen}
        contentLabel="Example Modal"
      >
        <img onClick={() => setModalOpen(false)} src={choosenImg} />
      </Modal>
    </div>
  );
};

export default Component;
