import { useEffect } from "react";
import { animateScroll as scroll } from "react-scroll";
import Scroll from "../../assets/Icons/clickToNext.svg";
import PropTypes from 'prop-types';


const ArrowButton = ({ scrollTo }) => {
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const rotationAngle = scrollTop * 0.3; 
      const scrollIcon = document.getElementById("scroll-icon");
      if (scrollIcon) {
        scrollIcon.style.transform = `rotate(${rotationAngle}deg)`;
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToSection = () => {
    // Scroll to the section with the specified ID
    const section = document.getElementById(scrollTo);
    if (section) {
      scroll.scrollTo(section.offsetTop, { smooth: true, duration: 1000 });
    }
  };

  return (
    <div className="scroll-con w-max -mt-5" onClick={scrollToSection}>
      <img
        src={Scroll}
        width="100px"
        className="cursor-pointer opacity-30"
        id="scroll-icon"
      />
      {/* You can customize the ArrowButton component here */}
      <div className="scroll-link-aero rotate-90 ml-11 mt-4">
        {/* Your ArrowButton content */}
      </div>
    </div>
  );
};
ArrowButton.propTypes = {
  scrollTo: PropTypes.string.isRequired,
};


export default ArrowButton;
