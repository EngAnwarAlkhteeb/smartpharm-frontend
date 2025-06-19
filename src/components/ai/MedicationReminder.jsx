import { useState, useEffect } from 'react';
import { FaBell, FaTimes, FaPlus, FaTrash, FaEdit } from 'react-icons/fa';

const MedicationReminder = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [medications, setMedications] = useState(() => {
    const savedMedications = localStorage.getItem('medications');
    return savedMedications ? JSON.parse(savedMedications) : [];
  });
  const [newMedication, setNewMedication] = useState({
    name: '',
    dosage: '',
    frequency: 'daily',
    time: '08:00',
    notes: '',
  });
  const [editIndex, setEditIndex] = useState(null);
  const [notifications, setNotifications] = useState([]);

  // Save medications to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('medications', JSON.stringify(medications));
  }, [medications]);

  // Check for medication reminders every minute
  useEffect(() => {
    const checkReminders = () => {
      const now = new Date();
      const currentHour = now.getHours();
      const currentMinute = now.getMinutes();
      
      medications.forEach(med => {
        const [hour, minute] = med.time.split(':').map(Number);
        
        // Check if it's time for this medication
        if (currentHour === hour && currentMinute === minute) {
          // Create a notification
          const newNotification = {
            id: Date.now(),
            message: `Time to take ${med.name} (${med.dosage})`,
            time: new Date().toLocaleTimeString(),
          };
          
          // Add notification to the list
          setNotifications(prev => [newNotification, ...prev]);
          
          // Create browser notification if supported
          if ('Notification' in window && Notification.permission === 'granted') {
            new Notification('Medication Reminder', {
              body: `Time to take ${med.name} (${med.dosage})`,
              icon: '/favicon.ico'
            });
          }
        }
      });
    };

    // Request notification permission
    if ('Notification' in window && Notification.permission !== 'denied') {
      Notification.requestPermission();
    }

    const interval = setInterval(checkReminders, 60000); // Check every minute
    return () => clearInterval(interval);
  }, [medications]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewMedication(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (editIndex !== null) {
      // Update existing medication
      const updatedMedications = [...medications];
      updatedMedications[editIndex] = newMedication;
      setMedications(updatedMedications);
      setEditIndex(null);
    } else {
      // Add new medication
      setMedications([...medications, { ...newMedication, id: Date.now() }]);
    }
    
    // Reset form
    setNewMedication({
      name: '',
      dosage: '',
      frequency: 'daily',
      time: '08:00',
      notes: '',
    });
  };

  const handleEdit = (index) => {
    setNewMedication(medications[index]);
    setEditIndex(index);
  };

  const handleDelete = (index) => {
    const updatedMedications = medications.filter((_, i) => i !== index);
    setMedications(updatedMedications);
    
    // If editing this item, reset the form
    if (editIndex === index) {
      setEditIndex(null);
      setNewMedication({
        name: '',
        dosage: '',
        frequency: 'daily',
        time: '08:00',
        notes: '',
      });
    }
  };

  const dismissNotification = (id) => {
    setNotifications(notifications.filter(notification => notification.id !== id));
  };

  return (
    <div className="fixed bottom-5 left-5 z-50">
      {/* Floating Reminder Icon */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-[#dd8036] hover:bg-[#794318] text-white p-4 rounded-full shadow-lg transition-transform hover:scale-110"
        aria-label="Medication Reminders"
      >
        <FaBell size={30} />
        {notifications.length > 0 && (
          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
            {notifications.length}
          </span>
        )}
      </button>

      {/* Reminder Panel */}
      {isOpen && (
        <div className="absolute bottom-20 left-0 w-80 sm:w-96 bg-white rounded-lg shadow-xl border border-gray-200 animate-fadeIn">
          {/* Header */}
          <div className="flex items-center justify-between px-4 py-3 bg-[#794318] text-white rounded-t-lg">
            <h3 className="font-semibold">Medication Reminders</h3>
            <button onClick={() => setIsOpen(false)} aria-label="Close reminders">
              <FaTimes className="hover:text-gray-300" />
            </button>
          </div>

          {/* Notifications Section */}
          {notifications.length > 0 && (
            <div className="p-3 bg-yellow-50 border-b border-yellow-100">
              <h4 className="font-medium text-yellow-800 mb-2">Active Reminders</h4>
              <div className="max-h-32 overflow-y-auto">
                {notifications.map(notification => (
                  <div key={notification.id} className="flex justify-between items-center bg-white p-2 rounded mb-2 shadow-sm">
                    <div>
                      <p className="text-sm font-medium">{notification.message}</p>
                      <p className="text-xs text-gray-500">{notification.time}</p>
                    </div>
                    <button 
                      onClick={() => dismissNotification(notification.id)}
                      className="text-gray-400 hover:text-gray-600"
                    >
                      <FaTimes size={16} />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Tabs */}
          <div className="flex border-b">
            <button className="flex-1 py-2 px-4 bg-[#A67C52] text-white font-medium">
              My Medications
            </button>
            <button className="flex-1 py-2 px-4 bg-gray-100 text-gray-700 hover:bg-gray-200">
              History
            </button>
          </div>

          {/* Medications List */}
          <div className="p-4 max-h-60 overflow-y-auto">
            {medications.length === 0 ? (
              <p className="text-center text-gray-500 py-4">No medications added yet</p>
            ) : (
              medications.map((med, index) => (
                <div key={index} className="mb-3 p-3 bg-gray-50 rounded-lg shadow-sm">
                  <div className="flex justify-between">
                    <h4 className="font-medium">{med.name}</h4>
                    <div className="flex space-x-2">
                      <button 
                        onClick={() => handleEdit(index)}
                        className="text-blue-500 hover:text-blue-700"
                      >
                        <FaEdit size={16} />
                      </button>
                      <button 
                        onClick={() => handleDelete(index)}
                        className="text-red-500 hover:text-red-700"
                      >
                        <FaTrash size={16} />
                      </button>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600">{med.dosage}</p>
                  <div className="flex justify-between text-xs text-gray-500 mt-1">
                    <span>{med.frequency}</span>
                    <span>{med.time}</span>
                  </div>
                  {med.notes && <p className="text-xs italic mt-1">{med.notes}</p>}
                </div>
              ))
            )}
          </div>

          {/* Add New Medication Form */}
          <div className="p-4 border-t border-gray-200">
            <form onSubmit={handleSubmit}>
              <h4 className="font-medium mb-2">
                {editIndex !== null ? 'Edit Medication' : 'Add New Medication'}
              </h4>
              
              <div className="mb-2">
                <input
                  type="text"
                  name="name"
                  value={newMedication.name}
                  onChange={handleInputChange}
                  placeholder="Medication Name"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm"
                  required
                />
              </div>
              
              <div className="mb-2">
                <input
                  type="text"
                  name="dosage"
                  value={newMedication.dosage}
                  onChange={handleInputChange}
                  placeholder="Dosage (e.g., 10mg)"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm"
                  required
                />
              </div>
              
              <div className="grid grid-cols-2 gap-2 mb-2">
                <select
                  name="frequency"
                  value={newMedication.frequency}
                  onChange={handleInputChange}
                  className="px-3 py-2 border border-gray-300 rounded-md text-sm"
                  required
                >
                  <option value="daily">Daily</option>
                  <option value="twice daily">Twice Daily</option>
                  <option value="three times daily">Three Times Daily</option>
                  <option value="weekly">Weekly</option>
                  <option value="as needed">As Needed</option>
                </select>
                
                <input
                  type="time"
                  name="time"
                  value={newMedication.time}
                  onChange={handleInputChange}
                  className="px-3 py-2 border border-gray-300 rounded-md text-sm"
                  required
                />
              </div>
              
              <div className="mb-3">
                <textarea
                  name="notes"
                  value={newMedication.notes}
                  onChange={handleInputChange}
                  placeholder="Additional notes (optional)"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm"
                  rows="2"
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full bg-[#A67C52] hover:bg-[#794318] text-white py-2 rounded-md flex items-center justify-center"
              >
                <FaPlus className="mr-2" />
                {editIndex !== null ? 'Update Medication' : 'Add Medication'}
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default MedicationReminder;

