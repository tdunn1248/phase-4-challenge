const router = require('express').Router()

router.get('/', (request, response, next) => {
  // albums and reviews
  response.status(200).render('index')
})

const users = require('./users')
router.use('/', users)




module.exports = router
