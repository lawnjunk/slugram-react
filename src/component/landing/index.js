'use strict'

import React from 'react'
import {connect} from 'react-redux'
import {browserHistory} from 'react-router'

import AuthLogin from '../auth-login'
import AuthSignup from '../auth-signup'
import GalleryCreate from '../gallery-create'
import authCheckDecorator from '../auth-check'
import {loginRequest, signupRequest, tokenFetch} from '../../action/auth-actions.js'

const mapStateToProps = (state, ownProps) => ({
  ...ownProps, loggedIn: !!state.app.auth.token
})

const mapDispatchToProps = dispatch => ({
  loginHandleSubmit: (values) => {
    console.log('loginHandleSubmit')
    dispatch(loginRequest(values))
    .then(() => browserHistory.push('/gallery'))
  },
  signupHandleSubmit: (values) => {
    console.log('signupHandleSubmit')
    dispatch(signupRequest(values))
    .then(() => browserHistory.push('/gallery'))
  },
})

let Landing = (props) =>
  <div className="landing">
    <h1> landing </h1>
    <AuthLogin onSubmit={props.loginHandleSubmit} />
    <AuthSignup onSubmit={props.signupHandleSubmit}/>
  </div>

Landing = connect(mapStateToProps, mapDispatchToProps)(Landing)
Landing = authCheckDecorator('/gallery')(Landing)

export default Landing
