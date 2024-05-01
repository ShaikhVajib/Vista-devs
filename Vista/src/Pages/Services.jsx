import React from "react";
import ServiceContent from "../Components/ServiceContent";

const ServiceCard = ({ img, title, description }) => (
  <div className="card">
    <img src={img} alt={title} />
    <h3>{title}</h3>
    <p>{description}</p>
  </div>
);
const Services = () => {
  return (
    <div className="service-section">
      {ServiceContent.map((service) => (
        <ServiceCard
          img={service.img}
          title={service.title}
          description={service.description}
        />
      ))}
    </div>
  );
};

export default Services;
