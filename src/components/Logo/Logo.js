import React from 'react';
import { NavLink } from 'react-router-dom';
import imgLogo from "../../assets/image/logo.png"

const Logo = () => {
  return (
    <div>
      <NavLink to='/' >

        <img src={imgLogo} alt="Logo" />
      </NavLink>
    </div>
  );
};

export default Logo;