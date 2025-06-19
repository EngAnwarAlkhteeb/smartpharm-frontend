import React, { useState, useEffect } from 'react';
import { FaSearch, FaPills, FaFilter } from 'react-icons/fa';
import medicines from '../data/medicines';
import MedicineModal from './ai/MedicineModal';

const MedicineSearch = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [selectedMedicine, setSelectedMedicine] = useState(null);
  const [activeCategory, setActiveCategory] = useState('All');
  const [showFilters, setShowFilters] = useState(false);

  // Get unique categories
  const categories = ['All', ...new Set(medicines.map(med => med.category))];

  // Search function
  useEffect(() => {
    if (searchTerm === '') {
      // Show all medicines or filtered by category
      if (activeCategory === 'All') {
        setSearchResults(medicines);
      } else {
        setSearchResults(medicines.filter(med => med.category === activeCategory));
      }
    } else {
      // Search by name, brand, category, or symptoms
      const results = medicines.filter(med => {
        const nameMatch = med.name.toLowerCase().includes(searchTerm.toLowerCase());
        const brandMatch = med.brand.toLowerCase().includes(searchTerm.toLowerCase());
        const categoryMatch = med.category.toLowerCase().includes(searchTerm.toLowerCase());
        const symptomsMatch = med.symptoms.some(symptom => 
          symptom.toLowerCase().includes(searchTerm.toLowerCase())
        );
        
        return (nameMatch || brandMatch || categoryMatch || symptomsMatch) && 
               (activeCategory === 'All' || med.category === activeCategory);
      });
      
      setSearchResults(results);
    }
  }, [searchTerm, activeCategory]);

  const handleMedicineClick = (medicine) => {
    setSelectedMedicine(medicine);
  };

  const closeModal = () => {
    setSelectedMedicine(null);
  };

  return (
    <div className="min-h-screen flex flex-col justify-start lg:px-32 px-5 pt-16">
      <div className="flex flex-col items-center mb-8">
        <h1 className="text-4xl font-semibold text-center flex items-center">
          <FaPills className="text-blue-500 mr-3" />
          Medicine Search
        </h1>
        <p className="mt-2 text-center max-w-2xl">
          Search for medications by name, brand, or symptoms. Find detailed information about dosage, side effects, and usage instructions.
        </p>
      </div>

      {/* Search Bar */}
      <div className="w-full max-w-3xl mx-auto mb-8">
        <div className="relative">
          <input
            type="text"
            placeholder="Search by medication name, brand, or symptom (e.g., headache, cough, allergies)"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-12 py-4 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm"
          />
          <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
          <button 
            className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-blue-500"
            onClick={() => setShowFilters(!showFilters)}
          >
            <FaFilter size={20} />
          </button>
        </div>

        {/* Category Filters */}
        {showFilters && (
          <div className="mt-4 flex flex-wrap gap-2 justify-center">
            {categories.map((category, index) => (
              <button
                key={index}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-full text-sm ${
                  activeCategory === category
                    ? 'bg-blue-500 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Results */}
      <div className="w-full">
        {searchResults.length === 0 ? (
          <div className="text-center py-12">
            <FaPills className="mx-auto text-gray-300" size={48} />
            <p className="mt-4 text-gray-500">No medications found matching your search.</p>
            <p className="text-gray-400">Try searching for a different term or browsing by category.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {searchResults.map((medicine) => (
              <div
                key={medicine.id}
                onClick={() => handleMedicineClick(medicine)}
                className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer hover:shadow-lg transition-shadow duration-300"
              >
                <div className="p-6">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="font-semibold text-lg text-gray-800">{medicine.name}</h3>
                      <p className="text-gray-600 text-sm">{medicine.brand}</p>
                    </div>
                    <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
                      {medicine.category}
                    </span>
                  </div>
                  
                  <p className="mt-3 text-gray-700 text-sm line-clamp-2">{medicine.description}</p>
                  
                  <div className="mt-4">
                    <p className="text-xs text-gray-500 mb-1">Common uses:</p>
                    <div className="flex flex-wrap gap-1">
                      {medicine.symptoms.slice(0, 3).map((symptom, index) => (
                        <span 
                          key={index} 
                          className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded"
                        >
                          {symptom}
                        </span>
                      ))}
                      {medicine.symptoms.length > 3 && (
                        <span className="text-xs text-gray-500 px-1 py-1">
                          +{medicine.symptoms.length - 3} more
                        </span>
                      )}
                    </div>
                  </div>
                  
                  <button 
                    className="mt-4 w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-md text-sm transition duration-300"
                  >
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Medicine Modal */}
      {selectedMedicine && (
        <MedicineModal medicine={selectedMedicine} onClose={closeModal} />
      )}
    </div>
  );
};

export default MedicineSearch;

