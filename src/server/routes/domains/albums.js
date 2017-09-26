const router = require('express').Router()
const Album = require('../../../models/albums')
const {albumView} = require('../route_helpers/view.js')

router.get('/:id' , (request, response) => {
  Album.readById(request.params.id)
  .then(albumInfo => {
    response.status(200).render('albums/album', {
      view: albumView(request, albumInfo)
    })
  })
})

module.exports = router
