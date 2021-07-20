import React from 'react';
import { Navlink } from 'react-router-dom'


import imgSearch from '../../assets/ico/search-20.svg'
import imgLike from '../../assets/ico/like-30.svg'
import imgFavorite from '../../assets/ico/fav-30.svg'
import imgDislike from '../../assets/ico/dislike-30.svg'

const Navbar = () => {
  return (
    <div>
      <div className="search-bar ">
        <div className="search-field btn">
          <input type="text" placeholder="Search for breeds by name" />
          <a href="/" className="search-btn">
            <img src={imgSearch} alt="search" />
          </a>
        </div>
        <a href="/" className="vote-link">
          <img src={imgLike} alt="like" />
        </a>
        <a href="/" className="vote-link">
          <img src={imgFavorite} alt="favorite" />
        </a>
        <a href="/" className="vote-link">
          <img src={imgDislike} alt="dislike" />
        </a>

      </div>
    </div>
  );
};

export default Navbar;