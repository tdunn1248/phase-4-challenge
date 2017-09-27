const router = require('express').Router()
const {indexView} = require('./route_helpers/view')
const {AlbumsAndNewestReviews} = require('./route_helpers/album-review-helpers')

router.get('/', (request, response, next) => {
  AlbumsAndNewestReviews()
  .then(albumsAndReviews => {response.status(200).render('index', {view: indexView(request, albumsAndReviews)})})
})

router.use('/', require('./domains/users'))
router.use('/albums', require('./domains/albums'))
router.use('/reviews', require('./domains/reviews'))

module.exports = router
