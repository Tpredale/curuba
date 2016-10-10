import {FETCH_RECIPE} from '../actions/types';
const INITIAL_STATE = {recipe: null};

export default function(state = INITIAL_STATE, action){
  switch(action.type){
    case FETCH_RECIPE:
      return {...state, recipe: action.payload.data};
    default:
      return state;
  }
}