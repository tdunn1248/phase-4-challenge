const router = require('express').Router()
const User = require('../../../models/users')
const {UserReviews} = require('../../../models/reviews')
const {assignUserSession, assignNewUserSession} = require('../route_helpers/session')
const {validateSignupForm, validateSigninForm} = require('../route_helpers/validation')
const {profileView} = require('../route_helpers/view')

router.route('/sign-up')
      .get((request, response) => {response.status(200).render('users/sign-up')})
      .post(validateSignupForm, (request, response, next) => {
        User.signup(request.body)
        .then(newUser => {
          assignNewUserSession(request, newUser)
          response.redirect('/users/' + newUser.id)
        })
        .catch(e => next(new Error('Email already in use')))
      })

router.route('/sign-in')
      .get((request, response) => {response.status(200).render('users/login')})
      .post(validateSigninForm, (request, response, next) => {
        User.signin(request.body).then(user => {
          if(!user.valid) return next(new Error('Incorrect Password'))
          assignUserSession(request, user)
          response.redirect('/users/' + user.info.id)
        })
        .catch(e => next(new Error('No user found')))
      })

router.get('/sign-out', (request, response) => {
  request.session = null
  response.redirect('/')
})

router.get('/users/:id', (request, response, next) => {
  UserReviews(request).then(userReviews => {
    response.status(200).render('users/profile', {view: profileView(request, userReviews)})
  })
})

module.exports = router
