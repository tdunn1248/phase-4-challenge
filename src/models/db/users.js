const db = require('./config/dbconfig')

const create = (name, email, password) => {
  let query = `
    INSERT INTO
      member(name, email, password)
    VALUES
      ($1, $2, $3)
    RETURNING *
  `
  return db.one(query, [name, email, password])
}

const readUserInfo = (email) => {
  let query = `
    SELECT *
    FROM member
    WHERE email = $1
  `
  return db.one(query, [email])
}

module.exports = {
  create,
  readUserInfo
}
