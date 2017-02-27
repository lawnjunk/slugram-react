'use strict'

let galleryReducer = (state=[], action) => {
  switch(action.type) {
    case 'GALLERY_ADD':
      console.log('gallery add', action.gallery)
      return [action.gallery, ...state]
    case 'GALLERY_SET_ALL':
      console.log('gallery set all', action.gallerys)
      return action.gallerys
    case 'GALLERY_DELETE':
      console.log('gallery delete', action.gallery)
      return state.filter(g => g._id !== action.gallery._id)
    return action.gallerys
    default:
      return state
  }
}

export default galleryReducer
