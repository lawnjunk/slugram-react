'use strict'

import React from 'react'
import thunk from 'redux-thunk'
import {render} from 'react-dom'
import {Provider} from 'react-redux'
import {reducer as formReducer} from 'redux-form'
import {Router, Route, browserHistory} from 'react-router'
import {createStore, combineReducers, applyMiddleware} from 'redux'


//TODO: setup react-rouser-redux to sync up redux and react for 
  //and get actionsCreators for browserHistory/etc.

// import reducer
import appReducer from './reducer'

// import components
import Landing from './component/landing'

let reducer = combineReducers({
  app: appReducer,
  form: formReducer,
})

let store = createStore(reducer, applyMiddleware(thunk))

store.subscribe(() => {
  console.log('____STATE____', store.getState())
})

let Gallery = () => 
  <h1> gallery </h1>

let App = () => 
  <div>
    <Provider store={store}>
      <Router history={browserHistory}>
        <Route path="/" component={Landing} />
        <Route path='/gallery' component={Gallery} />
      </Router>
    </Provider>
  </div>

render(<App />, document.getElementById('root'))
