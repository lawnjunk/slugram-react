'use strict'

import React from 'react'
import {Field, reduxForm} from 'redux-form'

let GalleryCreate = ({handleSubmit}) => 
  <form className="gallery-create" onSubmit={handleSubmit}>
    <Field
      type="text"
      name="name"
      component="input"
      placeholder="title" />

    <Field
      type="text"
      name="desc"
      component="input"
      placeholder="description" />

    <button type="submit"> create gallery </button>
  </form>

GalleryCreate = reduxForm({form: 'galleryCreate'})(GalleryCreate)

export default GalleryCreate

