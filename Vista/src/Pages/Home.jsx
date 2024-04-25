import React from "react";
import "./Home.css";
import PrimaryButton from "../Components/PrimaryButton";
import SecondaryButton from "../Components/SecondaryButton";

function Home() {
  return (
    <>
      <div className="home">
        <div className="hero-section bg-black flex ">
          <div className="content-section max-w-screen-xl mx-auto content-end flex flex-col gap-6 flex-nowrap justify-center">
            <div className="content pb-16 flex flex-col gap-8">
              <h1 className="text-white text-5xl text-center">Designing a BattleGround Today</h1>
              <p className="text-gray-500  justify-center text-center">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
              <div className="con-btn flex flex-row-reverse justify-center gap-5">
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
