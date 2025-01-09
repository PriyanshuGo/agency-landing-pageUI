"use client"
import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

function Section1() {
    const [isToggle, setIsToggle] = useState(false);
    const handleToggle = (item) => {
        setIsToggle(isToggle === item ? null : item);
    }

    return (
        <div className="box-border my-10 mx-5 rounded-3xl space-y-15 md:flex md:flex-col md:px-16 lg:flex-row lg:justify-between lg:space-y-0 lg:py-20">

            <div className="space-y-5 mx-5 sm:space-y-12 ">
                
                <h1 className="text-3xl font-semibold lg:text-5xl !leading-snug ">
                    WE SOLVE ALL OF THE                                                                     
                    BRAND'S BUSINESS                                                                        
                    PROBLEMS IN THE <span className="font-serif font-thin">INTERNET</span>{" "}            
                    <span className='font-serif font-thin'>SPACE</span>-- AS WELL AS DEVELOP{" "}           
                    AND ADAPT <span className="font-serif font-thin">BUSINESS TOOLS.</span>
                </h1>

                <div className="flex flex-col lg:flex-row lg:space-y-0 ">
                    <div className='flex-1 lg:basis-1/3 px-2'>
                        <p className="lg:font-bold text-3xl xl:text-6xl xl:font-normal">250+</p>
                        <span className="text-xs">
                            Successsful Websites Designed And Developed
                        </span>
                    </div>
                    <div className='flex-1 lg:basis-1/3 px-2'>
                        <p className="lg:font-bold text-3xl xl:text-6xl xl:font-normal">9+</p>
                        <span className="text-xs">
                            Years in Business As A Top New York City Design Agency. Focusing
                            On Web Design & Development
                        </span>
                    </div>
                    <div className='flex-1 lg:basis-1/3 px-2'>
                        <p className="lg:font-bold text-3xl xl:text-6xl xl:font-normal">99%</p>
                        <span className="text-xs">
                            Client Satisfaction On Web Design Work With Our Agency
                        </span>
                    </div>
                </div>

            </div>

            {/* MISSION BLOCK */}
            <div className="mx-5 space-y-5 my-5 box-border lg:space-y-10 items-end lg:pointer-events-none">
                <div className='py-4 border-t w-full xl:w-80'>
                    <button onClick={() => handleToggle("mission")} className="flex w-full justify-between">
                        <p className="text-2xl lg:text-xl">+OUR MISSION</p>
                        <ChevronDown
                            className={` ${isToggle === "mission" ? 'transform rotate-180' : ''
                                } transition-all duration-200 lg:hidden `}
                        />
                    </button>
                    <p className={`${isToggle === "mission" ? "block" : "hidden"} lg:block `}>Next Zone is a full service Digital agency working at the intersection design, technology and human interaction</p>
                </div>
                <div className='py-4 border-t w-full xl:w-80'>
                    <button onClick={() => handleToggle("vision")} className="flex w-full justify-between">
                        <p className="text-2xl lg:text-xl">+OUR VISION</p>
                        <ChevronDown
                            className={` ${isToggle === "vision" ? 'transform rotate-180' : ''
                                } transition-all duration-200 lg:hidden`}
                        />
                    </button>
                    <p className={`${isToggle === "vision" ? "block" : "hidden"} lg:block`}>Next Zone is a full service Digital agency working at the intersection design, technology and human interaction</p>
                </div>
            </div>

        </div>

    );
}

export default Section1;
