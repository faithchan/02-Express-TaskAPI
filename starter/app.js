const express = require('express');
const app = express();
const port = 5000
const tasks = require('./routes/tasks')
const connectDB = require('./db/connect')


//middlewarres
app.use(express.json())

// routes
app.get('/hello', (req,res)=>{
    res.send('Task Manager Initialised')
})

app.use('/api/v1/tasks', tasks)

const start = async () =>{
    try{ await connectDB()
        app.listen(port, ()=>{console.log(`port listening on port ${port}`)})}
    catch(error){console.log(error)}
}
start()
