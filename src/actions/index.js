import {CALL_API} from '../middleware/api';
import {authClientId, myDomain} from '../../config/authkeys'
import Auth0Lock from 'auth0-lock'
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const LOGIN_ERROR = 'LOGIN_ERROR'

function loginSuccess(profile) {
  return {
    type: LOGIN_SUCCESS,
    profile
  }
}

function loginError(error) {
  return {
    type: LOGIN_ERROR,
    error
  }
}

export function login() {
  const lock = new Auth0Lock(authClientId, myDomain)
  return dispatch => {
    lock.show((error, profile, token) => {
      if(error) {
        return dispatch(loginError(error))
      }
      localStorage.setItem('profile', JSON.stringify(profile))
      localStorage.setItem('id_token', token)
      return dispatch(loginSuccess(profile))
    })
  }
}

export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS'

function logoutSuccess(profile) {
  return {
    type: LOGOUT_SUCCESS
  }
}

export function logout() {
  return dispatch => {
    localStorage.removeItem('id_token');
    localStorage.removeItem('profile');
    return dispatch(logoutSuccess());
  }
}

export const TESTDATA_REQUEST = 'TESTDATA_REQUEST'
export const TESTDATA_SUCCESS = 'TESTDATA_SUCCESS'
export const TESTDATA_FAILURE = 'TESTDATA_FAILURE'

function fetchTestdata() {
  return {
    [CALL_API]: {
      types: [ TESTDATA_REQUEST, TESTDATA_SUCCESS, TESTDATA_FAILURE ],
      endpoint: 'testdata',
      authenticatedRequest: false
    }
  }
}

export function loadTestdata() {
  return dispatch => {
    return dispatch(fetchTestdata())
  }
}

export const DATA_REQUEST = 'DATA_REQUEST'
export const DATA_SUCCESS = 'DATA_SUCCESS'
export const DATA_FAILURE = 'DATA_FAILURE'

function fetchData(id) {
  return {
    [CALL_API]: {
      types: [ DATA_REQUEST, DATA_SUCCESS, DATA_FAILURE ],
      endpoint: `testdata/${id}`,
      authenticatedRequest: true
    }
  }
}

export function loadData(id) {
  return dispatch => {
    return dispatch(fetchTestdata(id))
  }
}