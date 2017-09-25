const User = require('../../../models/users')
const Album = require('../../../models/albums')

module.exports = {
  errorHandler: (error, request, response, next) => {
    switch (error.message) {
      case ('Incorrect Password') :
        console.log('okay then')
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
        console.log('her?');
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
        Album.readById(parseInt(request.path.slice(9)))
        .then(albumInfo => {
          response.status(200).render('reviews/new-review', {
            view: albumInfo[0],
            error: error.message
          })
        })
    break
      default :
        console.log('Error::', error.stack)
        response.render('not_found.pug', {error: error.message})
        break
    }
  }
}
