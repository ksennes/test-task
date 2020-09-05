import React, { useState, useEffect } from "react";

import "./jog-layout.scss";
import sad from "../../../img/sad-rounded-square-emoticon.png";
import { NavigationLayout } from "../navigation-layout/navigation-layout";
import { SingleJog } from "./single-jog/single-jog";
import { AddButton } from "./add-button/add-button";
import { AddModal } from "./add-modal/add-modal";

import { getJogsSelector } from '../../../redux/modules/jogs/jogs.selectors';
import { useDispatch, useSelector } from "react-redux";
import { getJogsAction } from "../../../redux/modules/jogs/jogs.actions";

export const JogLayout = () => {
  const isLogged = true;
  const token = localStorage.getItem('token');

  const [showAddModal, setShowAddMOdal] = useState(false);

  const jogs = useSelector(getJogsSelector);

  const dispatch = useDispatch();

  useEffect(() => {
    const getJogs = () => dispatch(getJogsAction(token));
    getJogs();
  }, [dispatch])


  const handleAddClick = () => {
    setShowAddMOdal(true);
  };

  const handleAddHide = () => {
    setShowAddMOdal(false);
  };

  return (
    <>
      <NavigationLayout isLogged={isLogged} activeLink='JOGS'/>
      <div className="jog-layout">
        {jogs ? (
          <>
            <div className="jog-layout__list">
              {jogs.map((jog) => (
                <SingleJog {...jog} />
              ))}
            </div>
            <AddButton onClick={() => handleAddClick()} />
          </>
        ) : (
          <div className="nothing-found">
            <div className="nothing-found__img">
              <img src={sad} />
            </div>
            <p>Nothing is there</p>
            <button
              className="nothing-found__add-button"
              onClick={() => handleAddClick()}
            >
              Create your jog first
            </button>
          </div>
        )}
        <AddModal showAddmodal={showAddModal} onHide={() => handleAddHide()} />
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
