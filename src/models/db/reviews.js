const db = require('./config/dbconfig')

const create = (content, album_id, user_id) => {
  let query = `
    INSERT INTO review(
      content, review_user_id,
      review_album_id
    )
    VALUES ($1, $2, $3)
    RETURNING *
  `
  return db.one(query, [content, album_id, user_id])
}

const readThreeNewest = () => {
  let query = `
    SELECT DISTINCT
      member.name, album.id,
      review.content, review_user_id,
      review.dateposted, album.title
    FROM review
    JOIN album
    ON review_album_id = album.id
    JOIN member
    ON review_user_id = member.id
    ORDER BY review.dateposted desc
    LIMIT 3
  `
  return db.any(query)
}

const readReviewsById = (id) => {
  let query = `
    SELECT
      review.id, review.content,
      review.dateposted, album.title,
      review.review_album_id,
      review.review_user_id
    FROM review
    JOIN album
    ON review_album_id = album.id
    JOIN member
    ON review_user_id = member.id
    WHERE review_user_id = $1
    ORDER BY review.dateposted desc
  `
  return db.any(query, [id])
}

module.exports = {
  create,
  readThreeNewest,
  readReviewsById
}
