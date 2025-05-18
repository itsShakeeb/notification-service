const express = require('express')
const { create, getAll, updateStatus } = require('../controllers/notificationController')
const router = express.Router();

router.post('/', create);
router.get('/:userId', getAll);
router.patch('/:notificationId', updateStatus);

module.exports = router;