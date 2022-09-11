let tasks = [];

const getTasks = (req, res) => {
    res.render('home', { tasks: tasks})
}

const postTask = (req, res) => {
    console.log(req.body.newTask)
    const newTask = req.body.newTask
    const newTaskIndex = tasks.length
    if ( newTask !== undefined ) {
        tasks.push({ index: newTaskIndex, task : newTask });
    }
    console.log(tasks)
    res.redirect('/')
}

const deleteTask = (req, res) => {
    taskIndex = req.body.taskIndex
    delete tasks[taskIndex]
    res.redirect('/')
}

module.exports = {
    getTasks,
    postTask,
    deleteTask
}