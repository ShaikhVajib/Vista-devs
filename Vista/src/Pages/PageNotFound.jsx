import React from "react";
import PrimaryButton from "../Components/PrimaryButton";
import errorImage from "../Images/Page-Not-Found.png";

function PageNotFound() {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="flex flex-col items-center gap-5 px-5">
        <img
          className="w-1/3 h-auto max-sm:w-2/3"
          src={errorImage}
          alt="Error 404"
        />
        <h1 className="text-black text-4xl text-center max-sm:text-3xl">
          Oops! Page Not Found - 404 Error
        </h1>
        <p className="text-gray-500 text-center pb-5">
          The page you are looking for might have been removed, had its name
          changed, or is temporarily unavailable.
        </p>
        <PrimaryButton btnHref="/" btnText="Return To Home" />
      </div>
    </div>
  );
}

export default PageNotFound;
