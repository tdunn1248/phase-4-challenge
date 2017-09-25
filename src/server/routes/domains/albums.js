const router = require('express').Router()
const Album = require('../../../models/albums')

router.get('/:id' , (request, response) => {
  Album.readById(request.params.id)
  .then(albumInfo => {
    response.status(200).render('albums/album', {
      view: albumInfo[0]
    })
  })
})

module.exports = router
