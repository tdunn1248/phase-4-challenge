const {formErrorHandler} = require('./invalid-input-handler')

module.exports = {
  errorHandler: (error, request, response, next) => {
    formErrorHandler(error, request, response, next)
    switch(error.message) {
      case ('User must be logged in to post content') :
        response.status(302).render('users/login', {error: error.message})
        break
    }
  }
}
