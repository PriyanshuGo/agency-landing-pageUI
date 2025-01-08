"use client"
import { useState } from "react"
import Image from "next/image";

function Service() {
    const [screen, setScreen] = useState("branding");
    const showScreen = (item) => {
        setScreen(screen === item ? null : item)
    }
    return (
        <div className="flex flex-col my-16 mx-4 space-y-4 lg:mx-10 lg:space-y-12">

            <div className="lg:flex justify-between sm:mx-5 items-center space-y-2">
                <h1 className="font-semibold text-3xl sm:text-4xl lg:text-6xl">POPULAR <br /><span className="font-serif italic">SERVICE</span></h1>
                <p className="text-xs lg:text-base">Next Zone is a full service Digital agency working at <br /> the intersection of design, technology and human interaction.</p>
            </div>

            <div className="sm:flex justify-between sm:mx-5 sm:h-[60vh] sm:space-x-2 lg:space-x-6 ">

                <div className="flex flex-col my-5 space-y-2 sm:my-0 justify-around sm:w-1/2 lg:w-2/5 ">

                    <div className="cursor-pointer space-y-2 " >
                        <div className="bg-white py-2 sm:py-7 px-4 rounded-xl text-3xl font-thin sm:hover:bg-gray-200 flex items-center border-b-4 " onClick={() => { showScreen("branding") }}>
                            BRANDING
                        </div>
                        <div className={`${screen === "branding" ? "block" : 'hidden'} my-2 sm:hidden transition-all duration-400`}>
                            <Image
                                src="/branding.jpg" // Relative or absolute URL
                                alt="BRANDING" // Accessibility text
                                width={500} // Desired width
                                height={300} // Desired height
                                priority // Optional: If you want to load the image eagerly
                                className="rounded-3xl"
                            />
                        </div>
                    </div>

                    <div className="cursor-pointer space-y-2" >
                        <div className="bg-white py-2 sm:py-7 px-4 rounded-xl text-3xl font-thin sm:hover:bg-gray-200 flex items-center border-b-4" onClick={() => { showScreen("web") }}>
                            WEB DESIGN
                        </div>
                        <div className={`${screen === "web" ? "block" : 'hidden'} my-2 sm:hidden transition-all duration-400`}>
                            <Image
                                src="/web.jpg" // Relative or absolute URL
                                alt="WEB DESIGN" // Accessibility text
                                width={500} // Desired width
                                height={300} // Desired height
                                priority // Optional: If you want to load the image eagerly
                                className="rounded-3xl"
                            />
                        </div>
                    </div>

                    <div className="cursor-pointer space-y-2" >
                        <div className="bg-white py-2 sm:py-7 px-4 rounded-xl text-3xl font-thin sm:hover:bg-gray-200 flex items-center border-b-4" onClick={() => { showScreen("development") }}>
                            DEVELOPMENT
                        </div>
                        <div className={`${screen === "development" ? "block" : 'hidden'} sm:hidden transition-all duration-400`}>
                            <Image
                                src="/development.jpg" // Relative or absolute URL
                                alt="DEVELOPMENT" // Accessibility text
                                width={500} // Desired width
                                height={300} // Desired height
                                priority // Optional: If you want to load the image eagerly
                                className="rounded-3xl"
                            />
                        </div>
                    </div>
                    
                    <div className="cursor-pointer space-y-2" >
                        <div className="bg-white py-2 sm:py-7 px-4 rounded-xl text-3xl font-thin sm:hover:bg-gray-200 flex items-center border-b-4" onClick={() => { showScreen("UI/UX") }}>
                            UI/UX DESIGN
                        </div>
                        <div className={`${screen === "UI/UX" ? "block" : 'hidden'} sm:hidden transition-all duration-400`}>
                            <Image
                                src="/uiux.jpg" // Relative or absolute URL
                                alt="UI/UX" // Accessibility text
                                width={500} // Desired width
                                height={300} // Desired height
                                priority // Optional: If you want to load the image eagerly
                                className="rounded-3xl"
                            />
                        </div>
                    </div>
                </div>

                <div className="bg-black hidden sm:block rounded-xl sm:w-1/2 lg:w-3/5">
                
                </div>

            </div>

        </div>
    )
}

export default Service
