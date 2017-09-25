const express = require('express')
const app = express()
const path = require('path');
const routes = require('./server/routes')
const bodyParser = require('body-parser')
const cookieSession = require('cookie-session')
const {errorHandler} = require('./server/routes/route_helpers/error-handler')

app.set('view engine', 'pug')
app.set('views', __dirname + '/views')

app.use(bodyParser.urlencoded({extended: true}))
app.use(express.static('src/public'))

app.use(cookieSession({
  name: 'cookie-session',
  keys: ['key1', 'key2'],
  maxAge: 50000000
}))

app.use(routes)
app.use(errorHandler)

const port = process.env.PORT || 3012
app.listen(port, () => console.log(`Server runnin on ${port}`))
