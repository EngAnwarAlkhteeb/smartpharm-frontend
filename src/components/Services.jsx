import React, { useState } from "react";
import Button from "../layouts/Button";
import ServicesCard from "../layouts/ServicesCard";
import ServiceModal from "./ServiceModal";
import servicesData from "../data/services";

const Services = () => {
  const [selectedService, setSelectedService] = useState(null);

  // Get the first 6 services for display
  const displayedServices = servicesData.slice(0, 6);

  // Icons for each service are imported from the data file

  const handleServiceClick = (service) => {
    setSelectedService(service);
  };

  const closeModal = () => {
    setSelectedService(null);
  };

  return (
    <div className="min-h-screen flex flex-col justify-center lg:px-32 px-5 pt-24 lg:pt-16">
      <div className="flex flex-col items-center lg:flex-row justify-between">
        <div>
          <h1 className="text-4xl font-semibold text-center lg:text-start">
            Our Services
          </h1>
          <p className="mt-2 text-center lg:text-start">
            We offer a wide range of healthcare services tailored to meet your needs and ensure your well-being.
          </p>
        </div>
        <div className="mt-4 lg:mt-0">
          <Button title="See All Services" />
        </div>
      </div>

      {/* First Row of Services */}
      <div className="flex flex-col lg:flex-row gap-5 pt-14">
        {displayedServices.slice(0, 3).map((service) => (
          <ServicesCard
            key={service.id}
            icon={<service.icon size={35} className="text-blue-500" />}
            title={service.title}
            description={service.shortDescription}
            onClick={() => handleServiceClick(service)}
          />
        ))}
      </div>

      {/* Second Row of Services */}
      <div className="flex flex-col lg:flex-row gap-5 pt-14 mb-5">
        {displayedServices.slice(3, 6).map((service) => (
          <ServicesCard
            key={service.id}
            icon={<service.icon size={35} className="text-blue-500" />}
            title={service.title}
            description={service.shortDescription}
            onClick={() => handleServiceClick(service)}
          />
        ))}
      </div>

      {/* Service Modal */}
      {selectedService && (
        <ServiceModal service={selectedService} onClose={closeModal} />
      )}
    </div>
  );
};

export default Services;

