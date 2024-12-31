"use client"
import { useState } from "react";
import { Menu } from 'lucide-react';


function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const handleMenu = () => {
        setIsOpen(!isOpen);
    }
    return (
        <header className="bg-black text-white rounded-full my-2 m-8">
            <nav>
                <div className="container flex items-center justify-between py-2 mx-auto">
                    {/* logo section */}
                    <a href="#" className="logo ml-10">NEXTZONE</a>

                    {/* Hamburger Icon */}
                    <button className="text-white text-2xl mr-4 lg:hidden" onClick={handleMenu}>
                        <Menu />
                    </button>


                    {/* navigation links */}
                    <ul className={`nav-links flex flex-col font-thin text-sm lg:flex lg:flex-row lg:justify-between lg:items-center lg:space-x-8 ${isOpen ? "block" : "hidden"} `}>
                        <li> <a href="#">Home</a> </li>
                        <li> <a href="#">About Us</a> </li>
                        <li> <a href="#">Porfolio</a> </li>
                        <li> <a href="#">Services</a> </li>
                        <li> <a href="#"> Contact Us</a></li>
                    </ul>

                    {/* action button */}
                    <div className={`action-buttons font-thin text-sm lg:flex lg:flex-row lg:justify-between lg:items-center lg:space-x-4 px-0 mr-4 ${isOpen ? "block" : "hidden"}`}>
                        <button className="icon-button  bg-orange-500 hover:bg-orange-600 py-3 px-5 rounded-full border-black text-black font-semibold mr-0">↗</button>
                        <button className="cta-button bg-orange-500 px-7 py-3 rounded-full hover:bg-orange-600 text-black border-black font-semibold text-sm">REQUEST A PROPOSAL</button>
                    </div>
                </div>
            </nav>
        </header>
    );
}

export default Navbar;
