'use strict'

import React from 'react'
import {connect} from 'react-redux'
import {tokenFetch} from '../../action/auth-actions.js'
import {browserHistory} from 'react-router'

let mapStateToProps = (state) => ({
  ...state, loggedIn: !!state.app.auth.token
})

let mapDispatchToProps = (dispatch) => ({
  tokenFetch: (goTo) => {
    dispatch(tokenFetch()) 
    .then(() => browserHistory.push(goTo))
    .catch(() => browserHistory.push('/'))
  }
})

class AuthCheck extends React.Component {
  constructor(props){
    super(props)
    this.props = props
  }

  componentDidMount(){
    if(!this.props.loggedIn)
      this.props.tokenFetch(this.props.goTo)
  }

  render() {
    return <this.props.component {...this.props} />
  }
}

AuthCheck = connect(mapStateToProps, mapDispatchToProps)(AuthCheck)

let authCheckDecorator = (where) => (Component) => {
  return () => <AuthCheck goTo={where}  component={Component}/>
}

export default authCheckDecorator 

