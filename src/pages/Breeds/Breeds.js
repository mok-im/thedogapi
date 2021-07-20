import React from 'react';
import './Breeds.scss'
import Navbar from '../../components/NavBar/Navbar';
import imgBack from '../../assets/ico/back-20.svg'
import votingImg from '../../assets/image/votingImg.svg'

const Breeds = () => {
  return (
    <section className="Breeds">
      <Navbar />

      <div className="vote-content">

        <div className="navbar-content">

          <a href="/" className="search-btn">
            <img src={imgBack} alt="back" />
          </a>

          <a href="/" className="btn-navbar">
            BREEDS
          </a>

          <select name="Breeds" id="" className="navbar-select-breeds">
            <option value="1">All breeds</option>
            <option value="1">Affenpinscher</option>
          </select>

          <select name="Limit" id="" className="navbar-select-limit">
            <option value="1">Limit: 5</option>
            <option value="1">Limit: 10</option>
            <option value="1">Limit: 15</option>
            <option value="1">Limit: 20</option>
          </select>

          <a href="/" className="vector-up">
          </a>
          <a href="/" className="vector-down">
          </a>

        </div>

        <div className="img-container">
          <div className="post-1 post-color">
            <img src={votingImg} alt="" />
          </div>
          <div className="post-2 post-color">
            <img src={votingImg} alt="" />
          </div>
          <div className="post-3 post-color">
            <img src={votingImg} alt="" />
          </div>
          <div className="post-4 post-color">
            <img src={votingImg} alt="" />
          </div>
          <div className="post-5 post-color">
            <img src={votingImg} alt="" />
          </div>


        </div>
      </div>

    </section>
  );
};

export default Breeds;