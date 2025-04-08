import { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';
import SearchForm from './components/SearchForm';
import WeatherInfo from './components/WeatherInfo';

function App() {
    const [city, setCity] = useState('');
    const [weather, setWeather] = useState(null);
    const [error, setError] = useState(null);

    const fetchWeather = async (cityName = 'Kanpur') => {
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
        if (city) fetchWeather(city);
    };

    useEffect(() => {
        fetchWeather(); // Default city
    }, []);
    const [isDark, setIsDark] = useState(() => {
        const savedTheme = localStorage.getItem('theme');
        return savedTheme === 'light' ? false : true; // default to dark
    });
    
    useEffect(() => {
        document.documentElement.setAttribute('data-theme', isDark ? 'dark' : 'light');
        localStorage.setItem('theme', isDark ? 'dark' : 'light');
    }, [isDark]);
    
    return (
        
        <div className="app-container">
            <div className="top-bar">
                <label className="switch">
                    <input
                        type="checkbox"
                        checked={isDark}
                        onChange={() => setIsDark(prev => !prev)}
                    />
                    <span className="slider"></span>
                </label>
            </div>

            <h1 style={{ width: '100%', textAlign: 'center' }}>Weather App</h1>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem', justifyContent: 'center', width: '100%' }}>
                <SearchForm city={city} setCity={setCity} handleSearch={handleSearch} />
                {weather && <WeatherInfo weather={weather} />}
            </div>

            {error && <p className="error-message">{error}</p>}
        </div>

    );
}

export default App;






