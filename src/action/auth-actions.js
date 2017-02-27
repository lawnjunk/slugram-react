'use strict'

import axios from 'axios'

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

export let authRequestFail = (err) => {
  console.error('authRequestFail', err)
  return {
    type: 'TOKEN_REQUEST_FAIL',
  }
}

// ASYNC THUNK ACTIONS
export let tokenStore = (token) => (dispatch) => {
  try {
    window.localStorage.token = JSON.stringify(token)
  } catch( err) {
    console.error(err)  
  }
  dispatch(tokenSave(token))
  return Promise.resolve(token)
}

export let tokenFetch = (goTo) => {
   return (dispatch, getState) => {
    let token = getState().app.auth.token
    if(token) 
      return Promise.resolve(token)
    try {
      token = JSON.parse(window.localStorage.token)
      dispatch(tokenSave(token))
      return Promise.resolve(token)
    } catch(err) {
      dispatch(authRequestFail(err))
      return Promise.reject(err)
    }
  }
}

export let loginRequest = (auth) => (dispatch) => {
  console.log('loginRequest')
  dispatch(tokenRequestStart())
  return axios.get(`${__API_URL__}/login`, {auth})
  .then(res => dispatch(tokenStore(res.data)))
  .catch(err => dispatch(authRequestFail(err)))
}

export let signupRequest = (user) => (dispatch) => {
  console.log('signupRequest')
  dispatch(tokenRequestStart())
  return axios.post(`${__API_URL__}/signup`, user)
  .then(res => dispatch(tokenStore(res.data)))
  .catch(err => authRequestFail(authRequestFail(err)))
}
