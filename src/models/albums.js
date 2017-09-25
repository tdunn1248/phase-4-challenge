const dbAlbum = require('./db/albums')

module.exports = {
  readAll: dbAlbum.readAll,
  readById: dbAlbum.readById
}
