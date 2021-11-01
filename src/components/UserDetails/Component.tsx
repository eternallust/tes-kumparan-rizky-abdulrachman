import React from "react";
import { useDispatch } from "react-redux";

import { getUserAlbums } from "../../redux/actions";

interface Props {
  data: any;
}

const Component = ({ data }: Props) => {
  const dispatch = useDispatch();
  const _handleRenderDetail = (
    detailAttribute: string,
    valueAttribute: string
  ) => {
    return (
      <div style={{ display: "flex", flexDirection: "row" }}>
        <div style={{ width: "30%" }}>{detailAttribute}</div>
        <div style={{ fontWeight: "bold" }}>{valueAttribute}</div>
      </div>
    );
  };

  return (
    <div className="profile-details">
      <div className="content-profile">
        <img
          src="https://www.ommel.fi/content/uploads/2019/03/dummy-profile-image-male.jpg"
          className="profile-photo"
          style={{ width: 160, height: 160 }}
        />
        <div className="profile-desc">
          <div>
            <div style={{ fontWeight: "bold", fontSize: 26 }}>{data.name}</div>
            <div>{data.email}</div>
            <b>{data.website}</b>
          </div>

          <div style={{ marginTop: 20 }}>
            {_handleRenderDetail(
              "Address",
              `${data.address.street} ST, ${data.address.suite}`
            )}
            {_handleRenderDetail("City", data.address.city)}
            {_handleRenderDetail("ZIP Code", data.address.zipcode)}
          </div>
          <div style={{ marginTop: 20 }}>
            {_handleRenderDetail("Company Name", data.company.name)}
            {_handleRenderDetail("Company Type", data.company.catchPhrase)}
            {_handleRenderDetail("Company Description", data.company.bs)}
          </div>
          <button
            className="btn-add-post"
            onClick={() => dispatch(getUserAlbums(data.id))}
            style={{ marginTop: 20 }}
          >
            <div className="btn-add-txt">View Album</div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Component;
