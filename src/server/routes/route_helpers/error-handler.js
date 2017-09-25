const {formErrorHandler} = require('./invalid-input-handler')

module.exports = {
  errorHandler: (error, request, response, next) => {
    formErrorHandler(error, request, response, next)
  }
}
