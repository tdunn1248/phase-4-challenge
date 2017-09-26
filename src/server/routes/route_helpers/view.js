module.exports = {
  indexView: (request, albumInfo ) => {
    const indexView = {
      id: request.session.id,
      albums: albumInfo[0],
      reviews: albumInfo[1]
    }
    return indexView
  },
  profileView: (request, userInfo) => {
    const profileView = {
      userId: userInfo[1][0].id,
      name: userInfo[1][0].name,
      id: request.session.id,
      email: userInfo[1][0].email,
      dateJoined: userInfo[1][0].datejoined,
      reviews: userInfo[0]
    }
    return profileView
  },
  newReviewView: (request, albumInfo) => {
    const reviewView = {
      name: request.session.name,
      id: request.session.id,
      albumTitle: albumInfo[0].title,
      albumID: albumInfo[0].id
    }
    return reviewView
  },
  albumView: (request, albumInfo) => {
    const albumView = {
      name: request.session.name,
      id: request.session.id,
      albumTitle: albumInfo[0].title,
      albumID: albumInfo[0].id
    }
    return albumView
  }
}
