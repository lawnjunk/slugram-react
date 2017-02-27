'use strict'

import {combineReducers} from 'redux'
import authReducer from './auth-reducer.js'
import galleryReducer from './gallery-reducer.js'

let appReducer = combineReducers({
  auth: authReducer,
  gallerys: galleryReducer,
})

export default appReducer
