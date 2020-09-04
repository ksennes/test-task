import React, { useState } from "react";

import "./jog-layout.scss";
import sad from "../../../img/sad-rounded-square-emoticon.png";
import { NavigationLayout } from "../navigation-layout/navigation-layout";
import { SingleJog } from "./single-jog/single-jog";
import { AddButton } from "./add-button/add-button";
import { AddModal } from "./add-modal/add-modal";

export const JogLayout = () => {
  const isListExist = false;
  const [showAddModal, setShowAddMOdal] = useState(false);

  const handleAddClick = () => {
    setShowAddMOdal(true);
  }

  const handleAddHide = () => {
    setShowAddMOdal(false);
  }

  return (
    <>
      <NavigationLayout />
      <div className="jog-layout">
         {isListExist ? (
          <>
            <div className="jog-layout__list">
              {jogList.map((jog) => (
                <SingleJog {...jog} />
              ))}
            </div>
            <AddButton onClick={()=> handleAddClick()} />
          </>
        ) : (
          <div className="nothing-found">
            <div className="nothing-found__img">
              <img src={sad} />
            </div>
            <p>Nothing is there</p>
            <button className="nothing-found__add-button" onClick={()=> handleAddClick()}>
              Create your jog first
            </button>
          </div>
        )}
          <AddModal showAddmodal={showAddModal} onHide={()=> handleAddHide()}/>
      </div>
    </>
  );
};

const jogList = [
  {
    date: "20.12.2020",
    speed: "15",
    distance: "20 km",
    time: "15 min",
  },
  {
    date: "20.12.2020",
    speed: "15",
    distance: "20 km",
    time: "15 min",
  },
  {
    date: "20.12.2020",
    speed: "15",
    distance: "20 km",
    time: "15 min",
  },
  {
    date: "20.12.2020",
    speed: "15",
    distance: "20 km",
    time: "15 min",
  },
];
