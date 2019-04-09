import React from "react";

const PosterComponent = ({ title, subtitle }) => {
  return (
    <div
      style={{
        minWidth: "149px",
        minHeight: "105px",
        maxWidth: "149px",
        maxHeight: "105px",
        border: "1px solid black",
        textAlign: "center",
        overflow: "hidden"
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
