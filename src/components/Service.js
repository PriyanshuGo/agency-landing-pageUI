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
  const [screen, setScreen] = useState("branding");

  const toggleScreen = (id) => {
    setScreen((prev) => (prev === id ? null : id));
  };

  // Get the currently selected service
  const selectedService = services.find((service) => service.id === screen);

  return (
    <div className="flex flex-col my-16 mx-4 space-y-4 lg:mx-10 lg:space-y-12">
      {/* Header Section */}
      <div className="lg:flex justify-between sm:mx-5 items-center space-y-2">
        <h1 className="font-semibold text-3xl sm:text-4xl lg:text-6xl">
          POPULAR <br />
          <span className="font-serif italic">SERVICE</span>
        </h1>
        <p className="text-xs lg:text-base">
          Next Zone is a full service Digital agency working at <br /> the
          intersection of design, technology and human interaction.
        </p>
      </div>

      {/* Services Section */}
      <div className="sm:flex justify-between sm:mx-5 sm:space-x-2 lg:space-x-6">
        {/* Left Section: Service Items */}
        <div className="flex flex-col my-5 space-y-2 sm:my-0 justify-around sm:w-1/2 lg:w-2/5 ">
          {services.map(({ id, name, image }) => (
            <div key={id} className="cursor-pointer space-y-2">
              <div
                className={`py-2 sm:py-7 px-4 rounded-xl text-3xl font-thin sm:hover:bg-gray-200 flex items-center border-b-4 ${screen === id ? "bg-black text-white" : ""}`}
                onClick={() => toggleScreen(id)} 
              >
                {name} 
              </div>
              {screen === id && (
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
          {selectedService ? (
            <Image
              src={selectedService.image}
              alt={selectedService.name}
              
              layout="fill"
              priority
              className="rounded-3xl object-cover"
            />
          ) : (
            <p className="text-white text-lg">Select a service to view details</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Service;
