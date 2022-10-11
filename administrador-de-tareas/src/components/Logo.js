import React from 'react';
import '../stylesheets/Logo.css';
import logo from '../img/freecodecamp-logo.png'

const Logo= () => {

    return(
        <div className='freecodecamp-logo-contenedor'>
            <img src= {logo}/>
        </div>
    );
};

export default Logo;
