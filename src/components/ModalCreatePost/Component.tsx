import React from "react";
import Modal from "react-modal";

interface Props {
  modalOpen: boolean;
  title: string;
  value: string;
  onChangeTitle: (e: any) => void;
  onChangeValue: (e: any) => void;
  onSubmit: (body: any) => void;
  onCancel: () => void;
}

const Component = ({
  modalOpen,
  title,
  value,
  onChangeValue,
  onChangeTitle,
  onSubmit,
  onCancel,
}: Props) => {
  return (
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
            Create Post
          </div>
          <p>Title</p>
          <input
            // value={postTitle}
            value={title}
            onChange={onChangeTitle}
            style={{
              width: "100%",
              fontSize: 16,
              paddingTop: 12,
              paddingBottom: 12,
            }}
          />
          <p>Value</p>
          <textarea
            value={value}
            onChange={onChangeValue}
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
            style={{ marginBottom: 40 }}
            className="btn-add-post"
            onClick={onSubmit}
          >
            <div className="btn-add-txt">+ Create new post</div>
          </button>
          <button
            style={{ marginBottom: 40 }}
            className="btn-add-post"
            onClick={onCancel}
          >
            <div className="btn-add-txt">Cancel</div>
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default Component;
