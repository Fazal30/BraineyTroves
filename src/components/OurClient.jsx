import React from "react";
import info from "../assets/info.jpeg";
import wipro from "../assets/wipro.jpg";
import telep from "../assets/telep.png";
import tmb from "../assets/Tmb.webp";
import amaz from "../assets/amazon.webp";

const OurClient = () => {
  return (
    <div>
      <div>
        <h1 className="text-center text-black font-bold lg:text-4xl">
          OUR CLIENTS
        </h1>
      </div>
      <div className="flex flex-col md:flex-row gap-5 m-5 mt-10">
        <div className="text-center w-full md:w-1/3 bg-white border-2 border-lightText md:border-none p-5 rounded-lg shadow-[rgba(0,_0,_0,_0.5)_0px_3px_8px]">
          <div className="bg-slate-700" style={{ height: "130px" }}>
            <img
              src={info}
              alt="Slide 1"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
        <div className="text-center w-full md:w-1/3 bg-white border-2 border-lightText md:border-none p-5 rounded-lg shadow-[rgba(0,_0,_0,_0.5)_0px_3px_8px]">
          <div className="bg-slate-700" style={{ height: "130px" }}>
            <img
              src={wipro}
              alt="Slide 1"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
        <div className="text-center w-full md:w-1/3 bg-white border-2 border-lightText md:border-none p-5 rounded-lg shadow-[rgba(0,_0,_0,_0.5)_0px_3px_8px]">
          <div className="bg-slate-700" style={{ height: "130px" }}>
            <img
              src={telep}
              alt="Slide 1"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
        <div className="text-center w-full md:w-1/3 bg-white border-2 border-lightText md:border-none p-5 rounded-lg shadow-[rgba(0,_0,_0,_0.5)_0px_3px_8px]">
          <div className="bg-slate-700" style={{ height: "130px" }}>
            <img
              src={tmb}
              alt="Slide 1"
              className="h-full w-full object-cover"
            />
          </div>
        </div>

        <div className="text-center w-full md:w-1/3 bg-white border-2 border-lightText md:border-none p-5 rounded-lg shadow-[rgba(0,_0,_0,_0.5)_0px_3px_8px]">
          <div className="bg-slate-700" style={{ height: "130px" }}>
            <img
              src={amaz}
              alt="Slide 1"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurClient;
