const mongoose = require('mongoose')

const connectionString = "mongodb+srv://admin:1234@cluster0.qq21j.mongodb.net/TaskManager?retryWrites=true&w=majority"

// returns a promise 
mongoose.connect(connectionString).then(()=>console.log("connected to database")).catch((err)=>console.log(err))