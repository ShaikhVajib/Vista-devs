import React from "react";
import "./Services.css";
import ServiceContent from "../../Components/ServiceContent";
import Breadcrumbs from "../../Components/Breadcrumbs";
import PrimaryButton from "../../Components/Buttons/PrimaryButton";

const ServiceCard = ({ img, title, description }) => (
  <div className="service-card bg-white border p-6 flex  flex-col gap-y-6 rounded-xl max-sm:p-5 max-sm:gap-y-4 shadow-xl ">
    <img src={img} alt={title} className="h-10  self-start service-card-icon" />
    <h3>{title}</h3>
    <p>{description}</p>
  </div>
);
const Services = ({ numberOfServices, i }) => {
  const servicesToShow = ServiceContent.slice(0, numberOfServices);

  return (
    <>
      <div className="service-hero-section">
        <div className="bg-black flex ">
          <div className="content-section py-40 px-5 max-w-screen-xl mx-auto content-end w-full flex flex-col justify-center gap-6 flex-nowrap max-sm:py-12 max-sm:px-5">
            <div className="content flex flex-col gap-8">
              <Breadcrumbs />
              <h2 className=" leading-tight text-white">
              Lorem ipsum <br />
              <span className="text-light">
                dolor sit amet.
              </span>
            </h2>
            <PrimaryButton btnText="Learn More" className="max-sm:justify-start"/>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-screen-xl m-auto">
        <div className="service-section grid grid-cols-3 gap-6 section py-14 max-sm:grid-cols-1 max-lg:grid-cols-2  ">
          {servicesToShow.map((service) => (
            <ServiceCard
              key={service.key}
              img={service.img}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Services;
