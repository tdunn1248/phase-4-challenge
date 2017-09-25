const router = require('express').Router()
const Album = require('../../../models/albums')
const Review = require('../../../models/reviews')

router.get('/:id/reviews/new', (request, response) => {
  Album.readById(request.params.id)
  .then(albumInfo => {
    response.status(200).render('reviews/new-review', {
      view: albumInfo[0]
    })
  })
})

router.post('/:id', (request, response, next) => {
  if (request.body.newReview === '') return next(new Error('Review must have content'))
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
