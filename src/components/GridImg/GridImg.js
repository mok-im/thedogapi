import React from 'react';
import { useSelector } from 'react-redux';
import './GridImg.scss'

const GridImg = () => {
  const breeds = useSelector(state => state.dog.breeds)
  const allBreeds = useSelector(state => state.dog.names)

  return (
    <div className="img-container">

      {
        breeds.length === 0
          ? allBreeds.map((breed, index) =>
            <div className={`post-color post-${index}`}
              key={index}
            >
              <img src={breed.image.url} alt=""
              />
            </div>)
          : breeds.map((breed, index) =>
            <div className={`post-color post-${index}`}
              key={index}
            >
              <img src={breed.url} alt=""
              />
            </div>)

      }
    </div>




  );
};

export default GridImg;