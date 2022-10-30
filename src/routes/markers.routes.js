const express = require('express');
const {
  getMarkers,
  createMarker,
} = require('../controllers/markers.controller');

const router = express.Router();

// GET highest liked comment for a website
router.get('/get', getMarkers);

// Add comment
router.post('/create', createMarker);

module.exports = router;
