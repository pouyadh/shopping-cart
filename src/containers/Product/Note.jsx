import React from "react";

const Note = ({ idx, product, data }) => (
  <div className="product__notes">
    <p>
      <strong>Note: </strong>
      {data}
    </p>
  </div>
);

export default Note;
