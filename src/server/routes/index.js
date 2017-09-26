const router = require('express').Router()
const {indexView} = require('./route_helpers/view')
const {AlbumsAndNewestReviews} = require('./route_helpers/album-review-helpers')
const {checkUserSession} = require('./route_helpers/session/check-user-session')

router.get('/', (request, response, next) => {
    AlbumsAndNewestReviews()
    .then(albumsAndReviews => {
    response.status(200).render('index', {view: indexView(request, albumsAndReviews)})
  })
})

router.use('/', require('./domains/users'))
router.use('/albums', require('./domains/albums'))

router.use(checkUserSession)
router.use('/reviews', require('./domains/reviews'))

module.exports = router
