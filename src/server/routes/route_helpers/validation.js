module.exports = {
  validateSignupForm: (request, response, next) => {
    if (request.body.name == '') return next(new Error('Please enter a name'))
    if (request.body.email == '') return next(new Error('Please enter a valid email'))
    if (request.body.password == '') return next(new Error('Please enter a password'))
    next()
  },
  validateSigninForm: (request, response, next) => {
    if (request.body.email == '') return next(new Error('Please enter an email'))
    if (request.body.password == '') return next(new Error('Please enter your password'))
    next()
  },
  validateReviewForm: (request, response, next) => {
    if (request.body.newReview === '') return next(new Error('Review must have content'))
    next()
  }
}
