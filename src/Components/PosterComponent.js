import React from "react";

const PosterComponent = ({ title, subtitle }) => {
  return (
    <div
      style={{
        width: "149px",
        height: "105px",
        border: "1px solid black",
        textAlign: "center"
      }}
    >
      <p>
        <b>{title}</b>
        <br />
        {subtitle}
      </p>
    </div>
  );
};

export default PosterComponent;
