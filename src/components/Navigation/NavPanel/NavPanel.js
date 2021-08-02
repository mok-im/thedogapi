import React from 'react';
import './NavPanel.scss'
import imgVoting from '../../../assets/image/vote-table.png'
import imgBreeds from '../../../assets/image/pet-breeds.png'
import imgGallery from '../../../assets/image/images-search.png'
import { NavLink } from 'react-router-dom'

const NavPanel = () => {


  return (
    <div className="NavPanel">

      <div className="nav_card">
        <div className="card_bg">
          <img src={imgVoting} alt="Voting" />
        </div>
        <NavLink to='/voting' className="btn btn-hover" >
          Voting
        </NavLink>
      </div>

      <div className="nav_card">
        <div className="card_bg bg-green">
          <img src={imgBreeds} alt="Breeds" />
        </div>
        <NavLink to='/breeds' className="btn btn-hover" >
          Breeds
        </NavLink>
      </div>

      <div className="nav_card ">
        <div className="card_bg bg-orange ">
          <img src={imgGallery} alt="Gallery" />
        </div>
        <NavLink to='/gallery' className="btn btn-hover">
          Gallery
        </NavLink>
      </div>

    </div>

  );
};

export default NavPanel;