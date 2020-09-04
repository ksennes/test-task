import React from "react";

import "./single-jog.scss";
import icon from "../../../../img/icon.png";

export const SingleJog = ({ date, speed, distance, time }) => {
  return (
    <div className="single-jog">
      <div className="single-jog__icon">
        <img src={icon} />
      </div>
      <div className="single-jog__details">
        <p className="date">{date}</p>
        <h4>Speed: {speed}</h4>
        <h4>Distance: {distance}</h4>
        <h4>Time: {time}</h4>
      </div>
    </div>
  );
};
