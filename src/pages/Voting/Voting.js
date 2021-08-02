import React, { useState, useEffect } from 'react';
import axios from 'axios'


import './Voting.scss';
import imgSearch from '../../assets/ico/search-20.svg'
import imgLike from '../../assets/ico/like-30.svg'
import imgFavorite from '../../assets/ico/fav-30.svg'
import imgDislike from '../../assets/ico/dislike-30.svg'
import imgBack from '../../assets/ico/back-20.svg'
import votingImg from '../../assets/image/votingImg.svg'
import imgLikeW from '../../assets/ico/like-white-30.svg'
import imgDislikeW from '../../assets/ico/dislike-white-30.svg'
import imgFavoriteW from '../../assets/ico/fav-white-30.svg'
import Navbar from '../../components/NavBar/Navbar';
import { useDispatch, useSelector } from 'react-redux';
import { getRandomDog } from '../../redux/actions/dogAction';



const Voting = () => {

  const dispatch = useDispatch()
  const randomDog = useSelector(state => state.dog.url)

  useEffect(() => {
    dispatch(getRandomDog())
  }, [])



  return (
    <section className="Voting">

      <Navbar />

      <div className="vote-content">

        <div className="navbar-content">
          <a href="/" className="search-btn">
            <img src={imgBack} alt="back" />
          </a>
        </div>

        <div className="voting-img">
          <img src={randomDog} alt="voting img" />
        </div>

        <div className="voting-btn-panel">
          <div className="voting-btn-left">
            <img src={imgLikeW} alt="like" />
          </div>
          <div className="voting-btn-main">
            <img src={imgFavoriteW} alt="fav" />
          </div>
          <div className="voting-btn-right">
            <img src={imgDislikeW} alt="dislike" />
          </div>
        </div>


        <div className="voting-log">
          <div className="voting-log-time">
            22:45
          </div>
          <p>Image ID: <strong>fQSunHvl8</strong> was added to Favourites</p>
        </div>
      </div>


    </section>
  );
};

export default Voting;