import HourlyForecast from './HourlyForecast';

function ForecastDay({ day }) {
    return (
        <div className="forecast-day">
            <h4>{new Date(day.date).toLocaleDateString()}</h4>
            <p><strong>Temperature:</strong> {day.day.avgtemp_c}°C</p>
            <p><strong>Condition:</strong> {day.day.condition.text}</p>
            <img src={`https:${day.day.condition.icon}`} alt="weather icon" />

            <div className="astro-info">
                <h5>Astro Info:</h5>
                <p>Sunrise: {day.astro.sunrise}</p>
                <p>Sunset: {day.astro.sunset}</p>
                <p>Moonrise: {day.astro.moonrise}</p>
                <p>Moonset: {day.astro.moonset}</p>
            </div>

            <HourlyForecast hours={day.hour} />
        </div>
    );
}

export default ForecastDay;
