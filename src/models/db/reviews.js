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

module.exports = {
  create
}
