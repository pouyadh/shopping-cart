import React from "react";
import { FaPlay } from "react-icons/fa";

const MediaList = ({ productUrl, alt, imageCount, videoCount, onChange }) => (
  <div className="media-selector">
    {Array(imageCount)
      .fill(null)
      .map((item, idx) => (
        <div
          key={`pimage-${idx}`}
          onClick={() =>
            onChange("image", `${productUrl}/media/i${idx + 1}-512.jpg`)
          }
        >
          <img src={`${productUrl}/media/i${idx + 1}-64.jpg`} alt={alt} />
        </div>
      ))}
    {Array(videoCount)
      .fill(null)
      .map((item, idx) => (
        <div
          key={`pvideo-${idx}`}
          onClick={() =>
            onChange("video", `${productUrl}/media/v${idx + 1}.mp4`)
          }
        >
          <img src={`${productUrl}/media/i1-64.jpg`} alt={alt} />
          <FaPlay />
        </div>
      ))}
  </div>
);

export default MediaList;
