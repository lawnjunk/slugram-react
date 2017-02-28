'use strict'

import React from 'react'
import {connect} from 'react-redux'
import {reset as resetForm} from 'redux-form'
import {galleryCreate, galleryFetchAll} from '../../action/gallery-actions.js'

import PhotoCreate from '../photo-create'
import GalleryItem from '../gallery-item'
import GalleryCreate from '../gallery-create'
import authCheckDecorator from '../auth-check'

let mapStateToProps = (state, props) => ({
  ...props,
  gallerys: state.app.gallerys,
})

let mapDispatchToProps = (dispatch) => ({
  galleryFetchAll: () => {
    dispatch(galleryFetchAll())
  },
  galleryCreateHandleSubmit: (values) => {
    console.log('galleryCreateHandleSubmit', values)
    dispatch(galleryCreate(values))
    .then(() => dispatch(resetForm('galleryCreate')))
  },
})

class Gallery extends React.Component {
  componentWillMount(){
    console.log('this.propsyprops', this.props)
    this.props.galleryFetchAll()
  }

  render(){
    return (
      <div className='gallery'>
        <GalleryCreate onSubmit={this.props.galleryCreateHandleSubmit} />
        {this.props.gallerys.map(gal => <GalleryItem key={gal._id} gallery={gal} /> )}
        {this.props.gallerys[0] && this.props.gallerys[0]._id}

        //<PhotoCreate gallery={this.props.gallerys[0]} />
      </div>
    )
  }
}

Gallery = connect(mapStateToProps, mapDispatchToProps)(Gallery)
Gallery = authCheckDecorator('/gallery')(Gallery)

export default Gallery
