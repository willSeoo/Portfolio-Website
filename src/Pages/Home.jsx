import React from "react";
import { useNavigate } from "react-router";
import { ScrollVelocity } from "../components/ScrollVelocity";

const Home = () => {
  const navigate = useNavigate();

  const Handleclick = () => {
    navigate("/profile");
  };

  return (
    <div className="absolute bg-white z-10 w-full">
    
      {/* LOGO AND NAME IN HOME (HERO) */}
      <div className="flex justify-center items-center mt-30 ">
        <img src="./images/reactbits.png" alt="logo" className="w-20 mb-2" />
      </div>

      <div className="flex justify-center items-center text-gray-600">
        <p>WILLS PORTFOLIO</p>
      </div>


      <div className="overflow-hidden w-full lg:mt-5 mt-17">
        <ScrollVelocity
          texts={["FRONTEND DEVELOPER", "GRAPHIC DESIGNER"]}
          velocity={40}
          className="custom-scroll-text font-extrabold flex lg:text-8xl text-5xl items-center justify-center text-black -mt-2"
        />
      </div>

    </div>
  );
};

export default Home;
