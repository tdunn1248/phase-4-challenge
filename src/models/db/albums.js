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

const readAlbumReviewsById = (id) => {
  let query = `
    SELECT DISTINCT
      review.id, review.content,
      review.dateposted,
      review.review_album_id,
      review.review_user_id,
      member.name
    FROM review
    JOIN member
    ON review_user_id = member.id
    WHERE review.review_album_id = $1
  `
  return db.any(query, [id])
}

module.exports = {
  readAll,
  readById,
  readAlbumReviewsById
}
