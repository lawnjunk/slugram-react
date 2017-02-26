'use strict'

import {combineReducers} from 'redux'
import authReducer from './auth-reducer.js'

let appReducer = combineReducers({
  auth: authReducer,
})

export default appReducer
