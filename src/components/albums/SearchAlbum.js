import React, { useState } from 'react';

const SearchAlbum = ({ onSearch }) => {
    const [currentSearch, setCurrentSearch] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        onSearch(currentSearch);
    }


    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="search">Search Artist:</label>
                <input
                    id="search"
                    type="text"
                    placeholder="Type an artist name..."
                    value={currentSearch}
                    onChange={(e) => setCurrentSearch(e.target.value)}
                />
                <button type="submit">Search</button>
            </form>
        </div>
    )   
}

export default SearchAlbum;