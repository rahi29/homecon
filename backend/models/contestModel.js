
const mongoose = require('mongoose')

const Schema = mongoose.Schema

const contestSchema = new Schema({
    
    id: {
        type: Number,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    
    contestPrivacy: {
        type: String,
        required: true
    },

    description: {
        type: String,
        required: true
    },
    deadlineDate: {
        type: Date,
        required: false
    },

    deadlineTime: {
        type: String,
        required: false
    },
    startDate: {
        type: Date,
        required: true
    },

    endDate: {
        type: Date,
        required: true
    },
    startTime: {
        type: String,
        required: true
    },

    endTime: {
        type: String,
        required: true
    },
    contestCategory: {
        type: String,
        required: true
    },

    bannerImage: {
        type: String,
        required: true
    },

    contenderType: {
        type: String,
        required: true
    },

    
    contestStatus: {
        type: String,
        required: true
    },

    

    code:{
        type: String,
        required: true
    },

    
    creator_id: {
        type: String,
        required: true
    }
}, {timestamps: true})

module.exports = mongoose.model('Contest', contestSchema)