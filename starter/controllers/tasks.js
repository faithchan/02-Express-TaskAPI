const getAllTasks = (req,res)=>{
    res.send('all items')
}

const createTask = (req,res)=>{
    res.json(req.body)
}

const getTask = (req,res)=>{
    res.send('Get Single Task')
}

const updateTask = (req,res)=>{
    res.send('Update Task')
}


const deleteTask = (req,res)=>{
    res.send('Delete Task')
}

module.exports={
    getAllTasks, createTask, getTask, updateTask, deleteTask
}