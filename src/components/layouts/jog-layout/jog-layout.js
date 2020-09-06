import React, { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import "./jog-layout.scss";
import sad from "../../../img/sad-rounded-square-emoticon.png";
import editPen from "../../../img/pen.png";
import { NavigationLayout } from "../navigation-layout/navigation-layout";
import { SingleJog } from "./single-jog/single-jog";
import { AddButton } from "./add-button/add-button";
import { FormModal } from "./form-modal/form-modal";

import { getJogsSelector } from "../../../redux/modules/jogs/jogs.selectors";
import { useDispatch, useSelector } from "react-redux";
import { getJogsAction } from "../../../redux/modules/jogs/jogs.actions";

export const JogLayout = () => {
  const isLogged = true;
  const token = localStorage.getItem("token");

  const [showAddModal, setShowAddMOdal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [editingJog, setEditingJog] = useState(false);
  const [showFilter, setShowFilter] = useState(false);

  const [jogData, setJogData] = useState({
    distance: "",
    time: "",
    date: "",
  });

  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const jogs = useSelector(getJogsSelector);

  const dispatch = useDispatch();

  useEffect(() => {
    const getJogs = () => dispatch(getJogsAction(token));
    getJogs();
  }, [dispatch]);

  const handleOpenEditModal = (jog) => {
    setJogData(jog);
    setEditingJog(true);
    setShowEditModal(true);
  };

  const handleOpenModal = () => {
    setJogData({
      distance: "",
      time: "",
      date: "",
    });
    setShowAddMOdal(true);
  };

  const handleFilter = () => {
    setShowFilter(!showFilter);
  };

  const handleChange = (e) => {
    setJogData({ [e.target.id]: e.target.value });
  };

  return (
    <>
      <NavigationLayout
        isLogged={isLogged}
        activeLink="JOGS"
        isFilterOpen={showFilter}
        handleFilter={handleFilter}
      />
      <div className="jog-layout">
        <div
          className="filter"
          style={showFilter ? { display: "flex" } : { display: "none" }}
        >
          <div className="date-picker">
            <h5>Date from</h5>
            <DatePicker
              dateFormat="dd.MM.yyyy"
              selected={startDate}
              onChange={(date) => setStartDate(date)}
              selectsStart
              startDate={startDate}
              endDate={endDate}
            />
          </div>
          <div className="date-picker">
            <h5>Date to</h5>
            <DatePicker
              dateFormat="dd.MM.yyyy"
              selected={endDate}
              onChange={(date) => setEndDate(date)}
              selectsEnd
              startDate={startDate}
              endDate={endDate}
              minDate={startDate}
            />
          </div>
        </div>
        {jogs ? (
          <>
            <div className="jog-layout__list">
              {jogs.map((jog, index) => (
                <>
                  <div className="container">
                    <SingleJog {...jog} key={index} />
                    <div
                      className="edit-pen"
                      onClick={() => handleOpenEditModal(jog)}
                    >
                      <img src={editPen} />
                    </div>
                  </div>
                </>
              ))}
            </div>
            <AddButton onClick={() => handleOpenModal()} />
          </>
        ) : (
          <div className="nothing-found">
            <div className="nothing-found__img">
              <img src={sad} />
            </div>
            <p>Nothing is there</p>
            <button
              className="nothing-found__add-button"
              onClick={() => handleOpenModal()}
            >
              Create your jog first
            </button>
          </div>
        )}
        <FormModal
          show={showAddModal}
          onHide={() => setShowAddMOdal(false)}
          jogData={jogData}
          handleChange={(e) => handleChange(e)}
        />
        {editingJog && (
          <FormModal
            show={showEditModal}
            onHide={() => setShowEditModal(false)}
            jogData={jogData}
            handleChange={(e) => handleChange(e)}
          />
        )}
      </div>
    </>
  );
};
