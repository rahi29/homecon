
const Post = require('../models/postModel')
const mongoose = require('mongoose')


//==============================================================================================================
//create a post
const createPost = async (req, res) => {
    const { owner_name, owner_id, contest_id, description, media} = req.body

    try {
        const post = await Post.create({ owner_name, owner_id, contest_id, description, media })
        res.status(200).json(post)
    }
    catch (error) {
        res.status(400).json({error: error.message})
    }
}


//==============================================================================================================
// update a post
const updatePost = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: 'No such post' })
    }

    const post = await Post.findOneAndUpdate({ _id: id }, {
        ...req.body
    })

    if (!post) {
        return res.status(404).json({ error: 'No such post' })
    }

    res.status(200).json(post)
}
//==============================================================================================================
//delete a post
const deletePost = async (req, res) => {
    const { id } = req.params
    
    if (!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'No such post'})
    }

    const post = await Post.findOneAndDelete({_id: id})
    
    if (!post){
        return res.status(404).json({error: 'No such post'})
    }

    res.status(200).json(post)
}


//==============================================================================================================

//==============================================================================================================
//fetch posts in a contest
const getContestPosts = async (req, res) => {
    const { id } = req.params
    try {
        const posts = await Post.find({contest_id: id}).sort({createdAt: -1})
    
    res.status(200).json(posts)}
    catch (error) {
        res.status(404).json({error: 'an error occured.'})
    }
}


//==============================================================================================================

//==============================================================================================================



//==============================================================================================================







module.exports = {
    createPost,
    updatePost,
    deletePost,
    getContestPosts
}