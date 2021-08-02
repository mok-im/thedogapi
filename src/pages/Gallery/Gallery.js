import React, { useState, useEffect } from 'react';
import axios from 'axios'

import './Gallery.scss'
import Navbar from '../../components/NavBar/Navbar';
import imgBack from '../../assets/ico/back-20.svg'
import votingImg from '../../assets/image/votingImg.svg'


const Gallery = () => {

  // const [dogs, setDogs] = useState([])
  // useEffect(() => {
  //   axios.get('https://api.thedogapi.com/v1/breeds')
  //     .then((response) => {

  //       setDogs(response.data)
  //     })
  //     .catch(err => {
  //       console.log(err);
  //     })
  // }, [])




  return (
    <section className="Gallery">
      <Navbar />

      <div className="vote-content">
        <div className="navbar-content">
          <a href="/" className="search-btn">
            <img src={imgBack} alt="back" />
          </a>
          <a href="/" className="btn-navbar">Gallery</a>

        </div>

        <div className="form-gallery">
          <ul className="form-list-check">
            <li className="form-list-li" >
              <span> ORDER</span>
              <select name="Breeds" id="" className="form-select">
                <option selected>All breeds</option>
                <option value="1">1</option>
                <option value="1">2</option>
              </select>
            </li>
            <li className="form-list-li">
              <span> ORDER</span>
              <select name="Breeds" id="" className="form-select">
                <option selected>All breeds</option>
                <option value="1">1</option>
                <option value="1">2</option>
              </select>
            </li>
            <li className="form-list-li">
              <span> Breed</span>
              <select name="Breeds" id="" className="form-select">
                <option selected>All breeds</option>
                <option value="1">1</option>
                <option value="1">2</option>
              </select>
            </li>
            <li className="form-list-li">
              <span> Limit</span>


              <select name="Breeds" id="" className="form-select">
                <option selected>All breeds</option>
                <option value="1">1</option>
                <option value="1">2</option>
              </select>


            </li>

          </ul>

        </div>


      </div>



    </section >
  );
};

export default Gallery;