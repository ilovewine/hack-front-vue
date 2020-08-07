const express = require('express');
const path = require('path');
let router = express.Router();

// router.get('/anonymous-viking', function (req, res, next) {
//    res.redirect(301,'https://www.facebook.com/Anonimowy-Wiking-105335621006471')
// })
router.get('/*', express.static(path.resolve(__dirname, 'dist/'), () => ({
  setHeaders: {
    'Cache-Control': 'no-cache',
  },
})));

module.exports = router;
