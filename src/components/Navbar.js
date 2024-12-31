"use client"
import { useState } from "react";
import { Menu } from 'lucide-react';


function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const handleMenu = () => {
        setIsOpen(!isOpen);
    }
    return (
        <header >
            <nav className="bg-black text-white rounded-full mt-2 mb-0 m-8">
                <div className="container flex items-center justify-between py-2 mx-auto">
                    {/* logo section */}
                    <a href="#" className="logo ml-10">NEXTZONE</a>

                    {/* Hamburger Icon */}
                    <button className="text-white text-2xl mr-4 lg:hidden" onClick={handleMenu}>
                        <Menu />
                    </button>


                    {/* navigation links */}
                    <ul className={`nav-links hidden font-thin text-sm lg:flex lg:flex-row lg:justify-between lg:items-center lg:space-x-8`}>
                        <li> <a href="#">Home</a> </li>
                        <li> <a href="#">About Us</a> </li>
                        <li> <a href="#">Porfolio</a> </li>
                        <li> <a href="#">Services</a> </li>
                        <li> <a href="#"> Contact Us</a></li>
                    </ul>

                    {/* action button */}
                    <div className={`action-buttons hidden font-thin text-sm lg:flex lg:flex-row lg:justify-between lg:items-center lg:space-x-4 px-0 mr-4`}>
                        <button className="icon-button  bg-orange-500 hover:bg-orange-600 py-3 px-5 rounded-full border-black text-black font-semibold mr-0">↗</button>
                        <button className="cta-button bg-orange-500 px-7 py-3 rounded-full hover:bg-orange-600 text-black border-black font-semibold text-sm">REQUEST A PROPOSAL</button>
                    </div>
                </div>
            </nav>

            {/* DropDown */}
            <div className={`bg-zinc-900 font-thin mt-0 text-white rounded-2xl mx-8 flex flex-col items-center justify-between  ${isOpen ? "py-4" : ""}`}>

                <ul className={`nav-links ${isOpen ? "block" : "hidden"} ${isOpen ? "space-y-2" : ""}`}>
                    <li> <a href="#">Home</a> </li>
                    <li> <a href="#">About Us</a> </li>
                    <li> <a href="#">Porfolio</a> </li>
                    <li> <a href="#">Services</a> </li>
                    <li> <a href="#"> Contact Us</a></li>
                </ul>


                <div className={`action-buttons ${isOpen ? "block" : "hidden"}`}>
                    <button className="icon-button  bg-orange-500 hover:bg-orange-600 py-3 px-5 rounded-full border-black text-black font-semibold mr-0">↗</button>
                    <button className="cta-button bg-orange-500 px-7 py-3 rounded-full hover:bg-orange-600 text-black border-black font-semibold text-sm">REQUEST A PROPOSAL</button>
                </div>
            </div>

        </header>
    );
}

export default Navbar;
