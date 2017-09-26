module.exports = {
  assignUserSession: (request, user) => {
    console.log('assigning',user.info.id);
    request.session.id = user.info.id
    request.session.name = user.info.name
    request.session.email = user.info.email
    request.session.dateJoined = user.info.datejoined
    return request.session
  },
  assignNewUserSession: (request, user) => {
    request.session.id = user.id
    request.session.name = user.name
    request.session.email = user.email
    request.session.dateJoined = user.datejoined
    return request.session
  }
}
