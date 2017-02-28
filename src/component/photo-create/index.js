'use strict'

import React from 'react'
import {connect} from 'react-redux'
import {Field, reduxForm} from 'redux-form'

import {photoUploadRequest} from '../../action/photo-actions.js'


let mapStateToProps = (state, props) => props
let mapDispatchToProps = (dispatch) => ({
  uploadRequest: (values) => {
    console.log('uploadRequest', values)
    let {galleryId} = values
    console.log('values.gallery', values.galleryId)
    delete values.gallery
    dispatch(photoUploadRequest(galleryId, values))
  },
})

let PhotoUpload = (props) => {
  return <div className="photo-upload">
    <form onSubmit={props.handleSubmit} >
      <Field
        type='text'
        name='name'
        component='input'
        placeholder='name' />
      <Field
        type='text'
        name='desc'
        component='input'
        placeholder='description' />

      <Field
        type='file'
        name='file'
        component='input'
        placeholder='' />

      <button type='submit'> upload photo </button>
    </form>
  </div>
}

PhotoUpload = reduxForm({form: 'photo-upload'})(PhotoUpload)


let Wrapper = (props) => {
  let wat = {...props.gallery}
  console.log('Wrapper', wat._id)
  return <PhotoUpload initialValues={{galleryId: `${props.gallery._id}`}} onSubmit={props.uploadRequest} />
}

Wrapper = connect(mapStateToProps, mapDispatchToProps)(Wrapper)

export default Wrapper


