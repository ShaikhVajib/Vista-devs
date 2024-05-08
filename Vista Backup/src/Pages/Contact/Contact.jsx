import React, { useState } from "react";
import Breadcrumbs from "../../Components/Breadcrumbs";
import PrimaryButton from "../../Components/Buttons/PrimaryButton";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", { name, email, phone, message });
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
          <div className="content-section py-40 px-5 max-w-screen-xl mx-auto content-end w-full flex flex-col justify-center gap-6 flex-nowrap max-sm:py-12 max-sm:px-5">
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
      {/*--------------------------------------- Contact hero section End --------------------------------*/}

      {/*--------------------------------------- Contact section Start --------------------------------*/}
      <section className="contact-main-section">
        <div className="bg-accent flex ">
          <div className="content-section py-40 px-5 max-w-screen-xl mx-auto content-end w-full flex flex-col justify-center gap-6 flex-nowrap max-sm:py-12 max-sm:px-5">
            <div className="content flex flex-col gap-8 max-sm:items-center bg-black p-14 max-sm:p-8 rounded-3xl">
              <h2 className="font-semibold text-4xl pb-5 text-white">Contact Us</h2>
              <form onSubmit={handleSubmit} className="text-white text-xl w-full">
                <div className="mb-4">
                  <label htmlFor="name" className="block mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="border border-gray-300 rounded-md px-3 py-2 w-full bg-slate-700 border-1 border-black"
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
                    className="border border-gray-300 rounded-md px-3 py-2 w-full bg-slate-700 border-1 border-black"
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
                    className="border border-gray-300 rounded-md px-3 py-2 w-full bg-slate-700 border-1 border-black"
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
                    className="border border-gray-300 rounded-md px-3 py-2 w-full bg-slate-700 border-1 border-black"
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
          </div>
        </div>
      </section>

      {/*--------------------------------------- Contact section End --------------------------------*/}
    </>
  );
};

export default Contact;
