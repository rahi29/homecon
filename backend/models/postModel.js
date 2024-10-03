
const mongoose = require('mongoose')
// const Contest = require('contestModel')
// const User = require('userModel')
const Schema = mongoose.Schema

const postSchema = new Schema({
    owner_name: {
        type: String,
        // required: false
    },
    owner_id: {
        type: Schema.Types.ObjectId, 
        // ref: 'User',
        required: true
    },
    contest_id: {
        type: Schema.Types.ObjectId, 
        // ref: 'Contest',
        required: true
    },

    description: {
        type: String,
        required: true
    },
    media: {
        type: String,
        required: true
    },
    votes: {
        type: Number,
        default: 0
    },
    voted_by: {
        type: Array,
        default: []
    }
    
}, {timestamps: true})

module.exports = mongoose.model('Post', postSchema)