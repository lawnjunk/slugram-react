'use strict'

import React from 'react'
import {connect} from 'react-redux'
import {galleryCreate, galleryFetchAll} from '../../action/gallery-actions.js'

import authCheckDecorator from '../auth-check'
import GalleryCreate from '../gallery-create'

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
        {this.props.gallerys.map(gal => <p key={gal._id}> {gal.name} </p> )}
      </div>
    )
  }
}

Gallery = connect(mapStateToProps, mapDispatchToProps)(Gallery)
Gallery = authCheckDecorator('/gallery')(Gallery)

export default Gallery
