import React, {useEffect, useRef} from 'react';
import './SearchBar.css'; // Import the CSS file for styles

function SearchBar({ searchTerm ,setSearchTerm }) {
    const searchRef = useRef(null);
    useEffect(() => {
        searchRef.current.classList.add('visible');
    }, []);
    return (
        <div className="search-bar search" ref={searchRef}>
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
