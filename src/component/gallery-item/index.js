'use strict'

import React from 'react'
import {connect} from 'react-redux'

import GalleryCreate from '../gallery-create'
import {galleryDeleteRequest} from '../../action/gallery-actions.js'

let mapStateToProps = (state, props) => props
let mapDispatchToProps = (dispatch) => ({
  galleryHandleDelete: (gallery) => {
    dispatch(galleryDeleteRequest(gallery))
  }
})

let GalleryItem = (props) => 
  <li className="gallery-item">
    <h3> { props.gallery.name } </h3>
    <button onClick={() => props.galleryHandleDelete(props.gallery)}> del </button>
    <GalleryCreate onSubmit={console.log} gallery={props.gallery} />
  </li>

GalleryItem = connect(mapStateToProps, mapDispatchToProps)(GalleryItem)

export default GalleryItem
