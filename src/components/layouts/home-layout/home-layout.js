import React from "react";

import "./home-layout.css";
import bear from '../../../img/bear-face.png';
import { NavigationLayout } from "../navigation-layout/navigation-layout";

export const HomeLayout = () => {
  return (
    <>
      <NavigationLayout />
      <div className="home-layout">
          <div className='home-layout__block'>
              <div className='home-layout__img'>
                  <img src={bear}/>
              </div>
              <button className='home-layout__button'>Let me in</button>
          </div>
      </div>
    </>
  );
};
