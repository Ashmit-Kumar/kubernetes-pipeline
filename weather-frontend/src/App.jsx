import { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';  // Import CSS for styling

function App() {
    const [city, setCity] = useState('');  // State for city input
    const [weather, setWeather] = useState(null);  // State for weather data
    const [error, setError] = useState(null);  // State for error messages

    const fetchWeather = async (cityName = 'London') => {
        try {
            const response = await axios.get(`${import.meta.env.VITE_BACKEND_API_URL}/weather?city=${cityName}`);
            setWeather(response.data);
            setError(null);
        } catch (err) {
            setError('Failed to fetch weather data');
            setWeather(null);
        }
    };

    const handleSearch = (e) => {
        e.preventDefault();
        if (city) {
            fetchWeather(city);
        }
    };

    useEffect(() => {
        fetchWeather();  // Fetch default weather for London when the app starts
    }, []);

    return (
        <div className="app-container">
            <h1>Weather App</h1>
            <form className="search-form" onSubmit={handleSearch}>
                <input
                    className="city-input"
                    type="text"
                    placeholder="Enter city"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                />
                <button className="search-button" type="submit">Search</button>
            </form>

            {error && <p className="error-message">{error}</p>}
            {weather && (
                <div className="weather-info">
                    <h2>{weather.city}</h2>
                    <p>Temperature: {weather.temperature}°C</p>
                    <p>Wind Speed: {weather.wind_speed} km/h</p>
                    <p>Humidity: {weather.humidity}%</p>
                    <p>Condition: {weather.description}</p>
                </div>
            )}
        </div>
    );
}

export default App;
