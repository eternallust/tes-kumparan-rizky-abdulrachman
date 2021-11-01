import React from "react";

import { UserCapsule } from "..";

interface Props {
  data: any;
  selectedUserId: number;
  handleSelectUser: (userId: number) => void;
  modalAddPost: () => void;
}

const Component = ({
  data,
  selectedUserId,
  handleSelectUser,
  modalAddPost,
}: Props) => {
  return (
    <div className="list-user">
      <div className="list-user-header">
        <div>
          <div style={{ fontWeight: "bold", fontSize: 24 }}>Users</div>
          <div>List User</div>
        </div>
        {selectedUserId && (
          <button className="btn-add-post" onClick={modalAddPost}>
            <div className="btn-add-txt">+ Create new post</div>
          </button>
        )}
      </div>
      {data.map((item: any, index: number) => (
        <UserCapsule
          name={item.name}
          email={item.email}
          key={index}
          active={item.id === selectedUserId}
          onClick={() => handleSelectUser(item.id)}
        />
      ))}
    </div>
  );
};

export default Component;
