"use client"
import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

function Section1() {
    const [isToggle, setIsToggle] = useState(null);
    
    // Section data
    const sections = [
        { id: "mission", title: "OUR MISSION", content: "Next Zone is a full service Digital agency working at the intersection of design, technology, and human interaction." },
        { id: "vision", title: "OUR VISION", content: "Next Zone envisions shaping the future of digital experiences by blending creativity and technology." }
    ];

    // Handle toggle click
    const handleToggle = (item) => {
        setIsToggle(isToggle === item ? null : item); // Toggle or reset
    }

    return (
        <div className="box-border py-10 mx-5 rounded-3xl md:flex md:flex-col lg:flex-row lg:justify-between lg:py-20">
            
            <div className="lg:w-2/3 space-y-5 mx-5 sm:space-y-12 md:mx-16 lg:mx-20">
                <h1 className="text-3xl font-semibold lg:text-5xl !leading-snug">
                    WE SOLVE ALL OF THE
                    BRAND'S BUSINESS
                    PROBLEMS IN THE <span className="font-serif font-thin">INTERNET</span>{" "}
                    <span className='font-serif font-thin'>SPACE</span>-- AS WELL AS DEVELOP{" "}
                    AND ADAPT <span className="font-serif font-thin">BUSINESS TOOLS.</span>
                </h1>

                <div className="flex flex-col lg:flex-row lg:space-y-0">
                    <div className='flex-1 lg:basis-1/3 px-2'>
                        <p className="lg:font-bold text-3xl xl:text-6xl xl:font-normal">250+</p>
                        <span className="text-xs">Successsful Websites Designed And Developed</span>
                    </div>
                    <div className='flex-1 lg:basis-1/3 px-2'>
                        <p className="lg:font-bold text-3xl xl:text-6xl xl:font-normal">9+</p>
                        <span className="text-xs">Years in Business As A Top New York City Design Agency. Focusing On Web Design & Development</span>
                    </div>
                    <div className='flex-1 lg:basis-1/3 px-2'>
                        <p className="lg:font-bold text-3xl xl:text-6xl xl:font-normal">99%</p>
                        <span className="text-xs">Client Satisfaction On Web Design Work With Our Agency</span>
                    </div>
                </div>
            </div>

            {/* MISSION AND VISION BLOCK */}
            <div className="lg:w-1/3 mx-5 space-y-5 my-5 box-border md:mx-16 lg:mx-20 lg:space-y-10 lg:pointer-events-none">
                {sections.map(({ id, title, content }) => (
                    <div key={id} className="py-4 border-t w-full">
                        <button onClick={() => handleToggle(id)} className="flex w-full justify-between">
                            <p className="text-2xl lg:text-xl">{`+${title}`}</p>
                            <ChevronDown
                                className={` ${isToggle === id ? 'transform rotate-180' : ''} transition-all duration-200 lg:hidden`}
                            />
                        </button>
                        <p className={`${isToggle === id ? "block" : "hidden"} lg:block`}>{content}</p>
                    </div>
                ))}
            </div>

        </div>
    );
}

export default Section1;
