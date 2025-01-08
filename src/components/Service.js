"use client"
import { useState } from "react"

function Service() {
    const [screen, setScreen] = useState("branding");
    const showScreen = (item) => {
        setScreen(screen === item ? null : item)
    }
    return (
        <div className="flex flex-col mx-10">

            <div className="lg:flex justify-between">
                <h1 className="font-semibold text-2xl">POPULAR <br /><span className="font-serif">SERVICE</span></h1>
                <span className="text-xs">Next Zone is a full service Digital agency working at the intersection of design, technology and human interaction.</span>
            </div>

            <div className="flex flex-col space-y-2 my-5">
                <div className="cursor-pointer" onClick={()=>{showScreen("branding")}}>
                    <p className="bg-white py-4 px-4 rounded-3xl text-3xl font-thin">
                        BRANDING
                    </p>
                    <div className={`${screen === "branding" ? "block" : 'hidden'} min-h-40 transition-all duration-400`}>

                    </div>
                </div>
                <div className="cursor-pointer" onClick={()=>{showScreen("web")}}>
                    <p className="bg-white py-4 px-4 rounded-3xl text-3xl font-thin">
                        WEB DESIGN
                    </p>
                    <div className={`${screen === "web" ? "block" : 'hidden'} min-h-40 transition-all duration-400`}>

                    </div>
                </div>
                <div className="cursor-pointer" onClick={()=>{showScreen("development")}}>
                    <p className="bg-white py-4 px-4 rounded-3xl text-3xl font-thin">
                        DEVELOPMENT
                    </p>
                    <div className={`${screen === "development" ? "block" : 'hidden'} min-h-40 transition-all duration-400`}>

                    </div>
                </div>
                <div className="cursor-pointer" onClick={()=>{showScreen("UI/UX")}}>
                    <p className="bg-white py-4 px-4 rounded-3xl text-3xl font-thin">
                        UI/UX DESIGN
                    </p>
                    <div className={`${screen === "UI/UX" ? "block" : 'hidden'} min-h-40 transition-all duration-400`}>

                    </div>
                </div>
            </div>

        </div>
    )
}

export default Service
