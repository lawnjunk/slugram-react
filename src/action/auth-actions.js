'use strict'

import axios from 'axios'
import {reset as resetForm} from 'redux-form'

// SYNC ACTIONS
export let tokenSave = (token) => {
  console.log('tokenSave', token)
  return {
    type: 'TOKEN_SAVE',
    token,
  }
}

export let tokenRequestStart = () => {
  console.log('tokenRequestStart')
  return {
    type: 'TOKEN_REQUEST_START',
  }
}

export let tokenRequestFail = (err) => {
  console.error('tokenRequestFail', err)
  return {
    type: 'TOKEN_REQUEST_FAIL',
  }
}

// ASYNC ACTIONS
export let tokenRequestSuccess = (token) => (dispatch) => {
  try {
    window.localStorage.token = JSON.stringify(token)
  } catch( err) {
    console.error(err)  
  }
  dispatch(tokenSave(token))
  return Promise.resolve(token)
}

export let tokenFetch = (goTo) => 
 (dispatch, getState) => {
  let token = getState().app.auth.token
  if(token) 
    return Promise.resolve(token)
  try {
    let decoded = JSON.parse(window.localStorage.token)
    dispatch(tokenRequestSuccess(decoded))
    return Promise.resolve(decoded)
  } catch(err) {
    dispatch(tokenRequestFail)
    return Promise.reject(err)
  }
}

export let loginRequest = (auth) => (dispatch) => {
  console.log('loginRequest')
  dispatch(tokenRequestStart())
  dispatch(resetForm('login'))
  return axios.get(`${__API_URL__}/login`, {auth})
  .then(res => dispatch(tokenRequestSuccess(res.data)))
  .catch(err => dispatch(tokenRequestFail(err)))
}

export let signupRequest = (user) => (dispatch) => {
  console.log('signupRequest')
  dispatch(tokenRequestStart())
  dispatch(resetForm('signup'))
  return axios.post(`${__API_URL__}/signup`, user)
  .then(res => dispatch(tokenSave(res.data)))
  .catch(err => tokenRequestFail(tokenRequestFail(err)))
}
