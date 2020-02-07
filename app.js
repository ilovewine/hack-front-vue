const express = require('express')
const history = require('connect-history-api-fallback')
// const cors = require('cors')
const router = require('./router')

let app = express()
// app.use(cors)
app.use(history())
app.use('/', router)
const port = process.env.PORT || 5000
app.listen(port)

// eslint-disable-next-line no-console
console.log('server started on port: ' + port)
