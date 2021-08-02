import axios from 'axios'
import { setDog, setBreeds, setNames } from '../dogReducer'


axios.defaults.baseURL = 'https://api.thedogapi.com/v1/';
axios.defaults.headers.common['x-api-key'] = 'a6eb632c-fbc8-418e-bc01-145988b296af';



export const getRandomDog = () => {
  return async (dispatch) => {
    const response = await axios.get('https://api.thedogapi.com/v1/images/search')

    dispatch(setDog(response.data[0]))
  }
}


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



