var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  env = process.env.TEST_ENV
  res.send("Hello World test" + env)
});

module.exports = router;
