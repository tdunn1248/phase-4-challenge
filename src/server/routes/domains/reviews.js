const router = require('express').Router()
const Album = require('../../../models/albums')
const Review = require('../../../models/reviews')
const {newReviewView} = require('../route_helpers/view')
const {validateReviewForm} = require('../route_helpers/validation')

router.get('/:id/reviews/new', (request, response) => {
  Album.readById(request.params.id)
  .then(albumInfo => {
    response.status(200).render('reviews/new-review', {
      view: newReviewView(request, albumInfo)
    })
  })
})

router.post('/:id', validateReviewForm, (request, response, next) => {
  Review.create(
    request.body.newReview,
    request.session.id,
    request.params.id
  )
  .then(() => {
    response.redirect('/albums/' + request.params.id)
  })
})

module.exports = router
