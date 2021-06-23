import React from "react";
import { withRouter } from "react-router-dom";

import "./menu-item.styles.scss";

const MenuItem = ({ title, imageUrl, size, history, match, linkUrl }) => {
  return (
    <div
      className={`${size}  d-flex justify-content-center align-items-center border border-dark m-2 menu-item`}
      onClick={() => history.push(`${match.url}${linkUrl}`)}
    >
      <div
        className="w-100 h-100 background-image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <div
        className="position-absolute d-flex flex-column align-items-center border border-dark bg-white p-2"
        style={{ opacity: 0.7 }}
      >
        <h1 className="fw-bold fs-4">{title.toUpperCase()}</h1>
        <span className="fw-lighter">SHOP NOW</span>
      </div>
    </div>
  );
};

export default withRouter(MenuItem);
