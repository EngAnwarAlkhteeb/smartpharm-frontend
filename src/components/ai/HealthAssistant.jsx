import { useState, useEffect } from 'react';
import { FaRobot, FaTimes, FaHeartbeat, FaPills, FaCalendarAlt, FaUser } from 'react-icons/fa';

const HealthAssistant = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('dashboard');
  const [userData, setUserData] = useState(() => {
    const savedData = localStorage.getItem('healthAssistantUserData');
    return savedData ? JSON.parse(savedData) : {
      name: '',
      age: '',
      weight: '',
      height: '',
      conditions: [],
      medications: []
    };
  });
  
  const [healthMetrics, setHealthMetrics] = useState(() => {
    const savedMetrics = localStorage.getItem('healthAssistantMetrics');
    return savedMetrics ? JSON.parse(savedMetrics) : {
      bloodPressure: [],
      heartRate: [],
      bloodSugar: []
    };
  });
  
  const [newMetric, setNewMetric] = useState({
    type: 'bloodPressure',
    value: '',
    date: new Date().toISOString().split('T')[0]
  });

  // Save data to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('healthAssistantUserData', JSON.stringify(userData));
  }, [userData]);
  
  useEffect(() => {
    localStorage.setItem('healthAssistantMetrics', JSON.stringify(healthMetrics));
  }, [healthMetrics]);

  const handleUserDataChange = (e) => {
    const { name, value } = e.target;
    setUserData(prev => ({ ...prev, [name]: value }));
  };

  const handleAddCondition = (e) => {
    e.preventDefault();
    const condition = e.target.condition.value.trim();
    if (condition) {
      setUserData(prev => ({
        ...prev,
        conditions: [...prev.conditions, condition]
      }));
      e.target.condition.value = '';
    }
  };

  const handleRemoveCondition = (index) => {
    setUserData(prev => ({
      ...prev,
      conditions: prev.conditions.filter((_, i) => i !== index)
    }));
  };

  const handleAddMedication = (e) => {
    e.preventDefault();
    const medication = e.target.medication.value.trim();
    const dosage = e.target.dosage.value.trim();
    if (medication && dosage) {
      setUserData(prev => ({
        ...prev,
        medications: [...prev.medications, { medication, dosage }]
      }));
      e.target.medication.value = '';
      e.target.dosage.value = '';
    }
  };

  const handleRemoveMedication = (index) => {
    setUserData(prev => ({
      ...prev,
      medications: prev.medications.filter((_, i) => i !== index)
    }));
  };

  const handleMetricChange = (e) => {
    const { name, value } = e.target;
    setNewMetric(prev => ({ ...prev, [name]: value }));
  };

  const handleAddMetric = (e) => {
    e.preventDefault();
    const { type, value, date } = newMetric;
    
    if (value && date) {
      setHealthMetrics(prev => ({
        ...prev,
        [type]: [...prev[type], { value, date }]
      }));
      
      setNewMetric(prev => ({
        ...prev,
        value: ''
      }));
    }
  };

  const getHealthInsights = () => {
    const insights = [];
    
    // Check if user has entered basic information
    if (!userData.name || !userData.age || !userData.weight || !userData.height) {
      insights.push({
        type: 'info',
        message: 'Complete your profile to get personalized health insights.'
      });
    }
    
    // Check if user has any health conditions
    if (userData.conditions.length > 0) {
      insights.push({
        type: 'warning',
        message: `You have ${userData.conditions.length} health condition(s) that require regular monitoring.`
      });
    }
    
    // Check if user has any medications
    if (userData.medications.length > 0) {
      insights.push({
        type: 'info',
        message: `You are currently taking ${userData.medications.length} medication(s).`
      });
    }
    
    // Check blood pressure trends if available
    if (healthMetrics.bloodPressure.length > 1) {
      const latestBP = healthMetrics.bloodPressure[healthMetrics.bloodPressure.length - 1].value;
      
      if (latestBP.includes('/')) {
        const [systolic, diastolic] = latestBP.split('/').map(Number);
        
        if (systolic > 140 || diastolic > 90) {
          insights.push({
            type: 'warning',
            message: 'Your latest blood pressure reading is elevated. Consider consulting with a healthcare provider.'
          });
        } else if (systolic < 90 || diastolic < 60) {
          insights.push({
            type: 'warning',
            message: 'Your latest blood pressure reading is lower than normal. Consider consulting with a healthcare provider.'
          });
        } else {
          insights.push({
            type: 'success',
            message: 'Your blood pressure readings are within normal range.'
          });
        }
      }
    }
    
    // Add general health tips
    insights.push({
      type: 'tip',
      message: 'Remember to stay hydrated and aim for at least 30 minutes of physical activity daily.'
    });
    
    return insights;
  };

  return (
    <div className="fixed top-20 right-5 z-50">
      {/* Floating Icon */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-[#dd8036] hover:bg-[#794318] text-white p-3 rounded-full shadow-lg transition-transform hover:scale-110"
        aria-label="Health Assistant"
      >
        <FaHeartbeat size={24} />
      </button>

      {/* Health Assistant Panel */}
      {isOpen && (
        <div className="absolute top-12 right-0 w-80 sm:w-96 bg-white rounded-lg shadow-xl border border-gray-200 animate-fadeIn">
          {/* Header */}
          <div className="flex items-center justify-between px-4 py-3 bg-[#794318] text-white rounded-t-lg">
            <h3 className="font-semibold">AI Health Assistant</h3>
            <button onClick={() => setIsOpen(false)} aria-label="Close health assistant">
              <FaTimes className="hover:text-gray-300" />
            </button>
          </div>

          {/* Navigation Tabs */}
          <div className="flex border-b">
            <button 
              className={`flex-1 py-2 px-4 ${activeTab === 'dashboard' ? 'bg-[#A67C52] text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
              onClick={() => setActiveTab('dashboard')}
            >
              Dashboard
            </button>
            <button 
              className={`flex-1 py-2 px-4 ${activeTab === 'profile' ? 'bg-[#A67C52] text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
              onClick={() => setActiveTab('profile')}
            >
              Profile
            </button>
            <button 
              className={`flex-1 py-2 px-4 ${activeTab === 'metrics' ? 'bg-[#A67C52] text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
              onClick={() => setActiveTab('metrics')}
            >
              Metrics
            </button>
          </div>

          {/* Content Area */}
          <div className="p-4 max-h-96 overflow-y-auto">
            {/* Dashboard Tab */}
            {activeTab === 'dashboard' && (
              <div>
                <h4 className="font-medium mb-3">Health Dashboard</h4>
                
                {/* Welcome Message */}
                <div className="p-3 bg-blue-50 rounded-lg mb-4">
                  <p className="text-blue-800">
                    {userData.name ? `Welcome back, ${userData.name}!` : 'Welcome to your health dashboard!'}
                  </p>
                </div>
                
                {/* Health Insights */}
                <div className="mb-4">
                  <h5 className="font-medium mb-2">Health Insights</h5>
                  {getHealthInsights().map((insight, index) => (
                    <div 
                      key={index} 
                      className={`p-2 mb-2 rounded-lg text-sm ${
                        insight.type === 'warning' ? 'bg-yellow-50 text-yellow-800' :
                        insight.type === 'success' ? 'bg-green-50 text-green-800' :
                        insight.type === 'tip' ? 'bg-purple-50 text-purple-800' :
                        'bg-blue-50 text-blue-800'
                      }`}
                    >
                      {insight.message}
                    </div>
                  ))}
                </div>
                
                {/* Quick Stats */}
                <div className="mb-4">
                  <h5 className="font-medium mb-2">Quick Stats</h5>
                  <div className="grid grid-cols-2 gap-2">
                    <div className="p-3 bg-gray-50 rounded-lg">
                      <p className="text-xs text-gray-500">Medications</p>
                      <p className="text-lg font-medium">{userData.medications.length}</p>
                    </div>
                    <div className="p-3 bg-gray-50 rounded-lg">
                      <p className="text-xs text-gray-500">Conditions</p>
                      <p className="text-lg font-medium">{userData.conditions.length}</p>
                    </div>
                    <div className="p-3 bg-gray-50 rounded-lg">
                      <p className="text-xs text-gray-500">Latest BP</p>
                      <p className="text-lg font-medium">
                        {healthMetrics.bloodPressure.length > 0 
                          ? healthMetrics.bloodPressure[healthMetrics.bloodPressure.length - 1].value 
                          : 'N/A'}
                      </p>
                    </div>
                    <div className="p-3 bg-gray-50 rounded-lg">
                      <p className="text-xs text-gray-500">Latest HR</p>
                      <p className="text-lg font-medium">
                        {healthMetrics.heartRate.length > 0 
                          ? `${healthMetrics.heartRate[healthMetrics.heartRate.length - 1].value} bpm` 
                          : 'N/A'}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Profile Tab */}
            {activeTab === 'profile' && (
              <div>
                <h4 className="font-medium mb-3">Your Health Profile</h4>
                
                {/* Basic Information */}
                <div className="mb-4">
                  <h5 className="text-sm font-medium mb-2">Basic Information</h5>
                  <div className="space-y-2">
                    <div>
                      <label className="block text-xs text-gray-500 mb-1">Name</label>
                      <input
                        type="text"
                        name="name"
                        value={userData.name}
                        onChange={handleUserDataChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label className="block text-xs text-gray-500 mb-1">Age</label>
                      <input
                        type="number"
                        name="age"
                        value={userData.age}
                        onChange={handleUserDataChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm"
                        placeholder="Your age"
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                      <div>
                        <label className="block text-xs text-gray-500 mb-1">Weight (kg)</label>
                        <input
                          type="number"
                          name="weight"
                          value={userData.weight}
                          onChange={handleUserDataChange}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm"
                          placeholder="Weight"
                        />
                      </div>
                      <div>
                        <label className="block text-xs text-gray-500 mb-1">Height (cm)</label>
                        <input
                          type="number"
                          name="height"
                          value={userData.height}
                          onChange={handleUserDataChange}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm"
                          placeholder="Height"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Health Conditions */}
                <div className="mb-4">
                  <h5 className="text-sm font-medium mb-2">Health Conditions</h5>
                  <form onSubmit={handleAddCondition} className="flex mb-2">
                    <input
                      type="text"
                      name="condition"
                      className="flex-1 px-3 py-2 border border-gray-300 rounded-l-md text-sm"
                      placeholder="Add a condition"
                    />
                    <button
                      type="submit"
                      className="px-3 py-2 bg-[#A67C52] text-white rounded-r-md"
                    >
                      Add
                    </button>
                  </form>
                  <div className="space-y-1">
                    {userData.conditions.length === 0 ? (
                      <p className="text-sm text-gray-500 italic">No conditions added</p>
                    ) : (
                      userData.conditions.map((condition, index) => (
                        <div key={index} className="flex justify-between items-center bg-gray-50 p-2 rounded">
                          <span className="text-sm">{condition}</span>
                          <button
                            onClick={() => handleRemoveCondition(index)}
                            className="text-red-500 hover:text-red-700"
                          >
                            <FaTimes size={14} />
                          </button>
                        </div>
                      ))
                    )}
                  </div>
                </div>
                
                {/* Medications */}
                <div className="mb-4">
                  <h5 className="text-sm font-medium mb-2">Current Medications</h5>
                  <form onSubmit={handleAddMedication} className="space-y-2 mb-2">
                    <input
                      type="text"
                      name="medication"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm"
                      placeholder="Medication name"
                    />
                    <div className="flex">
                      <input
                        type="text"
                        name="dosage"
                        className="flex-1 px-3 py-2 border border-gray-300 rounded-l-md text-sm"
                        placeholder="Dosage (e.g., 10mg daily)"
                      />
                      <button
                        type="submit"
                        className="px-3 py-2 bg-[#A67C52] text-white rounded-r-md"
                      >
                        Add
                      </button>
                    </div>
                  </form>
                  <div className="space-y-1">
                    {userData.medications.length === 0 ? (
                      <p className="text-sm text-gray-500 italic">No medications added</p>
                    ) : (
                      userData.medications.map((med, index) => (
                        <div key={index} className="flex justify-between items-center bg-gray-50 p-2 rounded">
                          <div>
                            <p className="text-sm font-medium">{med.medication}</p>
                            <p className="text-xs text-gray-500">{med.dosage}</p>
                          </div>
                          <button
                            onClick={() => handleRemoveMedication(index)}
                            className="text-red-500 hover:text-red-700"
                          >
                            <FaTimes size={14} />
                          </button>
                        </div>
                      ))
                    )}
                  </div>
                </div>
              </div>
            )}

            {/* Metrics Tab */}
            {activeTab === 'metrics' && (
              <div>
                <h4 className="font-medium mb-3">Health Metrics</h4>
                
                {/* Add New Metric */}
                <div className="mb-4">
                  <h5 className="text-sm font-medium mb-2">Add New Measurement</h5>
                  <form onSubmit={handleAddMetric} className="space-y-2">
                    <select
                      name="type"
                      value={newMetric.type}
                      onChange={handleMetricChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm"
                    >
                      <option value="bloodPressure">Blood Pressure (systolic/diastolic)</option>
                      <option value="heartRate">Heart Rate (bpm)</option>
                      <option value="bloodSugar">Blood Sugar (mg/dL)</option>
                    </select>
                    
                    <div className="flex">
                      <input
                        type="text"
                        name="value"
                        value={newMetric.value}
                        onChange={handleMetricChange}
                        className="flex-1 px-3 py-2 border border-gray-300 rounded-l-md text-sm"
                        placeholder={
                          newMetric.type === 'bloodPressure' ? '120/80' :
                          newMetric.type === 'heartRate' ? '72' : '100'
                        }
                      />
                      <input
                        type="date"
                        name="date"
                        value={newMetric.date}
                        onChange={handleMetricChange}
                        className="px-3 py-2 border-y border-r border-gray-300 rounded-r-md text-sm"
                      />
                    </div>
                    
                    <button
                      type="submit"
                      className="w-full px-3 py-2 bg-[#A67C52] text-white rounded-md"
                    >
                      Save Measurement
                    </button>
                  </form>
                </div>
                
                {/* Metric History */}
                <div>
                  <h5 className="text-sm font-medium mb-2">Recent Measurements</h5>
                  
                  {/* Blood Pressure */}
                  <div className="mb-3">
                    <h6 className="text-xs font-medium text-gray-500 mb-1">Blood Pressure</h6>
                    {healthMetrics.bloodPressure.length === 0 ? (
                      <p className="text-sm text-gray-500 italic">No data available</p>
                    ) : (
                      <div className="space-y-1 max-h-32 overflow-y-auto">
                        {[...healthMetrics.bloodPressure]
                          .sort((a, b) => new Date(b.date) - new Date(a.date))
                          .map((bp, index) => (
                            <div key={index} className="flex justify-between items-center bg-gray-50 p-2 rounded text-sm">
                              <span>{bp.value} mmHg</span>
                              <span className="text-xs text-gray-500">{new Date(bp.date).toLocaleDateString()}</span>
                            </div>
                          ))
                        }
                      </div>
                    )}
                  </div>
                  
                  {/* Heart Rate */}
                  <div className="mb-3">
                    <h6 className="text-xs font-medium text-gray-500 mb-1">Heart Rate</h6>
                    {healthMetrics.heartRate.length === 0 ? (
                      <p className="text-sm text-gray-500 italic">No data available</p>
                    ) : (
                      <div className="space-y-1 max-h-32 overflow-y-auto">
                        {[...healthMetrics.heartRate]
                          .sort((a, b) => new Date(b.date) - new Date(a.date))
                          .map((hr, index) => (
                            <div key={index} className="flex justify-between items-center bg-gray-50 p-2 rounded text-sm">
                              <span>{hr.value} bpm</span>
                              <span className="text-xs text-gray-500">{new Date(hr.date).toLocaleDateString()}</span>
                            </div>
                          ))
                        }
                      </div>
                    )}
                  </div>
                  
                  {/* Blood Sugar */}
                  <div>
                    <h6 className="text-xs font-medium text-gray-500 mb-1">Blood Sugar</h6>
                    {healthMetrics.bloodSugar.length === 0 ? (
                      <p className="text-sm text-gray-500 italic">No data available</p>
                    ) : (
                      <div className="space-y-1 max-h-32 overflow-y-auto">
                        {[...healthMetrics.bloodSugar]
                          .sort((a, b) => new Date(b.date) - new Date(a.date))
                          .map((bs, index) => (
                            <div key={index} className="flex justify-between items-center bg-gray-50 p-2 rounded text-sm">
                              <span>{bs.value} mg/dL</span>
                              <span className="text-xs text-gray-500">{new Date(bs.date).toLocaleDateString()}</span>
                            </div>
                          ))
                        }
                      </div>
                    )}
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

export default HealthAssistant;

