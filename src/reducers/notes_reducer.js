import {FETCH_NOTES, FETCH_NOTE} from '../actions/types';
const INITIAL_STATE = {all: [], note: null};

export default function(state = INITIAL_STATE, action){
  switch(action.type){
    case FETCH_NOTE:
      return {...state, note: action.payload.data};
    case FETCH_NOTES:
      return {...state, all: action.payload.data};
    default:
      return state;
  }
}