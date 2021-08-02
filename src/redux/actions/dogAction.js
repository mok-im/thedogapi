import axios from 'axios'
<<<<<<< HEAD
import { setDog, setBreeds, setNames, setSearchField } from '../dogReducer'
=======
import { setDog, setBreeds, setNames } from '../dogReducer'
>>>>>>> d87e69bbef0c9da30d6bc97e74be53eb9056ce19


axios.defaults.baseURL = 'https://api.thedogapi.com/v1/';
axios.defaults.headers.common['x-api-key'] = 'a6eb632c-fbc8-418e-bc01-145988b296af';


<<<<<<< HEAD
// need for voting
export const getRandomDog = () => {
  return async (dispatch) => {
    const response = await axios.get('https://api.thedogapi.com/v1/images/search')
=======

export const getRandomDog = () => {
  return async (dispatch) => {
    const response = await axios.get('https://api.thedogapi.com/v1/images/search')

>>>>>>> d87e69bbef0c9da30d6bc97e74be53eb9056ce19
    dispatch(setDog(response.data[0]))
  }
}

<<<<<<< HEAD
//get breeds and particularly need for build images grid
export const getBreeds = (breed_id, limit) => {
  // const amount = 15
  return async (dispatch) => {
    const response = await axios(`/images/search?breed_ids=${breed_id}&limit=${limit}`);
    dispatch(setBreeds(response.data))

  }
}

//get value for select option
export const getNames = () => {
  return async (dispatch) => {
    const response = await axios('/breeds')
    dispatch(setNames(response.data))
  }
}


// everything belong to search 
export const getSearchByName = (breedName) => {
  return async (dispatch) => {
    const response = await axios(`/breeds/search?q=${breedName}`)
    dispatch(setBreeds(response.data))
  }
}

export const getSearchField = (field) => {
  return async (dispatch) => {
    dispatch(setSearchField(field))
  }

}







=======

// workink code
// export const getBreeds = (limitBreeds = 15) => {
//   return async (dispatch) => {
//     let queryParams = {
//       limit: limitBreeds
//     }
//     const response = await axios.get('https://api.thedogapi.com/v1/breeds', { params: queryParams })
//     dispatch(setBreeds(response.data))

//   }
// }

export const getBreeds = (breed_id) => {
  const amount = 15
  return async (dispatch) => {
    const response = await axios(`/images/search?breed_ids=${breed_id}&limit=${amount}`);
    dispatch(setBreeds(response.data))

  }
}
export const getNames = () => {


  return async (dispatch) => {
    const response = await axios('/breeds')
    dispatch(setNames(response.data))
  }
}


>>>>>>> d87e69bbef0c9da30d6bc97e74be53eb9056ce19
// export const getImgByBreed = async (breed_id=1, amount=8) => {
//   const res = await axios(`/images/search?breed_ids=${breed_id}&limit=${amount}`);

//   return setBreeds(res.data)
  // return res.data
// }


// export const getBreeds = () => {
//   return async (dispatch) => {
//     let queryParams = {
//       limit: 8,
//       size: 'full',
//       breed_id: 1,
//       sub_id: 'demo-a8cf10'
//     }
//     const response = await axios.get('https://api.thedogapi.com/v1/breeds', { params: queryParams })

//     dispatch(setBreeds(response.data))
//     // console.log(response, 'getCategory');
//   }
// }



