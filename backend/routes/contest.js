const express = require('express')
const {
    createContest,
    getContest,
    getCurrentContests,
    getUpcomingContests,
    getTerminatedContests,
    getMyContests,
    deleteContest,
    updateContest
} = require('../controllers/contestController')
const requireAuth = require('../middleware/requireAuth')

const router = express.Router()

router.use(requireAuth)



//create a contest
router.post('/', createContest)
//get a contest
router.get('/contest/:id', getContest)
//delete a contest
router.delete('/:id', deleteContest)
//patch update a contest
router.patch('/:id', updateContest)


//get contests
router.get('/current', getCurrentContests)
router.get('/upcoming', getUpcomingContests)
router.get('/terminated', getTerminatedContests)
router.get('/my/:id', getMyContests)



module.exports = router



