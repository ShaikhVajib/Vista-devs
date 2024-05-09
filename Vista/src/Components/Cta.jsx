import React from "react";
import "../index.css";
import SecondaryButton from "./Buttons/SecondaryButton";

const Cta = () => {
  return (
    <>
      <div className="services-section">
          <div className="bg-black flex px-5 pt-20 pb-24">
        <section className="max-w-screen-xl rounded-3xl m-auto bg-primary text-black flex flex-col gap-5 text-center justify-center items-center section py-10 !px-7 shadow-lg shadow-orange-700/70">
          <h2 className="text-4xl font-medium">
            This Is{" "}
            <span className="text-4xl font-bold leading-tight max-sm:text-4xl">
              CTA Content
            </span>
          </h2>
          <p className="mb-2">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto maxime, eius aperiam natus eos aliquam animi voluptatibus eligendi, rerum blanditiis illo. Repellat dolorum minima corporis blanditiis beatae pariatur doloremque. Nisi, assumenda fuga. Porro, ipsum!
          </p>
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
