import React from 'react';
import { FaTimes, FaCheckCircle, FaArrowRight } from 'react-icons/fa';

const ServiceModal = ({ service, onClose }) => {
  if (!service) return null;

  const Icon = service.icon;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-4xl max-h-[90vh] overflow-y-auto">
        {/* Header with close button */}
        <div className="flex justify-between items-center p-6 border-b border-gray-200 sticky top-0 bg-white rounded-t-lg">
          <div className="flex items-center">
            <div className="bg-blue-100 p-3 rounded-full mr-4">
              <Icon size={30} className="text-blue-500" />
            </div>
            <h2 className="text-2xl font-bold text-gray-800">{service.title}</h2>
          </div>
          <button 
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 focus:outline-none"
            aria-label="Close"
          >
            <FaTimes size={24} />
          </button>
        </div>

        {/* Service information */}
        <div className="p-6">
          {/* Description */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">About This Service</h3>
            <p className="text-gray-700 leading-relaxed">{service.fullDescription}</p>
          </div>

          {/* Features */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Key Features</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {service.features.map((feature, index) => (
                <div key={index} className="flex items-start">
                  <FaCheckCircle className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                  <span className="text-gray-700">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Process */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">How It Works</h3>
            <div className="space-y-4">
              {service.process.map((step, index) => (
                <div key={index} className="flex items-start">
                  <div className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0">
                    {index + 1}
                  </div>
                  <div className="text-gray-700">{step}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Call to Action */}
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Ready to Get Started?</h3>
            <p className="text-gray-700 mb-4">
              Contact us today to learn more about our {service.title.toLowerCase()} or to schedule an appointment.
            </p>
            <div className="flex flex-wrap gap-3">
              <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-md flex items-center transition duration-300">
                Book Now <FaArrowRight className="ml-2" />
              </button>
              <button className="bg-white border border-blue-500 text-blue-500 hover:bg-blue-50 px-6 py-2 rounded-md transition duration-300">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceModal;

