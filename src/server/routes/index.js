const router = require('express').Router()
const Album = require('../../models/albums')

router.get('/', (request, response, next) => {
  Album.readAll().then(albums => {
    response.status(200).render('index', {albums})
  })
})

router.use('/', require('./domains/users'))
router.use('/albums', require('./domains/albums'))
router.use('/reviews', require('./domains/reviews'))

module.exports = router
