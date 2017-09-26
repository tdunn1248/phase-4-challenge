const router = require('express').Router()
const Review = require('../../../models/reviews')
const {validateReviewForm} = require('../route_helpers/validation')

router.post('/:id', validateReviewForm, (request, response) => {
  Review.create(
    request.body.newReview,
    request.session.id,
    request.params.id
  )
  .then(() => {response.redirect('/albums/' + request.params.id)})
})

router.delete('/:id', (request,response) => {
  Review.deleteRecord(request.params.id)
  .then(() => {response.status(302).redirect(request.path)})
})

module.exports = router
