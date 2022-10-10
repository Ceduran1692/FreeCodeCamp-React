import React from "react";
import '../stylesheets/Logo.css';
import logo from '../img/freecodecamp-logo.png';

const Logo= () => {

    return (
        <div className='FreeCodeCamp-logo-contenedor'>
        <img src={logo}
            className='FreeCodeCamp-logo'
            alt= 'logo freecodecamp'></img>
      </div>
    );
};

export default Logo;