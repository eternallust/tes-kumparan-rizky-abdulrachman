import React from "react";
// import { useHistory } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";

import "./styles.scss";
// import { ICONS } from "../../configs";
// import { InfiniteScroll } from "../../components";
import { documentTitle } from "../../utils";
// import { sampleAction } from "../../redux/actions";
// import { Reducers } from "../../redux/types";

const Component = () => {
  documentTitle("Home");
  // const history = useHistory();
  // const dispatch = useDispatch();
  // const homeState = useSelector((state: Reducers) => state.home);

  // useEffect(() => {
  //   dispatch(sampleAction());
  // }, [dispatch]);

  // const _loadMore = useCallback(() => {
  //   dispatch(sampleAction());
  // }, [dispatch]);

  return (
    // <InfiniteScroll onEndReached={_loadMore}>
    <div className="page-home">
      <div className="container">
        <div className="sidebar" />
        <div className="content-container">
          <div className="content" />
        </div>
      </div>
    </div>
    // </InfiniteScroll>
  );
};

export default Component;
