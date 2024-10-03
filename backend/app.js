const express = require('express')
const mongoose = require('mongoose')
const contestRoutes = require('./routes/contest')
const postRoutes = require('./routes/post')
const userRoutes = require('./routes/user')

//initialize express app
const app = express();

//middle-ware
app.use(express.json()) //attaches .body to req

app.use((req, res, next)=>{
    console.log(req.path, req.method)
    next()
})

// routes
app.use('/api/contests', contestRoutes)
app.use('/api/posts', postRoutes)
app.use('/api/users', userRoutes)

//db
mongoose.set('strictQuery', true)
mongoose.connect(process.env.MONGO_URI)
    .then ( () => {
        //request listening
        app.listen(process.env.PORT, () => {
            console.log( `listening on port ${process.env.PORT}!`)
        })
    })
    .catch ( (error) => {
        console.log(error)
    })

