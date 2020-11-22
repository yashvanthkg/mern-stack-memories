const express = require('express');
const router = express.Router();
const { getPosts } = require('../controllers/posts');

router.use(function timeLog (req, res, next) {
  console.log('url: ', req.url)
  next()
})



router.get('/', getPosts);

module.exports = router;