const express = require('express');
const { createRoom } = require('../controllers/rooms.controller');

const router = express.Router();

router.post('/create', createRoom);

module.exports = router;
