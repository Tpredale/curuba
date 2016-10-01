import axios  from 'axios';
import {browserHistory} from 'react-router';
import {
  AUTH_USER,
  UNAUTH_USER,
  AUTH_ERROR,
  FETCH_MESSAGE,
  SEARCH_PENDING,
  SEARCH_DONE
} from './types';

import recipeSearch from '../api/recipeSearch';


const ROOT_URL = process.env.PORT || 'http://localhost:3090';

export function signinUser({email, password}){
  return function(dispatch){
    axios.post(`${ROOT_URL}/signin`, {email, password})
    .then(response => {
      dispatch({type: AUTH_USER});
      localStorage.setItem('token', response.data.token);


      browserHistory.push('/recipes');
    })
    .catch(() => {
      dispatch(authError('Incorrect login information'));
    });

  }
}

export function signupUser({email, password}){
  return function(dispatch){
    axios.post(`${ROOT_URL}/signup`, {email, password})
    .then(response => {
      dispatch({type: AUTH_USER});
      localStorage.setItem('token', response.data.token);
      browserHistory.push('/recipes');
    })
    .catch(response => dispatch(authError(response.data.error)));
  }
}

export function authError(error){
  return {
    type:AUTH_ERROR,
    payload: error
      };
}

export function signoutUser () {
  localStorage.removeItem('token');

  return {type: UNAUTH_USER};
}

export function fetchMessage(){
  return function(dispatch){
    axios.get(ROOT_URL, {
      headers: {authorization: localStorage.getItem('token')}
    })
    .then(rsponse => {
      dispatch({
        type: FETCH_MESSAGE,
        payload: response.data.message
      });
    });
  }
}


function searchRecipesWithAPI(keyword, dispatch) {
 dispatch({
  type: SEARCH_PENDING,
    });
  recipeSearch(keyword, (data) => {
    dispatch({
      type: SEARCH_DONE,
      matches: data.matches,
      keyword,
    });
  });
}

export function searchRecipeAction(keyword) {
  return (dispatch) => {
    searchRecipesWithAPI(keyword, dispatch);
  };
}

export function selectRecipe(recipe) {
  console.log("test");
}