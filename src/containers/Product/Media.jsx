import React from "react";

const Media = ({ type, src, alt, onLoad = () => {} }) => {
  return type === "image" ? (
    <img className="media--image" src={src} alt={alt} onLoad={onLoad} />
  ) : (
    <video
      className="media--video"
      src={src}
      controls
      preload="metadata"
      autoPlay
    />
  );
};

export default Media;
