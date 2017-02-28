'use strict'

import axios from 'axios'

import {tokenFetch} from './auth-actions.js'

export let photoUploadRequest = (gallery, photo) => (dispatch) => 
  dispatch(tokenFetch())
  .then(token => {
    let url = `${__API_URL__}/pic`
    let headers = {Authorization: `Bearer ${token}`}
    let fd = new FormData(photo)
    return axios.post(url, fd, {headers})
  })
  .then(res => console.log('success', res.data))
  .catch(console.error)
  
