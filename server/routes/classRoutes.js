const express = require('express');
const classController = require('../controllers/classController');
const router = express.Router();

router.get('/', classController.class_index);
router.get('/:id', classController.class_details);
router.post('/', classController.class_create_post);
router.delete('/:id', classController.class_delete);

module.exports = router;