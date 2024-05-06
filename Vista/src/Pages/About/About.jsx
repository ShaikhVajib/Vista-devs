import React from "react";
import Breadcrumbs from "../../Components/Breadcrumbs";
import PrimaryButton from "../../Components/Buttons/PrimaryButton";


const About = () => {
  return (
    <div>
      <div className="about-hero-section">
        <div className="bg-black flex ">
          <div className="content-section py-40 px-5 max-w-screen-xl mx-auto content-end w-full flex flex-col justify-center gap-6 flex-nowrap max-sm:py-12 max-sm:px-5 max-sm:pt-28">
            <div className="content flex flex-col gap-8 max-sm:items-center">
              <Breadcrumbs />
              <h2 className="big-heding leading-tight text-white max-sm:text-center">
                Lorem ipsum <br />
                <span className="text-light">dolor sit amet.</span>
              </h2>
              <PrimaryButton
                btnText="Learn More"
                className="max-sm:justify-start"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
