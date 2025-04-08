function SearchForm({ city, setCity, handleSearch }) {
    return (
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
    );
}

export default SearchForm;
