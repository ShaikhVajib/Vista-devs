import React from "react";
import ServicesComponent from "../../Components/Services/ServicesComponent";
import Cta from "../../Components/Cta";

const Services = () => {
  return (
    <>
      {/*--------------------------------------- Services hero section Start --------------------------------*/}
      <section className="services-hero">
        This Is Hero Section 

      </section>
      {/*--------------------------------------- Services hero section End --------------------------------*/}


      {/*--------------------------------------- Services section Start --------------------------------*/}
      <section className="services-grid">
        <ServicesComponent/>
      </section>
      {/*--------------------------------------- Services section End --------------------------------*/}
      {/*--------------------------------------- Cta Section Start --------------------------------*/}
      <div className="cta-section">
          <Cta />
        </div>
        {/*--------------------------------------- Cta Section End --------------------------------*/}
    </>
  );
};

export default Services;
