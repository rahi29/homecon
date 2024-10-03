const express = require('express')
const {
    createPost,
    updatePost,
    deletePost,
    getContestPosts
} = require('../controllers/postController')
const requireAuth = require('../middleware/requireAuth')

const router = express.Router()

router.use(requireAuth)


//create a post
router.post('/', createPost)

//get posts
router.get('/:id', getContestPosts)

//delete a post
router.delete('/:id', deletePost)

//patch update a post
router.patch('/:id', updatePost)


module.exports = router