import React from "react";
import SingleService from "./SingleService";

const ServiceCard = ({ img, title, description, onClick }) => (
  <div className="service-card bg-white border p-6 flex  flex-col gap-y-6 rounded-xl max-sm:p-5 max-sm:gap-y-4 shadow-xl">
    <img src={img} alt={title} className="h-10  self-start service-card-icon" />
    <h3>{title}</h3>
    <p>{description}</p>
    <button onClick={onClick}>View Details</button>
  </div>
);

const Services = ({ numberOfServices }) => {
   

  const handleServiceClick = (service) => {
    // Navigate to single service page
    history.push(`/services/${service.title.replace(/\s+/g, '-').toLowerCase()}`);
  };

  const servicesToShow = ServiceContent.slice(0, numberOfServices);

  return (
    <>
      <div className="max-w-screen-xl m-auto">
        <div className="service-section grid grid-cols-3 gap-6 section py-14 max-sm:grid-cols-1 max-lg:grid-cols-2">
          {servicesToShow.map((service) => (
            <ServiceCard
              key={service.key}
              img={service.img}
              title={service.title}
              description={service.description}
              onClick={() => handleServiceClick(service)}
            />
          ))}
        </div>
      </div>
      {/* You may also render the SingleService component conditionally based on some state */}
    </>
  );
};

export default Services;
