import axios  from 'axios';
import {appId, appKey} from '../../config';
import {browserHistory} from 'react-router';
import {
  AUTH_USER,
  UNAUTH_USER,
  AUTH_ERROR,
  FETCH_MESSAGE,
  SEARCH_PENDING,
  SEARCH_DONE,
  CHEF_SELECTED,
  FETCH_NOTES,
  CREATE_NOTE,
  FETCH_NOTE,
  DELETE_NOTE,
  FETCH_RECIPE
} from './types';

import recipeSearch from '../api/recipeSearch';


const ROOT_URL = '';

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

export function selectChef(chef) {
  return {
    type: CHEF_SELECTED,
    payload: chef
  };
}


export function fetchNotes () {
  const request = axios.get(`${ROOT_URL}/api/posts`);
  return {
    type: FETCH_NOTES,
    payload: request
  };
}

export function createNote(props, recipeId){
  const request = axios.post(`${ROOT_URL}/api/posts`, {notes: props});
  console.log('props ', props);
  console.log('recipeId ', recipeId);
  console.log('request ', request);

  return {
    type: CREATE_NOTE,
    payload: request
  };
}

export function fetchNote(id){
  const request = axios.get( `${ROOT_URL}/api/posts/${id}`);

  return {
    type: FETCH_NOTE,
    payload: request
  };
}

export function deletePost(id) {
  const request = axios.delete(`${ROOT_URL}/${id}`);

  return {
    type: DELETE_NOTE,
    payload: request
  };
}

export function fetchRecipe(id) {
  const request = axios.get(`http://api.yummly.com/v1/api/recipe/${id}?_app_id=${appId}&_app_key=${appKey}`);

  return{
    type: FETCH_RECIPE,
    payload: request
  };
}