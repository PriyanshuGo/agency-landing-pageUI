"use client"
import Link from 'next/link';
import { useState } from "react";
import { Menu } from 'lucide-react';

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const handleMenu = () => {
        setIsOpen(!isOpen);
    }
    const navLinks = [{ lable: "Home", href: "#" }, { lable: "About Us", href: "#" }, { lable: "Portfolio", href: "#" }, { lable: "Services", href: "#" }, { lable: "Contact Us", href: "#" }]
    return (
        <header>
            {isOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 z-10 lg:hidden"></div>
            )}
            <nav className={`bg-black text-white rounded-full mt-2 mb-2 m-4 flex items-center ${isOpen ? "z-20 relative" : ""}`}>

                <div className="container flex items-center justify-between py-2 mx-auto">

                    {/* logo section */}
                    <a href="#" className="logo ml-10 h-11 flex items-center">NEXTZONE</a>

                    {/* Hamburger Icon */}
                    <button className="text-white text-2xl mr-4 lg:hidden h-11" onClick={handleMenu}>
                        <Menu />
                    </button>

                    {/* navigation links using map*/}
                    <ul className={`nav-links hidden font-thin text-sm lg:flex lg:flex-row lg:justify-between lg:items-center lg:space-x-8`}>
                        {navLinks.map((el, index) => (
                            <li key={index}>
                                <Link href={el.href}>
                                    {el.lable}
                                </Link>
                            </li>
                        ))}
                    </ul>

                    {/* action button */}
                    <div className={`action-buttons hidden font-thin text-sm lg:flex lg:flex-row lg:justify-between lg:items-center lg:space-x-4 px-0 mr-4`}>
                        <button className="icon-button  bg-orange-500 hover:bg-orange-600 py-3 px-5 rounded-full border-black text-black font-semibold mr-0">↗</button>
                        <button className="cta-button bg-orange-500 px-7 py-3 rounded-full hover:bg-orange-600 text-black border-black font-semibold text-sm">REQUEST A PROPOSAL</button>
                    </div>

                </div>

            </nav>

            {/* Mobile DropDown */}
            <div className={`absolute left-0 right-0 bg-zinc-800 font-thin text-white rounded-2xl mx-4 flex flex-col justify-around ${isOpen ? " py-6 opacity-100 z-40" : "opacity-0 invisible"} transition-all duration-300 ease-in-out lg:hidden`}>
                <ul className={`nav-links ${isOpen ? "block space-y-4 mx-8 my text-lg font-semibold" : "hidden"}`}>
                    {navLinks.map((el, index) => (
                        <li key={index}>
                            <Link href={el.href}>
                                {el.lable}
                            </Link>
                        </li>
                    ))}
                </ul>

                <div className={`action-buttons ${isOpen ? "flex flex-col mt-4 border-t mx-6 " : "hidden"}`}>
                    <button className={`icon-button  bg-orange-500 hover:bg-orange-600 py-3 px-5 rounded-full border-black text-black font-semibold mr-0 my-2  ${isOpen ? "mt-4 my-3" : ""}`}>↗</button>
                    <button className={`cta-button bg-orange-500 px-7 py-3 rounded-full hover:bg-orange-600 text-black border-black font-semibold text-sm my-0 ${isOpen ? "" : ""}`}>REQUEST A PROPOSAL</button>
                </div>

            </div>

        </header>
    );
}

export default Navbar;
