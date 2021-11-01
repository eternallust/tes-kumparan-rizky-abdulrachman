import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Modal from "react-modal";

import { Reducers } from "../../redux/types";
// eslint-disable-next-line import/order
import { Loading } from "..";

interface Props {
  data: any;
  name: string;
  loading: boolean;
}

import "./styles.scss";
import {
  getCommentPost,
  addComment,
  deletePost,
  updatePost,
} from "../../redux/actions";

const Component = ({ data, name, loading }: Props) => {
  const dispatch = useDispatch();
  const [value, setvalue] = useState("");
  const [modalOpen, setModalOpen] = useState(false);
  const [type, setType] = useState("add");
  const appState = useSelector((state: Reducers) => state.reducer);
  const [detailPost, setDetailPost]: any = useState();
  const _handleDetailPost = (post: any, postId: number) => {
    dispatch(getCommentPost(postId));
    setDetailPost(post);
  };
  const _setEditPost = () => {
    setType("edit");
    setvalue(detailPost.body);
    setModalOpen(true);
  };

  const _handleEditPost = (postId: number) => {
    dispatch(
      updatePost(1, {
        email: appState.userDetail.email,
        postId,
        title: detailPost.title,
        body: value,
      })
    );
  };

  const _handleAddComment = (postId: number) => {
    dispatch(
      addComment({
        email: appState.userDetail.email,
        postId,
        body: value,
      })
    );
    setModalOpen(false);
  };

  console.log("app", appState);
  return (
    <div className="userpost-profile-details">
      <div style={{ width: "100%" }}>
        <div className="header-post">
          <div className="content-header-post">
            <div style={{ fontWeight: "bold", fontSize: 26 }}>
              {`${name} Post`}
            </div>
            <div>{`${data.length} Post(s) in total`}</div>
          </div>
        </div>
        {(appState.isLoadingGetCommentPosts ||
          appState.isLoadingDeletePost) && <Loading />}
        {appState.showDetailPost &&
          !appState.isLoadingDeletePost &&
          !appState.isLoadingGetCommentPosts && (
            <div className="container-list-post">
              <div className="container-post">
                <div className="content-post">
                  <div className="post-title-txt">{detailPost.title}</div>
                  <div className="post-txt">
                    {(appState.detailPost && appState.detailPost.body) ||
                      detailPost.body}
                  </div>
                  <div className="container-btn-edit">
                    <div
                      className="comment-txt"
                      onClick={() => {
                        setType("add");
                        setvalue("");
                        setModalOpen(true);
                      }}
                    >
                      Add Comment
                    </div>
                    <div
                      onClick={() => dispatch(deletePost(detailPost.id))}
                      className="comment-txt"
                    >
                      Delete Post
                    </div>
                    <div onClick={() => _setEditPost()} className="comment-txt">
                      Edit Post
                    </div>
                  </div>
                </div>
              </div>
              <div className="container-post">
                <div className="post-title-txt" style={{ color: "#666666" }}>
                  Comments
                </div>
              </div>

              {appState.commentPosts.map((item: any, index: number) => {
                return (
                  <div className="container-post" key={index}>
                    <div className="content-post white">
                      <div
                        className="post-title-txt"
                        style={{ color: "#666666" }}
                      >
                        {item.email}
                      </div>
                      <div className="post-txt" style={{ color: "#666666" }}>
                        {item.body}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        {!appState.showDetailPost && (
          <div className="container-list-post">
            {loading ? (
              <div className="container-loading">
                <Loading />
              </div>
            ) : (
              <div>
                {data.map((item: any, index: number) => {
                  return (
                    <div key={index} className="container-post">
                      <div className="content-post">
                        <div className="post-title-txt">{item.title}</div>
                        <div className="post-txt">{item.body}</div>
                        <div
                          onClick={() =>
                            _handleDetailPost(
                              { title: item.title, body: item.body },
                              item.id
                            )
                          }
                          className="comment-txt"
                        >
                          Detail
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        )}
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
        <div
          style={{
            backgroundColor: "white",
            width: "40%",
            borderRadius: 10,
            justifyContent: "center",
            alignItems: "center",
            display: "flex",
          }}
        >
          <div style={{ width: "90%" }}>
            <div style={{ fontWeight: "bold", fontSize: 24, marginTop: 40 }}>
              {type === "edit" ? "Edit Post" : "Add Comment"}
            </div>

            <p>Value</p>
            <textarea
              value={value}
              onChange={(e) => setvalue(e.target.value)}
              style={{
                width: "100%",
                fontSize: 16,
                paddingTop: 12,
                paddingBottom: 12,
                maxWidth: "100%",
                maxHeight: 400,
              }}
            />
            <button
              style={{ marginBottom: 40, marginRight: 20 }}
              className="btn-add-post"
              onClick={() => setModalOpen(false)}
            >
              <div className="btn-add-txt">Cancel</div>
            </button>
            <button
              style={{ marginBottom: 40 }}
              className="btn-add-post"
              onClick={() =>
                type === "edit"
                  ? _handleEditPost(detailPost.id)
                  : _handleAddComment(detailPost.id)
              }
            >
              <div className="btn-add-txt">
                {type === "add" ? "+ Create new comment" : "Edit"}
              </div>
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default Component;
