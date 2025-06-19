import React from 'react';
import { FaTimes, FaGraduationCap, FaCalendarAlt, FaPhone, FaLanguage } from 'react-icons/fa';

const DoctorModal = ({ doctor, onClose }) => {
  if (!doctor) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-4xl max-h-[90vh] overflow-y-auto">
        {/* Header with close button */}
        <div className="flex justify-between items-center p-6 border-b border-gray-200 sticky top-0 bg-white rounded-t-lg">
          <h2 className="text-2xl font-bold text-gray-800">{doctor.name}</h2>
          <button 
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 focus:outline-none"
            aria-label="Close"
          >
            <FaTimes size={24} />
          </button>
        </div>

        {/* Doctor information */}
        <div className="p-6">
          <div className="flex flex-col md:flex-row gap-6">
            {/* Doctor image */}
            <div className="md:w-1/3">
              <img 
                src={doctor.img} 
                alt={doctor.name} 
                className="w-full h-auto rounded-lg shadow-md object-cover"
                style={{ maxHeight: '300px' }}
              />
              
              <div className="mt-4 bg-blue-50 p-4 rounded-lg">
                <h3 className="font-semibold text-lg text-blue-800 mb-2">Contact Information</h3>
                <div className="flex items-center gap-2 mb-2">
                  <FaPhone className="text-blue-600" />
                  <span>{doctor.contact}</span>
                </div>
                <div className="flex items-center gap-2 mb-2">
                  <FaCalendarAlt className="text-blue-600" />
                  <span>Available: {doctor.availability}</span>
                </div>
                <div className="flex items-start gap-2">
                  <FaLanguage className="text-blue-600 mt-1" />
                  <div>
                    <span className="block">Languages:</span>
                    <div className="flex flex-wrap gap-1 mt-1">
                      {doctor.languages.map((language, index) => (
                        <span 
                          key={index} 
                          className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded"
                        >
                          {language}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Doctor details */}
            <div className="md:w-2/3">
              <div className="mb-4">
                <h3 className="text-xl font-semibold text-gray-800 mb-1">{doctor.specialties}</h3>
                <div className="flex items-center text-gray-600 mb-4">
                  <FaGraduationCap className="mr-2" />
                  <span>{doctor.education}</span>
                </div>
                <div className="bg-gray-100 px-3 py-1 rounded-full inline-block text-sm text-gray-700 mb-4">
                  {doctor.experience} of experience
                </div>
              </div>

              <div className="mb-6">
                <h3 className="font-semibold text-lg border-b border-gray-200 pb-2 mb-3">About</h3>
                <p className="text-gray-700 leading-relaxed">{doctor.bio}</p>
              </div>

              <div className="mb-6">
                <h3 className="font-semibold text-lg border-b border-gray-200 pb-2 mb-3">Specialization</h3>
                <p className="text-gray-700">
                  Dr. {doctor.name.split(' ')[1]} specializes in {doctor.specialties.toLowerCase()} services, 
                  providing comprehensive care with a focus on patient well-being and the latest medical advances.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-lg border-b border-gray-200 pb-2 mb-3">Appointment Information</h3>
                <p className="text-gray-700 mb-4">
                  To schedule an appointment with Dr. {doctor.name.split(' ')[1]}, please contact our office 
                  at {doctor.contact} during regular business hours. Dr. {doctor.name.split(' ')[1]} is available 
                  on {doctor.availability}.
                </p>
                
                <button 
                  className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-lg transition duration-300"
                  onClick={() => alert(`Booking functionality would be implemented here for ${doctor.name}`)}
                >
                  Book Appointment
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorModal;

