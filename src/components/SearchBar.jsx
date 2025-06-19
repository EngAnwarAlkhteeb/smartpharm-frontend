import React, { useState, useEffect, useRef } from 'react';
import '../styles/Navbar.css';
import medicines from '../data/medicines';

const SearchBar = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [showResults, setShowResults] = useState(false);
    const searchRef = useRef(null);

    // Handle search input change
    const handleSearchChange = (e) => {
        const value = e.target.value;
        setSearchTerm(value);
        
        if (value.trim() === '') {
            setSearchResults([]);
            return;
        }

        // Search in medicines data
        const results = medicines.filter(med => {
            const nameMatch = med.name.toLowerCase().includes(value.toLowerCase());
            const brandMatch = med.brand.toLowerCase().includes(value.toLowerCase());
            const categoryMatch = med.category.toLowerCase().includes(value.toLowerCase());
            const symptomsMatch = med.symptoms.some(symptom => 
                symptom.toLowerCase().includes(value.toLowerCase())
            );
            
            return nameMatch || brandMatch || categoryMatch || symptomsMatch;
        }).slice(0, 5); // Limit to 5 results
        
        setSearchResults(results);
    };

    // Close search results when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (searchRef.current && !searchRef.current.contains(event.target)) {
                setShowResults(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    // Show results when input is focused
    const handleFocus = () => {
        if (searchTerm.trim() !== '') {
            setShowResults(true);
        }
    };

    return (
        <div className="input-group relative" ref={searchRef}>
            <svg className="search-icon" viewBox="0 0 24 24">
                <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13.5a6.5 6.5 0 110 13 6.5 6.5 0 010-13z" />
                <path d="M17.5 17.5l4 4" />
            </svg>
            <input 
                type="text" 
                className="input-field" 
                placeholder="Search..." 
                value={searchTerm}
                onChange={handleSearchChange}
                onFocus={handleFocus}
            />
            
            {/* Search Results Dropdown */}
            {showResults && searchResults.length > 0 && (
                <div className="absolute top-full left-0 right-0 mt-1 bg-white rounded-md shadow-lg z-20 max-h-60 overflow-y-auto">
                    {searchResults.map((result) => (
                        <div 
                            key={result.id}
                            className="px-4 py-2 hover:bg-gray-100 cursor-pointer border-b border-gray-100 last:border-b-0"
                            onClick={() => {
                                // Here you could navigate to medicine details or show modal
                                console.log('Selected medicine:', result);
                                setShowResults(false);
                            }}
                        >
                            <div className="font-medium">{result.name}</div>
                            <div className="text-xs text-gray-500 flex justify-between">
                                <span>{result.brand}</span>
                                <span className="bg-blue-100 text-blue-800 text-xs px-2 rounded-full">
                                    {result.category}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default SearchBar;

