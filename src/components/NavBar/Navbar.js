import React, { useRef, useEffect } from 'react';
import { Navlink } from 'react-router-dom'
import { getSearchField, getSearchByName } from '../../redux/actions/dogAction';
import { useDispatch, useSelector } from 'react-redux';


import imgSearch from '../../assets/ico/search-20.svg'
import imgLike from '../../assets/ico/like-30.svg'
import imgFavorite from '../../assets/ico/fav-30.svg'
import imgDislike from '../../assets/ico/dislike-30.svg'

const Navbar = () => {
  const inputEl = useRef(null);
  const dispatch = useDispatch()
  const searchField = useSelector(state => state.dog.searchField)

  //нужно сделать сравнене пл breds_id чтобы получать картинки

  const handleSearchChange = () => {
    const inputValue = inputEl.current.value.trim()
    dispatch(getSearchField(inputValue))
  }

  const handleSearchClick = () => {
    dispatch(getSearchByName(searchField))

  }

  return (
    <div>
      <div className="search-bar ">
        <div className="search-field btn">
          <input ref={inputEl} onChange={handleSearchChange} type="text" placeholder="Search for breeds by name" />
          <button onClick={handleSearchClick} className="search-btn">
            <img src={imgSearch} alt="search" />
          </button>
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