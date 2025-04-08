import ForecastDay from './ForecastDay';
import Alerts from './Alerts';

function WeatherInfo({ weather }) {
    return (
        <div className="weather-info">
            <h2>{weather.city}</h2>
            <p>Temperature: {weather.temperature}°C</p>
            <p>Wind Speed: {weather.wind_speed} km/h</p>
            <p>Humidity: {weather.humidity}%</p>
            <p>Condition: {weather.description}</p>
            <img src={`https:${weather.icon}`} alt="weather icon" />
            <p>Last Updated: {weather.last_updated}</p>
            <p>Timezone: {weather.timezone}</p>

            {/* <h3>Air Quality Index (AQI):</h3>
            <p>{weather.air_quality ? `CO: ${weather.air_quality.co}` : 'N/A'}</p> */}

            {/* <Alerts alerts={weather.alerts} /> */}

            <h3>3-Day Forecast:</h3>
            {weather.forecast && weather.forecast.map((day, idx) => (
                <ForecastDay key={idx} day={day} />
            ))}
        </div>
    );
}

export default WeatherInfo;
