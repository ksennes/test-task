import React from "react";

import "./filter.scss";

export const Filter = () => {
  return (
    <div className="filter">
      <div className="date-picker">
        <h5>Date from</h5>
        <input></input>
      </div>
      <div className="date-picker">
        <h5>Date to</h5>
        <input></input>
      </div>
    </div>
  );
};
