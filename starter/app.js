require('./db/connect')
const express = require('express');
const app = express();
const port = 5000
const tasks = require('./routes/tasks')


//middlewarres
app.use(express.json())

// routes
app.get('/hello', (req,res)=>{
    res.send('Task Manager Initialised')
})

app.use('/api/v1/tasks', tasks)


app.listen(port, ()=>{console.log(`port listening on port ${port}`)})