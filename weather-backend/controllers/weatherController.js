// controllers/weatherController.js
const axios = require('axios');

// Function to fetch weather data
const getWeather = async (req, res) => {
    const city = req.query.city || 'London'; // Default to London if no city is provided

    // Open-Meteo API URL for current weather (no API key required)
    const url = `https://api.open-meteo.com/v1/forecast?latitude=35.6895&longitude=139.6917&current_weather=true`;

    try {
        // Fetch weather data based on city name (geolocation could be added for dynamic city fetching)
        const response = await axios.get(url);
        
        // Just for example, hardcoded the coordinates for London, you can use a geocoding API for dynamic city search
        const weatherData = response.data.current_weather;

        res.json({
            city: city,
            temperature: weatherData.temperature,
            wind_speed: weatherData.windspeed,
            humidity: weatherData.humidity,
            description: "Clear sky", // Open-Meteo doesn't provide description by default, could be customized
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to fetch weather data' });
    }
};

module.exports = { getWeather };
