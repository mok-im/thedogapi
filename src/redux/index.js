import { createStore, applyMiddleware, combineReducers } from "redux";
import dogReducer from "./dogReducer"
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from "redux-thunk";

const rootReducer = combineReducers({
  dog: dogReducer
})

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))