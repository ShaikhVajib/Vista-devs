import React from "react";
<<<<<<< HEAD:Vista/src/Pages/Services.jsx
import ServiceContent from "../Components/ServiceContent";
=======
import ServiceContent from "../../Components/ServiceContent";
>>>>>>> 11e0a29f8d19d7a0475e1ee3e3446bc49d4235c6:Vista/src/Pages/Services/Services.jsx

const ServiceCard = ({ img, title, description }) => (
  <div className="card">
    <img src={img} alt={title} className="h-10 fill-primary" />
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
