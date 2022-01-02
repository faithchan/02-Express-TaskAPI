const mongoose = require('mongoose')

const connectionString = "mongodb+srv://admin:1234@cluster0.qq21j.mongodb.net/TaskManager?retryWrites=true&w=majority"

const connectDB =(url)=>{
    return mongoose.connect(connectionString, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: false,
        useUnifiedTopology: true,
      })
}


module.exports= connectDB