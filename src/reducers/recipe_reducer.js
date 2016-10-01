import * as types from '../actions/types';

const initialState = {
  status: 'IDLE',
  matches: [],
};

export default function searchRecipes(state = initialState, action) {
  switch (action.type) {
  case types.SEARCH_DONE:
    return {
      ...state,
      matches: [...state.matches, ...action.matches],
      status: 'DONE',
      keyword: action.keyword,
    };
  case types.SEARCH_PENDING:
    return {
      ...state,
      matches: [],
      status: 'PENDING',
    };
  default:
    return state;
  }
}

