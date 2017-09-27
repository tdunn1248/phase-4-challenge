const User = require('../../../models/users')
const Album = require('../../../models/albums')
const {newReviewView} = require('../route_helpers/view')

module.exports = {
  formErrorHandler: (error, request, response, next) => {
    switch (error.message) {
      case ('Incorrect Password') :
        response.render('users/login', {error: error.message})
        break
      case ('Email already in use') :
        console.log(error.stack)
        response.render('users/sign-up', {error: error.message})
        break
      case ('No user found') :
        console.log(error.stack)
        response.render('users/login', {error: error.message})
        break
      case ('Please enter a name') :
        response.render('users/sign-up', {error: error.message})
        break
      case ('Please enter an email') :
        response.render('users/login', {error: error.message})
        break
      case ('Please enter a valid email') :
        response.render('users/sign-up', {error: error.message})
        break
      case ('Please enter a password') :
        response.render('users/sign-up', {error: error.message})
        break
      case ('Please enter your password') :
        response.render('users/login', {error: error.message})
        break
      case ('Review must have content') :
        console.log('here??');
        Album.readById(parseInt(request.path.slice(9)))
        .then(albumInfo => {
          response.status(200).render('reviews/new-review', {
            view: newReviewView(request, albumInfo),
            error: error.message
          })
        })
        break
      default :
        next()
    }
  }
}
