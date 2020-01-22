const express = require('express')
const path = require('path')
const serveStatic = require('serve-static')
const cors = require('cors')

let app = express();
app.use('cors')
app.use('/anonymous-viking', function (req, res) {
    res.status(301).redirect('https://www.facebook.com/Anonimowy-Wiking-105335621006471')
})
app.use(serveStatic(__dirname + '/dist'))
const port = process.env.PORT || 5000
app.listen(port)

// eslint-disable-next-line no-console
console.log('server started ' + port)
