const express = require('express');
const router = express.Router();
const { getPosts, createPosts } = require('../controllers/posts');

router.use(function timeLog (req, res, next) {
  console.log('url: ', req.url)
  next()
})

router.get('/', getPosts);
router.post('/', createPosts)

module.exports = router;