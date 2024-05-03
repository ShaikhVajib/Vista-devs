import React from "react";

const SingleService = ({ service }) => {
  return (
    <div className="single-service">
      <img src={service.img} alt={service.title} />
      <h2>{service.title}</h2>
      <p>{service.description}</p>
      {/* Add any additional information or components as needed */}
    </div>
  );
};

export default SingleService;
