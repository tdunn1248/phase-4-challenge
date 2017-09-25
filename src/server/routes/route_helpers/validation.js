module.exports = {
  validateSignupForm: (request, response, next) => {
    if (request.body.name == '') next(new Error('Please enter a name'))
    if (request.body.email == '') next(new Error('Please enter a valid email'))
    if (request.body.password == '') next(new Error('Please enter a password'))
    next()
  },
  validateLoginForm: (request, response, next) => {
    if (request.body.email == '') next(new Error('Please enter an email'))
    if (request.body.password == '') next(new Error('Please enter password'))
    next()
  }
}
