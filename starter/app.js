const express = require('express');
const app = express();
const port = 5000

// routes
app.get('/hello', (req,res)=>{
    res.send('Task Manager Initialised')
})

app.listen(port, ()=>{console.log(`port listening on port ${port}`)})