import React, { Fragment } from "react";
import PosterComponent from "./PosterComponent";

const OutputComponent = ({ title, subtitle, submitted }) => {
  return (
    <div style={{ backgroundColor: "#eee", height: "100vh", width: "65%" }}>
      {submitted && (
        <div style={{ display: "flex", flexWrap: "wrap" }}>
          <PosterComponent title={title} subtitle={subtitle} />
          <PosterComponent title={title} subtitle={subtitle} />
          <PosterComponent title={title} subtitle={subtitle} />
          <PosterComponent title={title} subtitle={subtitle} />
          <PosterComponent title={title} subtitle={subtitle} />
          <PosterComponent title={title} subtitle={subtitle} />
          <PosterComponent title={title} subtitle={subtitle} />
          <PosterComponent title={title} subtitle={subtitle} />
          <PosterComponent title={title} subtitle={subtitle} />
          <PosterComponent title={title} subtitle={subtitle} />
          <PosterComponent title={title} subtitle={subtitle} />
          <PosterComponent title={title} subtitle={subtitle} />
          <PosterComponent title={title} subtitle={subtitle} />
          <PosterComponent title={title} subtitle={subtitle} />
          <PosterComponent title={title} subtitle={subtitle} />
          <PosterComponent title={title} subtitle={subtitle} />
          <PosterComponent title={title} subtitle={subtitle} />
        </div>
      )}
    </div>
  );
};

export default OutputComponent;
