// routes/weatherRoutes.js
const express = require('express');
const router = express.Router();
const { getWeather } = require('../controllers/weatherController');

// Route to fetch weather data by city
router.get('/', getWeather);

module.exports = router;
