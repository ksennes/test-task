import React, { useState } from "react";

import "./form-modal.scss";

import cancel from "../../../../img/cancel.png";

export const FormModal = ({ show, onHide, jogData, handleChange }) => {
  return (
    <div
      className="modal"
      style={show ? { display: "block" } : { display: "none" }}
    >
      <div className="cancel" onClick={() => onHide()}>
        <img src={cancel}/>
      </div>
      <form className="form">
        <div className="form-group">
          <label for="distance">Distance</label>
          <input type="text" className="form-control" id="distance" value={jogData.distance} onChange={e => handleChange(e)}/>
        </div>
        <div className="form-group">
          <label for="time">Time</label>
          <input type="text" className="form-control" id="time" value={jogData.time} onChange={e => handleChange(e)}/>
        </div>
        <div className="form-group">
          <label for="date">Date</label>
          <input type="text" className="form-control" id="date" value={jogData.date} onChange={e => handleChange(e)}/>
        </div>
        <button type="submit" className="submit-button">
          Save
        </button>
      </form>
    </div>
  );
};
