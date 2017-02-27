'use strict'

import React from 'react'
import thunk from 'redux-thunk'
import {render} from 'react-dom'
import {Provider} from 'react-redux'
import {reducer as formReducer} from 'redux-form'
import {Router, Route, browserHistory} from 'react-router'
import {createStore, combineReducers, applyMiddleware} from 'redux'
import {syncHistoryWithStore, routerReducer} from 'react-router-redux'

//TODO: setup react-rouser-redux to sync up redux and react for 
  //and get actionsCreators for browserHistory/etc.

// import reducer
import appReducer from './reducer'

// import components
import Landing from './component/landing'
import Gallery from './component/gallery'

let reducer = combineReducers({
  app: appReducer,
  form: formReducer,
  routing: routerReducer,
})

let store = createStore(reducer, applyMiddleware(thunk))

store.subscribe(() => {
  console.log('____STATE____', store.getState())
})

const history = syncHistoryWithStore(browserHistory, store)

let App = () => 
  <div>
    <Provider store={store}>
      <Router history={history}>
        <Route path="/" component={Landing} />
        <Route path='/gallery' component={Gallery} />
      </Router>
    </Provider>
  </div>

render(<App />, document.getElementById('root'))
