const express = require('express')
const StudentController = require('../controllers/studentController.js')
const router = express.Router()

router.get('/', StudentController.getAllStudent)
router.post('/', StudentController.insertStudent)
router.get('/edit/:id', StudentController.editStudent)
router.post('/update/:id', StudentController.updateStudentById)
router.post('/delete/:id', StudentController.deleteStudentById)

module.exports = router