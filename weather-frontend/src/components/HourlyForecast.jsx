function HourlyForecast({ hours }) {
    return (
        <div className="hourly-forecast">
            <h5>Hourly Forecast:</h5>
            <div className="hourly-scroll">
                {hours.map((hourData, idx) => (
                    <div key={idx} className="hour-card">
                        <p>{new Date(hourData.time).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</p>
                        <p>{hourData.temp_c}°C</p>
                        <img src={`https:${hourData.condition.icon}`} alt="icon" />
                        <p>{hourData.condition.text}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default HourlyForecast;
