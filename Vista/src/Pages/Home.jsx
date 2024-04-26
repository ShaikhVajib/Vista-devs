import React from "react";
import "./Home.css";
import PrimaryButton from "../Components/PrimaryButton";
import SecondaryButton from "../Components/SecondaryButton";

function Home() {
  return (
    <>
      <div className="home">
        <div className="hero-section bg-black flex ">
          <div className="content-section max-w-screen-xl mx-auto flex flex-col gap-6 justify-center">
            <div className="content pb-16 flex justify-center text-center flex-col items-center gap-5">
              <h1>Designing a BattleGround Today</h1>
              <p className="text-gray-500 w-2/3 text-center">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <div className="con-btn flex flex-col flex-col-reverse items-center sm:flex-row sm:flex-row-reverse justify-center gap-5">
                <PrimaryButton btnHref="#contact" btnText="What We Do"/>
                <SecondaryButton btnHref="#contact" btnText="View Works"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
