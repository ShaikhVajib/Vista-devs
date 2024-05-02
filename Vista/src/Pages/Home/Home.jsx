import React from "react";
import "./Home.css";
import PrimaryButton from "../../Components/Buttons/PrimaryButton";
import SecondaryButton from "../../Components/Buttons/SecondaryButton";
import Cta from "../../Components/Cta";

const Home = () => {
  return (
    <>
      <div className="home">
        <div className="hero-section bg-black flex ">
          <div className="content-section max-w-screen-xl mx-auto content-end flex flex-col gap-6 flex-nowrap justify-center sm:py-12">
            <div className="content flex flex-col gap-8">
              <h1 className="text-white text-5xl text-center max-sm:text-4xl">
                Designing a BattleGround Today
              </h1>
              <p className="text-gray-500  justify-center text-center">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
              <div className="con-btn flex flex-row justify-center gap-5 max-sm:flex-col max-sm:justify-center">
                <PrimaryButton btnHref="#contact" btnText="What We Do" />
                <SecondaryButton btnHref="#contact" btnText="View Works" />
              </div>
            </div>
          </div>
        </div>
        <div className="about-section section flex max-w-screen-xl m-auto py-28 gap-12 max-sm:flex-col-reverse max-sm:py-14">
          {/* left side content section  */}
          <div className="content-section w-1/2 pr-20 max-sm:w-full max-sm:pr-0">
            <h2 className="text-6xl font-bold leading-tight max-sm:text-4xl text-black">
              Lorem ipsum <br />
              <span className="text-6xl leading-tight max-sm:text-4xl">
                {" "}
                dolor sit amet.
              </span>
            </h2>
            <p className="mt-5">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum,
              voluptate.
            </p>
            <p className="mt-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
              eum corporis porro consectetur quaerat eius labore officiis
              placeat beatae sequi voluptas, aperiam quas! Fuga, aliquam!
            </p>
            <p className="mt-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
              eum corporis porro consectetur quaerat eius labore officiis
              placeat beatae sequi voluptas, aperiam quas! Fuga, aliquam!
            </p>
            <div className="con-btn flex mt-8  gap-5 max-sm:flex-col-reverse max-sm:justify-center max-sm:mt-6">
              <PrimaryButton btnHref="#contact" btnText="What We Do" />
            </div>
          </div>
          {/* right Side Image section */}
          <div className="image-section w-1/2 max-sm:w-full">
            <img
              src=".\src\assets\Images\Home page About img.jpg"
              alt="CodeIsFun"
              className="about-img rounded-2xl shadow-2xl"
            />
          </div>
        </div>
        <div className="why-choose-section">
          <div className="bg-black flex ">
            <div className="content-section py-16 px-5 max-w-screen-xl mx-auto content-end flex flex-col gap-6 flex-nowrap justify-center max-sm:py-12 max-sm:px-5">
              <div className="content flex flex-col gap-8">
                <h1 className="text-white text-5xl text-center max-sm:text-4xl">
                  Designing a BattleGround Today
                </h1>
                <p className="text-gray-500  justify-center text-center">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                <div className="con-btn flex justify-center gap-5 max-sm:flex-col-reverse max-sm:justify-center">
                  <PrimaryButton btnHref="#contact" btnText="View Works" />
                </div>
                <div className="mt-5 grid grid-cols-4 max-lg:grid-cols-2 max-sm:grid-cols-1">
                  <div className="content-box py-14 px-5 text-white">
                    <h3 className="mb-5">Data 1</h3>
                    <p>
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Quam inventore quis ullam.
                    </p>
                  </div>
                  <div className="content-box py-14 px-5 text-white">
                    <h3 className="mb-5">Data 2</h3>
                    <p>
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Quam inventore quis ullam.
                    </p>
                  </div>
                  <div className="content-box py-14 px-5 text-white">
                    <h3 className="mb-5">Data 3</h3>
                    <p>
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Quam inventore quis ullam.
                    </p>
                  </div>
                  <div className="content-box py-14 px-5 text-white">
                    <h3 className="mb-5">Data 4</h3>
                    <p>
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Quam inventore quis ullam.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="cta-section">
          <Cta />
        </div>
      </div>
    </>
  );
};

export default Home;
