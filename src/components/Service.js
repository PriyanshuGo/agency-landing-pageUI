"use client";
import { useState } from "react";
import Image from "next/image";

const services = [
  { id: "branding", name: "BRANDING", image: "/branding.jpg" },
  { id: "web", name: "WEB DESIGN", image: "/web.jpg" },
  { id: "development", name: "DEVELOPMENT", image: "/development.jpg" },
  { id: "uiux", name: "UI/UX DESIGN", image: "/uiux.jpg" },
];

function Service() {
  const [activeId, setActiveId] = useState("branding");

  const handleClick = (id) => {
    setActiveId(id);
  };

  return (
    <div className="flex flex-col lg:py-16 mx-5 space-y-4 lg:space-y-12">
      {/* Header Section */}
      <div className="lg:flex justify-between mx-5 items-center space-y-2 md:mx-16 lg:mx-20">
        <h1 className="font-semibold text-3xl sm:text-4xl lg:text-6xl">
          <span>POPULAR </span>
          <span className="font-serif italic"> SERVICE</span>
        </h1>
        <p className="text-xs lg:text-base">
          Next Zone is a full service Digital agency working at <br /> the
          intersection of design, technology and human interaction.
        </p>
      </div>

      {/* Services Section */}
      <div className="sm:flex justify-between mx-5 sm:space-x-2 md:mx-16 lg:mx-20 lg:space-x-6">
        {/* Left Section: Service Items */}
        <div className="flex flex-col my-5 space-y-2 sm:my-0 justify-around sm:w-1/2 lg:w-2/5">
          {services.map(({ id, name, image }) => (
            <div key={id} className="cursor-pointer space-y-2">
              <div
                className={`py-2 sm:py-7 px-4 rounded-xl text-3xl font-thin sm:hover:bg-gray-200 flex items-center border-b-4 ${
                  activeId === id ? "bg-black text-white" : ""
                }`}
                onClick={() => handleClick(id)}
              >
                {name}
              </div>
              {activeId === id && (
                <div className="my-2 sm:hidden transition-all duration-400">
                  <Image
                    src={image}
                    alt={name}
                    width={500}
                    height={300}
                    priority
                    className="rounded-3xl max-h-80 h-auto"
                  />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Right Section: Selected Service Image */}
        <div className="hidden sm:flex justify-center items-center rounded-xl sm:w-1/2 lg:w-3/5 relative overflow-hidden">
          {services.map(({ id, name, image }) =>
            activeId === id ? (
              <Image
                key={id}
                src={image}
                alt={name}
                layout="fill"
                priority
                className="rounded-3xl object-cover"
              />
            ) : null
          )}
        </div>
      </div>
    </div>
  );
}

export default Service;
