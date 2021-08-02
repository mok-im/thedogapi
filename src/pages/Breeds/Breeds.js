<<<<<<< HEAD
import React, { useEffect, useRef } from 'react';
=======
import React, { useEffect } from 'react';
>>>>>>> d87e69bbef0c9da30d6bc97e74be53eb9056ce19
import './Breeds.scss'
import Navbar from '../../components/NavBar/Navbar';
import GridImg from '../../components/GridImg/GridImg';
import imgBack from '../../assets/ico/back-20.svg'
import { useDispatch, useSelector } from 'react-redux';
<<<<<<< HEAD
import { getBreeds, getNames, getSearchByName } from '../../redux/actions/dogAction';
import Loader from '../../components/UI/Loader/Loader'

const Breeds = (props) => {
  const dispatch = useDispatch()
  const breedsName = useSelector(state => state.dog.names)
  const loading = useSelector(state => state.dog.loading)

  useEffect(() => {
    dispatch(getBreeds())
    dispatch(getNames())


  }, [])

  const handleChangeList = (e) => {
    const breed_id = e.target.value
    let limit = handleChangeLimit()

    // if (handleChangeLimit() === undefined) {
    //   console.log('undefinedsssss');
    //   limit = 15
    // }
    dispatch(getBreeds(breed_id, limit))
  }

  const handleChangeLimit = (e) => {
    // const limit = e.target.value
    if (e === undefined) {
      e = 15
      return e
    } else
      return e.target.value
    // console.log(e.target.value);
    // return e.target.value
  }


=======
import { getBreeds, getNames } from '../../redux/actions/dogAction';
import Loader from '../../components/UI/Loader/Loader'

const Breeds = () => {
  const dispatch = useDispatch()
  const breeds = useSelector(state => state.dog.breeds)
  const breedsName = useSelector(state => state.dog.names)
  const loading = useSelector(state => state.dog.loading)

  useEffect(() => {
    dispatch(getBreeds())
    dispatch(getNames())
  }, [])


  const handleChangeList = (e) => {
    const breed_id = e.target.value
    dispatch(getBreeds(breed_id))
  }

  const imgShowHandler = (e) => {
    let img = e.target
    img.style.width = "500px"
    // img.style.width = '600px'
    console.log(img, 'show');
  }

>>>>>>> d87e69bbef0c9da30d6bc97e74be53eb9056ce19
  return (
    <section className="Breeds">
      <Navbar />

<<<<<<< HEAD
=======


>>>>>>> d87e69bbef0c9da30d6bc97e74be53eb9056ce19
      <div className="vote-content">
        <div className="navbar-content">
          <a href="/" className="search-btn">
            <img src={imgBack} alt="back" />
          </a>
          <button className="btn-navbar"
          >
            BREEDS
          </button>

          <select name="Breeds" className="navbar-select-breeds"
            onChange={handleChangeList}
<<<<<<< HEAD

=======
>>>>>>> d87e69bbef0c9da30d6bc97e74be53eb9056ce19
          >
            {
              breedsName.map(breed =>
                <option value={breed.id}>{breed.name}</option>
              )
            }
          </select>

          <select
            name="Limit"
            className="navbar-select-limit"
<<<<<<< HEAD
            onChange={handleChangeLimit}
=======
>>>>>>> d87e69bbef0c9da30d6bc97e74be53eb9056ce19
          >
            <option value="5">Limit: 5</option>
            <option value="10">Limit: 10</option>
            <option defaultValue="15">Limit: 15</option>
            <option value="20">Limit: 20</option>
          </select>

          <a href="/" className="vector-up">
          </a>
          <a href="/" className="vector-down">
          </a>

        </div>

<<<<<<< HEAD
        {
          loading ? <Loader /> : <GridImg />
        }
=======
>>>>>>> d87e69bbef0c9da30d6bc97e74be53eb9056ce19

        <div className="img-container">
          {
            breeds.map((breed, index) =>
              <div className={`post-color post-${index}`}
                key={index}
                onClick={imgShowHandler}
              >
                <img src={breed.url} alt=""

<<<<<<< HEAD
=======
                />
              </div>
            )
          }
        </div>

>>>>>>> d87e69bbef0c9da30d6bc97e74be53eb9056ce19
      </div>
    </section >
  );
};

export default Breeds;