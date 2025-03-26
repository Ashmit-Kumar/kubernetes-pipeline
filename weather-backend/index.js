// index.js
const express = require('express');
const cors = require('cors');
require('dotenv').config();
const weatherRoutes = require('./routes/weatherRoutes');

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Use the routes
app.use('/weather', weatherRoutes);

// Start the server
app.listen(port, () => {
    console.log(`Weather backend running on http://localhost:${port}`);
});
