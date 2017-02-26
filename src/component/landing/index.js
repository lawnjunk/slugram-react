'use strict'

import React from 'react'
import {connect} from 'react-redux'
import {browserHistory} from 'react-router'

import FormLogin from '../form-login'
import FormSignup from '../form-signup'
import {loginRequest, signupRequest} from '../../action/auth-actions.js'

const mapStateToProps = (state, ownProps) => ({
  ...ownProps, loggedIn: !!state.app.auth.token
})

const mapDispatchToProps = dispatch => ({
  loginHandleSubmit: (values) => {
    console.log('loginHandleSubmit')
    dispatch(loginRequest(values))
  },
  signupHandleSubmit: (values) => {
    console.log('signupHandleSubmit')
    dispatch(signupRequest(values))
  },
})

let Landing = ({loginHandleSubmit, signupHandleSubmit, loggedIn}) => 
  <div className="landing">
    <h1> landing </h1>
    <FormLogin onSubmit={loginHandleSubmit}/>
    <FormSignup onSubmit={signupHandleSubmit}/>
  </div>
  

Landing = connect(mapStateToProps, mapDispatchToProps)(Landing)

export default Landing
