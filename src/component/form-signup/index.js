'use strict'

import React from 'react'
import {Field, reduxForm} from 'redux-form'

let FormSignup = ({handleSubmit}) => 
  <form className="form-signup" onSubmit={handleSubmit}>
    <Field
      type="text"
      name="username"
      component="input"
      placeholder="username" />

    <Field
      type="password"
      name="password"
      component="input"
      placeholder="password" />

    <Field
      type="email"
      name="email"
      component="input"
      placeholder="email" />

    <button type="submit"> submit </button>
  </form>


FormSignup = reduxForm({form: 'signup'})(FormSignup)

export default FormSignup
