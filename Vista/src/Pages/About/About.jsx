import Breadcrumbs from "../../Components/Breadcrumbs";
import SecondaryButton from "../../Components/Buttons/SecondaryButton";
import ArrowButton from "../../Components/Buttons/ArrowButton";

const About = () => {
  
  return (
    <>
       {/* About Us Page Hero Section Start  */}
      <div className="about-hero-section" >
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

              <ArrowButton scrollTo="nxt-section" />

            </div>
          </div>
        </div>
      </div>       
         {/*--------------------------------------- About section Start --------------------------------*/}
         <div className="about-section section flex max-w-screen-xl m-auto py-28 gap-12 max-sm:flex-col-reverse max-sm:py-14 bg-white" id="nxt-section">
          {/* left side content section  */}
          <div className="content-section w-1/2 pr-20 max-sm:w-full max-sm:pr-0">
            <h2 className="leading-tight text-black big-heading">
              Lorem ipsum <br />
              <span className="text-light">dolor sit amet.</span>
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
            <div className="flex mt-8  gap-5 max-sm:flex-col-reverse max-sm:justify-center max-sm:mt-6">
              <SecondaryButton btnHref="/about" btnText="About Us" />
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
        {/*--------------------------------------- About section End --------------------------------*/}

    </>
  );
};

export default About;
