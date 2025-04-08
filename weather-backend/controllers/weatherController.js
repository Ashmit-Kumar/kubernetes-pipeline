const axios = require('axios');
const API_KEY = process.env.WEATHER_API;

const getWeather = async (req, res) => {
    const city = req.query.city || 'Mumbai';
    const latitude = req.query.lat;
    const longitude = req.query.lon;
    const url = `http://api.weatherapi.com/v1/current.json`;

    try {
        // Fetch current weather data
        const weatherResponse = await axios.get(url, {
            params: {
                key: API_KEY,
                q: city || `${latitude},${longitude}`,  // Allow city name or coordinates
                aqi: 'yes',  // Enable AQI
            },
        });

        const weatherData = weatherResponse.data;
        const currentWeather = weatherData.current;
        
        // Fetch forecast data (e.g., 3-day forecast)
        const forecastResponse = await axios.get(`http://api.weatherapi.com/v1/forecast.json`, {
            params: {
                key: API_KEY,
                q: city || `${latitude},${longitude}`,
                days: 3,  // Get 3-day forecast
            },
        });

        const forecastData = forecastResponse.data.forecast.forecastday;
        // console.log(forecastResponse.data.forecast);
        // Fetch alerts (if any)
        const alertsResponse = await axios.get(`http://api.weatherapi.com/v1/alerts.json`, {
            params: {
                key: API_KEY,
                q: city || `${latitude},${longitude}`,
            },
        });

        const alerts = alertsResponse.data.alerts || [];

        // Fetch timezone info
        const timezoneResponse = await axios.get(`http://api.weatherapi.com/v1/timezone.json`, {
            params: {
                key: API_KEY,
                q: city || `${latitude},${longitude}`,
            },
        });

        const timezoneData = timezoneResponse.data;
        // console.log(timezoneData.data)
        res.json({
            city: `${weatherData.location.name}, ${weatherData.location.country}`,
            temperature: currentWeather.temp_c,
            wind_speed: currentWeather.wind_kph,
            humidity: currentWeather.humidity,
            description: currentWeather.condition.text,
            icon: currentWeather.condition.icon,
            last_updated: weatherData.current.last_updated,
            air_quality: weatherData.air_quality,
            timezone: timezoneData.zone_name,
            forecast: forecastData,
            alerts: alerts,
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to fetch weather data' });
    }
};

module.exports = { getWeather };

