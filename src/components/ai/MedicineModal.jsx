import React from 'react';
import { FaTimes, FaPrescriptionBottleAlt, FaExclamationTriangle, FaInfoCircle } from 'react-icons/fa';

const MedicineModal = ({ medicine, onClose }) => {
  if (!medicine) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-4xl max-h-[90vh] overflow-y-auto">
        {/* Header with close button */}
        <div className="flex justify-between items-center p-6 border-b border-gray-200 sticky top-0 bg-white rounded-t-lg">
          <div className="flex items-center">
            <FaPrescriptionBottleAlt className="text-blue-600 mr-3" size={24} />
            <div>
              <h2 className="text-2xl font-bold text-gray-800">{medicine.name}</h2>
              <p className="text-gray-600">{medicine.brand}</p>
            </div>
          </div>
          <button 
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 focus:outline-none"
            aria-label="Close"
          >
            <FaTimes size={24} />
          </button>
        </div>

        {/* Medicine information */}
        <div className="p-6">
          <div className="flex flex-col md:flex-row gap-6">
            {/* Medicine image and category */}
            <div className="md:w-1/3">
              <div className="bg-gray-100 rounded-lg p-4 flex items-center justify-center h-64">
                <FaPrescriptionBottleAlt size={100} className="text-blue-500 opacity-50" />
              </div>
              
              <div className="mt-4">
                <span className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">
                  {medicine.category}
                </span>
                
                <div className="mt-4">
                  <h3 className="font-semibold text-lg text-gray-800 mb-2">Common Uses</h3>
                  <div className="flex flex-wrap gap-2">
                    {medicine.symptoms.map((symptom, index) => (
                      <span 
                        key={index} 
                        className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded"
                      >
                        {symptom}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Medicine details */}
            <div className="md:w-2/3">
              <div className="mb-6">
                <h3 className="font-semibold text-lg border-b border-gray-200 pb-2 mb-3">Description</h3>
                <p className="text-gray-700 leading-relaxed">{medicine.description}</p>
              </div>

              <div className="mb-6">
                <h3 className="font-semibold text-lg border-b border-gray-200 pb-2 mb-3 flex items-center">
                  <FaInfoCircle className="text-blue-600 mr-2" />
                  Recommended Dosage
                </h3>
                <p className="text-gray-700">{medicine.dosage}</p>
              </div>

              <div className="mb-6">
                <h3 className="font-semibold text-lg border-b border-gray-200 pb-2 mb-3 flex items-center text-yellow-600">
                  <FaExclamationTriangle className="mr-2" />
                  Side Effects
                </h3>
                <p className="text-gray-700">{medicine.sideEffects}</p>
              </div>

              <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
                <h3 className="font-semibold text-lg text-red-700 mb-2 flex items-center">
                  <FaExclamationTriangle className="mr-2" />
                  Warnings & Precautions
                </h3>
                <p className="text-red-700">{medicine.warnings}</p>
              </div>

              <div className="mt-6 text-sm text-gray-500">
                <p>This information is for educational purposes only and is not intended as medical advice. 
                Always consult with a healthcare professional before taking any medication.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MedicineModal;

