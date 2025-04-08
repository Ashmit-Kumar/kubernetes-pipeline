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

    return (
        <div className="app-container">
            <h1>Weather App</h1>
            <SearchForm city={city} setCity={setCity} handleSearch={handleSearch} />
            {error && <p className="error-message">{error}</p>}
            {weather && <WeatherInfo weather={weather} />}
        </div>
    );
}

export default App;

































// import { useEffect, useState } from 'react';
// import axios from 'axios';
// import './App.css'; // Make sure this includes styles (added below too)

// function App() {
//     const [city, setCity] = useState('');
//     const [weather, setWeather] = useState(null);
//     const [error, setError] = useState(null);

//     const fetchWeather = async (cityName = 'Kanpur') => {
//         try {
//             const response = await axios.get(`${import.meta.env.VITE_BACKEND_API_URL}/weather?city=${cityName}`);
//             setWeather(response.data);
//             setError(null);
//         } catch (err) {
//             setError('Failed to fetch weather data');
//             setWeather(null);
//         }
//     };

//     const handleSearch = (e) => {
//         e.preventDefault();
//         if (city) {
//             fetchWeather(city);
//         }
//     };

//     useEffect(() => {
//         fetchWeather(); // Default city: Kanpur
//     }, []);

//     return (
//         <div className="app-container">
//             <h1>Weather App</h1>
//             <form className="search-form" onSubmit={handleSearch}>
//                 <input
//                     className="city-input"
//                     type="text"
//                     placeholder="Enter city"
//                     value={city}
//                     onChange={(e) => setCity(e.target.value)}
//                 />
//                 <button className="search-button" type="submit">Search</button>
//             </form>

//             {error && <p className="error-message">{error}</p>}

//             {weather && (
//                 <div className="weather-info">
//                     <h2>{weather.city}</h2>
//                     <p>Temperature: {weather.temperature}°C</p>
//                     <p>Wind Speed: {weather.wind_speed} km/h</p>
//                     <p>Humidity: {weather.humidity}%</p>
//                     <p>Condition: {weather.description}</p>
//                     <img src={`https:${weather.icon}`} alt="weather icon" />
//                     <p>Last Updated: {weather.last_updated}</p>
//                     <p>Timezone: {weather.timezone}</p>

//                     {/* AQI */}
//                     <h3>Air Quality Index (AQI):</h3>
//                     <p>{weather.air_quality ? `CO: ${weather.air_quality.co}` : 'N/A'}</p>

//                     {/* Alerts */}
//                     {weather.alerts && weather.alerts.length > 0 && (
//                         <div className="alerts">
//                             <h3>Weather Alerts:</h3>
//                             <ul>
//                                 {weather.alerts.map((alert, index) => (
//                                     <li key={index}>
//                                         <strong>{alert.headline}</strong>
//                                         <p>{alert.description}</p>
//                                     </li>
//                                 ))}
//                             </ul>
//                         </div>
//                     )}

//                     {/* 3-Day Forecast */}
//                     <h3>3-Day Forecast:</h3>
//                     {weather.forecast && weather.forecast.map((day, index) => (
//                         <div key={index} className="forecast-day">
//                             <h4>{new Date(day.date).toLocaleDateString()}</h4>
//                             <p><strong>Temperature:</strong> {day.day.avgtemp_c}°C</p>
//                             <p><strong>Condition:</strong> {day.day.condition.text}</p>
//                             <img src={`https:${day.day.condition.icon}`} alt="weather icon" />

//                             {/* Astro Info */}
//                             <div className="astro-info">
//                                 <h5>Astro Info:</h5>
//                                 <p>Sunrise: {day.astro.sunrise}</p>
//                                 <p>Sunset: {day.astro.sunset}</p>
//                                 <p>Moonrise: {day.astro.moonrise}</p>
//                                 <p>Moonset: {day.astro.moonset}</p>
//                             </div>

//                             {/* Hourly Forecast */}
//                             <div className="hourly-forecast">
//                                 <h5>Hourly Forecast:</h5>
//                                 <div className="hourly-scroll">
//                                     {day.hour.map((hourData, idx) => (
//                                         <div key={idx} className="hour-card">
//                                             <p>{new Date(hourData.time).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</p>
//                                             <p>{hourData.temp_c}°C</p>
//                                             <img src={`https:${hourData.condition.icon}`} alt="icon" />
//                                             <p>{hourData.condition.text}</p>
//                                         </div>
//                                     ))}
//                                 </div>
//                             </div>
//                         </div>
//                     ))}
//                 </div>
//             )}
//         </div>
//     );
// }

// export default App;



// // import { useEffect, useState } from 'react';
// // import axios from 'axios';
// // import './App.css';  // Import CSS for styling

// // function App() {
// //     const [city, setCity] = useState('');  // State for city input
// //     const [weather, setWeather] = useState(null);  // State for weather data
// //     const [error, setError] = useState(null);  // State for error messages

// //     const fetchWeather = async (cityName = 'Kanpur') => {
// //         try {
// //             const response = await axios.get(`${import.meta.env.VITE_BACKEND_API_URL}/weather?city=${cityName}`);
// //             // console.log(response.data)
// //             setWeather(response.data);
// //             setError(null);
// //         } catch (err) {
// //             setError('Failed to fetch weather data');
// //             setWeather(null);
// //         }
// //     };

// //     const handleSearch = (e) => {
// //         e.preventDefault();
// //         if (city) {
// //             fetchWeather(city);
// //         }
// //     };

// //     useEffect(() => {
// //         fetchWeather();  // Fetch default weather for London when the app starts
// //     }, []);

// //     return (
// //         <div className="app-container">
// //             <h1>Weather App</h1>
// //             <form className="search-form" onSubmit={handleSearch}>
// //                 <input
// //                     className="city-input"
// //                     type="text"
// //                     placeholder="Enter city"
// //                     value={city}
// //                     onChange={(e) => setCity(e.target.value)}
// //                 />
// //                 <button className="search-button" type="submit">Search</button>
// //             </form>

// //             {error && <p className="error-message">{error}</p>}
// //             {weather && (
// //             <div className="weather-info">
// //                 <h2>{weather.city}</h2>
// //                 <p>Temperature: {weather.temperature}°C</p>
// //                 <p>Wind Speed: {weather.wind_speed} km/h</p>
// //                 <p>Humidity: {weather.humidity}%</p>
// //                 <p>Condition: {weather.description}</p>
// //                 <img src={`https:${weather.icon}`} alt="weather icon" />
// //                 <p>Last Updated: {weather.last_updated}</p>
// //             </div>
// //         )}
// //     </div>
  
// // );
// // }

// // export default App;
