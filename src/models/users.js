const dbUsers = require('./db/users')
const bcrypt = require('bcrypt')

// sign up
const HashPassword = (password) => bcrypt.hash(password, 10)
const DBcreate =  (name, email, hashedPassword) => dbUsers.create(name, email, hashedPassword)

const signup = (requestBody) => HashPassword(requestBody.password).then(hash => {
  DBcreate(requestBody.name, requestBody.email, hash)
})

// sign in
const compare = (password, hashedPassword, user) => bcrypt.compare(password, hashedPassword, user)
const GetUserPassword = (email) => dbUsers.readUserInfo(email)
const ComparePasswords = (password, hashedPassword, user) => compare(password, hashedPassword, user)

const signin = (requestBody) => GetUserPassword(requestBody.email).then(user => {
  return ComparePasswords(requestBody.password, user.password).then(isValid => {
    let userInfo = {
      valid: isValid,
      info: user
    }
    return userInfo
  })
})

module.exports = {
  signup,
  signin
}
