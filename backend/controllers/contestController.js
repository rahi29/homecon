
const Contest = require('../models/contestModel')
const mongoose = require('mongoose')


//==============================================================================================================
//create a contest
const createContest = async (req, res) => {
    const {id, title, datetime, contestPrivacy, description, deadlineDate, deadlineTime, startDate, endDate, startTime, endTime,
    contestCategory, bannerImage, contenderType, contestStatus, code, creator_id} = req.body

    try {
        const contest = await Contest.create({id, title, datetime, contestPrivacy, description, deadlineDate, deadlineTime, startDate, endDate, startTime, endTime,
            contestCategory, bannerImage, contenderType, contestStatus, code, creator_id})
        res.status(200).json(contest)
    }
    catch (error) {
        res.status(400).json({error: error.message})
    }
}


//______________________________________________________________________________
// update a contest
const updateContest = async (req, res) => {
    const { id } = req.params
    
    if (!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'No such contest'})
    }

    const contest = await Contest.findOneAndUpdate({_id: id}, {
        ...req.body
    })
    
    if (!contest){
        return res.status(404).json({error: 'No such contest'})
    }

    res.status(200).json(contest)
}
//______________________________________________________________________________
//delete a contest
const deleteContest = async (req, res) => {
    const { id } = req.params
    
    if (!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'No such contest'})
    }

    const contest = await Contest.findOneAndDelete({_id: id})
    
    if (!contest){
        return res.status(404).json({error: 'No such contest'})
    }

    res.status(200).json(contest)
}


//______________________________________________________________________________
//get a single contest
const getContest = async (req, res) => {
    const { id } = req.params
    
    if (!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'No such contest'})
    }

    const contest = await Contest.findById(id)
    
    if (!contest){
        return res.status(404).json({error: 'No such contest'})
    }

    res.status(200).json(contest)
}

//______________________________________________________________________________

//______________________________________________________________________________




//============================================= Current =================================================================
//fetch current contests
const getCurrentContests = async (req, res) => {
    try {
        const contests = await Contest.find({status: 'current'}).sort({createdAt: -1})
    
        res.status(200).json(contests)
    }
    catch (error){
        res.status(404).json({error: 'an error occured.'})
    }
    
}
//============================================= Upcoming =================================================================
const getUpcomingContests = async (req, res) => {
    try {
        const contests = await Contest.find({status: 'upcoming'}).sort({createdAt: -1})
    
    res.status(200).json(contests)
    } 
    catch (error){ 
        res.status(404).json({error: 'an error occured.'}) 
    }
}
//============================================= Terminated =================================================================
const getTerminatedContests = async (req, res) => {
    try {
        const contests = await Contest.find({status: 'terminated'}).sort({createdAt: -1})
    
        res.status(200).json(contests)}
    catch (error) {
        res.status(404).json({error: 'an error occured.'})
    }
    }
//============================================= myContests =================================================================
const getMyContests = async (req, res) => {
    const { id } = req.params
    try {
        const contests = await Contest.find({creator_id: id}).sort({createdAt: -1})
    
    res.status(200).json(contests)}
    catch (error) {
        res.status(404).json({error: 'an error occured.'})
    }
}
//==============================================================================================================

//==============================================================================================================



//==============================================================================================================







module.exports = {
    updateContest,
    deleteContest,
    getContest,
    getMyContests,
    getUpcomingContests,
    getTerminatedContests,
    getCurrentContests,
    createContest
}