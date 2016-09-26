
import * as ActionTypes from '../actions'
import { routerReducer as routing } from 'react-router-redux'
import { combineReducers } from 'redux'
const jwtDecode = require('jwt-decode')

function checkTokenExpiry() {
  let jwt = localStorage.getItem('id_token')
  if(jwt) {
    let jwtExp = jwtDecode(jwt).exp;
    let expiryDate = new Date(0);
    expiryDate.setUTCSeconds(jwtExp);

    if(new Date() < expiryDate) {
      return true;
    }
  }
  return false;
}

function getProfile() {
  return JSON.parse(localStorage.getItem('profile'));
}

function auth(state = {
    isAuthenticated: checkTokenExpiry(),
    profile: getProfile(),
    error: ''
  }, action) {
  switch (action.type) {
    case ActionTypes.LOGIN_SUCCESS:
      return Object.assign({}, state, {
        isAuthenticated: true,
        profile: action.profile,
        error: ''
      })
    case ActionTypes.LOGIN_ERROR:
      return Object.assign({}, state, {
        isAuthenticated: false,
        profile: null,
        error: action.error
      })
    case ActionTypes.LOGOUT_SUCCESS:
      return Object.assign({}, state, {
        isAuthenticated: false,
        profile: null
      })
    default:
      return state
    }
}

function testData(state = {
  isFetching: false,
  allTestdata: [],
  error: ''
}, action) {
  switch (action.type) {
    case ActionTypes.TESTDATA_REQUEST:
      return Object.assign({}, state, {
        isFetching: true
      })
    case ActionTypes.TESTDATA_SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        allTestdata: action.response,
        error: ''
      })
    case ActionTypes.TESTDATA_FAILURE:
      return Object.assign({}, state, {
        isFetching: false,
        allTestdata: [],
        error: action.error
      })
    default:
      return state
  }
}

function data(state = {
  isFetching: false,
  singleData: {},
  error: ''
}, action) {
  switch (action.type) {
    case ActionTypes.DATA_REQUEST:
      return Object.assign({}, state, {
        isFetching: true
      })
    case ActionTypes.DATA_SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        singleData: action.response,
        error: ''
      })
    case ActionTypes.DATA_FAILURE:
      return Object.assign({}, state, {
        isFetching: false,
        singleData: {},
        error: action.error
      })
    default:
      return state
  }
}

const rootReducer = combineReducers({
  routing,
  auth,
  testData,
  data
})

export default rootReducer