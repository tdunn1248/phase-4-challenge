const router = require('express').Router()
const Album = require('../../../models/albums')
const {albumView, newReviewView} = require('../route_helpers/view.js')
const {checkUserSession} = require('../route_helpers/session/check-user-session')

router.get('/:id', (request, response) => {
  Album.infoAndReviews(request.params.id)
  .then(albumInfo => {
    response.status(200).render('albums/album', {view: albumView(request, albumInfo)})
  })
})

router.get('/:id/reviews/new', checkUserSession, (request, response) => {
  Album.readById(request.params.id)
  .then(albumInfo => {
    response.status(200).render('reviews/new-review', {view: newReviewView(request, albumInfo)})
  })
})

module.exports = router
