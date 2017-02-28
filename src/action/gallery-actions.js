'use strict'

import axios from 'axios'
import {tokenFetch} from  './auth-actions.js'

// syncronous action creators
export let galleryAdd = (gallery) => ({
  type: 'GALLERY_ADD',
  gallery,
})

export let galleryDelete = (gallery) => ({
  type: 'GALLERY_DELETE',
  gallery,
})

export let galleryUpdate = (gallery) => ({
  type: 'GALLERY_UPDATE',
  gallery,
})

export let gallerySetAll = (gallerys) => ({
  type: 'GALLERY_SET_ALL',
  gallerys,
})

// asyncronous action creators
export let galleryFetchAll = () => (dispatch) =>
  dispatch(tokenFetch())
  .then((token) => {
    let url = `${__API_URL__}/gallery`
    let headers = {
      Authorization: `Bearer ${token}`
    }
    return axios.get(url, {headers})
  })
  .then(res => dispatch(gallerySetAll(res.data)))
  .catch(console.error)

export let galleryCreate = (gallery) => (dispatch) =>
  dispatch(tokenFetch())
  .then((token) => {
    let url = `${__API_URL__}/gallery`
    let headers = {
      Authorization: `Bearer ${token}`
    }
    return axios.post(url, gallery, {headers})
  })
  .then(res => dispatch(galleryAdd(res.data)))
  .catch(console.error)

export let galleryDeleteRequest = (gallery) => (dispatch) => 
  dispatch(tokenFetch())
  .then((token) => {
    let url = `${__API_URL__}/gallery/${gallery._id}`
    let headers = {
      Authorization: `Bearer ${token}`
    }
    return axios.delete(url, {headers})
  })
  .then(res => dispatch(galleryDelete(gallery)))
  .catch(console.error)

export let galleryUpdateRequest = (gallery) => (dispatch) => 
  dispatch(tokenFetch())
  .then((token) => {
    let url = `${__API_URL__}/gallery/${gallery._id}`
    let headers = { Authorization: `Bearer ${token}` }
    return axios.put(url, gallery, {headers})
  })
  .then(res => dispatch(galleryUpdate(res.data)))
  .catch(console.error)

