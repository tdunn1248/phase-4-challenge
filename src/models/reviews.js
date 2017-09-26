const dbReviews = require('./db/reviews')
const dbUsers = require('./db/users')

const UserReviews = (request) => {
  return Promise.all([
    dbReviews.readReviewsById(request.params.id),
    dbUsers.readUserInfoById(request.params.id)
  ])
}

module.exports = {
  create: dbReviews.create,
  readThreeNewest: dbReviews.readThreeNewest,
  UserReviews,
  deleteRecord: dbReviews.deleteRecord
}
