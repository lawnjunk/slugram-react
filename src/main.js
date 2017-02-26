'use strict'

import React from 'react'
import thunk from 'redux-thunk'
import {render} from 'react-dom'
import {Provider} from 'react-redux'
import {reducer as formReducer} from 'redux-form'
import {Router, Route, browserHistory} from 'react-router'
import {createStore, combineReducers, applyMiddleware} from 'redux'

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

let App = () => 
  <div>
    <Provider store={store}>
      <Router history={browserHistory}>
        <Route path="/" component={Landing} />
      </Router>
    </Provider>
  </div>

render(<App />, document.getElementById('root'))
