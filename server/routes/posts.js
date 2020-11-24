const express = require('express');
const router = express.Router();
const {
  getPosts, createPost, updatePost, deletePost , likePost
} = require('../controllers/posts');

router.use(function timeLog (req, res, next) {
  console.log('url: ', req.url)
  next()
})

router.get('/', getPosts);
router.post('/', createPost);
router.patch('/:id', updatePost);
router.delete('/:id', deletePost);
router.patch('/:id/likepost', likePost);

module.exports = router;