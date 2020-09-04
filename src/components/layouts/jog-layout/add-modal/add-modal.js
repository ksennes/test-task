import React, { useState } from "react";

import "./add-modal.scss";

import cancel from "../../../../img/cancel.png";

export const AddModal = ({ showAddmodal, onHide }) => {

  return (
    <div
      className="add-modal"
      style={showAddmodal ? { display: "block" } : { display: "none" }}
    >
      <div className="cancel" onClick={() => onHide()}>
        <img src={cancel}/>
      </div>
      <form className="add-form">
        <div className="form-group">
          <label for="distance">Distance</label>
          <input type="text" className="form-control" id="distance" />
        </div>
        <div className="form-group">
          <label for="time">Time</label>
          <input type="text" className="form-control" id="time" />
        </div>
        <div className="form-group">
          <label for="date">Date</label>
          <input type="text" className="form-control" id="date" />
        </div>
        <button type="submit" className="submit-button">
          Save
        </button>
      </form>
    </div>
  );
};
