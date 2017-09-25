const router = require('express').Router()

router.get('/', (request, response, next) => {
  // albums and reviews
  response.status(200).render('index')
})

router.use('/', require('./domains/users'))

module.exports = router
