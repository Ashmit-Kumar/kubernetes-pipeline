function Alerts({ alerts }) {
    if (!alerts || alerts.length === 0) return null;

    return (
        <div className="alerts">
            <h3>Weather Alerts:</h3>
            <ul>
                {alerts.map((alert, index) => (
                    <li key={index}>
                        <strong>{alert.headline}</strong>
                        <p>{alert.description}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Alerts;
