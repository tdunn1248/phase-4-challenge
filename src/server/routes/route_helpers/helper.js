const Album = require('../../../models/albums')
const Review = require('../../../models/reviews');

module.exports = {
  AlbumsAndNewestReviews: () => Promise.all([Album.readAll(), Review.readThreeNewest()])
}
