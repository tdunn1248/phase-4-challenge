const dbAlbum = require('./db/albums')

const infoAndReviews = (id) => {
  return Promise.all([
    dbAlbum.readById(id),
    dbAlbum.readAlbumReviewsById(id)
  ])
}

module.exports = {
  readAll: dbAlbum.readAll,
  readById: dbAlbum.readById,
  infoAndReviews
}
