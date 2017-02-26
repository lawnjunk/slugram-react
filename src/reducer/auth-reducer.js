'use strict'

let authReducer = (state={token: null, isFetching: true}, action) => {
  switch (action.type) {
    case 'TOKEN_REQUEST_START': 
      return {...state, isFetching: true}
    case 'TOKEN_REQUEST_FAIL':
      return {...state, isFetching: false}
    case 'TOKEN_SAVE':
      return {token: action.token, isFetching: false}
    default: 
      return state
  }
}

export default authReducer
