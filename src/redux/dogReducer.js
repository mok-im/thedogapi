const SET_DOG = "SET_DOG"
const SET_BREEDS = "SET_BREEDS"
const SET_NAMES = "SET_NAMES"
<<<<<<< HEAD
const SET_SEARCHFIELD = "SET_SEARCHFIELD"
=======
>>>>>>> d87e69bbef0c9da30d6bc97e74be53eb9056ce19



const defaultState = {
  url: {},
  names: [],
  breeds: [],
<<<<<<< HEAD
  searchField: null,
  loading: true
=======
  isFetchig: true,
  loading: null
>>>>>>> d87e69bbef0c9da30d6bc97e74be53eb9056ce19
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
<<<<<<< HEAD

    case SET_SEARCHFIELD:
      return {
        ...state,
        searchField: action.payload,
      }
=======
>>>>>>> d87e69bbef0c9da30d6bc97e74be53eb9056ce19
    default:
      return state
  }
}

//func action creator
<<<<<<< HEAD
export const setDog = (dog) => ({ type: SET_DOG, payload: dog }) // not used

export const setBreeds = (breeds) => ({ type: SET_BREEDS, payload: breeds }) // Mostly used for get images
export const setNames = (names) => ({ type: SET_NAMES, payload: names }) // Set option value for select tag

export const setSearchField = (field) => ({ type: SET_SEARCHFIELD, payload: field }) // Set value from search field


// export const setSearchByName = (names) => ({ type: SET_NAMES, payload: names }) 

=======
export const setDog = (dog) => ({ type: SET_DOG, payload: dog })

export const setBreeds = (breeds) => ({ type: SET_BREEDS, payload: breeds })

export const setNames = (names) => ({ type: SET_NAMES, payload: names })

// export const setBreedsList = (breedsList) => ({ type: GET_LIST, payload: breedsList })
>>>>>>> d87e69bbef0c9da30d6bc97e74be53eb9056ce19

