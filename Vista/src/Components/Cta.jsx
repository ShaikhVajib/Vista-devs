import React from "react";
import "../index.css";
import SecondaryButton from "./Buttons/SecondaryButton";

const Cta = () => {
  return (
    <>
      <div className="cta-section">
          <div className="bg-black flex px-5 mt-44  pb-10">
        <section className="max-w-screen-xl max-sm:flex-col max-sm:text-center md:!p-9 -mt-44 rounded-3xl m-auto bg-primary text-black flex justify-between gap-5 items-center section py-14 !px-14 max-sm:!px-5 max-sm:!py-12 shadow-lg shadow-orange-700/70">
          <div className="cta-content max-md:w-full">
          <h2 className="text-black text-5xl max-sm:text-2xl big-heading mb-5">
            Lorem ipsum dolor sit amet consectetur adipisicing.
          </h2>
          <p className="mb-2">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto maxime, eius aperiam natus eos aliquam animi voluptatibus eligendi, rerum blanditiis illo. Repellat dolorum minima corporis blanditiis beatae pariatur doloremque. Nisi, assumenda fuga. Porro, ipsum!
          </p>
          </div>
          <SecondaryButton
            className="!bg-black"
            btnHref="#contact"
            btnText="Contact Us"
          />
        </section>
        </div></div>
    </>
  );
};

export default Cta;
