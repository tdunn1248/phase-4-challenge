const Album = require('../../../models/albums')
const Review = require('../../../models/reviews');

module.exports = {
  AlbumsAndNewestReviews: () => {
    return Promise.all([Album.readAll(), Review.readThreeNewest()])
  }
}
