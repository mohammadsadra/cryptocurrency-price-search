import React from 'react';
import './SearchBar.css'; // Import the CSS file for styles

function SearchBar({ searchTerm ,setSearchTerm }) {
    return (
        <div className="search-bar">
            <input
                style={{fontSize: "1.5rem"}}
                type="text"
                placeholder="Search here..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
        </div>
    );
}

export default SearchBar;
