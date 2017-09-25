const db = require('./config/dbconfig')

const readAll = () => {
  let query = `
    SELECT *
    FROM album
  `
  return db.any(query)
}

const readById = (id) => {
  let query = `
    SELECT *
    FROM album
    WHERE album.id = $1
  `
  return db.any(query, [id])
}

module.exports = {
  readAll,
  readById
}
