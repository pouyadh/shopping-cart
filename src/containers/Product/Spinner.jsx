import React from "react";

const Spinner = ({ isLoading }) =>
  isLoading ? (
    <div className="spinner">
      <div />
    </div>
  ) : null;

export default Spinner;
