'use strict'

import React from 'react'
import {connect} from 'react-redux'

import GalleryCreate from '../gallery-create'
import {galleryDeleteRequest, galleryUpdateRequest} from '../../action/gallery-actions.js'
import createGalleryEditForm from '../gallery-edit'

let mapStateToProps = (state, props) => props

let mapDispatchToProps = (dispatch) => ({
  galleryHandleDelete: (gallery) => {
    dispatch(galleryDeleteRequest(gallery))
  },
  galleryHandleUpdate: (gallery) => {
    console.log('gallery', gallery)
    dispatch(galleryUpdateRequest(gallery))
  },
})

let GalleryItem = (props) => {
  let GalleryEdit = createGalleryEditForm(props.gallery)
  return <li className="gallery-item">
    <h3> { props.gallery.name } </h3>
    <button onClick={() => props.galleryHandleDelete(props.gallery)}> del </button>
    <GalleryEdit onSubmit={props.galleryHandleUpdate} initialValues={props.gallery}/>
  </li>
}

GalleryItem = connect(mapStateToProps, mapDispatchToProps)(GalleryItem)

export default GalleryItem
