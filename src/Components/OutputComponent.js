import React from "react";
import PosterComponent from "./PosterComponent";

const OutputComponent = ({ title, subtitle, submitted }) => {
  return (
    <div style={{ backgroundColor: "#eee", height: "100vh", width: "50%" }}>
      <PosterComponent title={title} subtitle={subtitle} />
    </div>
  );
};

export default OutputComponent;
