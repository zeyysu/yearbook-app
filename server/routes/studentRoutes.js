const express = require('express');
const studentController = require('../controllers/studentController');
const router = express.Router();

router.get('/', studentController.student_index);
router.get('/:id', studentController.student_details);
router.post('/', studentController.student_create_post);
router.delete('/:id',studentController.student_delete);
router.put('/:id', studentController.student_update);

module.exports = router;