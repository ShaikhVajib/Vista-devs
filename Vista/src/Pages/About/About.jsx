import React from "react";
import Breadcrumbs from "../../Components/Breadcrumbs";
import PrimaryButton from "../../Components/Buttons/PrimaryButton";
import Scroll from "../../assets/Icons/scroll-obj.svg";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";
import AeroButton from "../../Components/Buttons/AeroButton";
import { useEffect } from "react";

const About = () => {
  // Next Section Smooth Scroll
  const scrollToNextSection = () => {
    scroll.scrollTo(window.innerHeight);
  };
  // Scroll Icon Animation
  useEffect(() => {
    const scrollIcon = document.getElementById("scroll-icon");
    const handleScroll = () => {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      const rotationAngle = scrollTop / 2;
      scrollIcon.style.transform = `rotate(${rotationAngle}deg)`;
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div>
      <div className="about-hero-section">
        <div className="bg-black flex ">
          <div className="content-section py-40 px-5 max-w-screen-xl mx-auto content-end w-full flex flex-col justify-center gap-6 flex-nowrap max-sm:py-12 max-sm:px-5 max-sm:pt-28">
            <div className="content flex flex-col gap-8 max-sm:items-center">
              <Breadcrumbs />
              <h1 className="big-heding leading-tight text-white max-sm:text-center">
                About <span className="text-light"> Us</span>
              </h1>
              <p className="text-gray-500  justify-center mb-10 max-sm:mb-5 w-1/3 max-sm:w-full max-sm:text-center">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor,
                voluptas.
              </p>

              <ScrollLink
                to="nxt-section"
                smooth={true}
                duration={1000}
                onClick={scrollToNextSection}
                className="scroll-con"
              >
                <img
                  src={Scroll}
                  width="100px"
                  className="cursor-pointer"
                  id="scroll-icon"
                />
                <AeroButton className="scroll-link-aero rotate-90 ml-11 mt-4" />
              </ScrollLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
