module.exports = {
  checkUserSession: (request, response, next) => {
    if (!request.session.id) {
      return next(new Error('User must be logged in to post content'))
    }
    next()
  }
}
