import React from 'react';

import './navigation-layout.scss';
import logo from '../../../img/logo.png';

export const NavigationLayout = () => {
    return(
        <div className='navigation-layout'>
            <div className='navigation-layout__logo'>
                <img src={logo}/>
            </div>
            <div className='navigation-layout__options'>

            </div>
        </div>
    )
}