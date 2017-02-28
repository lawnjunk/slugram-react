'use strict'

import React from 'react'
import {Field, reduxForm, destroy} from 'redux-form'
import {connect} from 'react-redux'

let mapStateToProps = (state, props) => props
let mapDispatchToProps = (dispatch) => ({
  destroyForm: (form) => {
    dispatch(destroy(form))
  }
})

class GalleryEdit extends React.Component {

  render(){
    return <div className='galleryEdit'>
      <form onSubmit={this.props.handleSubmit}>
        <Field
          name='name'
          type='text'
          component='input'
          placeholder='name' />

        <Field
          name='desc'
          type='text'
          component='input'
          placeholder='desc' />

          <button type='submit'> update </button>
      </form>
    </div>
  }
}

GalleryEdit = connect(mapStateToProps, mapDispatchToProps)(GalleryEdit)

let createGalleryEditForm = (gallery) => {
  return reduxForm({form: `gallery-edit-${gallery._id}`})(GalleryEdit)
}

export default createGalleryEditForm
