import React, { useEffect, useRef } from 'react';
import './Breeds.scss'
import Navbar from '../../components/NavBar/Navbar';
import GridImg from '../../components/GridImg/GridImg';
import imgBack from '../../assets/ico/back-20.svg'
import { useDispatch, useSelector } from 'react-redux';
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


  return (
    <section className="Breeds">
      <Navbar />

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
            onChange={handleChangeLimit}
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

        {
          loading ? <Loader /> : <GridImg />
        }


      </div>
    </section >
  );
};

export default Breeds;