import { useState } from 'react';
import { FaRobot, FaTimes, FaSearch } from 'react-icons/fa';

const MedicineRecommendation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [symptom, setSymptom] = useState('');
  const [recommendations, setRecommendations] = useState([]);
  const [loading, setLoading] = useState(false);

  // Database of common symptoms and recommended medications
  const symptomDatabase = {
    'headache': [
      { name: 'Paracetamol', dosage: '500-1000mg', frequency: 'Every 4-6 hours as needed', description: 'For mild to moderate pain relief' },
      { name: 'Ibuprofen', dosage: '200-400mg', frequency: 'Every 4-6 hours with food', description: 'Anti-inflammatory pain reliever' },
      { name: 'Aspirin', dosage: '300-600mg', frequency: 'Every 4-6 hours with food', description: 'Pain reliever and anti-inflammatory' }
    ],
    'fever': [
      { name: 'Paracetamol', dosage: '500-1000mg', frequency: 'Every 4-6 hours as needed', description: 'Reduces fever and relieves pain' },
      { name: 'Ibuprofen', dosage: '200-400mg', frequency: 'Every 4-6 hours with food', description: 'Reduces fever and inflammation' }
    ],
    'cold': [
      { name: 'Pseudoephedrine', dosage: '60mg', frequency: 'Every 4-6 hours', description: 'Decongestant for nasal congestion' },
      { name: 'Chlorpheniramine', dosage: '4mg', frequency: 'Every 4-6 hours', description: 'Antihistamine for runny nose and sneezing' },
      { name: 'Paracetamol', dosage: '500-1000mg', frequency: 'Every 4-6 hours as needed', description: 'For associated pain and fever' }
    ],
    'cough': [
      { name: 'Dextromethorphan', dosage: '10-30mg', frequency: 'Every 4-6 hours', description: 'For dry, hacking cough' },
      { name: 'Guaifenesin', dosage: '200-400mg', frequency: 'Every 4 hours', description: 'Expectorant for productive cough' },
      { name: 'Honey and Lemon', dosage: '1-2 teaspoons', frequency: 'As needed', description: 'Natural remedy for soothing throat' }
    ],
    'allergies': [
      { name: 'Cetirizine', dosage: '10mg', frequency: 'Once daily', description: 'Non-drowsy antihistamine' },
      { name: 'Loratadine', dosage: '10mg', frequency: 'Once daily', description: 'Non-drowsy antihistamine' },
      { name: 'Diphenhydramine', dosage: '25-50mg', frequency: 'Every 4-6 hours', description: 'May cause drowsiness' }
    ],
    'indigestion': [
      { name: 'Antacid', dosage: 'As directed', frequency: 'After meals and at bedtime', description: 'Neutralizes stomach acid' },
      { name: 'Omeprazole', dosage: '20mg', frequency: 'Once daily before food', description: 'Reduces acid production' },
      { name: 'Simethicone', dosage: '125mg', frequency: 'After meals and at bedtime', description: 'Relieves gas and bloating' }
    ],
    'diarrhea': [
      { name: 'Loperamide', dosage: '2mg', frequency: 'After each loose stool', description: 'Slows intestinal movement' },
      { name: 'Oral Rehydration Solution', dosage: 'As directed', frequency: 'Throughout the day', description: 'Prevents dehydration' },
      { name: 'Bismuth Subsalicylate', dosage: '30ml or 2 tablets', frequency: 'Every 30-60 minutes as needed', description: 'Reduces frequency of loose stools' }
    ],
    'constipation': [
      { name: 'Psyllium Husk', dosage: '1 tablespoon', frequency: '1-3 times daily with water', description: 'Fiber supplement' },
      { name: 'Docusate Sodium', dosage: '100mg', frequency: '1-3 times daily', description: 'Stool softener' },
      { name: 'Senna', dosage: '8.6mg', frequency: 'Once daily at bedtime', description: 'Stimulant laxative' }
    ],
    'muscle pain': [
      { name: 'Ibuprofen', dosage: '200-400mg', frequency: 'Every 4-6 hours with food', description: 'Anti-inflammatory pain reliever' },
      { name: 'Diclofenac Gel', dosage: 'Apply to affected area', frequency: '3-4 times daily', description: 'Topical anti-inflammatory' },
      { name: 'Methyl Salicylate Cream', dosage: 'Apply to affected area', frequency: '3-4 times daily', description: 'Provides warming relief' }
    ],
    'insomnia': [
      { name: 'Melatonin', dosage: '1-5mg', frequency: '30-60 minutes before bedtime', description: 'Natural sleep hormone' },
      { name: 'Valerian Root', dosage: '300-600mg', frequency: '30-60 minutes before bedtime', description: 'Herbal sleep aid' },
      { name: 'Diphenhydramine', dosage: '25-50mg', frequency: '30 minutes before bedtime', description: 'Antihistamine with sedative effects' }
    ]
  };

  // Common symptoms for autocomplete
  const commonSymptoms = Object.keys(symptomDatabase);

  const handleSearch = (e) => {
    e.preventDefault();
    
    if (!symptom.trim()) return;
    
    setLoading(true);
    
    // Simulate API call with timeout
    setTimeout(() => {
      const normalizedSymptom = symptom.toLowerCase().trim();
      
      // Check if we have exact match in our database
      if (symptomDatabase[normalizedSymptom]) {
        setRecommendations(symptomDatabase[normalizedSymptom]);
      } else {
        // Check for partial matches
        const matchingSymptoms = commonSymptoms.filter(s => 
          s.includes(normalizedSymptom) || normalizedSymptom.includes(s)
        );
        
        if (matchingSymptoms.length > 0) {
          // Use the first matching symptom
          setRecommendations(symptomDatabase[matchingSymptoms[0]]);
        } else {
          // No matches found
          setRecommendations([]);
        }
      }
      
      setLoading(false);
    }, 1000);
  };

  return (
    <div className="fixed bottom-5 right-20 mx-5 z-50">
      {/* Floating Icon */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-[#dd8036] hover:bg-[#794318] text-white p-4 rounded-full shadow-lg transition-transform hover:scale-110"
        aria-label="Medicine Recommendations"
      >
        <FaRobot size={30} />
      </button>

      {/* Recommendation Panel */}
      {isOpen && (
        <div className="absolute bottom-20 right-0 w-80 sm:w-96 bg-white rounded-lg shadow-xl border border-gray-200 animate-fadeIn">
          {/* Header */}
          <div className="flex items-center justify-between px-4 py-3 bg-[#794318] text-white rounded-t-lg">
            <h3 className="font-semibold">AI Medicine Recommendations</h3>
            <button onClick={() => setIsOpen(false)} aria-label="Close recommendations">
              <FaTimes className="hover:text-gray-300" />
            </button>
          </div>

          {/* Search Form */}
          <div className="p-4 border-b border-gray-200">
            <form onSubmit={handleSearch}>
              <div className="relative">
                <input
                  type="text"
                  value={symptom}
                  onChange={(e) => setSymptom(e.target.value)}
                  placeholder="Enter symptom (e.g., headache, fever)"
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md"
                  list="symptoms-list"
                />
                <FaSearch className="absolute left-3 top-3 text-gray-400" />
                
                <datalist id="symptoms-list">
                  {commonSymptoms.map((s, index) => (
                    <option key={index} value={s} />
                  ))}
                </datalist>
              </div>
              
              <button
                type="submit"
                className="w-full mt-2 bg-[#A67C52] hover:bg-[#794318] text-white py-2 rounded-md"
                disabled={loading}
              >
                {loading ? 'Searching...' : 'Get Recommendations'}
              </button>
            </form>
          </div>

          {/* Results */}
          <div className="p-4 max-h-80 overflow-y-auto">
            {loading ? (
              <div className="flex justify-center items-center py-8">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#A67C52]"></div>
              </div>
            ) : recommendations.length > 0 ? (
              <div>
                <h4 className="font-medium mb-3">Recommended Medications:</h4>
                <div className="space-y-3">
                  {recommendations.map((med, index) => (
                    <div key={index} className="p-3 bg-gray-50 rounded-lg shadow-sm">
                      <h5 className="font-medium text-[#794318]">{med.name}</h5>
                      <div className="mt-1 text-sm">
                        <p><span className="font-medium">Dosage:</span> {med.dosage}</p>
                        <p><span className="font-medium">Frequency:</span> {med.frequency}</p>
                        <p className="text-gray-600 italic mt-1">{med.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-4 text-xs text-gray-500 italic">
                  <p>Note: These are general recommendations only. Please consult with a healthcare professional before taking any medication.</p>
                </div>
              </div>
            ) : symptom && !loading ? (
              <div className="text-center py-8">
                <p className="text-gray-500">No recommendations found for "{symptom}"</p>
                <p className="text-sm text-gray-400 mt-2">Try another symptom or consult with a pharmacist</p>
              </div>
            ) : (
              <div className="text-center py-8">
                <p className="text-gray-500">Enter a symptom to get medication recommendations</p>
                <div className="mt-4 text-sm text-gray-400">
                  <p>Common searches:</p>
                  <div className="flex flex-wrap justify-center gap-2 mt-2">
                    {['headache', 'fever', 'cold', 'allergies'].map((s, i) => (
                      <button
                        key={i}
                        onClick={() => {
                          setSymptom(s);
                          handleSearch({ preventDefault: () => {} });
                        }}
                        className="px-3 py-1 bg-gray-100 rounded-full hover:bg-gray-200"
                      >
                        {s}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default MedicineRecommendation;

