const SET_DOG = "SET_DOG"
const SET_BREEDS = "SET_BREEDS"
const SET_NAMES = "SET_NAMES"
const SET_SEARCHFIELD = "SET_SEARCHFIELD"



const defaultState = {
  url: {},
  names: [],
  breeds: [],
  searchField: null,
  loading: true
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

    case SET_SEARCHFIELD:
      return {
        ...state,
        searchField: action.payload,
      }
    default:
      return state
  }
}

//func action creator
export const setDog = (dog) => ({ type: SET_DOG, payload: dog }) // not used

export const setBreeds = (breeds) => ({ type: SET_BREEDS, payload: breeds }) // Mostly used for get images
export const setNames = (names) => ({ type: SET_NAMES, payload: names }) // Set option value for select tag

export const setSearchField = (field) => ({ type: SET_SEARCHFIELD, payload: field }) // Set value from search field


// export const setSearchByName = (names) => ({ type: SET_NAMES, payload: names }) 


