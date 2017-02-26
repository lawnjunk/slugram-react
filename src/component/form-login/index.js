import React from 'react'
import {Field, reduxForm} from 'redux-form' 

let FormLogin  = ({handleSubmit}) => 
    <form className="form-login" onSubmit={handleSubmit} >
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

      <button type="submit"> submit </button>
    </form>

FormLogin = reduxForm({form: 'login'})(FormLogin)

export default FormLogin
