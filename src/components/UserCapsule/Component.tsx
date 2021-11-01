import React from "react";

interface Props {
  name: string;
  email: string;
  active: boolean;
  onClick: () => void;
}

import "./styles.scss";

const Component = ({ name, email, active, onClick }: Props) => {
  return (
    <div className={`user-capsule ${active && "active"}`} onClick={onClick}>
      <div className="content-user-capsule">
        <img
          src="https://www.ommel.fi/content/uploads/2019/03/dummy-profile-image-male.jpg"
          className="profile-photo-capsule"
        />
        <div>
          <div
            style={{ fontWeight: "bold", color: active ? "white" : "#666666" }}
          >
            {name}
          </div>
          <div style={{ color: active ? "white" : "#666666" }}>{email}</div>
        </div>
      </div>
    </div>
  );
};

export default Component;
