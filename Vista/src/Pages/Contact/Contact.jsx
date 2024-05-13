import React, { useEffect, useState } from "react";
import Breadcrumbs from "../../Components/Breadcrumbs";
import Scroll from "../../assets/Icons/scroll-obj.svg";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";
import AeroButton from "../../Components/Buttons/AeroButton";
import Envelop from "../../assets/Icons/envelop-outline.svg";
import Phone from "../../assets/Icons/phone-outline.svg";
import Marker from "../../assets/Icons/marker-outline.svg";

const Contact = () => {
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
      const rotationAngle = scrollTop;
      scrollIcon.style.transform = `rotate(${rotationAngle}deg)`;
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log("Form submitted:", { name, email, phone, message });
    const formData = { name, email, phone, message };
    localStorage.setItem("formData", JSON.stringify(formData));
    setName("");
    setEmail("");
    setPhone("");
    setMessage("");
  };

  return (
    <>
      {/*--------------------------------------- Contact hero section Start --------------------------------*/}
      <div className="contact-hero-section">
        <div className="bg-black flex ">
          <div className="content-section py-40 px-5 max-w-screen-xl mx-auto content-end w-full flex flex-col justify-center gap-6 flex-nowrap max-sm:py-12 max-sm:px-5 max-sm:pt-28">
            <div className="content flex flex-col gap-8 max-sm:items-center">
              <Breadcrumbs />
              <h1 className="big-heding leading-tight text-white max-sm:text-center">
                Contact <span className="text-light"> Us</span>
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
      {/*--------------------------------------- Contact hero section End --------------------------------*/}

      {/*--------------------------------------- Contact section Start --------------------------------*/}
      <section className="nxt-section bg-accent contact-main-section">
        <div className="content-section py-40 px-5 max-w-screen-xl mx-auto content-end w-full flex flex-row justify-center gap-6 max-sm:flex-col max-sm:py-12 max-sm:px-5 max-lg:flex-col">
          <div className="content flex flex-col gap-8 max-sm:items-center w-3/4 bg-white shadow-xl border p-14 max-sm:p-8 rounded-3xl max-sm:w-full max-lg:w-full ">
            <h2 className="font-semibold text-4xl pb-5 text-black">
              Contact Us
            </h2>
            <form onSubmit={handleSubmit} className="text-black text-xl w-full">
              <div className="mb-4">
                <label htmlFor="name" className="block mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="rounded-md px-3 py-2 w-full bg-slate-200 border"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="rounded-md px-3 py-2 w-full bg-slate-200 border"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="phone" className="block mb-2">
                  Phone
                </label>
                <input
                  type="number"
                  id="phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="rounded-md px-3 py-2 w-full bg-slate-200 border"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="block mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="rounded-md px-3 py-2 w-full bg-slate-200 border"
                  rows={4}
                ></textarea>
              </div>
              <button
                type="submit"
                className="contact-button pl-7 pr-4 py-3 rounded-full text-white"
              >
                Submit
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  className="mil-arrow"
                >
                  <path d="M 14 5.3417969 C 13.744125 5.3417969 13.487969 5.4412187 13.292969 5.6367188 L 13.207031 5.7226562 C 12.816031 6.1136563 12.816031 6.7467188 13.207031 7.1367188 L 17.070312 11 L 4 11 C 3.448 11 3 11.448 3 12 C 3 12.552 3.448 13 4 13 L 17.070312 13 L 13.207031 16.863281 C 12.816031 17.254281 12.816031 17.887344 13.207031 18.277344 L 13.292969 18.363281 C 13.683969 18.754281 14.317031 18.754281 14.707031 18.363281 L 20.363281 12.707031 C 20.754281 12.316031 20.754281 11.682969 20.363281 11.292969 L 14.707031 5.6367188 C 14.511531 5.4412187 14.255875 5.3417969 14 5.3417969 z"></path>
                </svg>
              </button>
            </form>
          </div>
          <div className="content flex flex-col gap-8 max-sm:items-center w-1/4 max-sm:w-full max-lg:w-full">
            <a
              href="mailto:example@vista.com"
              className="content flex flex-col gap-3 max-sm:items-center w-full bg-white shadow-xl border p-14 max-sm:p-8 rounded-3xl transition-all hover:-translate-y-3 hover:duration-300"
            >
              <img
                src={Envelop}
                className="h-10  self-start service-card-icon max-sm:self-center"
              />
              <h3>Email</h3>
              <p>example@vista.com</p>
            </a>
            <a
              href="tel:+91 9724034277"
              className="content flex flex-col gap-3 max-sm:items-center w-full bg-white shadow-xl border p-14 max-sm:p-8 rounded-3xl transition-all hover:-translate-y-3 hover:duration-300"
            >
              <img
                src={Phone}
                className="h-10  self-start service-card-icon max-sm:self-center"
              />
              <h3>Phone</h3>
              <p>+91 9725059703</p>
            </a>
            <a
              href="#map-section"
              className="content flex flex-col gap-3 max-sm:items-center w-full bg-white shadow-xl border p-14 max-sm:p-8 rounded-3xl transition-all hover:-translate-y-3 hover:duration-300"
            >
              <img
                src={Marker}
                className="h-10  self-start service-card-icon max-sm:self-center"
              />
              <h3>Address</h3>
              <p className="max-sm:text-center">
                Lorem ipsum is dummy text, 007
              </p>
            </a>
          </div>
        </div>
        <iframe
          width="100%"
          height="400"
          frameborder="0"
          scrolling="no"
          marginheight="0"
          marginwidth="0"
          src="https://maps.google.com/maps?width=100%25&amp;height=450&amp;hl=en&amp;q=Zespires%20Technologies+(Vista%20Inc.)&amp;t=&amp;z=15&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
          id="map-section"
        ></iframe>
      </section>

      {/*--------------------------------------- Contact section End --------------------------------*/}
    </>
  );
};

export default Contact;
