import React from 'react';
import { Navlink } from 'react-router-dom'
import Logo from '../Logo/Logo';
import './Navigation.scss'
import NavPanel from './NavPanel/NavPanel'

const Navigation = () => {
  return (
    <section className="Navigation">
      <Logo />

      <div className="nav_main">
        <h1>Hi intern!</h1>
        <p> Welcome to your OWN Project</p>
        <h2>Lets start using The Dogs API</h2>

        <NavPanel />
      </div>
    </section>
  );
};

export default Navigation;