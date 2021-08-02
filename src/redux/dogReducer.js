const SET_DOG = "SET_DOG"
const SET_BREEDS = "SET_BREEDS"
const SET_NAMES = "SET_NAMES"



const defaultState = {
  url: {},
  names: [],
  breeds: [],
  isFetchig: true,
  loading: null
}


export default function dogReducer(state = defaultState, action) {
  switch (action.type) {
    case SET_DOG:
      return {
        ...state,
        url: action.payload.url
      }
    case SET_BREEDS:
      return {
        ...state,
        breeds: action.payload,
        loading: false
      }

    case SET_NAMES:
      return {
        ...state,
        names: action.payload,
      }
    default:
      return state
  }
}

//func action creator
export const setDog = (dog) => ({ type: SET_DOG, payload: dog })

export const setBreeds = (breeds) => ({ type: SET_BREEDS, payload: breeds })

export const setNames = (names) => ({ type: SET_NAMES, payload: names })

// export const setBreedsList = (breedsList) => ({ type: GET_LIST, payload: breedsList })

