const express = require('express');
const memController = require('../controllers/memController');
const router = express.Router();

router.get('/', memController.mem_index);
router.get('/:id', memController.mem_details);
router.post('/', memController.mem_create_post);
router.delete('/:id',memController.mem_delete);
router.put('/:id', memController.mem_update);

module.exports = router;