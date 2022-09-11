const { getTasks, postTask, deleteTask } = require('../controllers/main.controller');

const router = require('express').Router();

router.get('/', getTasks)

router.post('/', postTask)

router.post('/delete', deleteTask)

module.exports = router;